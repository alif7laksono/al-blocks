import React from "react";
import { Moon, Sun, Github, Coffee } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItem: NavItem[] = [
  { id: "hero1", label: "Hero 1", href: "#hero1" },
  { id: "hero2", label: "Hero 2", href: "#hero2" },
  { id: "hero3", label: "Hero 3", href: "#hero3" },
  { id: "stats1", label: "Stats 1", href: "#stats1" },
  { id: "stats2", label: "Stats 2", href: "#stats2" },
  { id: "feature1", label: "Feature 1", href: "#feature1" },
  { id: "faq1", label: "FAQ 1", href: "#faq1" },
  { id: "faq2", label: "FAQ 2", href: "#faq2" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "contact", label: "Contact Us", href: "#contact" },
  { id: "newsletter", label: "Newsletter", href: "#newsletter" },
  { id: "footer1", label: "Footer", href: "#footer1" },
];

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <nav className="sticky top-0 bg-zinc-50 dark:bg-zinc-950 z-10">
      <div className="p-4 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div>
          <span className="font-bold lg:inline-block">
            <Link href="/">AlBlocks</Link>
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Component List</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul className="my-6 ml-6 list-[square] [&>li]:mt-2">
                  {navItem.map((item) => (
                    <li key={item.id}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <SheetFooter>
                <Link
                  href="https://buymeacoffee.com/alif7laksoj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Coffee />
                    <span>Buy Me A Coffe</span>
                  </Button>
                </Link>
                <Link
                  href="https://github.com/alif7laksono/shadcn-ui-nextjs-components"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">
                    <Github />
                    <span>Github Repo</span>
                  </Button>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
