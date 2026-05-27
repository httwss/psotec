// Creates the order record and returns its id. Payment processing happens in process-payment.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface Payload {
  customer: {
    name: string; email: string; phone: string;
    cep: string; street: string; number: string; complement?: string;
    neighborhood: string; city: string; state: string;
  };
  shipping: { method: string; price: number };
  product: { title: string; price: number; quantity: number };
}

function isValid(p: Payload) {
  const c = p?.customer;
  if (!c || !p.shipping || !p.product) return false;
  const required = [c.name, c.email, c.phone, c.cep, c.street, c.number, c.neighborhood, c.city, c.state];
  if (required.some((v) => !v || typeof v !== "string" || !v.trim())) return false;
  if (!/^\S+@\S+\.\S+$/.test(c.email)) return false;
  if (typeof p.shipping.price !== "number" || p.shipping.price < 0) return false;
  if (typeof p.product.price !== "number" || p.product.price < 0) return false;
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

    const totalProduct = body.product.price * body.product.quantity;
    const total = totalProduct + body.shipping.price;

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
      shipping_method: body.shipping.method,
      shipping_price: body.shipping.price,
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

    return new Response(
      JSON.stringify({ order_id: order.id, total: order.total_price }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
