"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Search, Filter, Flame, ShoppingBag, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { totalItems, subtotal, setIsCartOpen } = useCart();

  const categories = [
    { id: "all", label: "All Items", count: PRODUCTS.length },
    { id: "Kurtis", label: "Kurtis", count: PRODUCTS.filter((p) => p.category === "Kurtis").length },
    { id: "Dresses", label: "Dresses", count: PRODUCTS.filter((p) => p.category === "Dresses").length },
    { id: "Suit Sets", label: "Suit Sets", count: PRODUCTS.filter((p) => p.category === "Suit Sets").length },
    { id: "Sarees", label: "Sarees", count: PRODUCTS.filter((p) => p.category === "Sarees").length },
  ];

  const tags = ["Cotton", "Mulmul", "Hand Block Print", "Sanganeri", "Jaipur"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === "all" || (p.category as string) === activeCategory;

      const matchesTag =
        !selectedTag ||
        p.craftTechnique.toLowerCase().includes(selectedTag.toLowerCase()) ||
        p.fabric.toLowerCase().includes(selectedTag.toLowerCase());

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, activeCategory, selectedTag]);

  return (
    <div className="pt-28 pb-24 bg-chai-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chai-850 border border-brass-500/30 text-xs font-mono text-brass-400 uppercase tracking-widest mb-3 shadow-md">
            <Flame className="w-3.5 h-3.5" />
            <span>ARTISANAL SELECTION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-hindi font-bold text-cream-50 mb-3">
            गुलाब जी का मेनू <span className="font-serif italic font-normal text-gold-gradient">— Craft Menu</span>
          </h1>
          <p className="text-xs sm:text-base text-cream-300/80 font-sans font-light">
            Every item brewed fresh over charcoal embers or served piping hot in Jaipur hand-baked terracotta kulhads.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-brass-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by chai, samosa, saffron, cardamom..."
              className="w-full pl-12 pr-12 py-3.5 rounded-full bg-chai-850/90 border border-brass-500/25 text-cream-50 placeholder:text-cream-300/40 text-sm focus:outline-none focus:border-brass-400 backdrop-blur-md shadow-xl transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-brass-400 hover:text-cream-50"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-brass-400/80 font-mono flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Spice Filters:
            </span>
            {tags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`text-[11px] px-3 py-1 rounded-full font-mono transition-all border ${
                    isSelected
                      ? "bg-gulabi-700 text-cream-50 border-gulabi-500 font-bold"
                      : "bg-chai-900 border-brass-500/15 text-cream-300/70 hover:text-cream-50 hover:border-brass-500/30"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-[11px] text-gulabi-300 underline font-mono ml-2 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12 border-b border-brass-500/15 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-gradient-to-r from-brass-500 to-brass-600 text-chai-950 border-brass-400 font-bold shadow-lg"
                    : "bg-chai-850/80 border-brass-500/15 text-cream-200/80 hover:text-cream-50 hover:border-brass-400/40"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-chai-950 text-brass-400" : "bg-chai-900 text-cream-300/50"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid / Empty Search State */}
        {filteredProducts.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 p-8 rounded-3xl bg-chai-850/80 border border-brass-500/20 glass-panel space-y-4">
            <div className="w-14 h-14 rounded-full bg-chai-900 border border-brass-500/30 flex items-center justify-center mx-auto text-brass-400 font-serif font-bold text-xl">
              ☕
            </div>
            <h3 className="text-xl font-serif font-bold text-cream-50">No Menu Items Found</h3>
            <p className="text-xs text-cream-300/70 font-sans">
              We couldn't find any tea or snack matching "{searchQuery}". Try searching for Samosa, Cardamom, or Saffron.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setSelectedTag(null);
              }}
              className="px-6 py-2.5 rounded-full bg-brass-500 text-chai-950 font-bold text-xs uppercase tracking-widest hover:bg-brass-400 transition-colors shadow-lg"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>

      {/* Floating Mobile/Tablet Sticky Cart Summary */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4">
          <div className="p-4 rounded-2xl bg-chai-900/95 backdrop-blur-xl border border-brass-500/40 shadow-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brass-500/20 border border-brass-500/40 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-brass-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-brass-400">{totalItems} {totalItems === 1 ? 'item' : 'items'} in Bag</p>
                <p className="text-base font-serif font-bold text-cream-50">Subtotal: ₹{subtotal}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-chai-850 border border-brass-500/30 text-cream-100 font-semibold text-xs uppercase hover:bg-chai-800"
              >
                View Bag
              </button>

              <Link
                href="/cart"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-brass-500 to-brass-600 text-chai-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg"
              >
                <span>CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
