"use client";

import { motion } from "framer-motion";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
        ${
          isActive
            ? "bg-foreground text-background border border-foreground"
            : "bg-transparent text-muted border border-border/60 hover:border-foreground hover:text-foreground"
        }
      `}
      aria-pressed={isActive}
    >
      {label}
    </motion.button>
  );
}
