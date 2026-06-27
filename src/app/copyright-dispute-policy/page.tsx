import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { COPYRIGHT_DISPUTE_POLICY_CONTENT } from "@/content/legal/copyright-dispute-policy";

export const metadata: Metadata = {
  title: "Copyright Dispute Policy",
  description: "Copyright Dispute Policy for Sentiment, operated by GiveSentiment, Inc.",
};

export default function CopyrightDisputePolicyPage() {
  return (
    <Section className="pt-28 pb-20">
      <LegalDocument heading="Copyright Dispute Policy" content={COPYRIGHT_DISPUTE_POLICY_CONTENT} />
    </Section>
  );
}
