import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Platinum Bakery Onitsha — Fresh Bread, Custom Cakes & Pastries",
      },
      {
        name: "description",
        content:
          "Platinum Bakery in Federal Housing Estate, Onitsha — freshly baked bread, premium custom cakes, beef pies, banana bread & themed cupcakes. Order on WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "bakery in Onitsha, fresh bread Onitsha, cake shop Federal Housing Estate, custom cakes Onitsha, best bakery in Anambra",
      },
      { property: "og:title", content: "Platinum Bakery — Freshly Baked Happiness in Onitsha" },
      {
        property: "og:description",
        content:
          "Fresh bread, premium custom cakes & pastries from Federal Housing Estate, Onitsha.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Location />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />

      {/* JSON-LD Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Platinum Bakery",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Federal Housing Estate 33",
              addressLocality: "Onitsha",
              postalCode: "430213",
              addressRegion: "Anambra",
              addressCountry: "NG",
            },
            servesCuisine: ["Bread", "Cakes", "Pastries"],
            priceRange: "$$",
          }),
        }}
      />
    </div>
  );
}
