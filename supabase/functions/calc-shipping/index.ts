import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const ORIGIN_CEP = "79830080";
const PRODUCT_DIMS = {
  weight: 0.12, // kg
  height: 12,
  width: 7,
  length: 4.5,
};
const UNIT_PRICE = 119.97;

type MEOption = {
  id: number;
  name: string;
  price?: string;
  custom_price?: string;
  delivery_time?: number;
  delivery_range?: { min: number; max: number };
  company?: { id: number; name: string };
  error?: string;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const cepRaw = String(body.cep_destino ?? "").replace(/\D/g, "");
    const quantity = Math.max(1, Math.min(99, Number(body.quantity ?? 1)));

    if (cepRaw.length !== 8) {
      return new Response(JSON.stringify({ error: "CEP inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = Deno.env.get("MELHOR_ENVIO_TOKEN");
    if (!token) {
      return new Response(JSON.stringify({ error: "MELHOR_ENVIO_TOKEN não configurado" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const insuranceValue = +(UNIT_PRICE * quantity).toFixed(2);

    const meRes = await fetch(
      "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "Psotec (contato@psotec.com.br)",
        },
        body: JSON.stringify({
          from: { postal_code: ORIGIN_CEP },
          to: { postal_code: cepRaw },
          products: [
            {
              id: "psotec-1",
              width: PRODUCT_DIMS.width,
              height: PRODUCT_DIMS.height,
              length: PRODUCT_DIMS.length,
              weight: +(PRODUCT_DIMS.weight * quantity).toFixed(3),
              insurance_value: insuranceValue,
              quantity: 1,
            },
          ],
        }),
      }
    );

    const raw = await meRes.text();
    if (!meRes.ok) {
      console.error("ME error", meRes.status, raw);
      return new Response(
        JSON.stringify({ error: `Erro Melhor Envio (${meRes.status})`, details: raw.slice(0, 500) }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data: MEOption[] = JSON.parse(raw);
    const options = data
      .filter((o) => !o.error && (o.price || o.custom_price))
      .map((o) => {
        const price = Number(o.custom_price ?? o.price ?? 0);
        const days = o.delivery_range
          ? `${o.delivery_range.min}-${o.delivery_range.max} dias úteis`
          : o.delivery_time
          ? `${o.delivery_time} dias úteis`
          : "—";
        return {
          id: String(o.id),
          name: o.name,
          company: o.company?.name ?? "",
          days,
          price,
        };
      })
      .sort((a, b) => a.price - b.price);

    return new Response(JSON.stringify({ options }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
