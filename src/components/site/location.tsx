import { BrandLink } from "./brand-button";
import { Reveal, ImageReveal } from "./reveal";
import tray from "@/assets/gallery-tray.jpg";

const hours = [
  { days: "الاثنين — الخميس", time: "12:00 — 23:00" },
  { days: "الجمعة — السبت", time: "12:00 — 01:00" },
  { days: "الأحد", time: "13:00 — 23:00" },
];

const googleMapsUrl =
  "https://maps.app.goo.gl/z1aV3bBgGYpouULb6?g_st=ic";

export function Location() {
  return (
    <section id="location" className="border-t border-border py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">موقعنا</p>

          <h2
            id="order"
            className="display mt-5 scroll-mt-32 text-[clamp(2.2rem,6.5vw,5rem)]"
          >
            تعال جوعان.{" "}
            <span className="text-primary">وارجع مبسوط.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <dl className="space-y-10">
              <div>
                <dt className="eyebrow">العنوان</dt>

                <dd className="mt-3 text-lg leading-relaxed">
                  هامبرجيني
                  <br />
                  طبرق، ليبيا
                </dd>
              </div>

              <div>
                <dt className="eyebrow">أوقات العمل</dt>

                <dd className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline gap-4 border-b border-border pb-3 text-sm"
                    >
                      <span className="text-muted-foreground">
                        {h.days}
                      </span>

                      <span className="h-px flex-1 bg-border" />

                      <span className="tracking-wide text-foreground">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>

              <div>
                <dt className="eyebrow">الهاتف</dt>

                <dd className="mt-3 text-lg tracking-wide text-primary">
                  +218 00 000 0000
                </dd>
              </div>

              <div className="flex flex-wrap gap-3">
                <BrandLink
                  href={googleMapsUrl}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  الاتجاهات
                </BrandLink>

                <BrandLink
                  href="tel:+21800000000"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  اتصل بنا
                </BrandLink>
              </div>
            </dl>
          </Reveal>

          <ImageReveal className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
            <img
              src={tray}
              alt="برجر وبطاطا من هامبرجيني"
              loading="lazy"
              width={1300}
              height={1000}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-background/45" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="eyebrow">موقعنا</span>

              <span className="display text-2xl md:text-3xl">
                هامبرجيني — طبرق
              </span>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
              >
                افتح الموقع على خرائط Google
              </a>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
