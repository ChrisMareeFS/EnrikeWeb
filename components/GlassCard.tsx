import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export default function GlassCard({ children, className = "", variant = "default" }: GlassCardProps) {
  const baseClasses = variant === "dark" ? "rounded-[28px]" : "rounded-2xl shadow-xl";
  const variantClasses = variant === "dark" ? "glass-dark" : "glass";
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
}

