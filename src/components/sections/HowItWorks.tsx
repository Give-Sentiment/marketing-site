import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export type Step = { title: string; description: string };

const defaultSteps: Step[] = [
  {
    title: "Create or respond",
    description:
      "Any node operator can launch a survey or answer one — up to 10 open-text questions per survey.",
  },
  {
    title: "Verify on-chain",
    description:
      "Every submission is checked by a WebAssembly program and verified through the Reality protocol's consensus.",
  },
  {
    title: "Generate proof",
    description:
      "A cryptographic proof bundle is created for each verified record — the receipt that makes the data trustworthy.",
  },
  {
    title: "Sync & reward",
    description:
      "Verified data syncs to the marketplace, and respondents earn milestone-based token rewards as they participate.",
  },
];

type HowItWorksProps = {
  heading?: string;
  steps?: Step[];
  className?: string;
};

export function HowItWorks({
  heading = "How it works",
  steps = defaultSteps,
  className = "",
}: HowItWorksProps) {
  const gridColsClass = steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <Section className={`border-t border-border ${className}`}>
      <Heading level={2} className="text-center">
        {heading}
      </Heading>
      <div className={`mt-12 grid gap-10 ${gridColsClass}`}>
        {steps.map((step, index) => (
          <div key={step.title}>
            <span className="text-sm font-medium text-accent-secondary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-medium text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
