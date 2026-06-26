import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;

const sizeByLevel: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight",
  2: "text-3xl md:text-4xl font-semibold tracking-tight",
  3: "text-xl md:text-2xl font-semibold",
};

type HeadingProps = {
  level: HeadingLevel;
  // Lets visual size diverge from semantic level when needed.
  visualSize?: HeadingLevel;
  children: ReactNode;
  className?: string;
};

export function Heading({ level, visualSize, children, className = "" }: HeadingProps) {
  const combined = `${sizeByLevel[visualSize ?? level]} ${className}`;

  if (level === 1) return <h1 className={combined}>{children}</h1>;
  if (level === 2) return <h2 className={combined}>{children}</h2>;
  return <h3 className={combined}>{children}</h3>;
}
