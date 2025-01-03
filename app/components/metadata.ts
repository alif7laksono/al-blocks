// app/components/metadata.ts
export function generateDynamicMetadata(
  title: string,
  description: string,
  url: string
) {
  return {
    title,
    description,
    keywords: [
      "Next.js components",
      "Tailwind CSS components",
      "ShadCN UI",
      "reusable UI components",
      "free UI library",
      "web design",
      "frontend development",
    ],
    authors: [
      { name: "Alif Wiji Laksono", url: "https://github.com/alif7laksono" },
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "ShadCN UI Components",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
