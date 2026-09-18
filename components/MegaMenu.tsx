"use client";

import React from "react";
import Link from "next/link";
import { ProductImage } from "./ProductImage";

interface MegaMenuProps {
  activeTab: string | null;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeTab, onClose }) => {
  if (!activeTab) return null;

  const renderContent = () => {
    if (activeTab === "WOMEN") {
      return (
        <div className="gc-container grid grid-cols-5 gap-8 items-start">
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              SHOP BY CATEGORY
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?cat=New Arrivals" onClick={onClose} className="hover:text-gc-ink transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?cat=Kurtis" onClick={onClose} className="hover:text-gc-ink transition-colors">Kurtis</Link></li>
              <li><Link href="/shop?cat=Tops" onClick={onClose} className="hover:text-gc-ink transition-colors">Tops</Link></li>
              <li><Link href="/shop?cat=Dresses" onClick={onClose} className="hover:text-gc-ink transition-colors">Dresses</Link></li>
              <li><Link href="/shop?cat=Suit Sets" onClick={onClose} className="hover:text-gc-ink transition-colors">Suit Sets</Link></li>
              <li><Link href="/shop?cat=Anarkalis" onClick={onClose} className="hover:text-gc-ink transition-colors">Anarkalis</Link></li>
              <li><Link href="/shop?cat=Sarees" onClick={onClose} className="hover:text-gc-ink transition-colors">Sarees</Link></li>
              <li><Link href="/shop?cat=Dupattas" onClick={onClose} className="hover:text-gc-ink transition-colors">Dupattas</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              SHOP BY OCCASION
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?occ=Everyday" onClick={onClose} className="hover:text-gc-ink transition-colors">Everyday Wear</Link></li>
              <li><Link href="/shop?occ=Work" onClick={onClose} className="hover:text-gc-ink transition-colors">Work & Office</Link></li>
              <li><Link href="/shop?occ=Festive" onClick={onClose} className="hover:text-gc-ink transition-colors">Festive Edit</Link></li>
              <li><Link href="/shop?occ=Celebration" onClick={onClose} className="hover:text-gc-ink transition-colors">Celebration</Link></li>
              <li><Link href="/shop?occ=Vacation" onClick={onClose} className="hover:text-gc-ink transition-colors">Summer Vacation</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              SHOP BY FABRIC
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?fabric=Cotton" onClick={onClose} className="hover:text-gc-ink transition-colors">Pure Cotton</Link></li>
              <li><Link href="/shop?fabric=Mulmul" onClick={onClose} className="hover:text-gc-ink transition-colors">Superfine Mulmul</Link></li>
              <li><Link href="/shop?fabric=Chanderi" onClick={onClose} className="hover:text-gc-ink transition-colors">Chanderi Silk</Link></li>
              <li><Link href="/shop?fabric=Kota Doria" onClick={onClose} className="hover:text-gc-ink transition-colors">Kota Doria</Link></li>
              <li><Link href="/shop?fabric=Modal" onClick={onClose} className="hover:text-gc-ink transition-colors">Modal Cotton</Link></li>
              <li><Link href="/shop?fabric=Chiffon" onClick={onClose} className="hover:text-gc-ink transition-colors">Chiffon</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              SHOP BY CRAFT
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?craft=Hand Block Print" onClick={onClose} className="hover:text-gc-ink transition-colors">Hand Block Print</Link></li>
              <li><Link href="/shop?craft=Butti Stamp" onClick={onClose} className="hover:text-gc-ink transition-colors">Jaipur Butti</Link></li>
              <li><Link href="/shop?craft=Bagru Natural Dye" onClick={onClose} className="hover:text-gc-ink transition-colors">Bagru Print</Link></li>
              <li><Link href="/shop?craft=Dabu Mud Resist" onClick={onClose} className="hover:text-gc-ink transition-colors">Dabu Resist</Link></li>
              <li><Link href="/shop?craft=Sanganeri Fine Block" onClick={onClose} className="hover:text-gc-ink transition-colors">Sanganeri Motif</Link></li>
            </ul>
          </div>

          {/* Column 5: Editorial Campaign Card */}
          <div className="space-y-2">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gc-cotton relative group">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_3655.jpg"
                alt="The Women's Collection"
                category="Women"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-serif text-sm font-semibold text-gc-ink">The Women's Edit</p>
            <Link
              href="/women"
              onClick={onClose}
              className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-widest hover:underline block"
            >
              EXPLORE WOMEN →
            </Link>
          </div>
        </div>
      );
    }

    if (activeTab === "MEN") {
      return (
        <div className="gc-container grid grid-cols-4 gap-8 items-start">
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              MEN'S CATEGORIES
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?cat=Men Shirts" onClick={onClose} className="hover:text-gc-ink">Full Sleeve Shirts</Link></li>
              <li><Link href="/shop?cat=Men Shirts" onClick={onClose} className="hover:text-gc-ink">Half Sleeve Shirts</Link></li>
              <li><Link href="/shop?cat=Men Kurtas" onClick={onClose} className="hover:text-gc-ink">Men Kurtas</Link></li>
              <li><Link href="/shop?cat=Men Jackets" onClick={onClose} className="hover:text-gc-ink">Printed Jackets</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              FABRIC & DYES
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              <li><Link href="/shop?craft=Bagru Natural Dye" onClick={onClose} className="hover:text-gc-ink">Bagru Natural Dyes</Link></li>
              <li><Link href="/shop?fabric=Cotton" onClick={onClose} className="hover:text-gc-ink">Cambric Cotton</Link></li>
              <li><Link href="/shop?craft=Indigo" onClick={onClose} className="hover:text-gc-ink">Fermented Indigo</Link></li>
            </ul>
          </div>

          <div className="col-span-2 space-y-2">
            <div className="aspect-[16/9] rounded-sm overflow-hidden bg-gc-cotton relative group">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_4640.jpg"
                alt="Men's Collection"
                category="Men Kurtas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-serif text-sm font-semibold text-gc-ink">Modern Jaipur Menswear</p>
            <Link
              href="/men"
              onClick={onClose}
              className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-widest hover:underline block"
            >
              EXPLORE MEN →
            </Link>
          </div>
        </div>
      );
    }

    if (activeTab === "HOME" || activeTab === "UNSTITCHED") {
      return (
        <div className="gc-container grid grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-gc-ink tracking-[0.15em] uppercase border-b border-gc-border pb-1.5">
              COLLECTION HIGHLIGHTS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gc-muted">
              {activeTab === "HOME" ? (
                <>
                  <li><Link href="/shop?cat=Home Decor" onClick={onClose} className="hover:text-gc-ink">King Bedsheets (108 x 108)</Link></li>
                  <li><Link href="/shop?cat=Home Decor" onClick={onClose} className="hover:text-gc-ink">Reversible Dohars</Link></li>
                  <li><Link href="/shop?cat=Home Decor" onClick={onClose} className="hover:text-gc-ink">Hand Quilted Blankets</Link></li>
                  <li><Link href="/shop?cat=Home Decor" onClick={onClose} className="hover:text-gc-ink">Cushion Cover Sets</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/shop?cat=Unstitched Suits" onClick={onClose} className="hover:text-gc-ink">Cotton Unstitched Suits</Link></li>
                  <li><Link href="/shop?cat=Unstitched Suits" onClick={onClose} className="hover:text-gc-ink">Chanderi Silk Material</Link></li>
                  <li><Link href="/shop?cat=Unstitched Suits" onClick={onClose} className="hover:text-gc-ink">Kota Doria Sets</Link></li>
                  <li><Link href="/shop?cat=Unstitched Suits" onClick={onClose} className="hover:text-gc-ink">Chiffon Dupatta Suits</Link></li>
                </>
              )}
            </ul>
          </div>

          <div className="col-span-2 space-y-2">
            <div className="aspect-[16/9] rounded-sm overflow-hidden bg-gc-cotton relative group">
              <ProductImage
                src={activeTab === "HOME" ? "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/SINGLE-QUILT-1037-A.jpg" : "https://cdn.shopify.com/s/files/1/0687/1616/7406/files/PUN_2146.jpg"}
                alt={activeTab}
                category={activeTab}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-serif text-sm font-semibold text-gc-ink">
              {activeTab === "HOME" ? "Jaipur Haveli Living Textiles" : "Crafted Unstitched Materials"}
            </p>
            <Link
              href={activeTab === "HOME" ? "/home-decor" : "/unstitched"}
              onClick={onClose}
              className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-widest hover:underline block"
            >
              EXPLORE {activeTab} →
            </Link>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Page Scrim Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-full bg-black/12 backdrop-blur-xs z-30 transition-opacity duration-200"
      />

      {/* Animated Mega Menu Dropdown */}
      <div
        onMouseLeave={onClose}
        className="absolute top-full left-0 right-0 bg-gc-white border-b border-gc-border shadow-xl z-40 py-8 px-10 animate-in fade-in slide-in-from-top-1 duration-200"
      >
        {renderContent()}
      </div>
    </>
  );
};
