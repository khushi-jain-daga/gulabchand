"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { ProductImage } from "./ProductImage";

export const SearchOverlay = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.craftTechnique.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = ["Mulmul Dress", "Bagru Shirt", "Dabu Suit", "King Bedsheet", "Anarkali", "Kota Doria"];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col justify-start animate-in fade-in duration-200">
      <div className="bg-gc-white border-b border-gc-border shadow-2xl py-8 px-4 sm:px-8">
        <div className="gc-container max-w-4xl space-y-6">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-sm font-semibold tracking-widest text-gc-muted uppercase">
              WHAT ARE YOU LOOKING FOR?
            </h3>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 min-w-[44px] min-h-[44px] text-gc-ink hover:text-gc-green"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative border-b-2 border-gc-ink py-2 flex items-center">
            <Search className="w-6 h-6 text-gc-ink mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search kurtis, prints, fabrics..."
              autoFocus
              className="w-full bg-transparent text-xl sm:text-2xl font-serif text-gc-ink placeholder:text-gc-muted/50 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-xs font-sans text-gc-muted hover:text-gc-ink">
                CLEAR
              </button>
            )}
          </div>

          {/* Popular Search Suggestions if empty */}
          {!query && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-sans text-gc-muted font-semibold tracking-wider uppercase block">
                POPULAR SEARCHES:
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="text-xs font-sans px-3 py-1.5 rounded-sm bg-gc-cotton text-gc-ink hover:bg-gc-sand transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="space-y-4 pt-4">
              <p className="text-xs font-sans text-gc-muted">
                Showing {filteredProducts.length} results for "{query}"
              </p>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="gc-card p-3 rounded-sm flex gap-3 items-center group hover:border-gc-ink"
                    >
                      <div className="w-16 h-20 bg-gc-cotton rounded-sm overflow-hidden shrink-0">
                        <ProductImage
                          src={product.image}
                          alt={product.name}
                          category={product.category}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-1 overflow-hidden">
                        <span className="text-[9px] font-sans text-gc-green font-bold uppercase tracking-wider block">
                          {product.craftTechnique}
                        </span>
                        <h4 className="font-serif text-xs font-bold text-gc-ink truncate">
                          {product.displayTitle || product.name}
                        </h4>
                        <span className="text-xs font-sans font-semibold text-gc-ink block">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center space-y-2">
                  <p className="font-serif text-lg text-gc-ink">NO RESULTS FOUND</p>
                  <p className="text-xs font-sans text-gc-muted">
                    Try searching for "Cotton", "Indigo", "Suit Sets", or "Bedsheet"
                  </p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
