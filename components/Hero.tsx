"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    <section className="relative w-full overflow-hidden select-none bg-gc-dark h-[76svh] md:h-[82vh] min-h-[540px] flex items-end border-b border-gc-border">
      {/* Background Video with Ken Burns Scale Animation */}
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

        {/* Directional Gradient Overlays: Top (for navbar readability), Left (for text contrast), Bottom (for cinematic depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Bottom-Left */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] pb-12 sm:pb-16 text-white">
        <div className="max-w-xl space-y-4 animate-[fadeUp_900ms_ease_forwards]">
          
          {/* Animated Eyebrow Line */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#EAD8B8] inline-block animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.24em] uppercase text-[#EAD8B8]">
              HAND BLOCK PRINTED IN JAIPUR
            </span>
          </div>

          <h1 className="text-[clamp(34px,5.2vw,70px)] font-serif font-bold uppercase tracking-tight leading-[0.98] text-white">
            A LEGACY IN PRINT.
          </h1>

          <p className="text-base sm:text-lg font-serif font-light text-white/90 leading-relaxed max-w-lg">
            Hand block printed clothing, unstitched fabrics and home textiles from Jaipur.
          </p>

          <div className="pt-2 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/women"
                className="group h-12 px-7 bg-[#FCFBF8] text-[#20201D] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#EAD8B8] transition-all duration-300 rounded-[2px] shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>SHOP WOMEN</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/men"
                className="group h-12 px-7 bg-black/40 backdrop-blur-xs text-white border border-white/50 font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#20201D] hover:border-white transition-all duration-300 rounded-[2px] inline-flex items-center justify-center gap-2"
              >
                <span>SHOP MEN</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

            {/* Small text links under buttons */}
            <div className="flex items-center gap-4 text-xs font-sans text-white/85 pt-1">
              <Link href="/unstitched" className="hover:text-[#EAD8B8] uppercase tracking-wider font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-[#EAD8B8] transition-colors">
                UNSTITCHED
              </Link>
              <span className="text-white/40">·</span>
              <Link href="/home-decor" className="hover:text-[#EAD8B8] uppercase tracking-wider font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-[#EAD8B8] transition-colors">
                HOME TEXTILES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-white/70 text-[9px] font-sans font-bold tracking-[0.25em] uppercase pointer-events-none">
        <span>SCROLL</span>
        <div className="w-[1.5px] h-6 bg-white/20 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-[#EAD8B8] absolute top-0 animate-[gc-scroll-line_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

