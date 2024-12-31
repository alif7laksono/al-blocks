import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Globe,
  Rocket,
  Shield,
  Star,
  Code,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className=" lg:w-1/2">
          <Badge>Feature Section</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-800 dark:text-gray-100 mt-4">
            Why Choose Us
          </h1>
          <p className="leading-7 mt-6 text-gray-600 dark:text-gray-300">
            Discover the exceptional features that make our platform stand out.
            We prioritize quality, performance, and user satisfaction.
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
        <div className="lg:w-1/2 grid grid-cols-2 gap-2 lg:gap-4">
          {/* Feature 1 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-blue-600 dark:bg-blue-400 text-white">
              <Check className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Easy to Use
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Our platform is intuitive and user-friendly, suitable for all
                skill levels.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-green-600 dark:bg-green-400 text-white">
              <Globe className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Global Reach
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Expand your horizons with tools that connect you to a worldwide
                audience.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-purple-600 dark:bg-purple-400 text-white">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Fast Performance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Experience blazing fast speeds and seamless performance across
                devices.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-red-600 dark:bg-red-400 text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Top Security
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Your data is safe with advanced encryption and secure
                infrastructure.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-yellow-600 dark:bg-yellow-400 text-white">
              <Star className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Quality Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Get expert assistance anytime with our dedicated support team.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-start p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
            <div className="p-2 rounded-md bg-teal-600 dark:bg-teal-400 text-white">
              <Code className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Developer Friendly
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Built with modern technologies to support developers and
                innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
