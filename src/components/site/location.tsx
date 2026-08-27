import { BrandLink } from "./brand-button";
import { Reveal, ImageReveal } from "./reveal";
import tray from "@/assets/gallery-tray.jpg";

const hours = [
  { days: "Monday — Thursday", time: "12:00 — 23:00" },
  { days: "Friday — Saturday", time: "12:00 — 01:00" },
  { days: "Sunday", time: "13:00 — 23:00" },
];

export function Location() {
  return (
    <section id="location" className="border-t border-border py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Find Us</p>
          <h2 id="order" className="display mt-5 scroll-mt-32 text-[clamp(2.2rem,6.5vw,5rem)]">
            Come hungry. <span className="text-primary">Leave happy.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <dl className="space-y-10">
              <div>
                <dt className="eyebrow">Address</dt>
                <dd className="mt-3 text-lg leading-relaxed">
                  124 Warehouse Street
                  <br />
                  Downtown District
                  <br />
                  Tripoli, Libya
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Opening Hours</dt>
                <dd className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline gap-4 border-b border-border pb-3 text-sm"
                    >
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="tracking-wide text-foreground">{h.time}</span>
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-3 text-lg tracking-wide text-primary">+218 00 000 0000</dd>
              </div>
              <BrandLink href="tel:+21800000000" size="lg" className="w-full sm:w-auto">
                Order Now
              </BrandLink>
            </dl>
          </Reveal>

          <ImageReveal className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
            <img
              src={tray}
              alt="Hamburgini burger and fries served on a tray"
              loading="lazy"
              width={1300}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="eyebrow">Map</span>
              <span className="display text-2xl md:text-3xl">124 Warehouse Street</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Google Maps embed goes here
              </span>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
