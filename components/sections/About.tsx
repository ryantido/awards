"use client";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { AnimatedTitle } from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="min-h-dvh w-screen relative">
      <div className="relative mb-8 mt-16 flex flex-col items-center gap-5 z-30">
        <h2 className="text-sm uppercase md:text-sm">Welcome to Zentry</h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the w<b>o</b>rld's <br /> best l<b>a</b>ndmarks with Zentry!"
          className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-8xl !text-black"
        />
        <div className="about-subtext max-w-lg px-4 text-center text-base md:text-lg font-circular-web text-white/90 leading-relaxed mx-auto">
          <p className="mb-3">
            The Game of Games begins—your life, now an epic MMORPG.
          </p>
          <p>
            Zentry unites players from all walks of life to create a world where
            every player has a chance to succeed.
          </p>
        </div>
      </div>

      <div className="w-full h-screen relative" id="clip">
        <div className="mask-clip-path about-image relative overflow-hidden rounded-3xl shadow-lg h-full w-full">
          <Image
            src="/img/about.webp"
            alt="About Zentry"
            fill
            className="object-cover absolute top-0 left-0"
            priority
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
