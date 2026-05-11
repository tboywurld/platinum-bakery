import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/bakery";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.25), transparent 40%), radial-gradient(circle at 80% 80%, oklch(1 0 0 / 0.2), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-gold-foreground">
        <h2 className="reveal font-serif text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Ready to Order Fresh Cakes or Pastries?
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-base text-gold-foreground/85 sm:text-lg">
          We accept same-day orders for bread, cakes, and custom event designs.
          Message us — we usually reply within minutes.
        </p>

        <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background shadow-warm transition-transform hover:scale-105 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Order Now
          </a>
          <a
            href={telLink}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gold-foreground/40 bg-transparent px-7 py-4 text-base font-semibold text-gold-foreground transition-colors hover:bg-gold-foreground/10 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call Bakery
          </a>
        </div>
      </div>
    </section>
  );
}
