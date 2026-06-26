import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "The Reality Protocol",
  description:
    "Reality is the blockchain protocol powering Sentiment's verification, consensus, and proof layer.",
};

const layers = [
  {
    title: "WASM verification",
    description:
      "Every survey and response is run through a WebAssembly program before it's accepted — no manual review, no trust required.",
  },
  {
    title: "On-chain consensus",
    description:
      "Verified records are anchored through Reality's consensus layer, run by a decentralized network of nodes.",
  },
  {
    title: "Proof bundles",
    description:
      "Each verified record gets a cryptographic proof bundle — a portable receipt that anyone can check independently.",
  },
  {
    title: "Off-chain sync",
    description:
      "Verified data syncs off-chain for fast querying, while the proof of verification always traces back on-chain.",
  },
];

export default function ProtocolPage() {
  return (
    <>
      <Section className="pt-28 pb-16 text-center">
        <Badge variant="verified">The Reality Protocol</Badge>
        <Heading level={1} className="mt-6">
          The blockchain layer underneath Sentiment
        </Heading>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Reality is the protocol Sentiment runs on — it&apos;s what turns &ldquo;trust us&rdquo;
          into &ldquo;verify it yourself.&rdquo; Every node, every survey, and every response is
          part of the same decentralized network.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2">
          {layers.map((layer) => (
            <Card key={layer.title}>
              <h3 className="text-lg font-medium text-foreground">{layer.title}</h3>
              <p className="mt-2 text-sm text-muted">{layer.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Heading level={2}>Node identity, not user accounts</Heading>
        <p className="mt-3 max-w-2xl text-muted">
          There are no separate &ldquo;user accounts&rdquo; on Sentiment — your node&apos;s
          keypair is your identity. Every node can both create surveys and respond to them, and
          every action a node takes is visible to the network as a verified, attributable record.
        </p>
      </Section>

      <Cta
        heading="Curious what runs on Reality?"
        description="See how respondents and buyers actually use the verified data this protocol produces."
        primaryHref="/respondents"
        primaryLabel="For Respondents"
        secondaryHref="/buyers"
        secondaryLabel="For Buyers"
      />
    </>
  );
}
