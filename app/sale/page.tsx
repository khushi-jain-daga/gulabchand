"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SlidersHorizontal, ArrowRight } from "lucide-react";

export default function SalePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = ["ALL", "WOMEN", "MEN", "HOME", "UNSTITCHED"];

  // Filter products where compareAtPrice / originalPrice > price
  const saleProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => (p.originalPrice ?? 0) > p.price);

    if (selectedCategory !== "ALL") {
      if (selectedCategory === "WOMEN") {
        result = result.filter((p) =>
          ["Kurtis", "Tops", "Dresses", "Suit Sets", "Anarkalis", "Sarees", "Dupattas"].includes(p.category)
        );
      } else if (selectedCategory === "MEN") {
        result = result.filter((p) =>
          ["Men Shirts", "Men Kurtas", "Men Jackets"].includes(p.category)
        );
      } else if (selectedCategory === "HOME") {
        result = result.filter((p) => p.category === "Home Decor");
      } else if (selectedCategory === "UNSTITCHED") {
        result = result.filter((p) => p.category === "Unstitched Suits");
      }
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      result.sort((a, b) => {
        const discA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) : 0;
        const discB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) : 0;
        return discB - discA;
      });
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      {/* Sale Page Header */}
      <div className="bg-gc-white border-b border-gc-border py-10 sm:py-14">
        <div className="gc-container space-y-3">
          <div className="flex items-center gap-2 text-xs font-sans text-gc-muted">
            <Link href="/" className="hover:text-gc-ink">Home</Link>
            <span>/</span>
            <span className="text-gc-ink font-semibold">Sale</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-gc-rose uppercase block">
                SPECIAL OFFERS
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight pt-1">
                SALE
              </h1>
              <p className="text-xs sm:text-sm font-sans text-gc-muted mt-1 max-w-xl">
                Selected Gulabchand styles at special prices. Hand-crafted Jaipur block prints, kurtis, and living textiles.
              </p>
            </div>

            <span className="text-xs font-sans font-bold text-gc-rose uppercase tracking-wider bg-gc-rose/10 px-3 py-1.5 rounded-xs border border-gc-rose/20 self-start sm:self-auto">
              {saleProducts.length} STYLES ON SALE
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Sort Toolbar */}
      <div className="sticky top-[105px] z-20 bg-gc-ivory/95 backdrop-blur-md border-b border-gc-border py-3">
        <div className="gc-container flex items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-sans px-3.5 py-1.5 rounded-sm transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gc-ink text-gc-white font-bold"
                    : "bg-gc-white border border-gc-border text-gc-muted hover:text-gc-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-sans text-gc-muted hidden sm:inline">SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gc-white border border-gc-border text-xs font-sans font-semibold text-gc-ink px-3 py-1.5 rounded-sm focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="discount">Highest Discount</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </div>

        </div>
      </div>

      {/* Product Grid */}
      <div className="gc-container py-10">
        {saleProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-gc-white rounded-sm border border-gc-border p-8 max-w-lg mx-auto">
            <h3 className="font-serif text-2xl font-bold text-gc-ink uppercase">SALE</h3>
            <p className="text-sm font-sans text-gc-muted max-w-sm mx-auto leading-relaxed font-light">
              There are currently no special-price styles available.
            </p>
            <Link
              href="/shop?cat=New Arrivals"
              className="gc-btn-primary inline-flex items-center gap-2"
            >
              <span>EXPLORE NEW ARRIVALS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
