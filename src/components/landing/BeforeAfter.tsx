import { ArrowRight } from "lucide-react";

const cases = [
  {
    name: "Caso 1 — 30 dias de uso",
    before: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Caso 2 — 45 dias de uso",
    before: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3765209/pexels-photo-3765209.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Caso 3 — 60 dias de uso",
    before: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const BeforeAfter = () => (
  <section id="resultados" className="py-20 md:py-28 gradient-soft">
    <div className="container px-4">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
          Resultados visíveis
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Antes e depois do{" "}
          <span className="text-gradient-health">Psotec</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Imagens reais de clientes que recuperaram a saúde da pele.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.name}
            className="overflow-hidden rounded-3xl bg-card shadow-card transition-bounce hover:-translate-y-2"
          >
            <div className="relative grid grid-cols-2">
              <div className="relative">
                <img
                  src={c.before}
                  alt="Pele antes do tratamento"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-64 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-bold uppercase text-destructive-foreground">
                  Antes
                </span>
              </div>
              <div className="relative">
                <img
                  src={c.after}
                  alt="Pele depois do tratamento"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-64 w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-secondary-foreground">
                  Depois
                </span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-card">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="p-5">
              <p className="font-semibold text-foreground">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Redução visível da vermelhidão e descamação.
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        *Resultados podem variar de pessoa para pessoa.
      </p>
    </div>
  </section>
);
