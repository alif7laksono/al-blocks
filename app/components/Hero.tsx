import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, FileCode } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex-grow flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize text-zinc-800 dark:text-white">
          Free, reusable components built with Next.js, Tailwind CSS, and ShadCN
          UI.
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-lg">
          Create stunning web interfaces with ready-to-use components.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/components" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <FileCode />
              <span>Browse Components</span>
            </Button>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="default">
              <Github />
              <span>Github</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
