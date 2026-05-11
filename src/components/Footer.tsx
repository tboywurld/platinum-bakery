import { BAKERY } from "@/lib/bakery";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-warm font-serif font-bold text-gold-foreground shadow-gold">
            P
          </span>
          <div>
            <p className="font-serif font-semibold">{BAKERY.name}</p>
            <p className="text-xs text-muted-foreground">{BAKERY.shortAddress}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Platinum Bakery. Baked with love in Onitsha.
        </p>
      </div>
    </footer>
  );
}
