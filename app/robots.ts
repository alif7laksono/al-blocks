import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all bots
        allow: "/", // Allow all pages
        disallow: ["/private/", "/api/"], // Exclude private and API routes
      },
    ],
    sitemap: "https://shadcn-ui-nextjs-components.vercel.app//sitemap.xml",
    host: "https://shadcn-ui-nextjs-components.vercel.app/",
  };
}
