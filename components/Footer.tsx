"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gc-dark text-gc-ivory select-none border-t border-white/10 px-5 sm:px-8 lg:px-[56px] pt-[48px] sm:pt-[72px] pb-[28px] sm:pb-[32px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* ROW 1: Brand Information & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-4">
            {/* Official Transparent Brand Logo */}
            <Link href="/" className="inline-block group">
              <img
                src="/brand/gulabchand-logo-transparent.svg"
                alt="Gulabchand"
                className="block h-auto w-auto max-h-[52px] object-contain"
              />
            </Link>
            
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-sans font-bold tracking-[0.18em] text-gc-sand uppercase">
                GULABCHAND PRINTS
              </h4>
              <p className="font-serif text-base sm:text-lg text-gc-ivory/90 font-light leading-relaxed max-w-sm">
                Contemporary clothing rooted in Jaipur. Crafted through generations.
              </p>
              <p className="text-xs font-sans text-gc-ivory/60 max-w-sm leading-relaxed font-light pt-1">
                Hand block printed apparel, unstitched suit sets, and living textiles for lived-in spaces.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs font-sans">
            
            {/* SHOP */}
            <div className="space-y-3">
              <h5 className="font-bold text-gc-sand tracking-[0.15em] uppercase">SHOP</h5>
              <ul className="space-y-2 text-gc-ivory/75">
                <li><Link href="/women" className="hover:text-gc-ivory transition-colors">Women's Edit</Link></li>
                <li><Link href="/men" className="hover:text-gc-ivory transition-colors">Men's Apparel</Link></li>
                <li><Link href="/unstitched" className="hover:text-gc-ivory transition-colors">Unstitched Suits</Link></li>
                <li><Link href="/home-decor" className="hover:text-gc-ivory transition-colors">Home Textiles</Link></li>
                <li><Link href="/shop?cat=New Arrivals" className="hover:text-gc-ivory transition-colors">New Arrivals</Link></li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="space-y-3">
              <h5 className="font-bold text-gc-sand tracking-[0.15em] uppercase">ABOUT</h5>
              <ul className="space-y-2 text-gc-ivory/75">
                <li><Link href="/story" className="hover:text-gc-ivory transition-colors">Our Story</Link></li>
                <li><Link href="/craft" className="hover:text-gc-ivory transition-colors">Heritage Craft</Link></li>
                <li><Link href="/stores" className="hover:text-gc-ivory transition-colors">Jaipur Stores</Link></li>
                <li><Link href="/contact" className="hover:text-gc-ivory transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* HELP & SUPPORT */}
            <div className="space-y-3">
              <h5 className="font-bold text-gc-sand tracking-[0.15em] uppercase">HELP & SUPPORT</h5>
              <ul className="space-y-2 text-gc-ivory/75">
                <li><Link href="/shipping" className="hover:text-gc-ivory transition-colors">Shipping & Delivery</Link></li>
                <li><Link href="/returns" className="hover:text-gc-ivory transition-colors">Returns & Exchanges</Link></li>
                <li><Link href="/size-guide" className="hover:text-gc-ivory transition-colors">Size Guide</Link></li>
                <li><Link href="/contact" className="hover:text-gc-ivory transition-colors">Customer Support</Link></li>
              </ul>
            </div>

            {/* JAIPUR ATELIER */}
            <div className="space-y-3">
              <h5 className="font-bold text-gc-sand tracking-[0.15em] uppercase">JAIPUR ATELIER</h5>
              <p className="text-gc-ivory/75 text-xs leading-relaxed">
                Citypulse & Badi Chopad<br />
                Jaipur, Rajasthan
              </p>
              <div className="text-[11px] text-gc-sand font-mono pt-1">
                Support: 11 AM – 6 PM
              </div>
              <Link
                href="/stores"
                className="inline-block pt-1 text-[11px] font-sans font-bold tracking-wider text-gc-ivory hover:text-gc-sand transition-colors uppercase border-b border-gc-sand/40 pb-0.5"
              >
                Store Details →
              </Link>
            </div>

          </div>

        </div>

        {/* ROW 2: Giant GULABCHAND Watermark with Safe Horizontal Padding */}
        <div className="w-full overflow-hidden px-8 lg:px-16 my-3 py-3 border-t border-b border-white/10 flex justify-center items-center">
          <div className="font-serif text-gc-ivory/10 whitespace-nowrap text-center leading-none tracking-[0.04em] text-[clamp(44px,10vw,140px)] select-none pointer-events-none w-full">
            GULABCHAND
          </div>
        </div>

        {/* ROW 3: Copyright & Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-gc-ivory/50">
          <p>© {new Date().getFullYear()} Gulabchand Prints Pvt Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gc-ivory transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gc-ivory transition-colors">Terms of Service</Link>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gc-sand hover:text-gc-ivory transition-colors uppercase tracking-wider font-bold ml-4"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
