"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Heart, Plus, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badge }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );

  const isWishlisted = isInWishlist(product.id);
  const activeBadge = badge || (product.isNew ? "NEW" : undefined);
  const hasAlternate = Boolean(
    product.alternateImage && product.alternateImage !== product.image
  );

  const handleAdd = (e: React.MouseEvent, sizeToUse?: string) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, sizeToUse || selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="w-full select-none group relative">
      <Link href={`/product/${product.id}`} className="block">
        {/* 4:5 Aspect Ratio Image Container */}
        <div className="relative w-full aspect-[4/5] bg-gc-cotton overflow-hidden rounded-[2px]">
          {/* Primary Stable Image */}
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg") {
                target.src = "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg";
              }
            }}
            className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Optional Alternate Image Fade on Hover */}
          {hasAlternate && (
            <img
              src={product.alternateImage!}
              alt={`${product.name} alternate`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out pointer-events-none group-hover:scale-[1.04]"
            />
          )}

          {/* Refined Badge */}
          {activeBadge && (
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
              <span
                className={`px-2 py-0.5 rounded-[2px] font-sans font-bold text-[8.5px] uppercase tracking-widest shadow-2xs ${
                  activeBadge === "FAVOURITE"
                    ? "bg-[#1E3A2B] text-white border border-[#2C523D]"
                    : "bg-[#FAF8F5] text-[#20201D] border border-[#20201D]/20"
                }`}
              >
                {activeBadge}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all z-10 ${
              isWishlisted
                ? "bg-gc-rose text-gc-white"
                : "bg-gc-white/85 text-gc-ink hover:bg-gc-white shadow-xs"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            title="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
          </button>

          {/* Desktop Hover Quick Action & Size Selector */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1.5 group-hover:translate-y-0 hidden sm:block space-y-1.5">
            {/* Real Size Row if exists */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="flex items-center justify-center gap-1 bg-black/65 backdrop-blur-xs p-1 rounded-[2px]">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(sz);
                      handleAdd(e, sz);
                    }}
                    className={`px-2 py-0.5 text-[9px] font-sans font-bold uppercase rounded-[1px] transition-colors ${
                      selectedSize === sz
                        ? "bg-white text-gc-ink"
                        : "text-white/90 hover:bg-white/30"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            )}

            {/* Quick Add Button */}
            <button
              onClick={(e) => handleAdd(e)}
              disabled={added}
              className={`w-full py-2 rounded-[2px] font-sans font-bold text-[10px] uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md ${
                added
                  ? "bg-gc-green text-gc-white"
                  : "bg-gc-white text-gc-ink hover:bg-gc-ink hover:text-gc-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>ADDED</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD TO BAG</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Product Details Area — Below Image */}
        <div className="pt-2.5 space-y-0.5">
          <h3 className="font-serif font-bold text-sm text-gc-ink group-hover:text-gc-green transition-colors line-clamp-1 leading-snug">
            {product.displayTitle || product.name}
          </h3>

          <p className="text-[11px] font-sans text-gc-muted line-clamp-1 font-medium">
            {product.subtitle || `${product.craftTechnique} · ${product.fabric}`}
          </p>

          <div className="flex flex-wrap items-baseline gap-2 pt-1">
            <span className="font-sans font-bold text-sm text-gc-ink">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="font-sans text-xs text-gc-muted line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="font-sans font-bold text-[10.5px] text-gc-rose">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

