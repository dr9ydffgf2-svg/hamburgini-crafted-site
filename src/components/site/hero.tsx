import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/use-reveal";
import { BrandLink } from "./brand-button";
import heroBurger from "@/assets/hero-burger.jpg";

export function Hero() {
  const y = useScrollY();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const line = (i: number) =>
    cn(
      "transition-all duration-1000 ease-brand",
      ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    ) + ` [transition-delay:${i}ms]`;

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${y * 0.18}px, 0) scale(1.06)` }}
      >
        <img
          src={heroBurger}
          alt="Hamburgini signature double cheeseburger"
          width={1600}
          height={1600}
          className={cn(
            "h-full w-full object-cover object-center transition-all duration-[1800ms] ease-brand",
            ready ? "scale-100 opacity-100" : "scale-110 opacity-0",
          )}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,transparent,var(--background))] opacity-80" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-28">
        <div className="max-w-3xl">
          <p
            className={cn("eyebrow", line(200))}
            style={{ transitionDelay: "200ms" }}
          >
            Est. Urban Burger Craft
          </p>
          <h1
            className="display mt-6 text-[clamp(3.2rem,14vw,10rem)]"
            style={{ transitionDelay: "300ms" }}
          >
            <span
              className={cn(
                "block transition-all duration-1000 ease-brand",
                ready ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: "260ms" }}
            >
              Burgers
            </span>
            <span
              className={cn(
                "block transition-all duration-1000 ease-brand",
                ready ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: "380ms" }}
            >
              Worth
            </span>
            <span
              className={cn(
                "block text-primary transition-all duration-1000 ease-brand",
                ready ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: "500ms" }}
            >
              Craving.
            </span>
          </h1>

          <p
            className={cn(
              "mt-8 max-w-md text-base leading-relaxed text-muted-foreground transition-all duration-1000 ease-brand md:text-lg",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
            style={{ transitionDelay: "640ms" }}
          >
            Big flavor. Fresh ingredients. Zero compromises.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-col gap-3 transition-all duration-1000 ease-brand sm:flex-row sm:items-center",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
            style={{ transitionDelay: "760ms" }}
          >
            <BrandLink href="#order" size="lg" className="w-full sm:w-auto">
              Order Now
            </BrandLink>
            <BrandLink href="#menu" variant="outline" size="lg" className="w-full sm:w-auto">
              View Menu
            </BrandLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="h-14 w-px overflow-hidden bg-border">
          <span className="block h-full w-full origin-top animate-[pulse_2.4s_ease-in-out_infinite] bg-primary" />
        </span>
      </div>
    </section>
  );
}
