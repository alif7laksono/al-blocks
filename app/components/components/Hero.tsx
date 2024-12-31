import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col text-center justify-center items-center">
        <div className="max-w-3xl">
          <Badge>Hero Section 1</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2 lg:mt-4">
            Welcome to Your Next Adventure
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Discover the tools and resources you need to succeed. Whether
            you&apos;re starting your journey or looking to elevate your skills,
            we&apos;re here to help you every step of the way.{" "}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="#">
          <Button variant="outline">
            <Mail />
            <span>Button 1</span>
          </Button>
        </Link>
        <Link href="#">
          <Button>
            <PhoneCall />
            <span>Button 2</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
