"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, Heart, User, MapPin, Compass, PhoneCall } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { promotion } from "@/data/promotion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { wishlist } = useCart();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = [
    { name: "NEW IN", path: "/shop?cat=New Arrivals" },
    { name: "WOMEN", path: "/women", sub: ["Kurtis", "Tops", "Dresses", "Suit Sets", "Anarkalis", "Sarees", "Dupattas"] },
    { name: "MEN", path: "/men", sub: ["Full Sleeve Shirts", "Half Sleeve Shirts", "Kurtas", "Jackets"] },
    { name: "UNSTITCHED", path: "/unstitched", sub: ["Cotton Suits", "Chanderi Suits", "Kota Doria Suits", "Chiffon Dupatta Suits"] },
    { name: "HOME", path: "/home-decor", sub: ["Bedsheets", "Dohars", "Quilts", "Cushion Covers"] },
    ...(promotion.active ? [{ name: "SALE", path: promotion.url, isSale: true }] : []),
    { name: "COLLECTIONS", path: "/shop" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start">
      <div className="w-full max-w-sm bg-gc-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200">
        
        {/* Top Bar */}
        <div>
          <div className="p-4 border-b border-gc-border flex items-center justify-between">
            <Link href="/" onClick={onClose} className="w-[160px] h-[44px] flex items-center overflow-visible">
              <img
                src="/brand/gulabchand-logo-transparent.svg"
                alt="Gulabchand Jaipur"
                className="max-h-[38px] w-auto object-contain block"
              />
            </Link>
            <button onClick={onClose} className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-gc-ink" aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Primary Nav Items */}
          <nav className="p-4 space-y-1">
            {categories.map((cat) => (
              <div key={cat.name} className="border-b border-gc-border/60 py-1">
                {cat.sub ? (
                  <div>
                    <button
                      onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                      className="w-full py-3 min-h-[44px] flex items-center justify-between font-sans text-sm font-bold text-gc-ink tracking-wider text-left"
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className={`w-4 h-4 text-gc-muted transition-transform ${activeCategory === cat.name ? "rotate-90" : ""}`} />
                    </button>
                    {activeCategory === cat.name && (
                      <div className="pl-4 pb-2 space-y-2 border-l border-gc-sand my-1">
                        <Link
                          href={cat.path}
                          onClick={onClose}
                          className="block py-1.5 text-xs font-sans font-bold text-gc-green uppercase tracking-wider"
                        >
                          View All {cat.name} →
                        </Link>
                        {cat.sub.map((s) => (
                          <Link
                            key={s}
                            href={`/shop?cat=${encodeURIComponent(s)}`}
                            onClick={onClose}
                            className="block py-1.5 text-xs font-sans text-gc-muted hover:text-gc-ink"
                          >
                            {s}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={cat.path}
                    onClick={onClose}
                    className={`block py-3 min-h-[44px] font-sans text-sm tracking-wider ${
                      cat.isSale
                        ? "text-gc-rose font-bold"
                        : "font-bold text-gc-ink"
                    }`}
                  >
                    {cat.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Secondary Navigation */}
        <div className="p-4 bg-gc-cotton/50 border-t border-gc-border space-y-3">
          <Link href="/story" onClick={onClose} className="flex items-center gap-3 py-2 min-h-[44px] text-xs font-sans font-medium text-gc-ink">
            <Compass className="w-4 h-4 text-gc-green" />
            <span>Our Story & Craft</span>
          </Link>

          <Link href="/stores" onClick={onClose} className="flex items-center gap-3 py-2 min-h-[44px] text-xs font-sans font-medium text-gc-ink">
            <MapPin className="w-4 h-4 text-gc-green" />
            <span>Visit Jaipur Stores</span>
          </Link>

          <Link href="/contact" onClick={onClose} className="flex items-center gap-3 py-2 min-h-[44px] text-xs font-sans font-medium text-gc-ink">
            <PhoneCall className="w-4 h-4 text-gc-green" />
            <span>Customer Support (11 AM – 6 PM)</span>
          </Link>

          <div className="pt-2 border-t border-gc-border flex items-center justify-between text-xs font-sans text-gc-muted">
            <Link href="/account" onClick={onClose} className="flex items-center gap-1.5 hover:text-gc-ink">
              <User className="w-4 h-4" />
              <span>Account</span>
            </Link>
            <Link href="/wishlist" onClick={onClose} className="flex items-center gap-1.5 hover:text-gc-ink">
              <Heart className="w-4 h-4" />
              <span>Wishlist ({wishlist.length})</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
