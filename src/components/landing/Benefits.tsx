import { Droplets, Wind, Feather, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Hidratação profunda",
    desc: "Ativos umectantes que penetram nas camadas da pele e mantêm a hidratação por mais tempo.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Wind,
    title: "Mais conforto para a pele",
    desc: "Sensação calmante desde as primeiras aplicações, reduzindo o desconforto do dia a dia.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Feather,
    title: "Redução do ressecamento",
    desc: "Restaura a barreira cutânea natural e suaviza áreas secas e descamativas.",
    color: "bg-green-50 text-green-700",
  },
  {
    icon: Sparkles,
    title: "Sensação calmante",
    desc: "Extrato botânicos com ação anti-inflamatória que acalma e equilibra a pele sensível.",
    color: "bg-blue-50 text-blue-600",
  },
];

export const Benefits = () => (
  <section id="beneficios" className="py-24 md:py-32 bg-white">
    <div className="container px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/60">
          Por que Psotec
        </p>
        <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          Cuidado desenvolvido para peles que precisam de atenção especial
        </h2>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group rounded-2xl border border-border/60 bg-white p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
          >
            <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${b.color}`}>
              <b.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground leading-snug">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
