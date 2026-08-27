import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { MenuSection } from "@/components/site/menu-section";
import { SignatureFeature } from "@/components/site/signature";
import { About } from "@/components/site/about";
import { Gallery } from "@/components/site/gallery";
import { Reviews } from "@/components/site/reviews";
import { Location } from "@/components/site/location";
import { SiteFooter } from "@/components/site/footer";

const title = "HAMBURGINI — Burgers Worth Craving";
const description =
  "Big flavor. Fresh ingredients. Zero compromises. Smashed patties, house sauces and cold drinks, made to order at Hamburgini.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <MenuSection />
        <SignatureFeature />
        <About />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <SiteFooter />
    </>
  );
}
