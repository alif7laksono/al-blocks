import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", 
        disallow: ["/private/", "/api/"],
      },
    ],
    sitemap: "https://shadcn-ui-nextjs-components.vercel.app//sitemap.xml",
    host: "https://shadcn-ui-nextjs-components.vercel.app/",
  };
}
