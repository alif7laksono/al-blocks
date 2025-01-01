import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shadcn-ui-nextjs-components.vercel.app/";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/components`,
      lastModified: new Date().toISOString(), 
    },
  ];
}
