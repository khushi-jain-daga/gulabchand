"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function UnstitchedPage() {
  const unstitchedProducts = PRODUCTS.filter((p) => p.category === "Unstitched Suits");

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-20">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
              CRAFTED DRESS MATERIALS
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              UNSTITCHED SUITS
            </h1>
            <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
              3-piece unstitched suit fabric ensembles featuring hand-block printed kurti material, matching bottom fabric, and woven Chanderi, Kota Doria, or chiffon dupattas.
            </p>
          </div>
        </div>
      </div>

      <div className="gc-container py-12 space-y-8">
        <div className="border-b border-gc-border pb-4">
          <h3 className="font-serif text-2xl font-bold uppercase text-gc-ink">UNSTITCHED FABRIC COLLECTION</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {unstitchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
