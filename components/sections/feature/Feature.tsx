"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-md transition-transform duration-200 ease-in-out ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
}) => {
  return (
    <div className="relative h-full w-full">
      <video
        src={src}
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 text-blue-50 backdrop-blur-0">
        <div>
          <h1 className="bento-title special-font tracking-wide">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base opacity-90">
              {description}
            </p>
          )}
        </div>
        {isComingSoon && (
          <span className="absolute bottom-4 right-4 text-[10px] uppercase text-blue-200 opacity-70">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
};

export const Feature = () => {
  return (
    <section className="bg-black pb-52 text-blue-50">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 text-center md:text-left">
          <p className="font-circular-web text-lg text-blue-50">
            The Modern Way to Award Your Team
          </p>
          <p className="mt-4 max-w-md font-circular-web text-base text-blue-50/70">
            Imagine a world where recognition is not just about giving out
            awards, but also about celebrating the achievements of your team and
            fostering a culture of appreciation.
          </p>
        </div>

        <BentoTilt className="mb-7 h-96 w-full border border-white/20 md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                r<b>a</b>di<b>a</b>nt
              </>
            }
            description="A modern way to reward your team and celebrate their achievements."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid auto-rows-[minmax(250px,1fr)] grid-cols-1 gap-7 md:grid-cols-2">
          <BentoTilt className="md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>ma</b>
                </>
              }
              description="An anime and gaming-inspired NFT collection — the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt>
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension to team connection."
            />
          </BentoTilt>

          <BentoTilt>
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-word puzzle game for team engagement."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 flex flex-col justify-between bg-violet-300 p-5 md:col-span-2">
            <h1 className="bento-title special-font max-w-64 tracking-wide text-violet-500">
              M<b>o</b>re c<b>o</b>ming s<b>o</b>on!
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end text-violet-500" />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 md:col-span-2">
            <video
              src="/videos/feature-5.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
