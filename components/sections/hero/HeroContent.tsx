import { Button } from "../../Button";
import { TiLocationArrow } from "react-icons/ti";

export const HeroContent = () => {
  return (
    <div
      className="absolute top-24 z-30 flex flex-col justify-center px-8"
      role="region"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="special-font hero-heading md:!text-8xl text-white mb-4 max-md:tracking-wide"
      >
        Redefi<b>n</b>ed
      </h1>

      <p className="max-w-64 text-blue-100 font-robert-regular mb-6 text-lg leading-relaxed">
        Experience the future of gaming with our cutting-edge technology.
      </p>

      <Button
        id="watch-trailer"
        label="Watch Trailer"
        leftIcon={<TiLocationArrow aria-hidden="true" />}
        className="!bg-bright-secondary flex-center gap-1 font-robert-regular font-medium"
      />
    </div>
  );
};
