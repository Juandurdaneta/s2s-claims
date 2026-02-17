"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light" | "glass";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "dark",
  hover = true,
}: CardProps) {
  const variants = {
    dark: "bg-forest-800/50 border border-forest-600/20 text-cream-100",
    light: "bg-white border border-cream-300/50 text-forest-900 shadow-lg shadow-black/5",
    glass:
      "bg-white/5 border border-white/10 backdrop-blur-xl text-cream-100",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={cn(
        "rounded-2xl p-6 transition-shadow",
        hover && "hover:shadow-xl hover:shadow-black/10",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
