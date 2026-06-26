import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { StatCounter } from "@/components/ui/StatCounter";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { value: "100%", label: "of responses verified via WASM before acceptance" },
  { value: "1:1", label: "response per node, per survey — no duplicate submissions" },
  { value: "AES + RSA", label: "client-side encryption on every response" },
];

export function ProofOfTrust() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="verified">Powered by Reality</Badge>
          <Heading level={2} className="mt-4">
            Trust, built into the protocol
          </Heading>
          <p className="mt-3 max-w-xl text-muted">
            Reality is the blockchain protocol underneath Sentiment — every survey and response
            is verified, proven, and anchored on-chain before it ever reaches a buyer.
          </p>
        </div>
        <Link href="/protocol" className="text-sm font-medium text-accent hover:text-accent-hover">
          Learn about the protocol →
        </Link>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Section>
  );
}
