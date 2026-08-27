import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/use-reveal";
import { BrandLink } from "./brand-button";
import logoAsset from "@/assets/IMG_4812.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function SiteNav() {
  const y = useScrollY();
  const compact = y > 40;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand",
        compact
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-all duration-500 ease-brand",
          compact ? "h-14 md:h-16" : "h-20 md:h-24",
        )}
      >
        <a href="#home" className="flex items-center">
          <img
            src={logoAsset}
            alt="Hamburgini"
            className={cn(
              "h-auto w-auto object-contain transition-all duration-500 ease-brand",
              compact ? "max-h-10 md:max-h-11" : "max-h-12 md:max-h-14",
            )}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-[0.7rem] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-brand hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BrandLink
            href="#order"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Order Now
          </BrandLink>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-6 bg-foreground transition-all duration-400 ease-brand",
                open && "translate-y-[8px] rotate-45",
              )}
            />

            <span
              className={cn(
                "block h-[2px] w-6 bg-foreground transition-all duration-300 ease-brand",
                open && "scale-x-0 opacity-0",
              )}
            />

            <span
              className={cn(
                "block h-[2px] w-6 bg-foreground transition-all duration-400 ease-brand",
                open && "-translate-y-[8px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 -z-10 h-screen bg-background transition-all duration-600 ease-brand lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex h-full flex-col justify-center gap-2 pb-16">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "display border-b border-border py-5 text-4xl transition-all duration-700 ease-brand hover:text-primary",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              )}
              style={{
                transitionDelay: `${120 + i * 70}ms`,
              }}
            >
              {l.label}
            </a>
          ))}

          <BrandLink
            href="#order"
            size="lg"
            onClick={() => setOpen(false)}
            className={cn(
              "mt-8 w-full transition-all duration-700 ease-brand",
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
            style={{
              transitionDelay: "520ms",
            }}
          >
            Order Now
          </BrandLink>
        </div>
      </div>
    </header>
  );
}
