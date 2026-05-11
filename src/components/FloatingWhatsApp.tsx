import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/bakery";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 font-semibold text-white shadow-warm transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}
