import { cva } from "class-variance-authority";

export const liquidButtonVariants = cva(
  "glassy-button relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-[0.35em] text-[0.75rem] text-white transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
  {
    variants: {
      size: {
        sm: "px-4 py-2 text-[0.65rem] tracking-[0.28em]",
        md: "px-6 py-3 text-[0.7rem] tracking-[0.32em]",
        lg: "px-8 py-3 text-[0.75rem] tracking-[0.35em]",
        xl: "px-10 py-4 text-sm tracking-[0.4em]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

export const cardVariants = cva(
  "relative overflow-hidden rounded-lg transition-all duration-300 group bg-background/20",
  {
    variants: {
      variant: {
        default: "hover:scale-[1.01] text-foreground backdrop-blur-[2px]",
        primary: "bg-primary/5 hover:bg-primary/5 text-foreground backdrop-blur-[2px]",
        destructive: "bg-destructive/5 hover:bg-destructive/10 text-foreground backdrop-blur-[2px]",
        secondary: "bg-secondary/5 hover:bg-secondary/10 text-foreground backdrop-blur-[2px]",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        default: "hover:scale-[1.02]",
        none: "",
        glow: "hover:shadow-lg hover:shadow-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default",
    },
  }
);