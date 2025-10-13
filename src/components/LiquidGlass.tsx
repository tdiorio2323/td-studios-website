"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { liquidButtonVariants, cardVariants } from "./liquid-glass-variants";

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-slot="button"
        className={cn(liquidButtonVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        <span aria-hidden className="glassy-button__background" />
        <span aria-hidden className="glassy-button__border" />
        <span aria-hidden className="glassy-button__highlight" />
        <span aria-hidden className="glassy-button__glow" />
        <span className="glassy-button__content">{children}</span>
      </Comp>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  glassEffect?: boolean;
}

function GlassFilter() {
  const filterId = React.useId();
  return (
    <svg className="hidden">
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="30" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, variant, size, hover, asChild = false, glassEffect = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    const filterId = React.useId();
    return (
      <Comp ref={ref} className={cn("relative", cardVariants({ variant, size, hover, className }))} {...props}>
        <div className="absolute inset-0 z-0 h-full w-full rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all pointer-events-none" />
        {glassEffect && (
          <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg" style={{ backdropFilter: `url("#${filterId}")` }} />
        )}
        <div className="relative z-10">{children}</div>
        <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent dark:via-white/5 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
        {glassEffect && <GlassFilter />}
      </Comp>
    );
  }
);
LiquidGlassCard.displayName = "LiquidGlassCard";

export function CardHeader({ title, subtitle, icon, className, ...props }: { title: string; subtitle?: string; icon?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)} {...props}>
      <div className="space-y-1.5">
        <h3 className="font-semibold leading-none tracking-tight text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground/80">{subtitle}</p>}
      </div>
      {icon && <div className="text-muted-foreground/70">{icon}</div>}
    </div>
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-6 text-foreground", className)} {...props} />;
}