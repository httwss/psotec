import { Leaf, ShieldCheck, FlaskConical, HeartPulse } from "lucide-react";
import aboutImage from "@/assets/psotec-about.jpeg";

const pillars = [
  { icon: Leaf, title: "Ativos botânicos", desc: "Extratos vegetais selecionados para peles sensíveis e reativas." },
  { icon: FlaskConical, title: "Estudos dermatológicos", desc: "Formulação testada com acompanhamento clínico especializado." },
  { icon: ShieldCheck, title: "Segurança comprovada", desc: "Ingredientes seguros para uso diário, na dosagem clinicamente ideal." },
  { icon: HeartPulse, title: "Restauração da barreira", desc: "Reequilibra a função protetora da pele e mantém a hidratação." },
];

export const About = () => (
  <section id="sobre" className="py-24 md:py-32 gradient-soft">
    <div className="container px-6">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

        <div className="relative order-2 lg:order-1 flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/6 to-secondary/6 blur-2xl" />
          <img
            src={aboutImage}
            alt="Pomada Psotec — fórmula dermatológica"
            loading="lazy"
            width={1280}
            height={1280}
            className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-float"
          />
        </div>

        <div className="order-1 lg:order-2 max-w-lg">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary/60">
            Sobre o Psotec
          </p>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            Uma fórmula desenvolvida com ciência e respeito pela pele
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
            O Psotec é uma pomada dermatológica com fórmula avançada que combina ativos hidratantes, calmantes e regeneradores. Atua diretamente nas causas do desconforto da psoríase, devolvendo conforto, maciez e segurança para a sua pele.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <p.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
