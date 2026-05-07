import { Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export const PromoBadge = () => (
  <Link
    to="/checkout"
    className="fixed left-3 top-20 z-40 group animate-fade-in"
    aria-label="Promoção: leve 3 e ganhe frete grátis"
  >
    <div className="relative">
      <div className="absolute inset-0 gradient-health rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition-smooth" />
      <div className="relative flex items-center gap-2 rounded-2xl gradient-health px-3 py-2 shadow-cta text-primary-foreground animate-pulse-glow">
        <Sparkles className="h-4 w-4 shrink-0" />
        <div className="leading-tight">
          <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Promoção</p>
          <p className="text-xs font-extrabold flex items-center gap-1">
            Leve 3 + <Truck className="h-3 w-3" /> Frete Grátis
          </p>
        </div>
      </div>
    </div>
  </Link>
);
