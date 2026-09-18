"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { ArrowRight } from "lucide-react";

export default function WomenPage() {
  // Filter verified women's products
  const womenProducts = PRODUCTS.filter((p) =>
    ["Kurtis", "Tops", "Dresses", "Suit Sets", "Anarkalis", "Sarees", "Dupattas"].includes(p.category)
  );

  const newArrivals = womenProducts.filter((p) => p.isNew).slice(0, 4);
  const selectedStyles = womenProducts.filter((p) => !p.isNew).slice(0, 4);
  const displaySelected = selectedStyles.length > 0 ? selectedStyles : womenProducts.slice(2, 6);

  const categories = [
    { title: "KURTIS", link: "/shop?cat=Kurtis", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg" },
    { title: "TOPS", link: "/shop?cat=Tops", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/DSC_4976copy.jpg" },
    { title: "DRESSES", link: "/shop?cat=Dresses", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2442.jpg" },
    { title: "SUIT SETS", link: "/shop?cat=Suit Sets", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3641.jpg" },
    { title: "SAREES", link: "/shop?cat=Sarees", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3649.jpg" },
    { title: "DUPATTAS", link: "/shop?cat=Dupattas", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2150.jpg" },
  ];

  const fabrics = [
    { name: "Cotton", copy: "Breathable weave for everyday comfort", link: "/shop?fabric=Cotton", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2150.jpg" },
    { name: "Mulmul", copy: "Lightweight gossamer drape", link: "/shop?fabric=Mulmul", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3655.jpg" },
    { name: "Chanderi", copy: "Subtle sheen for refined occasions", link: "/shop?fabric=Chanderi", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg" },
    { name: "Kota Doria", copy: "Traditional woven grid texture", link: "/shop?fabric=Kota%20Doria", image: "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3641.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans">
      
      {/* 1. WOMEN CAMPAIGN HERO */}
      <section className="relative w-full min-h-[72vh] md:h-[78vh] overflow-hidden select-none bg-gc-dark flex items-end border-b border-gc-border group">
        {/* Full Bleed Background Image */}
        <img
          src="/brand/category-women.jpg"
          alt="Gulabchand Women's Collection"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
        />
        
        {/* Dark Gradient Overlay (Bottom & Left) */}
        <div className="absolute inset-0 bg-gradient-to-t from-gc-dark/95 via-gc-dark/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-gc-dark/80 via-gc-dark/30 to-transparent pointer-events-none" />

        {/* Hero Content (Bottom-Left Aligned) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] pb-12 sm:pb-16 text-white">
          <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-gc-sand inline-block" />
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-gc-sand uppercase">
                WOMEN’S COLLECTION
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(44px,7vw,88px)] font-serif font-bold uppercase tracking-tight leading-[0.92] text-white">
              WOMEN
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-xl font-serif italic text-gc-ivory/90 font-light max-w-md">
              Printed styles for every day and occasion.
            </p>

            {/* CTA & Secondary Links */}
            <div className="pt-3 space-y-4">
              <Link
                href="/shop?cat=New Arrivals"
                className="px-6 py-3.5 bg-gc-white text-gc-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-green hover:text-white transition-colors duration-200 rounded-xs inline-flex items-center gap-2.5 shadow-lg group/cta"
              >
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1.5" />
              </Link>

              {/* Secondary Category Quick Links */}
              <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-wider text-gc-sand uppercase pt-1">
                <Link href="/shop?cat=Kurtis" className="hover:text-white transition-colors">KURTIS</Link>
                <span className="text-gc-ivory/40">·</span>
                <Link href="/shop?cat=Dresses" className="hover:text-white transition-colors">DRESSES</Link>
                <span className="text-gc-ivory/40">·</span>
                <Link href="/shop?cat=Suit Sets" className="hover:text-white transition-colors">SUIT SETS</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NEW ARRIVALS */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-white">
        <div className="gc-container space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gc-border pb-4">
            <div>
              <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                FRESH ARRIVALS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-1">
                NEW ARRIVALS
              </h2>
            </div>

            <Link
              href="/shop"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors"
            >
              <span>VIEW ALL WOMEN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY — Borderless Image-Led Tiles */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-ivory">
        <div className="gc-container space-y-8">
          <div className="space-y-1">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
              EXPLORE CATALOGUE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              SHOP BY CATEGORY
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.link}
                className="group relative aspect-[4/5] rounded-sm overflow-hidden shadow-xs flex flex-col justify-end p-5 select-none"
              >
                <ProductImage
                  src={c.image}
                  alt={c.title}
                  category={c.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="relative z-10 flex items-center justify-between text-white">
                  <h3 className="font-serif font-bold text-lg sm:text-2xl uppercase tracking-wider text-white">
                    {c.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-gc-white group-hover:text-gc-ink transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FEATURE — Deep Green Visual Block */}
      <section className="py-16 md:py-24 bg-gc-green text-gc-ivory select-none">
        <div className="gc-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-md relative">
                <ProductImage
                  src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3655.jpg"
                  alt="Printed Cotton Feature"
                  category="Women"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-gc-sand uppercase block">
                TEXTILE FOCUS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-tight text-white leading-tight">
                PRINTED COTTON
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-gc-sand/90 font-light leading-relaxed">
                Breathable cotton silhouettes decorated with handcrafted Jaipur motifs for effortless daily wear.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop?fabric=Cotton"
                  className="px-6 py-3 bg-gc-white text-gc-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-gc-sand transition-colors rounded-sm inline-flex items-center gap-2"
                >
                  <span>SHOP COTTON</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY FABRIC — Clean Horizontal Visual Grid */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-cotton">
        <div className="gc-container space-y-8">
          <div className="space-y-1">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
              MATERIAL WEAVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              SHOP BY FABRIC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabrics.map((f) => (
              <Link
                key={f.name}
                href={f.link}
                className="bg-gc-white rounded-sm border border-gc-border overflow-hidden group hover:border-gc-ink transition-colors flex flex-col justify-between"
              >
                <div className="aspect-[4/3] bg-gc-cotton overflow-hidden relative">
                  <ProductImage
                    src={f.image}
                    alt={f.name}
                    category="Fabric"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-xl text-gc-ink uppercase group-hover:text-gc-green transition-colors">
                      {f.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gc-muted group-hover:text-gc-green group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs font-sans text-gc-muted font-light leading-relaxed">
                    {f.copy}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SELECTED STYLES */}
      <section className="py-16 md:py-24 border-b border-gc-border bg-gc-white">
        <div className="gc-container space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-gc-border pb-4">
            <div>
              <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                CURATED SELECTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-1">
                SELECTED STYLES
              </h2>
            </div>

            <Link
              href="/shop"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green flex items-center gap-1.5 transition-colors"
            >
              <span>EXPLORE ALL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {displaySelected.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. BRAND MOMENT */}
      <section className="py-16 md:py-20 bg-gc-ivory text-center border-b border-gc-border">
        <div className="gc-container max-w-2xl space-y-4">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
            CRAFT HERITAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold uppercase tracking-tight text-gc-ink">
            PRINTED IN JAIPUR
          </h2>
          <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
            Rooted in Rajasthan’s tradition of block printing.
          </p>
          <div className="pt-2">
            <Link
              href="/story"
              className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green border-b border-gc-ink hover:border-gc-green transition-colors pb-1 inline-block"
            >
              OUR STORY →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
