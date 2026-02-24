// components/Hero.tsx
import Image from "next/image";
import HeroImage from "@/public/heroimage.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl min-h-screen flex flex-col lg:flex-row">
        {/* LEFT: TEXT */}
        <div className="flex flex-1 items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              Crafted for
              <br />
              Those Who Know
            </h1>

            <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-md">
              A refined expression of modern luxury. Designed with intent,
              crafted with restraint.
            </p>
          </div>
        </div>

        {/* RIGHT: VISUAL */}
        <div className="relative flex-1 flex items-center justify-center">
          <Image src={HeroImage} width={473} height={735} alt="hero image" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-neutral-500">
        SCROLL
      </div>
    </section>
  );
}
