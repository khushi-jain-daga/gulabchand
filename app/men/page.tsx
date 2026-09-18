"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { ArrowRight } from "lucide-react";

export default function MenPage() {
  // Filter verified men's products
  const menProducts = PRODUCTS.filter((p) =>
    ["Men Shirts", "Men Kurtas", "Men Jackets"].includes(p.category)
  );

  const categories = [
    {
      title: "KURTAS",
      subtitle: "Short & Long Printed Kurtas",
      link: "/shop?cat=Men Kurtas",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg",
      dominant: true
    },
    {
      title: "JACKETS",
      subtitle: "Quilted Block Printed Outerwear",
      link: "/shop?cat=Men Jackets",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/MJ-07-A.jpg",
      dominant: false
    },
    {
      title: "FULL SLEEVES",
      subtitle: "Casual Printed Full Sleeve Shirts",
      link: "/shop?cat=Men Shirts",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg",
      dominant: false
    },
    {
      title: "HALF SLEEVES",
      subtitle: "Lightweight Everyday Summer Shirts",
      link: "/shop?cat=Men Shirts",
      image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg",
      dominant: false
    }
  ];

  const discoveryItems = [
    {
      title: "Cotton Weave",
      copy: "100% pure cotton for breathable all-day wear.",
      link: "/shop?fabric=Cotton"
    },
    {
      title: "Hand Block Motifs",
      copy: "Traditional Jaipur woodblock stamps and geometric patterns.",
      link: "/shop?craft=Hand Block Print"
    },
    {
      title: "Natural Dyes",
      copy: "Subtle indigo and botanical pigments printed in Rajasthan.",
      link: "/shop?craft=Bagru Natural Dye"
    }
  ];

  return (
    <div className="min-h-screen bg-gc-white text-gc-ink font-sans">
      
      {/* 1. MENSWEAR HERO */}
      <section className="relative w-full h-[65svh] md:h-[clamp(480px,65vh,700px)] overflow-hidden select-none bg-gc-ink flex items-end">
        <ProductImage
          src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg"
          alt="Gulabchand Menswear Hero"
          category="Men Kurtas"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 pb-12 sm:pb-16 text-white">
          <div className="max-w-xl space-y-3">
            <h1 className="text-[clamp(44px,6vw,76px)] font-serif font-bold uppercase tracking-tight leading-[0.95] text-white">
              MEN
            </h1>
            <p className="text-base sm:text-xl font-serif italic text-gc-sand font-light">
              Printed shirts, kurtas and layers for everyday wear.
            </p>
            <div className="pt-2">
              <Link
                href="/shop?cat=Men Kurtas"
                className="px-6 py-3 bg-gc-white text-gc-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-sand transition-colors rounded-sm inline-flex items-center gap-2 shadow-md"
              >
                <span>SHOP MEN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW FOR MEN */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-white">
        <div className="gc-container space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gc-border pb-4">
            <div>
              <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                MENSWEAR CATALOGUE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-1">
                NEW FOR MEN
              </h2>
            </div>

            <Link
              href="/shop?cat=Men Shirts"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors"
            >
              <span>VIEW ALL MENSWEAR</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY — 2x2 Editorial Grid */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-ivory">
        <div className="gc-container space-y-8">
          <div className="space-y-1">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
              MENSWEAR CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              SHOP BY CATEGORY
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.link}
                className={`group relative rounded-sm overflow-hidden shadow-xs flex flex-col justify-end p-5 sm:p-8 select-none ${
                  c.dominant ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <ProductImage
                  src={c.image}
                  alt={c.title}
                  category={c.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="relative z-10 space-y-1 text-white">
                  <h3 className="font-serif font-bold text-lg sm:text-3xl uppercase tracking-wider text-white">
                    {c.title}
                  </h3>
                  <p className="text-xs font-sans text-gc-sand font-light hidden sm:block">
                    {c.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-gc-sand uppercase tracking-widest pt-1">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FEATURE */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-cotton">
        <div className="gc-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-sm relative">
                <ProductImage
                  src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg"
                  alt="Printed Kurtas Feature"
                  category="Men Kurtas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-gc-green uppercase block">
                TEXTILE & SILHOUETTE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-tight text-gc-ink leading-tight">
                PRINTED KURTAS
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-gc-muted font-light leading-relaxed">
                Tailored short kurtas and casual shirts hand block printed on pure cotton for structured everyday wear.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop?cat=Men Kurtas"
                  className="px-6 py-3 bg-gc-ink text-gc-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-green transition-colors rounded-sm inline-flex items-center gap-2 shadow-sm"
                >
                  <span>EXPLORE KURTAS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FABRIC / PRINT DISCOVERY — Restrained Text-Led Section */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-white">
        <div className="gc-container space-y-8">
          <div className="border-b border-gc-border pb-4">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
              CRAFT FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-1">
              FABRIC & PRINT FOCUS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discoveryItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="p-6 rounded-sm bg-gc-ivory border border-gc-border hover:border-gc-ink transition-colors space-y-2 block group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-gc-ink uppercase group-hover:text-gc-green transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gc-muted group-hover:text-gc-green group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs font-sans text-gc-muted font-light leading-relaxed">
                  {item.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND MOMENT — Compact Section */}
      <section className="py-20 md:py-24 bg-gc-green text-gc-ivory text-center select-none">
        <div className="gc-container max-w-2xl space-y-4">
          <span className="text-[11px] font-sans font-bold text-gc-sand uppercase tracking-[0.2em] block">
            HERITAGE CRAFT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-tight text-white">
            PRINTED IN JAIPUR
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-gc-sand/90 font-light leading-relaxed">
            Menswear shaped by Gulabchand's print-led identity.
          </p>
          <div className="pt-2">
            <Link
              href="/story"
              className="px-8 py-3.5 bg-gc-white text-gc-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-sand transition-colors inline-block rounded-sm shadow-sm"
            >
              OUR STORY →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
