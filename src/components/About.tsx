import { Cake, Heart, Sparkles, Wallet } from "lucide-react";

const points = [
  { icon: Sparkles, title: "Daily Fresh Baking", desc: "Bread and pastries baked fresh from our ovens every morning." },
  { icon: Cake, title: "Premium Custom Cakes", desc: "Birthdays, weddings & events — designed exactly how you imagine." },
  { icon: Wallet, title: "Affordable Pricing", desc: "High-quality ingredients without the premium price tag." },
  { icon: Heart, title: "Trusted in Onitsha", desc: "A loyal community of repeat customers and 5-star reviews." },
];

export function About() {
  return (
    <section id="about" className="relative bg-gradient-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About Us
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Baked fresh.<br />
              Served warm.<br />
              <span className="text-gradient-gold">Loved locally.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Platinum Bakery is a customer-loved bakery located in Federal
              Housing Estate 33, Onitsha. We specialize in freshly baked bread,
              premium cakes, pastries, and custom-designed celebration cakes
              for birthdays, weddings, and events.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-warm text-gold-foreground shadow-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
