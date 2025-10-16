import React from "react";

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
}

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  const titleText = typeof title === "string" ? title : "Feature card";
  return (
    <article
      className="relative size-full"
      aria-label={`Feature: ${titleText}`}
    >
      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        aria-hidden="true"
        poster="/img/gallery-5.webp"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-black/40 backdrop-blur-sm">
        <div>
          <h3 className="bento-title special-font tracking-wide">{title}</h3>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base opacity-90">
              {description}
            </p>
          )}
        </div>
        {isComingSoon && (
          <span className="text-xs uppercase opacity-60">Coming Soon</span>
        )}
      </div>
    </article>
  );
};
