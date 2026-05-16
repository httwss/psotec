import { Link } from "react-router-dom";
import promoBanner from "@/assets/promo-banner.jpg";

export const PromoBanner = () => (
  <Link
    to="/checkout"
    aria-label="Promoção: 3 unidades de Psotec por 12x de R$ 29,99 sem juros — frete grátis"
    className="block w-full overflow-hidden bg-primary/10"
  >
    <img
      src={promoBanner}
      alt="Promoção Psotec: 3 unidades por 12x de R$ 29,99 sem juros, frete grátis acima de 3 unidades"
      className="block w-full h-auto object-cover"
      loading="eager"
    />
  </Link>
);
