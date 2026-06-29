import { Section } from "@/components/ui/Section";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PRIVACY_CONTENT } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Sentiment, operated by GiveSentiment, Inc.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-28 pb-20">
      <LegalDocument heading="Privacy Policy" content={PRIVACY_CONTENT} />
    </Section>
  );
}
