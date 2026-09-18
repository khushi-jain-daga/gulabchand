"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { promotion } from "@/data/promotion";
import { AnnouncementBar } from "./AnnouncementBar";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen, wishlist, setIsSearchOpen, isSearchOpen, isCartOpen } = useCart();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [headerFocused, setHeaderFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY >= 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOverlayRoute = pathname === "/" || pathname === "/story";
  const isTransparent = isOverlayRoute && !scrolled && !mobileNavOpen && !isSearchOpen && !isCartOpen && activeTab === null;

  const navItems = [
    { name: "NEW IN", path: "/shop?cat=New Arrivals" },
    { name: "WOMEN", path: "/women", mega: true },
    { name: "MEN", path: "/men", mega: true },
    { name: "KIDS", path: "/shop?cat=Kids" },
    { name: "UNSTITCHED", path: "/unstitched", mega: true },
    { name: "HOME", path: "/home-decor", mega: true },
    ...(promotion.active ? [{ name: "SALE", path: promotion.url, mega: false, isSale: true }] : []),
    { name: "COLLECTIONS", path: "/shop" },
  ];

  return (
    <header
      onFocus={() => setHeaderFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setHeaderFocused(false);
        }
      }}
      className="fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300"
    >
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <div
        style={
          isTransparent
            ? {
                background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0) 100%)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                borderBottom: "none",
              }
            : {
                background: "#FCFBF8",
                borderBottom: "1px solid #DDD5C8",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }
        }
        className={`w-full py-3.5 transition-all duration-300 ${
          isTransparent ? "text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]" : "text-[#20201D]"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-8 min-h-[48px]">
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className={`md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
              isTransparent ? "text-white hover:text-[#EAD8B8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#20201D] hover:text-gc-green"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Official Transparent Brand Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center w-[170px] h-[48px] md:w-[210px] md:h-[56px]"
            style={
              isTransparent
                ? { filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.45))" }
                : undefined
            }
          >
            <img
              src="/brand/gulabchand-logo-transparent.svg"
              alt="Gulabchand"
              className="block h-auto w-auto max-h-[42px] md:max-h-[48px] object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-[clamp(12px,1.8vw,28px)] whitespace-nowrap min-w-0 flex-1 justify-center"
            onMouseLeave={() => setActiveTab(null)}
          >
            {navItems.map((item) => (
              <div key={item.name} onMouseEnter={() => item.mega && setActiveTab(item.name)}>
                <Link
                  href={item.path}
                  className={`text-xs font-sans tracking-[0.12em] uppercase py-2 transition-colors relative font-bold ${
                    item.isSale
                      ? "text-gc-rose hover:text-gc-rose/80"
                      : pathname === item.path
                      ? isTransparent ? "text-white" : "text-gc-green"
                      : isTransparent ? "text-white hover:text-[#EAD8B8]" : "text-[#20201D] hover:text-gc-green"
                  }`}
                >
                  {item.name}
                  {pathname === item.path && !item.isSale && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isTransparent ? "bg-white" : "bg-[#365846]"}`} />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Icon Utility Controls */}
          <div className="flex-shrink-0 flex items-center space-x-1 sm:space-x-1.5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 min-w-[40px] min-h-[40px] rounded-full transition-colors flex items-center justify-center ${
                isTransparent ? "text-white hover:text-[#EAD8B8] hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#20201D] hover:text-gc-green hover:bg-gc-sand/60"
              }`}
              aria-label="Search"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Button */}
            <Link
              href="/account"
              className={`hidden sm:flex p-2.5 min-w-[40px] min-h-[40px] rounded-full transition-colors items-center justify-center ${
                isTransparent ? "text-white hover:text-[#EAD8B8] hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#20201D] hover:text-gc-green hover:bg-gc-sand/60"
              }`}
              aria-label="Account"
              title="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              className={`relative p-2.5 min-w-[40px] min-h-[40px] rounded-full transition-colors flex items-center justify-center ${
                isTransparent ? "text-white hover:text-[#EAD8B8] hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#20201D] hover:text-gc-green hover:bg-gc-sand/60"
              }`}
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-gc-rose text-gc-white text-[9px] font-sans font-bold flex items-center justify-center absolute top-1 right-1 shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 min-w-[40px] min-h-[40px] rounded-full transition-colors flex items-center justify-center ${
                isTransparent ? "text-white hover:text-[#EAD8B8] hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#20201D] hover:text-gc-green hover:bg-gc-sand/60"
              }`}
              aria-label={`Shopping Bag with ${totalItems} items`}
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-gc-green text-gc-white text-[10px] font-sans font-bold flex items-center justify-center absolute top-0.5 right-0.5 shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu activeTab={activeTab} onClose={() => setActiveTab(null)} />
      </div>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
};
