import logoAsset from "@/assets/hamburgini-logo.jpeg.asset.json";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Order", href: "#order" },
];

const social = ["Instagram", "Facebook", "TikTok"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-20 pb-10">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="wordmark text-[clamp(2.4rem,9vw,6rem)]">Hamburgini</p>
            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">
              Burgers worth craving.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="eyebrow">Navigate</span>
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="w-fit text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="eyebrow">Follow</span>
            {social.map((s) => (
              <a
                key={s}
                href="#"
                className="w-fit text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {s}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hamburgini. All rights reserved.</span>
          <span>Made fresh. Served hot.</span>
        </div>
      </div>
    </footer>
  );
}
