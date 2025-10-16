"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navLinks";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

export const NavBar = () => {
  const NavContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      NavContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      NavContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      NavContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(NavContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <header
      ref={NavContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <section className="flex items-center gap-7">
            <Image src="/img/logo.png" alt="Logo" loading="lazy" width={50} height={50} />
            <Button
              id="product-button"
              label="Products"              
              rightIcon={<TiLocationArrow />}
              className="hidden !bg-blue-50 !text-blue-400 font-inter md:flex items-center justify-center gap-1 font-medium"
            />
          </section>
          <section className="h-full flex items-center">
            <ul className="hidden md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="ml-10 flex items-center space-x-1"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              <div className="flex items-end space-x-[2px]">
                {Array.from({ length: 4 }).map((_, index) => {
                  const randomDelay = Math.random() * 0.5;
                  const randomDuration = 0.4 + Math.random() * 0.6;

                  return (
                    <div
                      key={index}
                      className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                      style={{
                        animationDelay: `${randomDelay}s`,
                        animationDuration: `${randomDuration}s`,
                      }}
                    />
                  );
                })}
              </div>
            </button>
          </section>
        </nav>
      </div>
    </header>
  );
};
