import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const reviews = [
  {
    quote:
      "The Smokehouse ruined every other burger for me. Crispy edges, real smoke, sauce that actually tastes like something.",
    name: "Layla H.",
    meta: "Regular since day one",
  },
  {
    quote:
      "You can tell it's made when you order it. Nothing sitting under a lamp. It arrives hot and it's gone in minutes.",
    name: "Omar K.",
    meta: "Ordered 31 times",
  },
  {
    quote:
      "Dark room, great music, an absurdly good double. It feels like a restaurant, not a burger joint.",
    name: "Sara M.",
    meta: "Local food writer",
  },
  {
    quote: "The Fire is genuinely spicy and genuinely balanced. Rare combination.",
    name: "Yusuf A.",
    meta: "Chili obsessive",
  },
];

export function Reviews() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,6.5vw,5rem)]">
            Don't take our <span className="text-primary">word for it.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className="border-t border-border pt-8">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3 w-3 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 text-xl leading-snug text-foreground md:text-2xl">
                {r.quote}
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
                  {r.name}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.meta}
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
