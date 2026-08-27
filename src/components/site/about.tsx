import { Reveal, ImageReveal } from "./reveal";
import interior from "@/assets/about-interior.jpg";

const pillars = [
  {
    title: "طازج كل يوم",
    copy: "مكونات طازجة تُحضّر يوميًا.",
  },
  {
    title: "نكهة حقيقية",
    copy: "صلصات غنية، مكونات عالية الجودة وبرجر مطهو بإتقان.",
  },
  {
    title: "يُحضّر عند الطلب",
    copy: "كل برجر يُحضّر خصيصًا عند طلبك.",
  },
  {
    title: "لا مجال للاختصار",
    copy: "الجودة تأتي أولًا.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">عن هامبرجيني</p>

          <h2 className="display mt-5 text-[clamp(2.4rem,7vw,5rem)]">
            أكثر من <br />
            <span className="text-primary">مجرد برجر.</span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            في هامبرجيني، نؤمن بأن البرجر الرائع يبدأ من مكونات رائعة.
            مكونات طازجة، تحضير متقن، وحشوة سخية — كل برجر نعدّه ليمنحك
            نكهة تستحق التجربة.
          </p>
        </Reveal>

        <ImageReveal className="relative aspect-[4/5] w-full lg:aspect-[7/8]">
          <img
            src={interior}
            alt="صالة هامبرجيني ليلًا"
            loading="lazy"
            width={1408}
            height={1600}
            className="h-full w-full object-cover"
          />
        </ImageReveal>
      </div>

      <div className="shell mt-24 md:mt-36">
        <Reveal>
          <p className="eyebrow">لماذا هامبرجيني؟</p>
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
