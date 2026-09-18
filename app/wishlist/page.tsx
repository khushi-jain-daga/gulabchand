"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useCart();

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12">
        <div className="gc-container flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              MY WISHLIST
            </h1>
            <p className="text-xs font-sans text-gc-muted mt-1">
              Saved hand block printed garments and textiles.
            </p>
          </div>
          <span className="text-xs font-sans font-bold text-gc-green uppercase tracking-wider">
            {wishlist.length} ITEMS SAVED
          </span>
        </div>
      </div>

      <div className="gc-container py-12">
        {wishlist.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <Heart className="w-10 h-10 text-gc-muted mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-gc-ink">YOUR WISHLIST IS EMPTY</h3>
            <p className="text-xs font-sans text-gc-muted max-w-sm mx-auto">
              Save your favorite kurtis, dresses, and home textiles to view them anytime.
            </p>
            <Link href="/shop" className="gc-btn-primary inline-block">
              EXPLORE COLLECTIONS
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
