import type { ReactNode } from "react";
import Link from "next/link";

type LegalDocumentProps = {
  heading: string;
  content: string;
};

// Section headers in these documents are short standalone lines ending in
// "?" (e.g. "Will these Terms ever change?") — used to tell headings apart
// from body paragraphs without re-authoring the source text by hand.
function isHeading(block: string) {
  return !block.includes("\n") && block.length < 120 && block.trim().endsWith("?");
}

// Supports minimal inline `[label](/href)` markdown links within a paragraph,
// so cross-references (e.g. to /terms or /privacy) render as named links
// instead of raw URLs, without restructuring the surrounding source text.
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInlineLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link key={key++} href={match[2]} className="text-accent underline hover:text-accent-hover">
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function LegalDocument({ heading, content }: LegalDocumentProps) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {heading}
      </h1>
      <div className="mt-10 space-y-6 text-muted">
        {blocks.map((block, index) =>
          isHeading(block) ? (
            <h2 key={index} className="pt-6 text-xl font-semibold text-foreground">
              {block}
            </h2>
          ) : (
            <p key={index} className="whitespace-pre-line leading-relaxed">
              {renderInlineLinks(block)}
            </p>
          )
        )}
      </div>
    </article>
  );
}
