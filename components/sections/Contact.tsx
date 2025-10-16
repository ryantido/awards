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
      priority
    />
  </div>
);

export const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-full px-4 sm:px-10">
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

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:top-1/2 md:right-10 lg:top-20 lg:w-80">
          <div className="relative w-60 md:w-72">
            <ImageClipBox
              src="/img/swordman-partial.webp"
              alt="Swordman partial"
              className="absolute md:scale-125"
            />
            <ImageClipBox
              src="/img/swordman.webp"
              alt="Swordman full"
              className="sword-man-clip-path md:scale-125"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <p className="text-xs uppercase tracking-widest">
            Join our community
          </p>
          <h2 className="special-font mt-10 w-full font-zentry text-4xl leading-[1.1] md:text-7xl lg:text-8xl md:max-w-2xl">
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
