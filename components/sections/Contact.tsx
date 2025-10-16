import Image from "next/image";
import { Button } from "../Button";

interface ImageClipBoxProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageClipBox = ({ src, alt = "", className }: ImageClipBoxProps) => (
  <div className={`relative ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="object-contain w-full h-auto"
      loading="lazy"
    />
  </div>
);

export const Contact = () => {
  return (
    <section
      id="contact"
      className="my-20 min-h-96 w-full px-4 sm:px-10 relative"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 overflow-hidden">
        <div className="absolute inset-y-0 -left-24 hidden sm:block lg:left-10">
          <div className="relative h-full w-72 lg:w-96">
            <ImageClipBox
              src="/img/contact-1.webp"
              alt="Decorative contact image 1"
              className="contact-clip-path-1"
            />
            <ImageClipBox
              src="/img/contact-2.webp"
              alt="Decorative contact image 2"
              className="contact-clip-path-2 translate-y-40 lg:translate-y-20"
            />
          </div>
        </div>

        <div
          className="
            absolute top-[-6rem] left-1/2 -translate-x-1/2
            w-64 h-auto z-50
            opacity-100
            transition-all duration-700 ease-in-out
            sm:static sm:left-auto sm:top-auto sm:translate-x-0 sm:w-72 sm:h-auto
            md:absolute md:right-10 md:top-20 md:w-80 md:h-auto
          "
          aria-label="Swordman image"
        >
          <div className="relative w-full h-full">
            <ImageClipBox
              src="/img/swordman-partial.webp"
              alt="Swordman partial"
              className="absolute top-0 left-0 md:scale-125 opacity-60 -z-10"
            />
            <ImageClipBox
              src="/img/swordman.webp"
              alt="Swordman full"
              className="sword-man-clip-path md:scale-125"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest">
            Join our community
          </p>
          <h2 className="special-font mt-10 font-zentry text-4xl leading-[1.1] md:text-7xl lg:text-8xl">
            <b>Let's build the new era of gaming together!</b>
          </h2>
          <Button
            id="contact-button"
            label="Contact us"
            className="mt-10 !bg-violet-300 text-violet-900 font-medium"
          />
        </div>
      </div>
    </section>
  );
};
