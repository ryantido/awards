import { About } from "@/components/sections/About";
import { Feature } from "@/components/sections/Feature";
import { Hero } from "@/components/sections/Hero";
import React from "react";

export default function MainPage() {
  return (
    <>
      <main className="relative min-h-dvh overflow-x-hidden">
        <Hero />
        <About />
        <Feature />
      </main>
      <footer></footer>
    </>
  );
}
