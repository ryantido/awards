
import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/Contact";
import { Feature } from "@/components/sections/feature/Feature";
import { Hero } from "@/components/sections/hero/HeroClient";
import { Story } from "@/components/sections/story/Story";
import { FOOTER_LINKS } from "@/constants/footerLinks";
import Link from "next/link";
import React from "react";

export default function MainPage() {
  return (
    <>
      <main className="relative min-h-dvh overflow-x-hidden">
        <Hero />
        <About />
        <Feature />
        <Story />
        <Contact />
      </main>
      <footer className="w-screen bg-violet-900 text-violet-200 py-4 ">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row font-inter">
          <p className="text-center md:text-left">

          © {new Date().getFullYear()} Awards. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            {
              FOOTER_LINKS.map(({href, icon: Icon}) => <Link key={`${href} - ${Icon}`} href={href}><Icon /></Link>)
            }
          </div>
          <Link href="#">Privacy Policy</Link>
        </div>

      </footer>
    </>
  );
}
