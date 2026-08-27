import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brandButton = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
  {
    variants: {
      variant: {
        accent:
          "bg-primary text-primary-foreground hover:shadow-[var(--shadow-accent)] hover:brightness-110",
        outline:
          "border border-border text-foreground hover:border-primary hover:text-primary",
        ghost: "text-muted-foreground hover:text-primary",
        light: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        sm: "h-11 px-5",
        md: "h-13 px-7",
        lg: "h-14 px-9 md:h-16 md:px-12 md:text-[0.8rem]",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

export type BrandButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof brandButton>;

export function BrandButton({ className, variant, size, children, ...props }: BrandButtonProps) {
  return (
    <button className={cn(brandButton({ variant, size }), className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

export function BrandLink({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & VariantProps<typeof brandButton>) {
  return (
    <a className={cn(brandButton({ variant, size }), className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
