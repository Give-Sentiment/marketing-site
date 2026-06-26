import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = ["", "/respondents", "/buyers", "/protocol", "/node-program", "/about", "/blog"];
const legalRoutes = ["/terms", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.6,
  }));

  const legalEntries = legalRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...mainEntries, ...legalEntries];
}
