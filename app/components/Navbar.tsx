import React from "react";
import { Moon, Sun } from "lucide-react";
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
          <Link href="/components">
            <Button variant="default">Browse Components</Button>
          </Link>
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
                  <li>
                    <a href="#hero1">Hero 1</a>
                  </li>
                  <li>
                    <a href="#hero2">Hero 2</a>
                  </li>{" "}
                  <li>
                    <a href="#stats1">Stats1</a>
                  </li>{" "}
                  <li>
                    <a href="#stats2">Stats2</a>
                  </li>{" "}
                  <li>
                    <a href="#feature1">Feature 1</a>
                  </li>
                  <li>
                    <a href="#faq1">Faq 1</a>
                  </li>
                  <li>
                    <a href="#faq2">Faq 2</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <a href="#footer1">Footer</a>
                  </li>
                </ul>
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
