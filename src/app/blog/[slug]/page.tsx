import type { Metadata } from "next";
import { notFound } from "next/navigation";

// No posts exist yet — this scaffolds the dynamic route shape (and its
// metadata pattern) so the URL structure is stable before content arrives.
// Returns 404 for any slug rather than a soft-placeholder page, since serving
// 200 for arbitrary slugs would be a soft-404 SEO problem.
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  notFound();
}
