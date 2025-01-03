export function generateDynamicMetadata(
  title: string,
  description: string,
  url: string
) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${url}/og-image.png`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${url}/twitter-image.png`],
    },
  };
}
