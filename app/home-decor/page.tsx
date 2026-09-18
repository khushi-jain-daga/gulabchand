"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomeDecorPage() {
  const homeProducts = PRODUCTS.filter((p) => p.category === "Home Decor");

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pt-28 md:pt-32 pb-20 select-none">
      {/* Visual Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden bg-gc-ink flex items-end border-b border-gc-border group">
        <img
          src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/SINGLE-QUILT-1037-A.jpg"
          alt="Jaipur Home Textiles & Living"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[56px] pb-10 sm:pb-14 text-white">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans font-bold text-gc-sand uppercase tracking-[0.22em] block">
              JAIPUR HAVELI LIVING
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white uppercase tracking-tight leading-tight">
              HOME TEXTILES
            </h1>
            <p className="text-sm sm:text-base font-serif text-gc-ivory/90 font-light leading-relaxed max-w-xl">
              Bedsheets, dohars and cushion covers for lived-in spaces. Hand printed on percale cotton using traditionally carved wooden stamps.
            </p>
          </div>
        </div>
      </section>

      <div className="gc-container py-12 space-y-8">
        <div className="border-b border-gc-border pb-4">
          <h3 className="font-serif text-2xl font-bold uppercase text-gc-ink">HOME DECOR COLLECTION</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {homeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
