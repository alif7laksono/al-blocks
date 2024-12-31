import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-800 dark:text-gray-100">
          Contact Us
        </h1>
        <p className="leading-7 mt-6 text-gray-600 dark:text-gray-300">
          Feel free to reach out with any questions or inquiries. We’d love to
          hear from you!
        </p>
      </div>
      <div className="mt-8">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="mt-1 w-full"
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full"
            />
          </div>
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter the subject"
              className="mt-1 w-full"
            />
          </div>
          {/* Message */}
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <Textarea
              rows={6}
              id="message"
              placeholder="Write your message here"
              className="mt-1 w-full"
            />
          </div>
          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 text-center">
            <Button className="mt-4 w-full sm:w-auto">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
