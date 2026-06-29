import type { Metadata } from "next";

export const SITE_NAME = "Sentiment";

export const SITE_TITLE = "Official Sentiment website";

// Placeholder until the real production domain is set via env at deploy time.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const SITE_DESCRIPTION =
  "Sentiment is a decentralized Web3 data marketplace secured by the Reality protocol — verified responses, real rewards, trustworthy data.";

/**
 * Per-page metadata helper. Sets the canonical URL and mirrors title/description
 * into openGraph/twitter — Next.js metadata merging replaces the *entire* nested
 * openGraph/twitter object from the parent once a page defines its own, so every
 * field that should survive (siteName, type, card) has to be repeated here rather
 * than left to inherit from layout.tsx.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const ogTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
