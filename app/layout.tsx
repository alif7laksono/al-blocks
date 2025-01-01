import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Free Reusable UI Components - Next.js, Tailwind CSS, ShadCN UI",
  description:
    "Explore free and reusable components built with Next.js, Tailwind CSS, and ShadCN UI. Create stunning web interfaces effortlessly with pre-built designs.",
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
    title: "Free Reusable UI Components - Next.js, Tailwind CSS, ShadCN UI",
    description:
      "Explore free and reusable components built with Next.js, Tailwind CSS, and ShadCN UI. Create stunning web interfaces effortlessly with pre-built designs.",
    url: "https://shadcn-ui-nextjs-components.vercel.app/",
    siteName: "ShadCN UI Components",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Reusable UI Components - Next.js, Tailwind CSS, ShadCN UI",
    description:
      "Discover free and reusable components for building modern web interfaces with Next.js, Tailwind CSS, and ShadCN UI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiase`}>
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>{" "}
        </main>
      </body>
    </html>
  );
}
