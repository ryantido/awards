"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power3.out",
        stagger: 0.05,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className} mt-5 text-center text-4xl uppercase leading-[0.8] md:text-8xl animated-title`}
      dangerouslySetInnerHTML={{
        __html: title
          .split("<br />")
          .map(
            (line) =>
              `<div class="flex justify-center flex-wrap gap-2 px-10 md:gap-3">${line
                .split(" ")
                .map(
                  (word) =>
                    `<span class="animated-word inline-block opacity-0 transform translate-x-[10px] translate-y-[51px] -translate-z-[60px] rotate-y-[60deg] rotate-x-[-40deg] !font-zentry tracking-wide">${word}</span>`,
                )
                .join(" ")}</div>`,
          )
          .join(""),
      }}
    />
  );
};
