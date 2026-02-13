import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({ children, className = "", size = "default" }: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-container",
    wide: "max-w-[1600px]",
  };

  return (
    <div className={`mx-auto px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
