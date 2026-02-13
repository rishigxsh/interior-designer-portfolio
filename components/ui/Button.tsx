"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost";
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  icon,
}: ButtonProps) {
  const variants = {
    primary:
      "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground",
    ghost:
      "border-foreground/20 bg-transparent text-foreground hover:border-foreground hover:bg-foreground/5",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2.5
    px-6 py-3.5 
    border font-medium text-sm tracking-wide
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
    ${variants[variant]}
    ${className}
  `;

  const content = (
    <>
      {children}
      {icon && icon}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Link href={href} className={baseClasses} aria-disabled={disabled}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
