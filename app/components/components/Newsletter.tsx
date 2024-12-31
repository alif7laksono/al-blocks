import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

type SocialMediaLink = {
  platform: string;
  icon: JSX.Element;
  url: string;
};

export default function Newsletter() {
  const socialMediaLinks: SocialMediaLink[] = [
    { platform: "Facebook", icon: <Facebook className="h-4 w-4 md:w-6 md:h-6"  />, url: "#" },
    { platform: "Instagram", icon: <Instagram className="h-4 w-4 md:w-6 md:h-6"  />, url: "#" },
    { platform: "Twitter", icon: <Twitter className="h-4 w-4 md:w-6 md:h-6"  />, url: "#" },
    { platform: "Linkedin", icon: <Linkedin className="h-4 w-4 md:w-6 md:h-6"  />, url: "#" },
    { platform: "Github", icon: <Github className="h-4 w-4 md:w-6 md:h-6"  />, url: "#" },
  ];

  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Stay Connected
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Subscribe to our newsletter and follow us on our social media.
        </p>
      </div>
      {/* Form Section */}
      <div className="mt-6 flex flex-col lg:flex-row items-center justify-center mx-auto gap-4 max-w-xs md:max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full lg:w-auto flex-1"
        />
        <Button variant="default" className="w-full lg:w-auto">
          Subscribe
        </Button>
      </div>
      {/* Social Media Section */}
      <div className="mt-6 flex flex-row md:flex-row items-center justify-center mx-auto gap-4 max-w-xl text-zinc-700 dark:text-zinc-300">
        {socialMediaLinks.map(({ platform, icon, url }) => (
          <a key={platform} href={url} aria-label={platform} className="hover:text-zinc-900 dark:hover:text-zinc-50">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
