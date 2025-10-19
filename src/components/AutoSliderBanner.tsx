import React from "react";
import Picture from "./Picture";

const HERO_IMAGE = "/td-halloween-hero.png";

export const AutoSliderBanner: React.FC = () => {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 h-[90vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Picture
          src={HERO_IMAGE}
          alt="TD Studios hero background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-100 mb-3 drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]">
          <span className="block md:inline">LUXURY</span>
          <span className="block md:inline md:ml-4">STRATEGY</span>
          <span className="block md:inline md:ml-4">CREATIVITY</span>
        </h1>
        <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
          All in one place
        </p>
      </div>
    </div>
  );
};
