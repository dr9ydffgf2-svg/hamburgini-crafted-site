import { useScrollY } from "@/hooks/use-reveal";
import { useEffect, useRef, useState } from "react";
import { BrandLink } from "./brand-button";
import { Reveal, ImageReveal } from "./reveal";
import signatureBurger from "@/assets/signature-burger.jpg";

export function SignatureFeature() {
  const y = useScrollY();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    setOffset(Math.max(-1, Math.min(1, progress * 2 - 1)) * 40);
  }, [y]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-border">
      <ImageReveal className="relative h-[70svh] min-h-[420px] w-full md:h-[92svh]">
        <img
          src={signatureBurger}
          alt="Extreme close-up of the Hamburgini signature double burger"
          loading="lazy"
          width={1600}
          height={1200}
          className="h-full w-full scale-110 object-cover"
          style={{ transform: `translate3d(0,${offset}px,0) scale(1.12)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />
      </ImageReveal>

      <div className="shell relative -mt-32 pb-24 md:-mt-56 md:pb-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Signature</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,7vw,5.5rem)]">
            Meet your new <span className="text-primary">favorite burger.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Two smashed patties seared hard on cast iron, aged cheddar melted to the edge, house
            pickles and our signature sauce — stacked in a butter-toasted brioche that holds every
            drop.
          </p>
          <div className="mt-10">
            <BrandLink href="#order" size="lg">
              Order Now
            </BrandLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
