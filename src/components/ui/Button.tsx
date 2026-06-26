import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-foreground-on-accent hover:bg-accent-hover",
  secondary:
    "border border-border-strong text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-surface",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
