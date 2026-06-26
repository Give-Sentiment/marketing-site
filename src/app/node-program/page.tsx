import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Cta } from "@/components/sections/Cta";
import { FormzEmbed } from "@/components/integrations/FormzEmbed";

export const metadata: Metadata = {
  title: "Founding Node Operator Program",
  description:
    "Apply to run one of the first validator nodes on the Reality protocol — a limited, technical cohort during Sentiment's initial network validation phase.",
};

const programStats = [
  { value: "20–30", label: "founding operator spots in this initial cohort" },
  { value: "Temporary", label: "node operation goes away once our SaaS frontend ships" },
  { value: "Direct", label: "line to the founding team during setup and testing" },
];

const programSteps = [
  {
    title: "Apply",
    description:
      "Tell us about your technical background — OS, command-line/Docker comfort, and why you want to help validate the network.",
  },
  {
    title: "Get onboarded",
    description:
      "Accepted operators get a private network invite and setup scripts directly from our team — not a public download.",
  },
  {
    title: "Run your node",
    description:
      "Install Java 17, connect to the private network, and run one script to generate your validator key and join consensus.",
  },
  {
    title: "Operate & give feedback",
    description:
      "Keep your node running, create or answer surveys, accrue $SENT milestone rewards, and tell us what breaks.",
  },
];

const requirements = [
  {
    title: "A supported OS",
    description: "Windows, macOS, or Linux — we have setup scripts for all three.",
  },
  {
    title: "Modest hardware",
    description: "2+ CPU cores and 4+ GB RAM is enough to run a validator node.",
  },
  {
    title: "Command-line comfort",
    description:
      "You'll run a setup script and follow prompts — no coding required, but you should be comfortable in a terminal.",
  },
  {
    title: "About an hour",
    description:
      "First-time setup, including the Java install and key generation, typically takes under an hour.",
  },
];

export default function NodeProgramPage() {
  return (
    <>
      <Section className="pt-28 pb-16 text-center">
        <Badge variant="accent">Founding Node Operator Program</Badge>
        <Heading level={1} className="mt-6">
          Run one of the first nodes on the Reality network
        </Heading>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          We&apos;re opening a limited cohort of 20–30 technical operators to run a validator
          node, stress-test consensus, and help us catch what&apos;s broken before the network
          opens more broadly. It&apos;s a temporary, hands-on phase — once our SaaS frontend
          ships, node operation won&apos;t be required to participate.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="#apply" size="lg" variant="primary">
            Apply to the program
          </Button>
          <Button href="/protocol" size="lg" variant="secondary">
            See how the protocol works
          </Button>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-8 sm:grid-cols-3">
          {programStats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <HowItWorks heading="How the program works" steps={programSteps} />

      <Section className="border-t border-border">
        <Heading level={2}>What you&apos;ll need</Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {requirements.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Heading level={2}>Why this is temporary</Heading>
        <p className="mt-3 max-w-2xl text-muted">
          Sentiment is moving toward a SaaS frontend that won&apos;t require anyone to run a
          node. Until that ships, the network needs real operators to validate consensus,
          surface bugs, and prove the protocol holds up outside a single machine. Founding
          operators get direct input into what we fix first — and recognition as the people who
          got the network running before anyone else had to.
        </p>
      </Section>

      <Section id="apply" className="border-t border-border text-center">
        <Heading level={2}>Apply to the Founding Node Operator Program</Heading>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Applications take about 5–7 minutes. We&apos;re reviewing for technical readiness, not
          first-come-first-served — accepted operators hear back directly from our team.
        </p>
        <FormzEmbed
          formId="69ee03a6-c25a-4aff-b881-ace27d81982d"
          className="mx-auto mt-10 max-w-3xl"
        />
      </Section>

      <Cta
        heading="Want to understand the protocol first?"
        description="See exactly what your node would be verifying and how consensus works under the hood."
        primaryHref="/protocol"
        primaryLabel="Explore the Reality protocol"
        secondaryHref="/about"
        secondaryLabel="Learn about Sentiment"
      />
    </>
  );
}
