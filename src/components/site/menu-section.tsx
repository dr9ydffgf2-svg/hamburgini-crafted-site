import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import classic from "@/assets/menu-classic.jpg";
import smokehouse from "@/assets/menu-smokehouse.jpg";
import fire from "@/assets/menu-fire.jpg";
import double from "@/assets/menu-double.jpg";
import chicken from "@/assets/menu-chicken.jpg";
import fries from "@/assets/menu-fries.jpg";
import drink from "@/assets/menu-drink.jpg";
import dessert from "@/assets/menu-dessert.jpg";

type Item = {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

const categories = [
  "برجر مميز",
  "دجاج",
  "إضافات",
  "مشروبات",
  "حلويات",
] as const;

const items: Item[] = [
  {
    category: "برجر مميز",
    name: "الكلاسيك",
    description:
      "قطعة لحم بقري، جبنة أمريكية، خس، طماطم، مخلل وصلصة هامبرجيني.",
    price: "$11",
    image: classic,
  },
  {
    category: "برجر مميز",
    name: "السموك هاوس",
    description:
      "قطعتان من لحم البقر، جبنة مدخنة، بصل مقرمش، صلصة باربكيو وصلصة هامبرجيني الخاصة.",
    price: "$15",
    image: smokehouse,
  },
  {
    category: "برجر مميز",
    name: "الفاير",
    description:
      "قطعة لحم بقري، جبنة حارة، هالبينو، بصل مقرمش وصلصة حارة.",
    price: "$13",
    image: fire,
  },
  {
    category: "برجر مميز",
    name: "الدبل",
    description:
      "قطعتان من لحم البقر المضغوط، جبنة مضاعفة، مخلل وصلصة هامبرجيني الخاصة.",
    price: "$16",
    image: double,
  },
  {
    category: "دجاج",
    name: "الكريسبي",
    description:
      "فخذ دجاج مقرمش مقلي باللبن، مخلل، سلطة كول سلو وصلصة أيولي بالثوم.",
    price: "$12",
    image: chicken,
  },
  {
    category: "دجاج",
    name: "الهوت بيرد",
    description:
      "دجاج على طريقة ناشفيل، زبدة بالعسل الحار، مخلل وصلصة رانش باردة.",
    price: "$13",
    image: fire,
  },
  {
    category: "إضافات",
    name: "بطاطا هامبرجيني",
    description:
      "بطاطا مطهوة على مرحلتين، ملح بحري وتتبيلة هامبرجيني الخاصة.",
    price: "$5",
    image: fries,
  },
  {
    category: "إضافات",
    name: "لودد فرايز",
    description:
      "بطاطا، جبنة ذائبة، تشيلي لحم بقري مدخن وبصل أخضر.",
    price: "$8",
    image: fries,
  },
  {
    category: "مشروبات",
    name: "كرافت كولا",
    description:
      "كولا متبلة بتوابل خاصة، تُقدّم مع الثلج المجروش وقشر الحمضيات.",
    price: "$4",
    image: drink,
  },
  {
    category: "مشروبات",
    name: "كولد برو",
    description:
      "قهوة منقوعة ببطء لمدة 18 ساعة، تُقدّم سوداء مع الثلج.",
    price: "$5",
    image: drink,
  },
  {
    category: "حلويات",
    name: "ميلك شيك الشوكولاتة الداكنة",
    description:
      "كاكاو بنسبة 70%، آيس كريم فانيليا كثيف وحبيبات كاكاو مقرمشة.",
    price: "$7",
    image: dessert,
  },
  {
    category: "حلويات",
    name: "ميلك شيك الكراميل المملح",
    description:
      "كراميل محروق، رقائق ملح وكريمة مخفوقة.",
    price: "$7",
    image: dessert,
  },
];

export function MenuSection() {
  const [active, setActive] = useState<string>(categories[0]);
  const visible = items.filter((i) => i.category === active);

  return (
    <section
      id="menu"
      className="relative border-t border-border py-24 md:py-36"
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">القائمة</p>

          <h2 className="display mt-5 text-[clamp(2.4rem,7vw,5.5rem)]">
            قائمة هامبرجيني{" "}
            <span className="text-primary">المميزة</span>
          </h2>

          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            طازج، ساخن، ومذاق يستحق أن تتذكره.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0"
        >
          <div className="flex min-w-max items-center gap-8 border-b border-border pb-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "relative pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
                  active === c
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}

                <span
                  className={cn(
                    "absolute -bottom-[17px] left-0 h-[2px] bg-primary transition-all duration-500 ease-brand",
                    active === c ? "w-full" : "w-0",
                  )}
                />
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) => (
            <Reveal
              key={item.category + item.name}
              delay={i * 90}
            >
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-brand group-hover:scale-[1.07]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-70" />

                  <span className="absolute right-4 top-4 text-sm font-semibold tracking-widest text-primary">
                    {item.price}
                  </span>
                </div>

                <h3 className="display mt-6 text-2xl">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <button
                  onClick={() =>
                    toast.success(`${item.name} أُضيف إلى طلبك`, {
                      description: `${item.price} — سنجهزه لك ساخنًا.`,
                    })
                  }
                  className="mt-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:text-primary"
                >
                  أضف إلى الطلب

                  <span className="h-px w-8 bg-primary transition-all duration-500 ease-brand group-hover:w-14" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
