// app/components/page.tsx
"use client"
import React from "react";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Faq from "./components/Faq";
import Faq2 from "./components/Faq2";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Stats2 from "./components/Stats2";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Navbar from "./Navbar";
import Footer2 from "./Footer"

export default function page() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Hero2 />
      <Stats />
      <Stats2 />
      <Features />
      <Faq />
      <Faq2 />
      <Testimonials />
      <Pricing />
      <Contact />
      <Newsletter />
      <Footer />
      <Footer2 />
    </div>
  );
}
