import { MapPin, Clock, Navigation, Phone, Instagram } from "lucide-react";
import { BAKERY, telLink } from "@/lib/bakery";

export function Location() {
  const mapQuery = encodeURIComponent(BAKERY.address);
  return (
    <section id="location" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Visit Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            Find <span className="text-gradient-gold">Platinum Bakery</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Easily accessible within Federal Housing Estate residential zone.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft lg:col-span-3">
            <iframe
              title="Platinum Bakery location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              className="h-[320px] w-full sm:h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-warm text-gold-foreground shadow-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {BAKERY.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-warm text-gold-foreground shadow-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">Open Daily</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fresh bread baked every morning. Same-day orders welcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-warm text-gold-foreground shadow-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">Call or WhatsApp</h3>
                  <a href={telLink} className="mt-1 block text-sm text-foreground/80 hover:text-gold">
                    {BAKERY.phoneDisplay}
                  </a>
                  <a
                    href={BAKERY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-gold"
                  >
                    <Instagram className="h-4 w-4" /> @{BAKERY.instagram}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3.5 font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
