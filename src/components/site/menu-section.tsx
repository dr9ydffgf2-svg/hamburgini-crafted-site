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

const categories = ["Signature Burgers", "Chicken", "Sides", "Drinks", "Desserts"] as const;

const items: Item[] = [
  {
    category: "Signature Burgers",
    name: "The Classic",
    description: "Beef patty, American cheese, lettuce, tomato, pickles and Hamburgini sauce.",
    price: "$11",
    image: classic,
  },
  {
    category: "Signature Burgers",
    name: "The Smokehouse",
    description: "Double beef patty, smoked cheese, crispy onions, BBQ sauce and signature sauce.",
    price: "$15",
    image: smokehouse,
  },
  {
    category: "Signature Burgers",
    name: "The Fire",
    description: "Beef patty, spicy cheese, jalapeños, crispy onions and hot sauce.",
    price: "$13",
    image: fire,
  },
  {
    category: "Signature Burgers",
    name: "The Double",
    description: "Two smashed beef patties, double cheese, pickles and Hamburgini special sauce.",
    price: "$16",
    image: double,
  },
  {
    category: "Chicken",
    name: "The Crispy",
    description: "Buttermilk fried chicken thigh, pickles, slaw and garlic aioli.",
    price: "$12",
    image: chicken,
  },
  {
    category: "Chicken",
    name: "The Hot Bird",
    description: "Nashville-style chicken, spicy honey butter, pickles and cool ranch.",
    price: "$13",
    image: fire,
  },
  {
    category: "Sides",
    name: "House Fries",
    description: "Twice-cooked fries, sea salt and Hamburgini dust.",
    price: "$5",
    image: fries,
  },
  {
    category: "Sides",
    name: "Loaded Fries",
    description: "Fries, melted cheese, smoked beef chili and scallions.",
    price: "$8",
    image: fries,
  },
  {
    category: "Drinks",
    name: "Craft Cola",
    description: "House-spiced cola over crushed ice with citrus peel.",
    price: "$4",
    image: drink,
  },
  {
    category: "Drinks",
    name: "Cold Brew",
    description: "Slow-steeped 18 hours, served black over ice.",
    price: "$5",
    image: drink,
  },
  {
    category: "Desserts",
    name: "Dark Chocolate Shake",
    description: "70% cocoa, thick vanilla soft serve and cracked cocoa nibs.",
    price: "$7",
    image: dessert,
  },
  {
    category: "Desserts",
    name: "Salted Caramel Shake",
    description: "Burnt caramel, flaked salt and whipped cream.",
    price: "$7",
    image: dessert,
  },
];

export function MenuSection() {
  const [active, setActive] = useState<string>(categories[0]);
  const visible = items.filter((i) => i.category === active);

  return (
    <section id="menu" className="relative border-t border-border py-24 md:py-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The Menu</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,7vw,5.5rem)]">
            The Hamburgini <span className="text-primary">Menu</span>
          </h2>
          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            Made fresh. Served hot. Built to be remembered.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div className="flex min-w-max items-center gap-8 border-b border-border pb-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "relative pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
                  active === c ? "text-primary" : "text-muted-foreground hover:text-foreground",
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
            <Reveal key={item.category + item.name} delay={i * 90}>
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
                <h3 className="display mt-6 text-2xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <button
                  onClick={() =>
                    toast.success(`${item.name} added to your order`, {
                      description: `${item.price} — we'll have it ready hot.`,
                    })
                  }
                  className="mt-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:text-primary"
                >
                  Add to Order
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
