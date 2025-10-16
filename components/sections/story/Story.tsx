"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Button } from "@/components/Button";

export const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: -rotateX,
      rotateY,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section id="story" className="w-screen bg-black text-blue-50 overflow-hidden">
      <div className="flex flex-col items-center py-10 relative">
        <p className="text-sm uppercase tracking-widest text-blue-200">
          The Multiversal IP World
        </p>

        <div className="relative w-full max-w-7xl mt-5">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a multiversal <b>IP</b>"
            className="pointer-events-none mix-blend-difference relative z-10 text-center lg:text-left"
          />

          <div
            className="
              story-img-container
              rounded-lg
              mt-8
              mx-auto
              w-[300px] h-[300px]
              sm:w-[400px] sm:h-[400px]
              md:w-[450px] md:h-[450px]
              lg:w-[500px] lg:h-[500px]
              lg:rotate-12
              transition-transform duration-300 ease-in-out
            "
          >
            <div className="story-img-mask rounded-lg overflow-hidden w-full h-full">
              <div className="story-img-content rounded-lg relative w-full h-full">
                <Image
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="Entrance to the Zentry multiversal world"
                  fill
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  className="object-contain rounded-lg"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col items-center
            mt-8
            max-w-md
            md:max-w-lg
            mx-auto
            text-center
            md:text-left
            lg:max-w-4xl lg:mx-auto lg:mt-12
            md:-translate-y-52
          "
        >
          <p className="font-circular-web text-violet-50 md:text-lg leading-relaxed text-center lg:max-w-[60%]">
            Where the story begins — the journey of a multiversal IP world starts.
          </p>
          <Button
            id="realm-button"
            label="Discover Prologue"
            className="!mt-5 font-medium text-violet-50 lg:mt-0 lg:self-center"
          />
        </div>
      </div>
    </section>
  );
};
