"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { promotion } from "@/data/promotion";
import { ProductCard } from "@/components/ProductCard";
import { Filter, SlidersHorizontal, ChevronDown, X } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const initialFabric = searchParams.get("fabric") || "All";
  const initialCraft = searchParams.get("craft") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [selectedFabric, setSelectedFabric] = useState<string>(initialFabric);
  const [selectedCraft, setSelectedCraft] = useState<string>(initialCraft);
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [selectedDiscount, setSelectedDiscount] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const categories = [
    "All",
    "New Arrivals",
    ...(promotion.active ? ["SALE"] : []),
    "Kurtis",
    "Tops",
    "Dresses",
    "Suit Sets",
    "Anarkalis",
    "Sarees",
    "Dupattas",
    "Unstitched Suits",
    "Men Shirts",
    "Men Kurtas",
    "Home Decor"
  ];
  const fabrics = ["All", "Cotton", "Mulmul", "Chanderi", "Kota Doria", "Modal", "Chiffon"];
  const crafts = ["All", "Hand Block Print", "Dabu Mud Resist", "Bagru Natural Dye", "Sanganeri Fine Block"];
  const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL"];
  const discountFilters = ["All", "10%+", "20%+", "30%+"];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== "All") {
      if (selectedCategory === "New Arrivals") {
        result = result.filter((p) => p.isNew);
      } else if (selectedCategory === "SALE") {
        result = result.filter((p) => (p.originalPrice ?? 0) > p.price);
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    if (selectedFabric !== "All") {
      result = result.filter((p) => p.fabric === selectedFabric);
    }

    if (selectedCraft !== "All") {
      result = result.filter((p) => p.craftTechnique === selectedCraft);
    }

    if (selectedSize !== "All") {
      result = result.filter((p) => p.sizes?.includes(selectedSize));
    }

    if (selectedDiscount !== "All") {
      const minDisc = parseInt(selectedDiscount) / 100;
      result = result.filter((p) => {
        if (!p.originalPrice || p.originalPrice <= p.price) return false;
        const disc = (p.originalPrice - p.price) / p.originalPrice;
        return disc >= minDisc;
      });
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedFabric, selectedCraft, selectedSize, selectedDiscount, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedFabric("All");
    setSelectedCraft("All");
    setSelectedSize("All");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-20">
      
      {/* Header & Breadcrumb */}
      <div className="bg-gc-white border-b border-gc-border py-8">
        <div className="gc-container space-y-3">
          <div className="flex items-center gap-2 text-xs font-sans text-gc-muted">
            <Link href="/" className="hover:text-gc-ink">Home</Link>
            <span>/</span>
            <span className="text-gc-ink font-semibold">Catalogue</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gc-ink uppercase tracking-tight">
                {selectedCategory === "All" ? "ALL COLLECTIONS" : selectedCategory.toUpperCase()}
              </h1>
              <p className="text-xs font-sans text-gc-muted mt-1">
                Authentic Jaipur hand block printed garments, unstitched suit sets and living textiles.
              </p>
            </div>
            <span className="text-xs font-sans font-bold text-gc-green uppercase tracking-wider">
              {filteredProducts.length} PRODUCTS FOUND
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-[105px] z-20 bg-gc-ivory/95 backdrop-blur-md border-b border-gc-border py-3">
        <div className="gc-container flex items-center justify-between gap-4">
          
          <button
            onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gc-white border border-gc-border text-xs font-sans font-bold uppercase tracking-wider hover:border-gc-ink transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-gc-green" />
            <span>FILTERS</span>
            {(selectedCategory !== "All" || selectedFabric !== "All" || selectedCraft !== "All" || selectedSize !== "All") && (
              <span className="w-2 h-2 rounded-full bg-gc-rose" />
            )}
          </button>

          {/* Quick Filter Badges */}
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-sans px-3 py-1 rounded-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-gc-ink text-gc-white font-bold"
                    : "bg-gc-white border border-gc-border text-gc-muted hover:text-gc-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Menu */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans text-gc-muted hidden sm:inline">SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gc-white border border-gc-border text-xs font-sans font-semibold text-gc-ink px-3 py-1.5 rounded-sm focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>
      </div>

      {/* Filter Drawer / Sidebar Modal */}
      {isFilterDrawerOpen && (
        <div className="bg-gc-white border-b border-gc-border py-6 px-4 shadow-md transition-all">
          <div className="gc-container grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs font-sans">
            
            <div className="space-y-2">
              <label className="font-bold text-gc-ink uppercase tracking-wider block">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gc-border rounded-sm bg-gc-ivory"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-gc-ink uppercase tracking-wider block">Fabric</label>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="w-full p-2 border border-gc-border rounded-sm bg-gc-ivory"
              >
                {fabrics.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-gc-ink uppercase tracking-wider block">Craft Technique</label>
              <select
                value={selectedCraft}
                onChange={(e) => setSelectedCraft(e.target.value)}
                className="w-full p-2 border border-gc-border rounded-sm bg-gc-ivory"
              >
                {crafts.map((cr) => (
                  <option key={cr} value={cr}>{cr}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-gc-ink uppercase tracking-wider block">Garment Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gc-border rounded-sm bg-gc-ivory"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-4 flex items-center justify-between pt-2 border-t border-gc-border">
              <button
                onClick={clearFilters}
                className="text-xs font-sans font-bold text-gc-rose uppercase tracking-wider hover:underline"
              >
                CLEAR ALL FILTERS
              </button>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="gc-btn-primary py-2 px-6"
              >
                APPLY FILTERS
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Main Product Grid */}
      <div className="gc-container py-10">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gc-ink">NO PRODUCTS MATCH YOUR FILTERS</h3>
            <p className="text-xs font-sans text-gc-muted max-w-sm mx-auto">
              Try resetting your filter options to view our full collection of hand block printed apparel.
            </p>
            <button onClick={clearFilters} className="gc-btn-primary">
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-28 text-center text-gc-muted font-sans text-xs">LOADING COLLECTION...</div>}>
      <ShopContent />
    </Suspense>
  );
}
