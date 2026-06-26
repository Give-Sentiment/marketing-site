import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { TERMS_CONTENT } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Sentiment, operated by GiveSentiment, Inc.",
};

export default function TermsPage() {
  return (
    <Section className="pt-28 pb-20">
      <LegalDocument heading="Terms of Service" content={TERMS_CONTENT} />
    </Section>
  );
}
