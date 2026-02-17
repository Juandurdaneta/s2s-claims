"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  showArrow = true,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 will-change-transform";

  const variants = {
    primary:
      "bg-gold-500 text-forest-950 hover:bg-gold-400 shadow-lg shadow-gold-500/20",
    secondary:
      "bg-forest-700 text-white hover:bg-forest-600 border border-forest-500/30",
    ghost:
      "border-2 border-cream-200/30 text-cream-100 hover:bg-cream-100/10 hover:border-cream-200/50",
  };

  const sizes = {
    default: "rounded-full px-6 py-3 text-sm",
    lg: "rounded-full px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = {
    whileHover: { scale: 1.03, transition: { duration: 0.2 } },
    whileTap: { scale: 0.97, transition: { duration: 0.1 } },
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
