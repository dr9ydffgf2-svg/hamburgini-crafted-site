import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/use-reveal";
import { BrandLink } from "./brand-button";
import logoAsset from "@/assets/IMG_4812.jpeg";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "المنيو", href: "#menu" },
  { label: "من نحن", href: "#about" },
  { label: "الصور", href: "#gallery" },
  { label: "الموقع", href: "#location" },
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
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logoAsset}
            alt="هامبرجيني"
            className={cn(
              "h-auto w-auto object-contain transition-all duration-500 ease-brand",
              compact ? "max-h-10 md:max-h-11" : "max-h-12 md:max-h-14",
            )}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-2 after:right-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-brand hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Order + Menu Button */}
        <div className="flex items-center gap-3">
          <BrandLink
            href="#order"
            size="sm"
            className="hidden sm:inline-flex"
          >
            اطلب الآن
          </BrandLink>

          <button
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 -z-10 h-screen bg-background transition-all duration-600 ease-brand lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex h-full flex-col justify-center gap-2 pb-16">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "display border-b border-border py-5 text-4xl transition-all duration-700 ease-brand hover:text-primary",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: `${120 + i * 70}ms` }}
            >
              {link.label}
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
            style={{ transitionDelay: "520ms" }}
          >
            اطلب الآن
          </BrandLink>
        </div>
      </div>
    </header>
  );
}
