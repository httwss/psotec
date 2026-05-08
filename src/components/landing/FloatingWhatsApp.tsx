import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export const FloatingWhatsApp = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp text-white shadow-cta transition-smooth hover:scale-105 hover:shadow-lg"
    style={{ height: "3.25rem", width: "3.25rem" }}
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
