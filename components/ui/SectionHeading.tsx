"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  children,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${alignClasses[align]} ${className}`}
    >
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted font-light max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
