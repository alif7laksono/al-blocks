import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

export default function Hero2() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="lg:max-w-xl text-center lg:text-left">
          <Badge>Hero Section</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2 lg:mt-4 text-zinc-950 dark:text-zinc-50">
            Empowering Your Vision
          </h1>
          <p className="leading-7 mt-4 text-zinc-600 dark:text-zinc-400">
            Whether you&apos;re embarking on a new journey or aiming to enhance
            your expertise, our tools and resources are tailored to empower your
            vision. Let&apos;s achieve greatness together.
          </p>
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <Link href="/learn-more">
              <Button variant="outline">
                <Mail />
                <span className="ml-2">Contact Us</span>
              </Button>
            </Link>
            <Link href="/get-started">
              <Button>
                <PhoneCall />
                <span className="ml-2">Get Started</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            Image Placeholder
          </span>
        </div>
      </div>
    </div>
  );
}
