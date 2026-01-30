"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          {
            // Primary - Gradient with glow
            "bg-gradient-to-r from-sky-500 to-teal-500 text-white hover:from-sky-400 hover:to-teal-400 focus-visible:ring-sky-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:shadow-xl":
              variant === "primary",
            // Secondary - Glass effect
            "bg-white/5 text-white hover:bg-white/10 focus-visible:ring-white/50 backdrop-blur-sm border border-white/10 hover:border-white/20":
              variant === "secondary",
            // Outline - Border only
            "border border-white/20 text-white hover:bg-white/5 hover:border-white/40 focus-visible:ring-white/50":
              variant === "outline",
            // Ghost - Minimal
            "text-white/70 hover:text-white hover:bg-white/5 focus-visible:ring-white/50":
              variant === "ghost",
            // Sizes
            "px-4 py-2.5 text-sm gap-2": size === "sm",
            "px-6 py-3 text-base gap-2.5": size === "md",
            "px-8 py-4 text-lg gap-3": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
