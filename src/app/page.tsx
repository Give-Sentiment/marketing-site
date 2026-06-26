import { Hero } from "@/components/sections/Hero";
import { DualPathSplit } from "@/components/sections/DualPathSplit";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProofOfTrust } from "@/components/sections/ProofOfTrust";
import { Cta } from "@/components/sections/Cta";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <DualPathSplit />
      <HowItWorks />
      <ProofOfTrust />
      <Section className="border-t border-border text-center">
        <Badge variant="accent">Founding Node Operator Program</Badge>
        <Heading level={2} className="mt-4">
          We&apos;re recruiting the first 20–30 node operators
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          A limited, technical cohort to run validator nodes and stress-test the network during
          this initial phase — temporary, hands-on, and over before our SaaS frontend ships.
        </p>
        <Button href="/node-program" size="lg" variant="primary" className="mt-6">
          Apply to the program
        </Button>
      </Section>
      <Cta
        heading="Ready to put your data on-chain?"
        description="Whether you're answering surveys or buying verified data, Sentiment gives you a network you can actually trust."
        primaryHref="/respondents"
        primaryLabel="Become a respondent"
        secondaryHref="/buyers"
        secondaryLabel="Talk to us about data"
      />
    </>
  );
}
