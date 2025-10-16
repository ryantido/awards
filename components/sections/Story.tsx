"use client";

import { useRef } from "react";
import { AnimatedTitle } from "../AnimatedTitle";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "../Button";

export const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);
  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 6000,
      ease: "power3.out",
      overwrite: true,
    });
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 6000,
      ease: "power3.out",
    });
  };
  return (
    <section id="story" className="w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10">
        <p className="text-sm uppercase md:text-[10px]">
          the multiversal ip World
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a multiversal <b>IP</b>"
            className="mt-5 pointer-events-none mix-blend-difference relative z-10 "
          />
          <div className="story-img-container rounded-lg rotate-[8deg]">
            <div className="story-img-mask rounded-lg">
              <div className="story-img-content rounded-lg">
                <Image
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  fill
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-fit flex-col md:items-start self-end -translate-y-80 md:-translate-y-64 md:me-44">
          <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
            Where the story begins, the journey of a multiversal IP World
            starts.
          </p>
          <Button
            id="realm-btton"
            label="discover prologue"
            className="mt-5 text-violet-50 font-medium"
          />
        </div>
      </div>
    </section>
  );
};
