"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { PRODUCTS, JAIPUR_STORES } from "@/data/products";
import {
  ArrowRight,
  Check,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  MapPin,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeStoreIdx, setActiveStoreIdx] = useState(0);
  const categorySectionRef = useRef<HTMLElement>(null);
  const [catScale, setCatScale] = useState(1);
  const [catOpacity, setCatOpacity] = useState(1);

  useEffect(() => {
    let ticking = false;
    const updateCategoryScroll = () => {
      if (!categorySectionRef.current) return;
      if (window.innerWidth < 768) {
        setCatScale(1);
        setCatOpacity(1);
        return;
      }
      const rect = categorySectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // When section enters viewport (rect.top <= vh) to when it reaches top/center (rect.top <= vh * 0.25)
      if (rect.top <= vh && rect.bottom >= 0) {
        const start = vh;
        const end = vh * 0.25;
        const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        // scale: 1.04 -> 1.00 smoothly
        const currentScale = 1.04 - 0.04 * progress;
        // opacity: 0.96 -> 1.00
        const currentOpacity = 0.96 + 0.04 * progress;

        setCatScale(Number(currentScale.toFixed(4)));
        setCatOpacity(Number(currentOpacity.toFixed(4)));
      } else if (rect.top > vh) {
        setCatScale(1.04);
        setCatOpacity(0.96);
      } else {
        setCatScale(1);
        setCatOpacity(1);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCategoryScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateCategoryScroll();

    // IntersectionObserver for reveal-up elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll(".reveal-up");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const customerFavourites = PRODUCTS.slice(2, 6);

  const categoryEditorial = {
    featured: {
      title: "WOMEN’S COLLECTION",
      subtitle: "Timeless silhouettes for every occasion",
      link: "/women",
      image: "/brand/category-women.jpg",
      fallbackImage: "/brand/category-women.jpg",
      objectPosition: "object-[center_20%]"
    },
    topRight: {
      title: "MEN’S APPAREL",
      subtitle: "Tailored block print shirts & kurtas",
      link: "/men",
      image: "/brand/category-men.jpg",
      fallbackImage: "/brand/category-men.jpg",
      objectPosition: "object-[center_20%]"
    },
    bottomRight: {
      title: "UNSTITCHED & LIVING",
      subtitle: "Pure cotton fabrics, quilts & living textiles",
      link: "/unstitched",
      image: "/brand/category-unstitched.jpg",
      fallbackImage: "/brand/category-unstitched.jpg",
      objectPosition: "object-center"
    }
  };

  const fabrics = [
    {
      title: "Pure Cotton",
      benefit: "Breathable daily comfort",
      link: "/shop?fabric=Cotton",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/MULMUL-1513.jpg"
    },
    {
      title: "Mulmul",
      benefit: "Featherlight summer cotton",
      link: "/shop?fabric=Mulmul",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3655.jpg"
    },
    {
      title: "Chanderi",
      benefit: "Subtle festive sheen",
      link: "/shop?fabric=Chanderi",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg"
    },
    {
      title: "Kota Doria",
      benefit: "Woven sheer checks",
      link: "/shop?fabric=Kota+Doria",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/SINGLE-QUILT-1037-A.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gc-white text-gc-ink font-sans select-none">
      
      {/* 01 HERO VIDEO */}
      <Hero />

      {/* MOVING PRINT MARQUEE STRIP DIRECTLY BELOW HERO */}
      <div className="w-full bg-[#1E3A2B] text-[#FDFBF8] overflow-hidden select-none gc-marquee h-[38px] md:h-[44px] flex items-center -mt-px -mb-px relative z-10">
        <div className="gc-marquee-track flex items-center whitespace-nowrap text-[11px] sm:text-xs font-sans font-bold tracking-[0.22em] uppercase">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 opacity-90 hover:opacity-100 transition-opacity">
              <span>JAIPUR PRINTS</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>HAND BLOCK</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>COTTON</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>MULMUL</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>DRESSES</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>KURTAS</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>HOME TEXTILES</span>
              <span className="text-[#EAD8B8]">·</span>
              <span>UNSTITCHED</span>
              <span className="text-[#EAD8B8]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* 02 SHOP BY CATEGORY — Compact Luxury Showcase with Scroll Zoom-out (57% / 43%, 480px Desktop Height) */}
      <section
        ref={categorySectionRef}
        className="pt-8 sm:pt-10 pb-14 sm:pb-16 md:pb-20 bg-gc-white border-b border-gc-border overflow-hidden relative z-0"
      >
        <div className="w-[93%] max-w-[1500px] mx-auto space-y-7">
          
          {/* Compact Editorial Heading (32-36px before cards) */}
          <div className="flex items-end justify-between border-b border-gc-border pb-3.5">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gc-ink uppercase tracking-tight">
                SHOP BY CATEGORY
              </h2>
              <p className="text-xs sm:text-sm font-serif text-gc-muted font-light">
                Explore our signature collections
              </p>
            </div>
            <Link
              href="/shop"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors group pb-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* 57% / 43% Compact Layout with Smooth Scroll Zoom-out */}
          <div
            style={{
              transform: `scale(${catScale})`,
              transformOrigin: "center center",
              transition: "transform 0.15s ease-out",
              willChange: "transform"
            }}
            className="flex flex-col lg:flex-row gap-[18px] items-stretch"
          >
            
            {/* Left Dominant Featured Card (57% Width, 480px Desktop Height) */}
            <div className="w-full lg:w-[57%] flex">
              <Link
                href={categoryEditorial.featured.link}
                className="group relative w-full h-[360px] sm:h-[400px] lg:h-[480px] rounded-[6px] overflow-hidden bg-gc-cotton shadow-xs hover:shadow-2xl transition-all duration-700 hover:-translate-y-1.5 flex flex-col justify-end px-8 sm:px-9 lg:px-10 pb-8 sm:pb-9 lg:pb-9"
              >
                <img
                  src={categoryEditorial.featured.image}
                  alt={categoryEditorial.featured.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== categoryEditorial.featured.fallbackImage) {
                      target.src = categoryEditorial.featured.fallbackImage;
                    }
                  }}
                  className={`absolute inset-0 w-full h-full object-cover ${categoryEditorial.featured.objectPosition} transition-transform duration-[900ms] ease-out group-hover:scale-110`}
                />

                {/* Subtle Lightweight Bottom Gradient Overlay (transparent -> rgba(0,0,0,0.55)) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent group-hover:from-black/75 transition-all duration-500 pointer-events-none" />

                {/* Bottom Left Content with Safe Breathing Room */}
                <div className="relative z-10 space-y-1.5 text-white max-w-lg transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold uppercase tracking-tight leading-tight group-hover:text-[#EAD8B8] transition-colors drop-shadow-xs">
                    {categoryEditorial.featured.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-[14px] lg:text-[15px] font-sans text-white/95 font-light">
                    <span>{categoryEditorial.featured.subtitle}</span>
                    <ArrowRight className="w-4 h-4 inline-block transition-transform duration-300 group-hover:translate-x-2 text-[#EAD8B8]" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Stacked Cards (43% Width, Two 231px Cards with 18px Gap = 480px) */}
            <div className="w-full lg:w-[43%] flex flex-col gap-[18px] justify-between">
              
              {/* Right Top Card (231px Height) */}
              <Link
                href={categoryEditorial.topRight.link}
                className="group relative w-full h-[210px] sm:h-[220px] lg:h-[231px] rounded-[6px] overflow-hidden bg-gc-cotton shadow-xs hover:shadow-2xl transition-all duration-700 hover:-translate-y-1.5 flex flex-col justify-end px-7 sm:px-8 lg:px-8 pb-6 sm:pb-7 lg:pb-7"
              >
                <img
                  src={categoryEditorial.topRight.image}
                  alt={categoryEditorial.topRight.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== categoryEditorial.topRight.fallbackImage) {
                      target.src = categoryEditorial.topRight.fallbackImage;
                    }
                  }}
                  className={`absolute inset-0 w-full h-full object-cover ${categoryEditorial.topRight.objectPosition} transition-transform duration-[900ms] ease-out group-hover:scale-110`}
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent group-hover:from-black/75 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-1 text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-serif font-bold uppercase tracking-tight leading-snug group-hover:text-[#EAD8B8] transition-colors drop-shadow-xs">
                    {categoryEditorial.topRight.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-[13.5px] font-sans text-white/95 font-light">
                    <span>{categoryEditorial.topRight.subtitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 inline-block transition-transform duration-300 group-hover:translate-x-2 text-[#EAD8B8]" />
                  </div>
                </div>
              </Link>

              {/* Right Bottom Card (231px Height) */}
              <Link
                href={categoryEditorial.bottomRight.link}
                className="group relative w-full h-[210px] sm:h-[220px] lg:h-[231px] rounded-[6px] overflow-hidden bg-gc-cotton shadow-xs hover:shadow-2xl transition-all duration-700 hover:-translate-y-1.5 flex flex-col justify-end px-7 sm:px-8 lg:px-8 pb-6 sm:pb-7 lg:pb-7"
              >
                <img
                  src={categoryEditorial.bottomRight.image}
                  alt={categoryEditorial.bottomRight.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== categoryEditorial.bottomRight.fallbackImage) {
                      target.src = categoryEditorial.bottomRight.fallbackImage;
                    }
                  }}
                  className={`absolute inset-0 w-full h-full object-cover ${categoryEditorial.bottomRight.objectPosition} transition-transform duration-[900ms] ease-out group-hover:scale-110`}
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent group-hover:from-black/75 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-1 text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-serif font-bold uppercase tracking-tight leading-snug group-hover:text-[#EAD8B8] transition-colors drop-shadow-xs">
                    {categoryEditorial.bottomRight.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-[13.5px] font-sans text-white/95 font-light">
                    <span>{categoryEditorial.bottomRight.subtitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 inline-block transition-transform duration-300 group-hover:translate-x-2 text-[#EAD8B8]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 NEW ARRIVALS — Clean Minimal Showcase */}
      <section className="py-14 sm:py-16 md:py-20 bg-gc-ivory border-b border-gc-border">
        <div className="w-[93%] max-w-[1500px] mx-auto space-y-7">
          
          {/* Editorial Heading Row */}
          <div className="flex items-end justify-between border-b border-gc-border pb-3.5">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                JUST IN
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-0.5">
                NEW ARRIVALS
              </h2>
              <p className="text-xs sm:text-sm font-serif text-gc-muted font-light pt-0.5">
                Recently added to the collection
              </p>
            </div>

            <Link
              href="/shop?cat=New Arrivals"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors group pb-0.5"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4-Product Horizontal Editorial Showcase */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                badge="NEW"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 CUSTOMER FAVOURITES */}
      <section className="py-14 md:py-20 bg-gc-white border-b border-gc-border">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] space-y-6">
          <div className="flex items-end justify-between border-b border-gc-border pb-3">
            <div>
              <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                MOST LOVED
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-0.5">
                CUSTOMER FAVOURITES
              </h2>
              <p className="text-xs font-sans text-gc-muted font-light pt-0.5">
                Loved pieces from the Gulabchand wardrobe.
              </p>
            </div>

            <Link
              href="/shop"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors shrink-0 group"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {customerFavourites.map((product) => (
              <ProductCard key={product.id} product={product} badge="FAVOURITE" />
            ))}
          </div>
        </div>
      </section>

      {/* 05 INSIDE THE ATELIER — THE GULABCHAND PRINT ROOM */}
      <section className="py-20 md:py-28 bg-[#16251E] text-gc-ivory border-b border-gc-border/30 select-none overflow-hidden relative">
        {/* Subtle Moving Print Marquee */}
        <div className="w-full overflow-hidden border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-sans font-bold tracking-[0.25em] text-[#D8C9AF] uppercase opacity-85">
            <span>INSIDE THE ATELIER · JAIPUR HAND BLOCK PRINTS · MOTIFS & COLOURS · BREATHABLE COTTON · INSIDE THE ATELIER · </span>
            <span>INSIDE THE ATELIER · JAIPUR HAND BLOCK PRINTS · MOTIFS & COLOURS · BREATHABLE COTTON · INSIDE THE ATELIER · </span>
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] relative z-10 space-y-12 md:space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Heading & Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#D8C9AF] uppercase block">
                  INSIDE THE ATELIER
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white uppercase tracking-tight leading-[0.98]">
                  THE GULABCHAND<br />PRINT ROOM
                </h2>
              </div>

              <p className="text-base sm:text-lg font-serif italic text-gc-ivory/90 font-light leading-relaxed max-w-lg">
                Motifs are drawn, colours are chosen, cotton is prepared, and Jaipur’s print language takes shape before it becomes everyday clothing.
              </p>

              <div className="pt-2">
                <Link
                  href="/story"
                  className="group/cta px-7 py-3.5 bg-gc-white text-gc-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#D8C9AF] transition-all duration-300 rounded-[2px] inline-flex items-center gap-2.5 shadow-md"
                >
                  <span>STEP INSIDE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: One Strong Image Panel */}
            <div className="lg:col-span-6 relative">
              <div className="group aspect-[4/3] sm:aspect-[16/10] rounded-[2px] overflow-hidden shadow-2xl relative border border-white/15">
                <img
                  src="/brand/category-unstitched.jpg"
                  alt="Inside The Gulabchand Print Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16251E]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-[#D8C9AF] font-sans font-bold text-[10px] tracking-[0.22em] uppercase border border-[#D8C9AF]/30 rounded-xs shadow-md">
                    PRINT ROOM ATELIER
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Pillars Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-white/15">
            
            <div className="p-5 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#D8C9AF]/50 transition-colors space-y-2 group/card">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                01 · MOTIFS
              </span>
              <h3 className="font-serif font-bold text-base text-white uppercase group-hover/card:text-[#D8C9AF] transition-colors">
                MOTIFS
              </h3>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Pattern language inspired by Jaipur.
              </p>
            </div>

            <div className="p-5 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#D8C9AF]/50 transition-colors space-y-2 group/card">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                02 · COLOUR
              </span>
              <h3 className="font-serif font-bold text-base text-white uppercase group-hover/card:text-[#D8C9AF] transition-colors">
                COLOUR
              </h3>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Earthy tones, festive accents, everyday ease.
              </p>
            </div>

            <div className="p-5 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#D8C9AF]/50 transition-colors space-y-2 group/card">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                03 · COTTON
              </span>
              <h3 className="font-serif font-bold text-base text-white uppercase group-hover/card:text-[#D8C9AF] transition-colors">
                COTTON
              </h3>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Breathable fabric for Indian wardrobes.
              </p>
            </div>

            <div className="p-5 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#D8C9AF]/50 transition-colors space-y-2 group/card">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                04 · CRAFT
              </span>
              <h3 className="font-serif font-bold text-base text-white uppercase group-hover/card:text-[#D8C9AF] transition-colors">
                CRAFT
              </h3>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Hand-led printmaking with natural variation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 06 SHOP BY FABRIC */}
      <section className="py-14 md:py-20 bg-gc-ivory border-b border-gc-border">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] space-y-6">
          <div className="space-y-1 border-b border-gc-border pb-3">
            <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
              TEXTILE WEAVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              SHOP BY FABRIC
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fabrics.map((f) => (
              <Link
                key={f.title}
                href={f.link}
                className="group bg-gc-white rounded-[2px] border border-gc-border overflow-hidden hover:border-gc-ink transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div className="aspect-[4/3] bg-gc-cotton overflow-hidden relative">
                  <ProductImage
                    src={f.image}
                    alt={f.title}
                    category="Fabric"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-gc-ink uppercase group-hover:text-gc-green transition-colors">
                      {f.title}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-gc-muted group-hover:text-gc-green group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs font-sans text-gc-muted font-light leading-relaxed">
                    {f.benefit}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07 HOME TEXTILES */}
      <section className="py-16 md:py-24 bg-gc-ivory border-b border-gc-border">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-7">
              <div className="group aspect-[16/10] rounded-[2px] overflow-hidden shadow-xs relative bg-gc-cotton border border-gc-border">
                <ProductImage
                  src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/SINGLE-QUILT-1037-A.jpg"
                  alt="Home Textiles Collection"
                  category="Home Decor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                LIVING TEXTILES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight leading-tight">
                HOME TEXTILES
              </h2>
              <p className="text-base sm:text-lg font-serif text-gc-muted font-light leading-relaxed max-w-md">
                Printed dohars, quilts, bedsheets and soft layers for lived-in homes.
              </p>
              <div className="pt-2">
                <Link
                  href="/home-decor"
                  className="group h-12 px-7 bg-[#20201D] text-[#FCFBF8] font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-green transition-all duration-300 rounded-[2px] inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>EXPLORE HOME</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08 JAIPUR SHOWROOMS — 2-Column Editorial Showroom Layout */}
      <section className="py-16 md:py-24 bg-gc-ivory border-b border-gc-border select-none">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] space-y-8 md:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gc-border pb-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-[0.22em] block">
                JAIPUR SHOWROOMS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gc-ink tracking-tight">
                Visit Gulabchand in Jaipur
              </h2>
              <p className="text-xs sm:text-sm font-sans text-gc-muted font-light leading-relaxed pt-1">
                Discover printed clothing, unstitched fabrics, and living textiles across our Jaipur showrooms.
              </p>
            </div>
            <Link
              href="/stores"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-2 transition-colors group shrink-0"
            >
              <span>ALL 4 STORES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 2-Column Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Large Visual Panel */}
            <div className="lg:col-span-5 relative rounded-[2px] overflow-hidden bg-gc-ink min-h-[340px] lg:min-h-[520px] shadow-lg group">
              {[
                {
                  num: "01",
                  area: "MI ROAD / NARAIN SINGH CIRCLE",
                  name: "Citypulse Showroom",
                  tagline: "Flagship Showroom · MI Road Hub",
                  image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
                },
                {
                  num: "02",
                  area: "OLD CITY / HAWA MAHAL ROAD",
                  name: "Badi Chopad Showroom",
                  tagline: "Heritage Heart · Old Jaipur",
                  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
                },
                {
                  num: "03",
                  area: "C SCHEME",
                  name: "Mall 21 Showroom",
                  tagline: "Boutique Experience · Near Raj Mandir",
                  image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80",
                },
                {
                  num: "04",
                  area: "TONK ROAD",
                  name: "Golden Leaf Showroom",
                  tagline: "Textile & Living Studio · South Jaipur",
                  image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
                },
              ].map((store, idx) => (
                <div
                  key={store.num}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeStoreIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gc-ink/90 via-gc-ink/30 to-transparent" />
                </div>
              ))}

              {/* Overlay Badge Top Left */}
              <div className="absolute top-5 left-5 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gc-ink/80 backdrop-blur-md text-gc-sand text-[10px] font-sans font-bold uppercase tracking-widest border border-gc-sand/30 shadow-md">
                  <MapPin className="w-3 h-3 text-gc-sand" />
                  <span>4 JAIPUR STORES</span>
                </span>
              </div>

              {/* Overlay Content Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1 text-gc-ivory">
                <span className="text-[10px] font-sans font-bold text-gc-sand uppercase tracking-widest block">
                  {[
                    "MI ROAD / NARAIN SINGH CIRCLE",
                    "OLD CITY / HAWA MAHAL ROAD",
                    "C SCHEME",
                    "TONK ROAD",
                  ][activeStoreIdx]}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-gc-ivory">
                  {[
                    "01 Citypulse Showroom",
                    "02 Badi Chopad Showroom",
                    "03 Mall 21 Showroom",
                    "04 Golden Leaf Showroom",
                  ][activeStoreIdx]}
                </h3>
                <p className="text-xs font-sans text-gc-ivory/80 font-light">
                  {[
                    "Flagship Showroom · MI Road Hub",
                    "Heritage Heart · Old Jaipur",
                    "Boutique Experience · Near Raj Mandir Cinema",
                    "Textile & Living Studio · South Jaipur",
                  ][activeStoreIdx]}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Vertical Showroom List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
              {[
                {
                  num: "01",
                  area: "MI ROAD / NARAIN SINGH CIRCLE",
                  name: "Citypulse Showroom",
                  address: "Citypulse Mall, Narain Singh Circle",
                  phone: "+91 7849938983",
                  mapLink: "https://maps.google.com/?q=Citypulse+Mall+Jaipur",
                },
                {
                  num: "02",
                  area: "OLD CITY / HAWA MAHAL ROAD",
                  name: "Badi Chopad Showroom",
                  address: "Hawa Mahal Road, Near Badi Chopad",
                  phone: "0141 2609460",
                  mapLink: "https://maps.google.com/?q=Hawa+Mahal+Road+Jaipur",
                },
                {
                  num: "03",
                  area: "C SCHEME",
                  name: "Mall 21 Showroom",
                  address: "Mall 21, Opp. Raj Mandir Cinema",
                  phone: "+91 8290688849",
                  mapLink: "https://maps.google.com/?q=Mall+21+C+Scheme+Jaipur",
                },
                {
                  num: "04",
                  area: "TONK ROAD",
                  name: "Golden Leaf Showroom",
                  address: "Golden Leaf Complex, Tonk Road",
                  phone: "+91 7615933333",
                  mapLink: "https://maps.google.com/?q=Golden+Leaf+Tonk+Road+Jaipur",
                },
              ].map((store, idx) => {
                const isActive = activeStoreIdx === idx;
                return (
                  <div
                    key={store.num}
                    onMouseEnter={() => setActiveStoreIdx(idx)}
                    onClick={() => setActiveStoreIdx(idx)}
                    className={`group cursor-pointer p-5 sm:p-6 rounded-[2px] border transition-all duration-300 relative ${
                      isActive
                        ? "bg-gc-white border-gc-green shadow-md border-l-4 border-l-gc-green -translate-x-0 sm:translate-x-1"
                        : "bg-gc-white/60 border-gc-border hover:bg-gc-white hover:border-gc-green/50 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      
                      {/* Store Info */}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-bold ${isActive ? "text-gc-green" : "text-gc-muted/60"}`}>
                            {store.num}
                          </span>
                          <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-wider">
                            {store.area}
                          </span>
                        </div>

                        <h3 className={`font-serif font-bold text-lg sm:text-xl transition-colors ${
                          isActive ? "text-gc-ink" : "text-gc-ink/80 group-hover:text-gc-ink"
                        }`}>
                          {store.name}
                        </h3>

                        <p className="text-xs font-sans text-gc-muted font-light leading-relaxed">
                          {store.address}
                        </p>
                      </div>

                      {/* Phone & Directions CTA */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 border-gc-border/60 pt-3 sm:pt-0 shrink-0">
                        <span className="text-gc-muted font-mono text-xs font-medium">
                          {store.phone}
                        </span>
                        <a
                          href={store.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-gc-green hover:underline uppercase tracking-wider group/link"
                        >
                          <span>GET DIRECTIONS</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 09 TRUST STRIP */}
      <section className="py-10 md:py-12 bg-gc-cotton border-b border-gc-border">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-gc-white border border-gc-border flex items-center justify-center text-gc-green shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-sm text-gc-ink">Complimentary Shipping</h4>
                <p className="text-[11px] font-sans text-gc-muted">On prepaid orders in India</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-gc-white border border-gc-border flex items-center justify-center text-gc-green shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-sm text-gc-ink">Easy Returns</h4>
                <p className="text-[11px] font-sans text-gc-muted">Hassle-free 7-day exchange</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-gc-white border border-gc-border flex items-center justify-center text-gc-green shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-sm text-gc-ink">Secure Payments</h4>
                <p className="text-[11px] font-sans text-gc-muted">UPI, NetBanking & Cards</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-gc-white border border-gc-border flex items-center justify-center text-gc-green shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-sm text-gc-ink">Support 11 AM – 6 PM</h4>
                <p className="text-[11px] font-sans text-gc-muted">+91 7849938983 · WhatsApp</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10 NEWSLETTER */}
      <section className="py-16 md:py-20 bg-gc-ink text-gc-white text-center select-none">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px]">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-gc-sand uppercase block">
              STAY CONNECTED
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase tracking-tight text-white">
              FROM JAIPUR, OCCASIONALLY.
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gc-white/70 font-light max-w-md mx-auto leading-relaxed">
              Receive new arrivals, craft stories and store updates.
            </p>

            <form onSubmit={handleNewsletter} className="flex max-w-md mx-auto pt-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 text-xs font-sans text-gc-white placeholder:text-gc-white/40 px-4 py-3.5 rounded-l-[2px] border border-white/15 focus:outline-none focus:border-gc-sand"
              />
              <button
                type="submit"
                className="bg-gc-sand text-gc-dark font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-r-[2px] hover:bg-gc-white transition-colors flex items-center gap-1.5 shrink-0"
              >
                {newsletterSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-gc-green" />
                    <span>JOINED</span>
                  </>
                ) : (
                  <span>JOIN</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
