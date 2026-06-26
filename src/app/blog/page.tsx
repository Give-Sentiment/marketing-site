import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates and writing from the Sentiment team.",
};

export default function BlogIndexPage() {
  return (
    <Section className="pt-28 pb-20 text-center">
      <Heading level={1}>Blog</Heading>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        We&apos;re just getting started — check back soon for updates on the protocol, the
        marketplace, and the network.
      </p>
    </Section>
  );
}
