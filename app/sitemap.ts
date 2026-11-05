import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "/",
    "/about/",
    "/services/",
    "/gallery/",
    "/contact/",
    ...services.map((service) => `/services/${service.slug}/`),
  ];
  return pages.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === "/services/" ? 0.9 : 0.8,
  }));
}
