import { Reveal, ImageReveal } from "./reveal";
import interior from "@/assets/about-interior.jpg";

const pillars = [
  { title: "Fresh Every Day", copy: "Fresh ingredients prepared daily." },
  {
    title: "Real Flavor",
    copy: "Bold sauces, quality ingredients and perfectly cooked burgers.",
  },
  { title: "Made to Order", copy: "Every burger is prepared when you order it." },
  { title: "No Shortcuts", copy: "Quality comes first." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">About Hamburgini</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,7vw,5rem)]">
            More than <br />
            <span className="text-primary">a burger.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            At Hamburgini, we believe a great burger starts with great ingredients. Freshly
            prepared, generously stacked and cooked to perfection — every burger is made to deliver
            serious flavor.
          </p>
        </Reveal>

        <ImageReveal className="relative aspect-[4/5] w-full lg:aspect-[7/8]">
          <img
            src={interior}
            alt="Hamburgini dining room at night"
            loading="lazy"
            width={1408}
            height={1600}
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </div>

      <div className="shell mt-24 md:mt-36">
        <Reveal>
          <p className="eyebrow">Why Hamburgini</p>
        </Reveal>
        <div className="mt-10 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 110}
              className="border-b border-border py-10 pr-8 lg:border-r lg:last:border-r-0"
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-primary">
                0{i + 1}
              </span>
              <h3 className="display mt-6 text-2xl">{p.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {p.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
