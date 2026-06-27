import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { REWARDS_POLICY_CONTENT } from "@/content/legal/rewards-policy";

export const metadata: Metadata = {
  title: "Rewards Policy",
  description: "Rewards Policy for Sentiment, operated by GiveSentiment, Inc.",
};

export default function RewardsPolicyPage() {
  return (
    <Section className="pt-28 pb-20">
      <LegalDocument heading="Rewards Policy" content={REWARDS_POLICY_CONTENT} />
    </Section>
  );
}
