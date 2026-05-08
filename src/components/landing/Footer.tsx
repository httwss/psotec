import { SITE_CONFIG } from "@/config/site";
import logo from "@/assets/psotec-logo.jpeg";

export const Footer = () => (
  <footer className="border-t border-border/40 bg-white py-10">
    <div className="container flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt={`${SITE_CONFIG.brand} logo`} className="h-8 w-8 rounded-full object-cover" />
        <span className="font-display text-base text-foreground">{SITE_CONFIG.brand}</span>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.brand}. Todos os direitos reservados.
      </p>
      <p className="text-xs text-muted-foreground">
        Produto de uso adulto. Consulte um dermatologista.
      </p>
    </div>
  </footer>
);
