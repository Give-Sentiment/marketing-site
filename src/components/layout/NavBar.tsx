import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/protocol", label: "Protocol" },
  { href: "/node-program", label: "Node Program" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/respondents" variant="secondary" size="sm">
            For Respondents
          </Button>
          <Button href="/buyers" variant="primary" size="sm">
            For Buyers
          </Button>
        </div>
      </div>
    </header>
  );
}
