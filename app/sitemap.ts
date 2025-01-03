// app/sitemap.ts
export async function GET() {
  const baseUrl = "https://shadcn-ui-nextjs-components.vercel.app";

  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/components", priority: 0.8 },
    // Add more routes dynamically
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route.url}</loc>
      <priority>${route.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
