"use client";
import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
