import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description: "Sentiment is building a decentralized, verifiable survey network.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section className="pt-28 pb-20">
      <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
        <div>
          <Heading level={1}>About Sentiment</Heading>
          <p className="mt-6 max-w-2xl text-muted">
            Sentiment exists because survey data broke down — panels are full of bots, incentives
            are misaligned, and there&apos;s no way to verify a response actually happened the way
            it&apos;s reported. We&apos;re building a network where every response is
            cryptographically verified, every respondent is rewarded fairly, and every buyer can
            check the data&apos;s proof instead of taking it on faith.
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Sentiment is powered by Reality, the blockchain protocol we&apos;re launching to run
            verification, consensus, and proof generation for the entire network.
          </p>
        </div>
        <Image
          src="/images/sentiment-logo-mirror.png"
          alt="Sentiment logo rendered as a glossy chrome mirror sculpture"
          width={1024}
          height={1024}
          priority
          className="w-full max-w-xs shrink-0 md:max-w-sm"
        />
      </div>
    </Section>
  );
}
