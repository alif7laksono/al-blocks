// app/robots.ts
export function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://shadcn-ui-nextjs-components.vercel.app/sitemap.xml
  `;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
