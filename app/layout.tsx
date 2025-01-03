import type { Metadata } from "next";
import { generateDynamicMetadata } from "@/app/components/metadata";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicMetadata(
    "Free Reusable UI Components - Next.js, Tailwind CSS, ShadCN UI",
    "Explore free and reusable components built with Next.js, Tailwind CSS, and ShadCN UI. Create stunning web interfaces effortlessly with pre-built designs.",
    "https://shadcn-ui-nextjs-components.vercel.app/"
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiase">
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
