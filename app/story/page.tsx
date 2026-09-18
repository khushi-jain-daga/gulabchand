"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";

export default function StoryPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const craftSteps = [
    {
      num: "01",
      title: "DRAW",
      subtitle: "The Motif Conception",
      desc: "Every print begins as a hand-drawn illustration — balancing rhythm, repeat, and the natural geometry of flowers, vines, and traditional Rajasthani bootas.",
      img: "/brand/category-unstitched.jpg"
    },
    {
      num: "02",
      title: "CARVE",
      subtitle: "The Wood Carving",
      desc: "Skilled wood carvers chisel seasoned Sheesham or Teak wood by hand. Separate relief blocks are carved for the outline (rekh) and each background filler colour (datta).",
      img: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2150.jpg"
    },
    {
      num: "03",
      title: "COLOUR",
      subtitle: "The Dye Preparation",
      desc: "Rich dye formulations are mixed to precise viscosities in traditional wooden dye trays (tari), ensuring optimal saturation without bleeding across the weave.",
      img: "/brand/category-women.jpg"
    },
    {
      num: "04",
      title: "STAMP",
      subtitle: "The Precision Impression",
      desc: "Artisans stamp the pinned cotton lengths with swift, confident strikes of the palm. Registration is judged by eye and tactile muscle memory honed over decades.",
      img: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg"
    },
    {
      num: "05",
      title: "FINISH",
      subtitle: "Washing, Sun-Drying & Softening",
      desc: "Printed textiles are sun-cured, washed in flowing waters to fix dyes and remove surplus pigments, then steam-softened into featherweight mulmul and durable cottons.",
      img: "/brand/category-men.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-gc-ink font-sans select-none overflow-x-hidden">
      
      {/* 1. CINEMATIC VIDEO HERO */}
      <section className="relative w-full h-[80svh] md:h-[calc(100vh-36px)] min-h-[580px] overflow-hidden bg-gc-dark flex items-end border-b border-gc-border">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3641.jpg"
          src="/brand/gulabchand-film.mp4"
          className="absolute inset-0 w-full h-full object-cover gc-hero-video filter brightness-95"
        />
        {/* Directional Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] pb-14 sm:pb-20 text-white">
          <div className="max-w-[760px] space-y-4 reveal-up">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#EAD8B8] inline-block" />
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#EAD8B8] uppercase">
                OUR STORY · JAIPUR
              </span>
            </div>

            <h1 className="text-[clamp(38px,5.8vw,80px)] font-serif font-bold uppercase tracking-tight leading-[0.96] text-white">
              EVERY PRINT<br />CARRIES A HAND.
            </h1>

            <p className="text-base sm:text-xl font-serif text-white/90 font-light max-w-xl leading-relaxed pt-1">
              A Jaipur print house shaping hand block printed clothing, unstitched suits and living textiles for today.
            </p>

            <div className="pt-4">
              <a
                href="#memory"
                className="group inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.16em] uppercase text-[#EAD8B8] hover:text-white transition-colors"
              >
                <span>DISCOVER THE CRAFT</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMORY STATEMENT — Large & Immersive */}
      <section id="memory" className="min-h-[48vh] py-20 sm:py-28 bg-[#FCFBF8] border-b border-gc-border/60 flex items-center justify-center text-center">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          <div className="max-w-3xl mx-auto space-y-6 reveal-up">
            <h2 className="text-[clamp(34px,5vw,66px)] font-serif font-bold uppercase tracking-tight leading-[1.04] text-gc-ink">
              FROM JAIPUR.<br />
              <span className="text-gc-green">MADE BY HAND.</span><br />
              WORN EVERY DAY.
            </h2>

            {/* Moving / Animated Glow Underline */}
            <div className="w-24 h-[2.5px] bg-gc-green mx-auto my-5 pulse-line rounded-full" />

            <p className="text-base sm:text-lg font-serif italic text-gc-muted font-light max-w-[620px] mx-auto leading-relaxed">
              Gulabchand brings together Rajasthan’s block printing heritage and contemporary everyday dressing — pieces with the softness, variation, and character only hand printing can carry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE BEGINNING — Editorial Heritage */}
      <section className="bg-[#FCFBF8] border-b border-gc-border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          {/* Left: Image with Subtle Zoom */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full group overflow-hidden reveal-up">
            <img
              src="/brand/category-women.jpg"
              alt="Founders and Beginning of Gulabchand"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3 py-1 bg-black/75 backdrop-blur-xs text-[#EAD8B8] font-sans font-bold text-[10px] tracking-[0.2em] uppercase rounded-xs">
                SINCE 1930
              </span>
            </div>
          </div>

          {/* Right: Rich Narrative Panel */}
          <div className="lg:col-span-6 bg-[#F4EFE6] p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-6 reveal-up">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-gc-green uppercase block">
              THE BEGINNING
            </span>
            <h2 className="text-[clamp(30px,3.8vw,48px)] font-serif font-bold uppercase tracking-tight leading-tight text-gc-ink">
              CRAFTED THROUGH<br />GENERATIONS
            </h2>
            <p className="text-base sm:text-lg font-serif text-gc-muted font-light leading-relaxed max-w-lg">
              Founded by Shri Suresh Tak, Shri Rajendra Tak, and Shri Vishnu Tak, Gulabchand Prints carries forward a Jaipur legacy rooted in block printing, fabric, and craft.
            </p>
            <div className="pt-4 border-t border-gc-border/80 text-[11px] font-sans font-bold tracking-wider text-gc-green uppercase flex items-center gap-2">
              <span>JAIPUR ROOTS</span>
              <span className="text-gc-muted">·</span>
              <span>HAND BLOCK PRINTING</span>
              <span className="text-gc-muted">·</span>
              <span>CONTEMPORARY WARDROBES</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BLOCK TO CLOTH — Dynamic Sticky Scroll Experience */}
      <section className="py-20 sm:py-28 bg-[#11110F] text-white border-b border-white/10 relative">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Sticky Column on Desktop */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6 reveal-up">
              <div className="space-y-3">
                <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#EAD8B8] uppercase block">
                  THE CRAFT JOURNEY
                </span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-serif font-bold uppercase tracking-tight text-white leading-[1.02]">
                  FROM BLOCK<br />TO CLOTH.
                </h2>
                <p className="text-sm font-sans text-white/70 font-light leading-relaxed">
                  Every meter of Gulabchand fabric undergoes a multi-stage artisanal transformation before reaching your hands.
                </p>
              </div>

              {/* Step Navigation Pill Indicator on Desktop */}
              <div className="hidden lg:flex flex-col space-y-2 pt-4 border-t border-white/15">
                {craftSteps.map((step) => (
                  <div key={step.num} className="flex items-center gap-3 text-xs font-sans text-white/60 hover:text-[#EAD8B8] transition-colors py-1">
                    <span className="font-mono text-[#EAD8B8] font-bold">{step.num}</span>
                    <span className="tracking-wider uppercase font-semibold">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Scrolling Panels */}
            <div className="lg:col-span-8 space-y-8">
              {craftSteps.map((step) => (
                <div
                  key={step.num}
                  className="group relative rounded-[2px] overflow-hidden bg-[#1A1A18] border border-white/15 shadow-xl reveal-up"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Panel Image */}
                    <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <ProductImage
                        src={step.img}
                        alt={step.title}
                        category="Story"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Panel Content */}
                    <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#EAD8B8] tracking-widest">
                            STEP {step.num}
                          </span>
                          <span className="text-[10px] font-sans font-bold uppercase text-white/40 tracking-wider">
                            HANDCRAFTED
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-tight text-white group-hover:text-[#EAD8B8] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs font-sans font-bold uppercase tracking-wider text-gc-sand">
                          {step.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm font-sans text-white/80 font-light leading-relaxed pt-1">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 text-[10px] font-sans font-bold uppercase tracking-widest text-[#EAD8B8]/80">
                        BLOCK PRINT TECHNIQUE
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. BEAUTY IN VARIATION */}
      <section className="relative w-full h-[75vh] min-h-[480px] overflow-hidden bg-gc-dark flex items-center">
        <img
          src="/brand/category-unstitched.jpg"
          alt="The Beauty is in the Variation"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          <div className="max-w-2xl space-y-5 reveal-up text-white">
            <h2 className="text-[clamp(34px,4.5vw,62px)] font-serif font-bold uppercase tracking-tight text-white leading-tight">
              THE BEAUTY IS<br />IN THE VARIATION.
            </h2>
            <p className="text-base sm:text-lg font-serif italic text-white/90 font-light leading-relaxed max-w-lg">
              Slight shifts in colour and alignment are part of hand printing’s character. They are the signature of a human hand on fabric.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FCFBF8] text-[#20201D] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#EAD8B8] transition-all duration-300 rounded-[2px] shadow-md"
              >
                <span>SHOP HAND BLOCK PRINTS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GULABCHAND TODAY */}
      <section className="bg-[#12261D] text-gc-ivory py-20 sm:py-28 text-center border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] space-y-14">
          
          <div className="space-y-8 max-w-4xl mx-auto reveal-up">
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-serif font-bold uppercase tracking-tight text-[#EAD8B8]">
              GULABCHAND TODAY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/10 py-10">
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-gc-ivory block">
                  JAIPUR
                </span>
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#EAD8B8]">
                  Rajasthan Roots
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-gc-ivory block">
                  4 STORES
                </span>
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#EAD8B8]">
                  4 Jaipur Stores
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-gc-ivory block">
                  140+ COUNTRIES
                </span>
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#EAD8B8]">
                  Global Patrons
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans text-gc-ivory/70 font-light max-w-xl mx-auto leading-relaxed">
              Today, Harshit Tak and Anmol Tak lead Gulabchand’s digital expansion, bringing Jaipur block-printed apparel and living textiles to customers worldwide.
            </p>

            <div className="text-sm font-serif italic text-[#EAD8B8] font-bold tracking-wider pt-2">
              FROM JAIPUR, WITH PRINT.
            </div>
          </div>

          <div className="pt-2 reveal-up">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 px-9 py-4 bg-[#FCFBF8] text-[#12261D] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#EAD8B8] transition-all duration-300 rounded-[2px] shadow-md"
            >
              <span>SHOP THE COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
