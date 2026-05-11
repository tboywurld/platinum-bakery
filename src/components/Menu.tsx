import { useState } from "react";
import { Star, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/bakery";
import chocolate from "@/assets/cake-chocolate-drip.jpg";
import signature from "@/assets/cake-signature.jpg";
import beefPies from "@/assets/beef-pies.jpg";
import banana from "@/assets/banana-bread.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import vanilla from "@/assets/vanilla-cake.jpg";

type Item = { name: string; popular?: boolean; img?: string };

const categories: { id: string; emoji: string; title: string; items: Item[] }[] = [
  {
    id: "highlights",
    emoji: "🥖",
    title: "Highlights",
    items: [
      { name: "Beef Pies", popular: true, img: beefPies },
      { name: "Whipped Cream Cake", popular: true, img: vanilla },
      { name: "Butter Cream Cake" },
      { name: "Banana Bread", popular: true, img: banana },
      { name: "Sponge Cake" },
      { name: "Vanilla Cakes" },
      { name: "Chocolate Drip Cake", popular: true, img: chocolate },
      { name: "Themed Cupcakes", img: cupcakes },
    ],
  },
  {
    id: "signature",
    emoji: "🎂",
    title: "Signature Cakes",
    items: [
      { name: "Triple Layer Vanilla Cake", img: signature },
      { name: "Triple Layered Cake" },
      { name: "Layered Vanilla Cake" },
      { name: "3 Flavoured Cake" },
      { name: "Vanilla & Chocolate Combo" },
      { name: "Fondant Cake" },
      { name: "Kiddies Cake" },
      { name: "Traditional Wedding Cake", popular: true },
    ],
  },
  {
    id: "styles",
    emoji: "🍫",
    title: "Cake Styles & Designs",
    items: [
      { name: "Whipped Cream Frosting Cakes" },
      { name: "Butter Cream Frosting Cakes" },
      { name: "Chocolate Drip Designs" },
      { name: "Coconut Topped Cakes" },
    ],
  },
  {
    id: "pastries",
    emoji: "🧁",
    title: "Pastries & Snacks",
    items: [
      { name: "Beef Pies (Hot & Fresh Daily)", popular: true },
      { name: "Banana Bread (Soft & Moist)" },
      { name: "Themed Cupcakes (For Events)" },
    ],
  },
];

export function Menu() {
  const [active, setActive] = useState("highlights");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            A Taste of <span className="text-gradient-gold">Everything Loved</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From everyday bread to show-stopping celebration cakes — every bite
            baked fresh in Onitsha.
          </p>
        </div>

        {/* Quick jump tabs */}
        <div className="reveal mt-10 -mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  active === c.id
                    ? "border-transparent bg-gradient-warm text-gold-foreground shadow-gold"
                    : "border-border bg-card text-foreground/80 hover:border-gold/50"
                }`}
              >
                <span className="mr-1">{c.emoji}</span>
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Items grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, idx) => (
            <article
              key={item.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {item.img ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.popular && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-warm px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground shadow-gold">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </span>
                  )}
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-cream grid place-items-center">
                  <span className="font-serif text-5xl opacity-40">
                    {current.emoji}
                  </span>
                  {item.popular && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-warm px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground shadow-gold">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </span>
                  )}
                </div>
              )}
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Made fresh • Custom sizes
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing note */}
        <div className="reveal mx-auto mt-12 max-w-2xl rounded-3xl border border-gold/30 bg-gradient-cream p-6 text-center shadow-soft sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            💰 Pricing
          </span>
          <p className="mt-4 font-serif text-xl text-foreground sm:text-2xl">
            Prices vary based on size, design, and customization.
          </p>
          <p className="mt-2 text-muted-foreground">
            Contact us on WhatsApp for instant pricing and same-day quotes.
          </p>
          <a
            href={whatsappLink("Hi! I'd like a quote for a cake/order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Get Instant Quote
          </a>
        </div>
      </div>
    </section>
  );
}
