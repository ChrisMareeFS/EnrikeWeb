import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block text-center";
  
  const variantClasses = {
    primary: "bg-beige-warm text-charcoal hover:bg-opacity-90 hover:scale-105 shadow-lg",
    secondary: "glass hover:bg-white/20 hover:scale-105 text-soft-white",
    ghost: "text-soft-white hover:text-beige-warm",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

