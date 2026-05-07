// Sends a formatted "shipping label" message to Telegram when an order is paid.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/telegram";

function fmtBRL(n: number) {
  return `R$ ${Number(n).toFixed(2).replace(".", ",")}`;
}

function buildMessage(o: Record<string, any>) {
  const addr2 = `${o.neighborhood} - ${o.city}/${o.state}`;
  const line = (s?: string | null) => (s && String(s).trim() ? String(s) : "");
  const complement = line(o.complement) ? ` - ${o.complement}` : "";
  const label =
`📦 NOVO PEDIDO PAGO

<pre>
DESTINATÁRIO:
${o.customer_name}
${o.street}, ${o.number}${complement}
${addr2}
CEP: ${o.cep}
Tel: ${o.customer_phone}
</pre>

<b>Pedido:</b> <code>${String(o.id).slice(0, 8).toUpperCase()}</code>
<b>Email:</b> ${o.customer_email}
<b>Frete:</b> ${o.shipping_method} — ${fmtBRL(o.shipping_price)}
<b>Produto:</b> ${fmtBRL(o.product_price)}
<b>Total:</b> <b>${fmtBRL(o.total_price)}</b>
<b>Pagamento:</b> ${o.payment_method ?? "-"}
<b>Data:</b> ${new Date(o.paid_at ?? o.created_at).toLocaleString("pt-BR", { timeZone: "America/Campo_Grande" })}`;
  return label;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { order_id } = await req.json();
    if (!order_id) {
      return new Response(JSON.stringify({ error: "order_id obrigatório" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const TELEGRAM_API_KEY = Deno.env.get("TELEGRAM_API_KEY");
    const CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
    if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY || !CHAT_ID) {
      console.error("Missing telegram env");
      return new Response(JSON.stringify({ error: "Telegram não configurado" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: order, error } = await supabase
      .from("orders").select("*").eq("id", order_id).single();
    if (error || !order) {
      return new Response(JSON.stringify({ error: "Pedido não encontrado" }), {
        status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Idempotency: don't notify twice
    if (order.notified_at) {
      return new Response(JSON.stringify({ ok: true, already_sent: true }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const text = buildMessage(order);
    const tgRes = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TELEGRAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();
    if (!tgRes.ok) {
      console.error("Telegram error", tgRes.status, tgData);
      return new Response(JSON.stringify({ error: "Falha Telegram", details: tgData }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    await supabase.from("orders").update({ notified_at: new Date().toISOString() }).eq("id", order_id);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
