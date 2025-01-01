"use client";
import React from "react";

import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar2 />
      <Hero />
      <Footer />
    </div>
  );
}
