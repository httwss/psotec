import beforeCase1 from "@/assets/before-case-1.jpg";
import afterCase1 from "@/assets/after-case-1.jpg";
import beforeCase2 from "@/assets/before-case-2.jpg";
import afterCase2 from "@/assets/after-case-2.jpg";
import beforeCase3 from "@/assets/before-case-3.jpg";
import afterCase3 from "@/assets/after-case-3.jpg";

const cases = [
  { period: "30 dias de uso", before: beforeCase1, after: afterCase1 },
  { period: "45 dias de uso", before: beforeCase2, after: afterCase2 },
  { period: "60 dias de uso", before: beforeCase3, after: afterCase3 },
];

export const BeforeAfter = () => (
  <section id="resultados" className="py-24 md:py-32 bg-white">
    <div className="container px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/60">
          Resultados documentados
        </p>
        <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          Evolução real da pele com o uso contínuo
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Fotografias de clientes com uso regular do Psotec.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.period}
            className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition-smooth hover:shadow-card"
          >
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src={c.before}
                  alt="Pele antes do tratamento"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-2.5 top-2.5 rounded-md bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm">
                  Antes
                </span>
              </div>
              <div className="relative border-l border-white/40">
                <img
                  src={c.after}
                  alt="Pele depois do tratamento"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute right-2.5 top-2.5 rounded-md bg-secondary/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Depois
                </span>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm font-medium text-foreground">{c.period}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Redução visível da vermelhidão e descamação</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground/70">
        Resultados individuais podem variar.
      </p>
    </div>
  </section>
);
