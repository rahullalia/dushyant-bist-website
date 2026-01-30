"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(
      // Base styles
      "inline-flex items-center justify-center font-medium rounded-xl",
      "transition-all duration-300 ease-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "active:scale-[0.98]",
      {
        // Primary: Gold gradient
        "bg-gradient-to-r from-[#d4a853] to-[#e8c87a] text-[#0c0c0c] font-semibold shadow-lg shadow-[#d4a853]/20 hover:shadow-[#d4a853]/30 hover:shadow-xl":
          variant === "primary",
        // Secondary: Glass with blue tint
        "bg-[#1e3a5f]/30 text-white/90 backdrop-blur-sm border border-[#1e3a5f]/50 hover:bg-[#1e3a5f]/50 hover:border-[#d4a853]/30":
          variant === "secondary",
        // Outline: Gold border
        "border border-[#d4a853]/40 text-[#d4a853] hover:bg-[#d4a853]/10 hover:border-[#d4a853]/60":
          variant === "outline",
        // Ghost: Minimal
        "text-white/70 hover:text-white hover:bg-white/5":
          variant === "ghost",
        // Sizes
        "px-4 py-2.5 text-sm gap-2": size === "sm",
        "px-6 py-3 text-base gap-2.5": size === "md",
        "px-8 py-4 text-lg gap-3": size === "lg",
      },
      className
    );

    // If asChild, clone the child element with button styles
    if (asChild && children) {
      const child = children as React.ReactElement<{ className?: string }>;
      return (
        <child.type {...(child.props as object)} className={cn(classes, child.props.className)} />
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
