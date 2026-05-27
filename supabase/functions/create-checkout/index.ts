// Creates the order record and returns its id. Payment processing happens in process-payment.
// SECURITY: product price is hard-coded server-side; shipping price is re-fetched from
// calc-shipping using the client-supplied option id so the client cannot manipulate amounts.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Canonical product catalog — never trust client values for these.
const PRODUCT_TITLE = "Pomada Psotec";
const UNIT_PRICE = 119.97;
const FREE_SHIPPING_MIN_QTY = 3;

interface Payload {
  customer: {
    name: string; email: string; phone: string;
    cep: string; street: string; number: string; complement?: string;
    neighborhood: string; city: string; state: string;
  };
  shipping: { option_id: string };
  product: { quantity: number };
}

function isValid(p: Payload) {
  const c = p?.customer;
  if (!c || !p.shipping || !p.product) return false;
  const required = [c.name, c.email, c.phone, c.cep, c.street, c.number, c.neighborhood, c.city, c.state];
  if (required.some((v) => !v || typeof v !== "string" || !v.trim())) return false;
  if (!/^\S+@\S+\.\S+$/.test(c.email)) return false;
  if (!p.shipping.option_id || typeof p.shipping.option_id !== "string") return false;
  if (!Number.isInteger(p.product.quantity) || p.product.quantity < 1 || p.product.quantity > 99) return false;
  return true;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const body = (await req.json()) as Payload;
    if (!isValid(body)) {
      return new Response(JSON.stringify({ error: "Dados inválidos" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const quantity = body.product.quantity;
    const totalProduct = +(UNIT_PRICE * quantity).toFixed(2);

    // Re-calculate shipping server-side from the trusted source.
    let shippingPrice = 0;
    let shippingMethod = "Frete grátis";
    const isFreeShipping = quantity >= FREE_SHIPPING_MIN_QTY;

    const shipRes = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/calc-shipping`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
        },
        body: JSON.stringify({
          cep_destino: body.customer.cep.replace(/\D/g, ""),
          quantity,
        }),
      }
    );
    const shipData = await shipRes.json();
    if (!shipRes.ok || !Array.isArray(shipData?.options)) {
      console.error("Shipping calc failed", shipData);
      return new Response(JSON.stringify({ error: "Falha ao calcular frete" }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const option = shipData.options.find(
      (o: { id: string }) => String(o.id) === String(body.shipping.option_id)
    );
    if (!option) {
      return new Response(JSON.stringify({ error: "Opção de frete inválida" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    shippingMethod = `${option.company ? option.company + " " : ""}${option.name}${isFreeShipping ? " (Grátis)" : ""}`;
    shippingPrice = isFreeShipping ? 0 : Number(option.price);
    if (!Number.isFinite(shippingPrice) || shippingPrice < 0) {
      return new Response(JSON.stringify({ error: "Preço de frete inválido" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const total = +(totalProduct + shippingPrice).toFixed(2);

    const { data: order, error } = await supabase.from("orders").insert({
      customer_name: body.customer.name,
      customer_email: body.customer.email,
      customer_phone: body.customer.phone,
      cep: body.customer.cep,
      street: body.customer.street,
      number: body.customer.number,
      complement: body.customer.complement ?? null,
      neighborhood: body.customer.neighborhood,
      city: body.customer.city,
      state: body.customer.state,
      shipping_method: shippingMethod,
      shipping_price: shippingPrice,
      product_price: totalProduct,
      total_price: total,
      status: "pending",
    }).select().single();

    if (error || !order) {
      console.error("DB error", error);
      return new Response(JSON.stringify({ error: "Erro ao salvar pedido" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Keep product title in response only — not for trust.
    void PRODUCT_TITLE;

    return new Response(
      JSON.stringify({ order_id: order.id, total: order.total_price }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
