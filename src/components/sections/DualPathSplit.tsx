import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

const paths = [
  {
    eyebrow: "For Respondents",
    title: "Earn rewards for verified participation",
    description:
      "Create surveys or answer them. Every response is encrypted client-side and verified on-chain — and milestones unlock token rewards.",
    href: "/respondents",
    cta: "See how respondents earn",
  },
  {
    eyebrow: "For Buyers",
    title: "Verified survey data, not guesswork",
    description:
      "Every record in the marketplace carries a cryptographic proof of verification — so you're buying signal, not bot traffic.",
    href: "/buyers",
    cta: "Explore the data marketplace",
  },
];

export function DualPathSplit() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        {paths.map((path) => (
          <Card key={path.href} className="flex flex-col">
            <span className="text-sm font-medium text-accent">{path.eyebrow}</span>
            <Heading level={3} className="mt-3">
              {path.title}
            </Heading>
            <p className="mt-3 flex-1 text-muted">{path.description}</p>
            <Button href={path.href} variant="secondary" className="mt-6 self-start">
              {path.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
