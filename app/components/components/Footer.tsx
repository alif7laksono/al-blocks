import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* 1. Brand and Social Icons */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
            BrandName
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Empowering you with the tools and resources to succeed.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-stone-600">
              <Facebook className="h-4 w-4 md:w-6 md:h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-stone-600">
              <Instagram className="h-4 w-4 md:w-6 md:h-6"  />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-stone-600">
              <Twitter className="h-4 w-4 md:w-6 md:h-6"  />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-stone-600">
              <Linkedin className="h-4 w-4 md:w-6 md:h-6"  />
            </a>
            <a href="#" aria-label="Github" className="hover:text-stone-600">
              <Github className="h-4 w-4 md:w-6 md:h-6"  />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 list-[square] pl-4">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Resources */}
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Resources
          </h2>
          <ul className="mt-4 space-y-2 list-[square] pl-4">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Contact */}
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Contact
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Have questions? We&apos;d love to hear from you.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href="mailto:info@example.com"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              <Mail className="w-5 h-5" />
              <span>info@example.com</span>
            </a>
          </div>
          <Button variant="default" className="mt-4">
            Get in Touch
          </Button>
        </div>
      </div>
    </footer>
  );
}
