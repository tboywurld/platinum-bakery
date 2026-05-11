import heroImg from "@/assets/hero-bakery.jpg";
import { whatsappLink } from "@/lib/bakery";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Freshly baked bread, croissants and chocolate drip cake at Platinum Bakery"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-start justify-end px-5 pb-16 pt-32 sm:items-center sm:justify-center sm:pb-24 sm:text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-xs font-medium text-cream backdrop-blur-md animate-float-up">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
          Federal Housing Estate, Onitsha
        </span>

        <h1
          className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] text-cream animate-float-up sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          Freshly Baked <span className="text-gradient-gold">Happiness</span>{" "}
          Every Day at Platinum Bakery
        </h1>

        <p
          className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 animate-float-up sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Serving Federal Housing Estate, Onitsha with fresh bread, cakes,
          pastries & custom celebrations made with love.
        </p>

        <div
          className="mt-8 flex w-full flex-col gap-3 animate-float-up sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-base font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3.5 text-base font-semibold text-cream backdrop-blur-md transition-colors hover:bg-cream/20"
          >
            View Our Menu
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div
          className="mt-10 flex items-center gap-5 text-cream/80 animate-float-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-cream bg-gradient-warm"
              />
            ))}
          </div>
          <p className="text-sm">
            <span className="font-semibold text-cream">5.0 ★</span> Loved by
            Onitsha locals
          </p>
        </div>
      </div>
    </section>
  );
}
