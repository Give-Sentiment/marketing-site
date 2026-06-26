import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

type CtaProps = {
  heading: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Cta({
  heading,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaProps) {
  return (
    <Section className="border-t border-border text-center">
      <Heading level={2}>{heading}</Heading>
      <p className="mx-auto mt-4 max-w-xl text-muted">{description}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={primaryHref} size="lg" variant="primary">
          {primaryLabel}
        </Button>
        {secondaryHref && secondaryLabel && (
          <Button href={secondaryHref} size="lg" variant="secondary">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </Section>
  );
}
