interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-foreground/5 text-foreground/70 border-border",
    gold: "bg-gold/10 text-gold border-gold/30",
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
