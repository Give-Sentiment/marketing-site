import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { StatCounter } from "@/components/ui/StatCounter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "For Respondents",
  description:
    "Earn token rewards for verified survey participation on Sentiment, secured by the Reality protocol.",
};

const milestones = [
  { value: "10", label: "responses to unlock your first milestone reward" },
  { value: "25 / 50 / 100", label: "milestone tiers, each unlocking a larger reward" },
  { value: "1:1", label: "response per node, per survey — no duplicate farming" },
];

const respondentSteps = [
  {
    title: "Run a node",
    description: "Each node operator gets a keypair identity used to create and answer surveys.",
  },
  {
    title: "Answer or create",
    description:
      "Create a survey (title + up to 10 open-text questions) or respond to one already live.",
  },
  {
    title: "Get verified & rewarded",
    description:
      "Your response is encrypted, verified on-chain, and counted toward your next reward milestone.",
  },
];

export default function RespondentsPage() {
  return (
    <>
      <Section className="pt-28 pb-16 text-center">
        <Badge variant="accent">For Respondents</Badge>
        <Heading level={1} className="mt-6">
          Get paid for your honest opinion — and prove it&apos;s real
        </Heading>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Every survey you create or answer on Sentiment is verified and anchored on-chain. No
          bots, no duplicate farming — just real participation, rewarded.
        </p>
      </Section>

      <HowItWorks heading="How respondents participate" steps={respondentSteps} />

      <Section className="border-t border-border">
        <Heading level={2}>Privacy by design</Heading>
        <p className="mt-3 max-w-2xl text-muted">
          Your responses are encrypted client-side with AES-GCM and RSA-OAEP before they ever
          leave your device. Verification happens on the data&apos;s proof, not its plaintext.
        </p>
      </Section>

      <Section className="border-t border-border">
        <Heading level={2}>Reward milestones</Heading>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {milestones.map((milestone) => (
            <StatCounter key={milestone.label} value={milestone.value} label={milestone.label} />
          ))}
        </div>
        <Card className="mt-10">
          <p className="text-sm text-muted">
            Reputation also accrues daily based on participation — higher reputation nodes get
            priority visibility for the surveys they create.
          </p>
        </Card>
      </Section>

      <Cta
        heading="Ready to start earning?"
        description="Run a node, answer a survey, and start climbing toward your first reward milestone."
        primaryHref="/protocol"
        primaryLabel="See how verification works"
        secondaryHref="/buyers"
        secondaryLabel="See what your data powers"
      />
    </>
  );
}
