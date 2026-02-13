import { ReactNode } from "react";

interface ResponsiveGridProps {
  children: ReactNode;
  columns?: 2 | 3;
  gap?: "small" | "medium" | "large";
  className?: string;
}

export default function ResponsiveGrid({
  children,
  columns = 3,
  gap = "medium",
  className = "",
}: ResponsiveGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  const gapClasses = {
    small: "gap-6 md:gap-8",
    medium: "gap-8 md:gap-12",
    large: "gap-12 md:gap-16",
  };

  return (
    <div className={`grid grid-cols-1 ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}
