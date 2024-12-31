import React from "react";
import { Github, Mail, Coffee } from "lucide-react";

type FooterLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const footerLinks: FooterLink[] = [
  {
    href: "https://github.com/alif7laksono",
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
  },
  {
    href: "mailto:alif7laksono@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
  },
  {
    href: "https://buymeacoffee.com/alif7laksoj",
    icon: <Coffee className="h-6 w-6" />,
    label: "Buy Me a Coffee",
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950">
      <div className="p-4 lg:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <small className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-none">
            Developed by{" "}
            <a
              href="https://github.com/alif7laksono"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              aliflaksono
            </a>
          </small>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
