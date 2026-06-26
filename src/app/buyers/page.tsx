import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { StatCounter } from "@/components/ui/StatCounter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FormzEmbed } from "@/components/integrations/FormzEmbed";

export const metadata: Metadata = {
  title: "For Buyers",
  description:
    "A verified, privacy-preserving survey data marketplace — every record proven on-chain via the Reality protocol.",
};

const buyerSteps = [
  {
    title: "Browse verified surveys",
    description:
      "Every listed survey shows real, verified response counts — not self-reported numbers.",
  },
  {
    title: "Check the proof",
    description:
      "Each record carries a cryptographic proof bundle confirming it passed on-chain verification.",
  },
  {
    title: "License the data",
    description:
      "Get access to response data backed by a trust layer no traditional panel can offer.",
  },
];

const trustStats = [
  { value: "100%", label: "of listed responses pass WASM verification before being counted" },
  { value: "0", label: "duplicate responses — one submission per node, per survey, enforced on-chain" },
  { value: "On-chain", label: "proof bundle attached to every verified record" },
];

const useCases = [
  {
    title: "Market research",
    description:
      "Run targeted surveys against a decentralized respondent base instead of a recycled panel.",
  },
  {
    title: "Sentiment tracking",
    description:
      "Track how opinion shifts over time with response data you can independently verify.",
  },
  {
    title: "Model training data",
    description:
      "Source human-verified, deduplicated text responses without bot contamination.",
  },
];

export default function BuyersPage() {
  return (
    <>
      <Section className="pt-28 pb-16 text-center">
        <Badge variant="verified">For Buyers</Badge>
        <Heading level={1} className="mt-6">
          Verified survey data. Not scraped, not bot-filled.
        </Heading>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          The Sentiment data marketplace is in active development, built in partnership with our
          launch agency. Every record will carry a cryptographic proof of verification through
          the Reality protocol — get on the list to be first in line.
        </p>
      </Section>

      <Section className="border-t border-border">
        <Heading level={2}>Why this data is different</Heading>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {trustStats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <HowItWorks heading="How buyers will access data" steps={buyerSteps} />

      <Section className="border-t border-border">
        <Heading level={2}>Built for</Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title}>
              <h3 className="text-lg font-medium text-foreground">{useCase.title}</h3>
              <p className="mt-2 text-sm text-muted">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <Heading level={2}>Get early access</Heading>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Join the waitlist to be notified the moment the data marketplace opens, and help shape
          what gets built.
        </p>
        <FormzEmbed
          formId="4db37644-ad4d-4171-881e-55bb89f2ecd4"
          title="Join the buyers waitlist"
          className="mx-auto mt-8 max-w-lg"
        />
      </Section>
    </>
  );
}
