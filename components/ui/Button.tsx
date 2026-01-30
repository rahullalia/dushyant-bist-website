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
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-gradient-to-r from-sky-500 to-teal-500 text-white hover:from-sky-400 hover:to-teal-400 focus-visible:ring-sky-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40":
              variant === "primary",
            "bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/50 backdrop-blur-sm":
              variant === "secondary",
            "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 focus-visible:ring-white/50":
              variant === "outline",
            "text-white/70 hover:text-white hover:bg-white/10 focus-visible:ring-white/50":
              variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
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
