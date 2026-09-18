"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomeDecorPage() {
  const homeProducts = PRODUCTS.filter((p) => p.category === "Home Decor");

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-20">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
              JAIPUR HAVELI LIVING
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              HOME TEXTILES
            </h1>
            <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
              Bedsheets, dohars and cushion covers for lived-in spaces. Hand printed on percale cotton using traditionally carved wooden stamps.
            </p>
          </div>
        </div>
      </div>

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
