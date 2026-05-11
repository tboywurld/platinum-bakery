import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Samuel Nwakor",
    text: "If you need the best pastries in town, you are at the right place. Always a pleasure doing business with you.",
    badge: "Verified Customer",
  },
  {
    name: "Kenechukwu Obi",
    text: "A very customer satisfying & customer friendly brand. The products are top notch & satisfying.",
    badge: "Local Guide",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-gradient-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            Loved by <span className="text-gradient-gold">Onitsha</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="reveal relative rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="mt-4 font-serif text-lg leading-relaxed text-foreground sm:text-xl">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-warm font-serif text-lg font-bold text-gold-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.badge}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mx-auto mt-10 max-w-3xl rounded-3xl border border-gold/30 bg-card/60 p-6 text-center shadow-soft backdrop-blur sm:p-8">
          <p className="font-serif text-lg italic text-foreground sm:text-2xl">
            "Consistently fresh pastries, great service, and one of the most
            trusted bakeries in Federal Housing Estate, Onitsha."
          </p>
        </div>
      </div>
    </section>
  );
}
