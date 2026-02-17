"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gold" | "dark";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-forest-700/60 text-cream-200 border border-forest-500/30 backdrop-blur-sm",
    gold: "bg-gold-500/15 text-gold-400 border border-gold-500/30",
    dark: "bg-forest-950/60 text-cream-200 border border-forest-700/50 backdrop-blur-sm",
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}
