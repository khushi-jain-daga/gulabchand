"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  videoSrc = "/brand/gulabchand-film.mp4",
  posterSrc = "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3641.jpg"
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [usePosterFallback, setUsePosterFallback] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUsePosterFallback(true);
      return;
    }

    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setUsePosterFallback(true);
      });
    }
  }, [videoSrc]);

  return (
    <section className="relative w-full overflow-hidden select-none bg-gc-dark h-[76svh] md:h-[82vh] min-h-[520px] flex items-end">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!usePosterFallback ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            src={videoSrc}
            className="w-full h-full object-cover object-center gc-hero-video filter brightness-95"
          />
        ) : (
          <img
            src={posterSrc}
            alt="Gulabchand Jaipur Campaign"
            className="w-full h-full object-cover object-center gc-hero-video"
          />
        )}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Bottom-Left */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] pb-14 sm:pb-20 text-white">
        <div className="max-w-2xl space-y-6 sm:space-y-7 animate-[fadeUp_900ms_ease_forwards]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#EAD8B8] inline-block animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase text-[#EAD8B8]">
              HAND BLOCK PRINTED IN JAIPUR
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[clamp(42px,6.2vw,86px)] font-serif font-bold uppercase tracking-tight leading-[0.94] text-white">
            A LEGACY<br />IN PRINT.
          </h1>

          {/* Single Refined Ivory CTA */}
          <div className="pt-1">
            <Link
              href="/shop?cat=New Arrivals"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#FCFBF8] text-[#20201D] font-sans font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#EAD8B8] transition-all duration-300 rounded-[2px] shadow-md border border-white/20"
            >
              <span>SHOP NEW ARRIVALS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#20201D]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};


