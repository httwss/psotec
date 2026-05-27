import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Verify MercadoPago webhook signature per
// https://www.mercadopago.com.br/developers/en/docs/your-integrations/notifications/webhooks
async function verifyMpSignature(req: Request, rawBody: string): Promise<boolean> {
  const secret = Deno.env.get("MP_WEBHOOK_SECRET");
  if (!secret) {
    // Fail closed when no secret is configured.
    console.error("MP_WEBHOOK_SECRET not configured");
    return false;
  }
  const sigHeader = req.headers.get("x-signature") ?? "";
  const requestId = req.headers.get("x-request-id") ?? "";
  if (!sigHeader || !requestId) return false;

  // x-signature: "ts=..,v1=.."
  const parts = Object.fromEntries(
    sigHeader.split(",").map((kv) => {
      const [k, ...rest] = kv.split("=");
      return [k.trim(), rest.join("=").trim()];
    })
  ) as Record<string, string>;
  const ts = parts.ts;
  const v1 = parts.v1;
  if (!ts || !v1) return false;

  const url = new URL(req.url);
  const dataId =
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    (() => {
      try { return JSON.parse(rawBody)?.data?.id?.toString() ?? ""; } catch { return ""; }
    })();

  // Manifest template required by MP
  const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBytes = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(manifest));
  const expected = Array.from(new Uint8Array(sigBytes))
    .map((b) => b.toString(16).padStart(2, "0")).join("");

  // Constant-time compare
  if (expected.length !== v1.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ v1.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const rawBody = req.method === "POST" ? await req.text() : "";

    // Reject any request that fails signature verification.
    const ok = await verifyMpSignature(req, rawBody);
    if (!ok) {
      console.warn("Rejected unsigned/invalid MP webhook");
      return new Response(JSON.stringify({ error: "invalid signature" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = new URL(req.url);
    let paymentId: string | null =
      url.searchParams.get("data.id") || url.searchParams.get("id");
    let topic = url.searchParams.get("type") || url.searchParams.get("topic");

    if (rawBody) {
      try {
        const body = JSON.parse(rawBody);
        paymentId = paymentId || body?.data?.id?.toString() || body?.id?.toString();
        topic = topic || body?.type || body?.topic;
      } catch {}
    }

    if (!paymentId || (topic && topic !== "payment")) {
      return new Response(JSON.stringify({ ok: true, ignored: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const MP_TOKEN = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN")!;
    const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${MP_TOKEN}` },
    });
    const payment = await mpRes.json();
    if (!mpRes.ok) {
      console.error("MP fetch error", payment);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const orderId: string | undefined = payment.external_reference;
    const status: string = payment.status;
    if (!orderId) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const update: Record<string, unknown> = {
      status,
      mp_payment_id: String(payment.id),
    };
    if (status === "approved") update.paid_at = new Date().toISOString();

    const { error } = await supabase.from("orders").update(update).eq("id", orderId);
    if (error) console.error("DB update error", error);

    if (status === "approved") {
      try {
        await fetch(`${Deno.env.get("SUPABASE_URL")}/functions/v1/send-order-telegram`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify({ order_id: orderId }),
        });
      } catch (e) {
        console.error("telegram notify error", e);
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("webhook error", e);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
