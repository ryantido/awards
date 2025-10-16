"use client";

import React from "react";
import { Button } from "../../Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [nextIndex, setNextIndex] = React.useState(2);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const videoARef = React.useRef<HTMLVideoElement>(null);
  const videoBRef = React.useRef<HTMLVideoElement>(null);
  const activeLayer = React.useRef<"A" | "B">("A");

  const totalVideos = 4;
  const getNextVideoIndex = (i: number) => (i === totalVideos ? 1 : i + 1);
  const getVideoPath = (i: number) => `/videos/hero-${i}.mp4`;

  const startTransitionTimeline = (
    currentVideo: HTMLVideoElement,
    nextVideo: HTMLVideoElement,
    newIndex: number,
  ) => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        activeLayer.current = activeLayer.current === "A" ? "B" : "A";
        setIsTransitioning(false);
        gsap.set(currentVideo, { opacity: 0 });
        gsap.set(nextVideo, { clearProps: "filter scale opacity" });
      },
    });

    tl.to("#transition-overlay", { opacity: 1, duration: 0.25 }, 0);

    tl.to(currentVideo, {
      filter: "blur(18px) brightness(0.25) saturate(0.7)",
      scale: 1.05,
      duration: 0.8,
    });

    tl.to(
      nextVideo,
      {
        opacity: 1,
        filter: "blur(6px) brightness(0.7)",
        duration: 0.4,
        onStart: () => {
          setCurrentIndex(newIndex);
        },
      },
      "-=0.4",
    )
      .to(
        nextVideo,
        {
          filter: "blur(0px) brightness(1) saturate(1)",
          scale: 1,
          duration: 1.2,
        },
        "+=0.1",
      )
      .to(
        currentVideo,
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=1.0",
      );

    tl.to("#transition-overlay", { opacity: 0, duration: 0.6 }, "-=0.3");
  };

  const handleHeroClick = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newIndex = getNextVideoIndex(currentIndex);
    setNextIndex(newIndex);

    const currentVideo =
      activeLayer.current === "A" ? videoARef.current : videoBRef.current;
    const nextVideo =
      activeLayer.current === "A" ? videoBRef.current : videoARef.current;

    if (!currentVideo || !nextVideo) return;

    if (nextVideo.src !== getVideoPath(newIndex)) {
      nextVideo.src = getVideoPath(newIndex);
      if (nextVideo.readyState < 3) nextVideo.load();
    }

    gsap.set(nextVideo, {
      opacity: 0,
      scale: 1.1,
      filter: "blur(12px) brightness(0.6)",
    });

    const start = () =>
      requestAnimationFrame(() =>
        startTransitionTimeline(currentVideo, nextVideo, newIndex),
      );

    if (nextVideo.readyState >= 3) start();
    else {
      nextVideo.oncanplaythrough = () => {
        start();
        nextVideo.oncanplaythrough = null;
      };
    }
  }, [currentIndex, isTransitioning]);

  useGSAP(() => {
    const vA = videoARef.current;
    const vB = videoBRef.current;
    if (!vA || !vB) return;

    gsap.set([vA, vB], {
      opacity: 0,
      scale: 1.1,
      filter: "blur(12px) brightness(0.6)",
    });
    gsap.set(vA, { opacity: 1, filter: "blur(0px) brightness(1)" });

    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 45% 12%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      duration: 1.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative h-dvh overflow-hidden">
      <div
        id="transition-overlay"
        className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 z-40 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div id="video-frame" className="relative z-10 h-dvh overflow-hidden">
        <video
          ref={videoARef}
          src={getVideoPath(currentIndex)}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-0 blur-md brightness-75"
          style={{ opacity: activeLayer.current === "A" ? 1 : 0 }}
        />
        <video
          ref={videoBRef}
          src={getVideoPath(nextIndex)}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-0 blur-md brightness-75"
        />

        <div className="absolute top-24 z-30 flex flex-col justify-center px-8">
          <h2 className="special-font hero-heading md:!text-8xl text-white mb-4 max-md:tracking-wide">
            Redefi<b>n</b>ed
          </h2>
          <p className="max-w-64 text-blue-100 font-robert-regular mb-6">
            Experience the future of gaming <br />
            with our cutting-edge technology.
          </p>
          <Button
            id="watch-trailer"
            label="Watch Trailer"
            leftIcon={<TiLocationArrow />}
            className="!bg-bright-secondary flex-center gap-1 font-robert-regular font-medium"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-30 text-blue-50 md:!text-8xl tracking-wide">
          G<b>a</b>ming
        </h1>

        <button
          aria-label={`Switch to video ${nextIndex}`}
          onClick={handleHeroClick}
          className="hidden md:flex absolute-center z-50 size-64 cursor-pointer rounded-lg overflow-hidden
                     opacity-0 scale-75
                     transition-all duration-500 ease-in-out
                     hover:opacity-100 hover:scale-100
                     focus-visible:opacity-100 focus-visible:scale-100
                     focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleHeroClick();
            }
          }}
        >
          <video
            src={getVideoPath(getNextVideoIndex(currentIndex))}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="size-64 object-cover rounded-lg pointer-events-none"
            aria-hidden="true"
          />
        </button>

        <button
          aria-label={`Switch to video ${nextIndex}`}
          onClick={handleHeroClick}
          className="md:hidden absolute-center absolute z-50 w-[80vw] h-[50vh] cursor-pointer focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleHeroClick();
            }
          }}
        />
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-0 text-black/90 md:!text-8xl tracking-wide">
        G<b>a</b>ming
      </h1>
    </section>
  );
};
