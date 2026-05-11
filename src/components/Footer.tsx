import { Instagram, Phone, MessageCircle } from "lucide-react";
import { BAKERY, telLink, whatsappLink } from "@/lib/bakery";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <div className="flex items-start gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm font-serif font-bold text-gold-foreground shadow-gold">
            P
          </span>
          <div>
            <p className="font-serif text-lg font-semibold">{BAKERY.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{BAKERY.shortAddress}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={telLink} className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold">
                <Phone className="h-4 w-4" /> {BAKERY.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={BAKERY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold"
              >
                <Instagram className="h-4 w-4" /> @{BAKERY.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Hours</p>
          <p className="mt-3 text-sm text-foreground/80">Open Daily</p>
          <p className="text-xs text-muted-foreground">Fresh batches every morning</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BAKERY.name}. Baked with love in Onitsha.
        </p>
      </div>
    </footer>
  );
}
