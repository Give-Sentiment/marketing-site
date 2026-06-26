import type { ReactNode } from "react";

type BadgeVariant = "accent" | "verified" | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent/10 text-accent border-accent/30",
  verified: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30",
  neutral: "bg-surface text-muted border-border",
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
