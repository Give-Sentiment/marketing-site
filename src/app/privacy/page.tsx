import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PRIVACY_CONTENT } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sentiment, operated by GiveSentiment, Inc.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-28 pb-20">
      <LegalDocument heading="Privacy Policy" content={PRIVACY_CONTENT} />
    </Section>
  );
}
