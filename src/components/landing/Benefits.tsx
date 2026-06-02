import { Droplets, Flame, Sparkles, Snowflake } from "lucide-react";

const benefits = [
  {
    icon: Snowflake,
    title: "Alivia a coceira",
    desc: "Sensação de conforto desde as primeiras aplicações.",
  },
  {
    icon: Flame,
    title: "Reduz a vermelhidão",
    desc: "Ajuda a acalmar a pele e a uniformizar o tom.",
  },
  {
    icon: Droplets,
    title: "Hidrata a pele",
    desc: "Mantém a maciez e o conforto ao longo do dia.",
  },
  {
    icon: Sparkles,
    title: "Suaviza a descamação",
    desc: "Apoia a renovação da barreira cutânea.",
  },
];

export const Benefits = () => (
  <section id="beneficios" className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Benefícios reais
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Cuidado completo para sua{" "}
          <span className="text-gradient-health">pele sensível</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Uma fórmula pensada para tratar a psoríase com suavidade e eficácia.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="group relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-bounce hover:-translate-y-2 hover:shadow-card"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-health shadow-glow">
              <b.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{b.title}</h3>
            <p className="mt-2 text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
