import { Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Marina Oliveira",
    location: "São Paulo, SP",
    photo: t1,
    text: "Sofri por mais de 10 anos com psoríase nos braços. Em 3 semanas usando o Psotec a coceira sumiu e a pele voltou a ficar lisa.",
    weeks: "3 semanas de uso",
  },
  {
    name: "Carlos Mendes",
    location: "Belo Horizonte, MG",
    photo: t2,
    text: "Já tinha tentado de tudo. O Psotec foi o único que realmente funcionou. Hoje uso camisas de manga curta sem vergonha de novo.",
    weeks: "6 semanas de uso",
  },
  {
    name: "Juliana Castro",
    location: "Curitiba, PR",
    photo: t3,
    text: "A hidratação é incrível. A vermelhidão diminuiu já na primeira semana. Recomendo para quem sofre com psoríase.",
    weeks: "4 semanas de uso",
  },
];

export const Testimonials = () => (
  <section id="depoimentos" className="py-24 md:py-32 gradient-soft">
    <div className="container px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/60">
          Depoimentos reais
        </p>
        <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          Pessoas que recuperaram o conforto da pele
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="flex flex-col rounded-2xl border border-border/60 bg-white p-8 shadow-soft transition-smooth hover:shadow-card"
          >
            <div className="mb-4 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="flex-1 text-[0.9375rem] leading-[1.7] text-foreground/80">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={256}
                  height={256}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary/80">
                {t.weeks}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
