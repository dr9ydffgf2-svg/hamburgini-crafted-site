import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import grill from "@/assets/gallery-grill.jpg";
import guests from "@/assets/gallery-guests.jpg";
import cheese from "@/assets/gallery-cheese.jpg";
import galleryFries from "@/assets/gallery-fries.jpg";
import tray from "@/assets/gallery-tray.jpg";
import interior from "@/assets/about-interior.jpg";
import drink from "@/assets/menu-drink.jpg";
import smokehouse from "@/assets/menu-smokehouse.jpg";

const shots = [
  { src: cheese, alt: "Cheese melting over a seared patty", span: "sm:col-span-2 aspect-square" },
  { src: grill, alt: "Patties searing on the griddle", span: "aspect-[4/5]" },
  { src: galleryFries, alt: "Loaded chili cheese fries", span: "aspect-[4/5]" },
  { src: guests, alt: "Guests enjoying burgers", span: "sm:col-span-2 aspect-[4/3]" },
  { src: interior, alt: "Hamburgini dining room", span: "aspect-[4/5]" },
  { src: drink, alt: "Craft cola over ice", span: "aspect-square" },
  { src: smokehouse, alt: "The Smokehouse burger", span: "aspect-square" },
  { src: tray, alt: "Burger and fries tray from above", span: "sm:col-span-2 aspect-[4/3]" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className="border-t border-border py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,6vw,4.5rem)]">
            Shot in <span className="text-primary">our kitchen.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={(i % 4) * 80} className={cn(s.span)}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden bg-surface"
                aria-label={`View ${s.alt}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-brand group-hover:scale-[1.08]"
                />
                <span className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 max-w-[80%] text-left text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground opacity-0 transition-all duration-500 ease-brand group-hover:opacity-100">
                  {s.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeShot && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/96 p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={activeShot.src}
            alt={activeShot.alt}
            className="max-h-[86svh] w-auto max-w-full object-contain animate-in zoom-in-95 duration-500"
          />
          <p className="absolute bottom-6 left-0 right-0 text-center text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            {activeShot.alt}
          </p>
        </div>
      )}
    </section>
  );
}
