"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { SizeGuideModal } from "@/components/SizeGuideModal";
import { promotion } from "@/data/promotion";
import {
  Heart,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Ruler,
  ShieldCheck,
  Truck,
  RotateCcw,
  Tag,
  Copy,
  Star,
  MapPin,
  Sparkles,
  Lock,
  RefreshCw
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackPairs = relatedProducts.length < 4 ? PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4) : relatedProducts;

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "Standard");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  // Gallery state
  const mediaList = [product.image, product.alternateImage].filter(Boolean) as string[];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Delivery Pincode state
  const [pincode, setPincode] = useState("");
  const [pinStatus, setPinStatus] = useState<"idle" | "checking" | "success" | "invalid">("idle");

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.trim().length < 6) {
      setPinStatus("invalid");
      return;
    }
    setPinStatus("checking");
    setTimeout(() => {
      setPinStatus("success");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-gc-ink font-sans pt-28 md:pt-36 pb-24 select-none overflow-x-hidden">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gc-white border-y border-gc-border py-3">
        <div className="gc-container flex items-center gap-2 text-xs font-sans text-gc-muted overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gc-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gc-ink transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?cat=${encodeURIComponent(product.category)}`} className="hover:text-gc-ink transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gc-ink font-semibold line-clamp-1">{product.displayTitle || product.name}</span>
        </div>
      </div>

      <div className="gc-container py-8 sm:py-12">
        
        {/* Main PDP Grid: Left Media Gallery & Right Sticky Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Premium Fashion E-Commerce Product Media Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Large Image Display */}
            <div className="aspect-[3/4] sm:aspect-[4/5] max-h-[580px] sm:max-h-[640px] bg-[#F8F6F0] rounded-[4px] border border-gc-border/80 overflow-hidden relative group shadow-xs p-1.5 sm:p-2.5 flex items-center justify-center">
              <ProductImage
                src={mediaList[activeImageIdx] || product.image}
                alt={product.name}
                category={product.category}
                technique={product.craftTechnique}
                className={`w-full h-full ${
                  activeImageIdx === 0
                    ? "object-contain object-center"
                    : "object-cover object-center"
                } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
              />

              {/* Craft Tag Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-[2px] bg-gc-ink/80 backdrop-blur-md text-gc-ivory font-sans font-bold text-[10px] uppercase tracking-[0.18em]">
                  {product.craftTechnique}
                </span>
                <span className="px-3 py-1 rounded-[2px] bg-gc-white/90 backdrop-blur-md text-gc-ink font-sans font-bold text-[10px] uppercase tracking-[0.18em] border border-gc-border">
                  {product.fabric}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Bar / Editorial 2-Grid Below */}
            {mediaList.length > 1 ? (
              <div className="grid grid-cols-4 gap-3 pt-1">
                {mediaList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`aspect-[4/5] rounded-[3px] overflow-hidden border-2 transition-all relative bg-[#F8F6F0] ${
                      activeImageIdx === idx
                        ? "border-gc-ink ring-2 ring-gc-ink/20 opacity-100"
                        : "border-gc-border opacity-70 hover:opacity-100 hover:border-gc-ink/50"
                    }`}
                  >
                    <ProductImage
                      src={imgUrl}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      category={product.category}
                      className={`w-full h-full ${idx === 0 ? "object-contain p-1" : "object-cover"}`}
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="aspect-[4/5] rounded-[3px] bg-[#F8F6F0] border border-gc-border overflow-hidden relative">
                  <ProductImage
                    src={product.image}
                    alt={`${product.name} View 1`}
                    category={product.category}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                {product.alternateImage && (
                  <div className="aspect-[4/5] rounded-[3px] bg-[#F8F6F0] border border-gc-border overflow-hidden relative">
                    <ProductImage
                      src={product.alternateImage}
                      alt={`${product.name} View 2`}
                      category={product.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Premium Sticky Product Purchase Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 bg-gc-white p-6 sm:p-7 rounded-[4px] border border-gc-border/80 shadow-xs space-y-6">
            
            {/* Brand & Title Header */}
            <div className="space-y-2 border-b border-gc-border/80 pb-5">
              <span className="text-[11px] font-sans font-bold tracking-[0.22em] text-gc-green uppercase block">
                GULABCHAND PRINTS
              </span>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-gc-ink leading-tight">
                {product.displayTitle || product.name}
              </h1>

              {product.subtitle && (
                <p className="text-xs font-sans text-gc-muted font-medium">
                  {product.subtitle}
                </p>
              )}

              {/* Rating Row Placeholder */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-sans font-bold text-gc-ink">4.8</span>
                <span className="text-xs font-sans text-gc-muted">|</span>
                <span className="text-xs font-sans text-gc-muted underline underline-offset-2">24 reviews</span>
              </div>

              {/* Price Row */}
              <div className="flex flex-wrap items-baseline gap-3 pt-3">
                <span className="font-sans font-bold text-2xl sm:text-3xl text-gc-ink">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="font-sans text-base text-gc-muted line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans font-bold text-xs text-gc-rose bg-gc-rose/10 px-2 py-0.5 rounded-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                    <span className="font-sans text-xs font-semibold text-gc-green bg-gc-sand/60 px-2 py-0.5 rounded-xs">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                    </span>
                  </>
                )}
              </div>

              {/* Tax & Shipping Note */}
              <p className="text-[11px] font-sans text-gc-muted pt-1">
                Inclusive of taxes. Complimentary prepaid shipping in India.
              </p>

              {/* Promotional Code Banner */}
              {promotion.active && promotion.code && (
                <div className="mt-3 bg-[#F8F5EE] border border-gc-border p-3 rounded-[3px] flex items-center justify-between gap-3 text-xs font-sans">
                  <div className="flex items-center gap-2.5">
                    <Tag className="w-4 h-4 text-gc-rose shrink-0" />
                    <div>
                      <span className="font-bold uppercase text-gc-ink block leading-none">{promotion.name || "FESTIVE OFFER"}</span>
                      <span className="text-[11px] text-gc-muted pt-0.5 block">
                        Use code <strong className="text-gc-ink font-mono">{promotion.code}</strong> at checkout
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(promotion.code);
                      setCopiedCode(true);
                      setTimeout(() => setCopiedCode(false), 2000);
                    }}
                    className="px-3 py-1.5 bg-gc-ink text-gc-white font-bold text-[10px] uppercase tracking-wider rounded-xs hover:bg-gc-green transition-colors flex items-center gap-1 shrink-0"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-gc-sand" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-sans font-bold text-gc-ink uppercase tracking-wider">
                    SELECT SIZE
                  </label>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-xs font-sans font-bold text-gc-green hover:underline flex items-center gap-1"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>SIZE GUIDE</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[46px] h-[44px] px-4 rounded-[3px] text-xs font-sans font-bold transition-all ${
                        selectedSize === sz
                          ? "bg-gc-ink text-gc-white border-2 border-gc-ink shadow-xs"
                          : "bg-gc-white border border-gc-border text-gc-ink hover:border-gc-ink"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Large Add to Bag Button */}
            <div className="space-y-3 pt-1">
              <div className="flex gap-3">
                <div className="flex items-center border border-gc-border rounded-[3px] bg-gc-white min-h-[48px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gc-ink hover:bg-gc-cotton transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-sm font-sans font-bold text-gc-ink min-w-[28px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gc-ink hover:bg-gc-cotton transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 min-h-[48px] bg-gc-ink hover:bg-gc-green text-gc-white font-sans font-bold text-xs uppercase tracking-[0.16em] rounded-[3px] transition-all flex items-center justify-center gap-2 shadow-sm ${
                    added ? "bg-gc-green text-gc-white" : ""
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-gc-sand" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <span>ADD TO BAG · ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`min-w-[48px] min-h-[48px] p-3 rounded-[3px] border transition-colors flex items-center justify-center ${
                    isWishlisted
                      ? "bg-gc-rose border-gc-rose text-gc-white"
                      : "bg-gc-white border-gc-border text-gc-ink hover:border-gc-ink"
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* Delivery Availability Checker Block */}
            <div className="p-4 rounded-[3px] bg-[#F9F7F2] border border-gc-border space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-gc-ink uppercase tracking-wider">
                <Truck className="w-4 h-4 text-gc-green" />
                <span>Check Delivery Availability</span>
              </div>
              
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value.replace(/\D/g, ""));
                    if (pinStatus !== "idle") setPinStatus("idle");
                  }}
                  placeholder="Enter PIN code"
                  className="flex-1 bg-gc-white border border-gc-border rounded-[2px] px-3 py-2 text-xs font-sans text-gc-ink placeholder:text-gc-muted focus:outline-none focus:border-gc-ink"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gc-ink text-gc-white font-sans font-bold text-xs uppercase tracking-widest rounded-[2px] hover:bg-gc-green transition-colors"
                >
                  CHECK
                </button>
              </form>

              {pinStatus === "checking" && (
                <p className="text-[11px] font-sans text-gc-muted">Checking PIN code availability...</p>
              )}
              {pinStatus === "success" && (
                <p className="text-[11px] font-sans font-semibold text-gc-green flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Delivery available to {pincode}. Ships within 3–5 business days.</span>
                </p>
              )}
              {pinStatus === "invalid" && (
                <p className="text-[11px] font-sans font-semibold text-gc-rose">
                  Please enter a valid 6-digit Indian PIN code.
                </p>
              )}
            </div>

            {/* Trust Row */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-gc-border text-[11px] font-sans text-gc-muted text-center">
              <div className="flex flex-col items-center gap-1 p-1">
                <RotateCcw className="w-4 h-4 text-gc-green" />
                <span className="font-medium">Easy 7-Day Exchange</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-1 border-x border-gc-border">
                <Lock className="w-4 h-4 text-gc-green" />
                <span className="font-medium">Secure Checkout</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-1">
                <Truck className="w-4 h-4 text-gc-green" />
                <span className="font-medium">Prepaid Shipping</span>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-2 text-xs font-sans">
              <div className="border border-gc-border rounded-[3px] bg-gc-white">
                <button
                  onClick={() => toggleAccordion("details")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>PRODUCT DETAILS</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "details" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "details" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p className="leading-relaxed font-light text-gc-ink/90">{product.description}</p>
                    {product.garmentLength && <p><strong>Garment Length:</strong> {product.garmentLength}</p>}
                    {product.sku && <p><strong>SKU:</strong> {product.sku}</p>}
                    <p><strong>Occasion:</strong> Everyday Casual, Workwear, Festive Gathering</p>
                  </div>
                )}
              </div>

              <div className="border border-gc-border rounded-[3px] bg-gc-white">
                <button
                  onClick={() => toggleAccordion("craft")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>FABRIC & CARE</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "craft" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "craft" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p><strong>Fabric:</strong> {product.fabric} ({product.material})</p>
                    <p><strong>Print Craft:</strong> {product.craftTechnique}</p>
                    <p><strong>Care Instructions:</strong> {product.careInstructions}</p>
                    <div className="bg-[#F8F6F0] p-3 rounded-[2px] text-[11px] leading-relaxed text-gc-ink mt-2 border border-gc-border">
                      <strong>Artisanal Note:</strong> Hand block printed textiles carry natural variations in motif alignment and dye density. These are marks of authentic handcrafting.
                    </div>
                  </div>
                )}
              </div>

              <div className="border border-gc-border rounded-[3px] bg-gc-white">
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>SHIPPING & RETURNS</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "shipping" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "shipping" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p><strong>Prepaid Domestic Orders:</strong> Free delivery within 3–7 business days across India.</p>
                    <p><strong>Cash on Delivery:</strong> Available for select pincodes with ₹99 COD charge.</p>
                    <p><strong>Returns & Exchange:</strong> Easy 7-day hassle-free exchange policy.</p>
                  </div>
                )}
              </div>

              <div className="border border-gc-border rounded-[3px] bg-gc-white">
                <button
                  onClick={() => toggleAccordion("sizefit")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>SIZE & FIT</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "sizefit" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "sizefit" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p>Standard relaxed Indian sizing. For a regular fit, choose your standard size.</p>
                    <p>If you prefer a looser silhouette, option to size up by one standard size.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* 3. ADDITIONAL PREMIUM SECTIONS BELOW PDP */}

        {/* SECTION A: STYLE NOTES */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 bg-gc-white border border-gc-border rounded-[4px] shadow-xs text-center max-w-4xl mx-auto space-y-3">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-gc-green uppercase block">
            EDITORIAL INSIGHT
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-gc-ink uppercase tracking-tight">
            STYLE NOTES
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-gc-muted font-light max-w-xl mx-auto leading-relaxed">
            A printed everyday piece designed for comfort, colour, and easy styling.
          </p>
        </div>

        {/* SECTION B: PAIRS WELL WITH */}
        {fallbackPairs.length > 0 && (
          <div className="mt-16 sm:mt-24 space-y-8 border-t border-gc-border pt-14">
            <div className="flex items-end justify-between border-b border-gc-border pb-3">
              <div>
                <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-[0.2em] block">
                  RECOMMENDED COMBINATIONS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-gc-ink tracking-tight pt-0.5">
                  PAIRS WELL WITH
                </h3>
              </div>
              <Link
                href="/shop"
                className="text-xs font-sans font-bold text-gc-ink uppercase tracking-widest hover:text-gc-green transition-colors"
              >
                VIEW COLLECTION →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {fallbackPairs.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* SECTION C: WHY GULABCHAND */}
        <div className="mt-16 sm:mt-24 bg-[#16251E] text-gc-ivory rounded-[4px] p-8 sm:p-12 lg:p-16 border border-gc-border/30 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-sans font-bold tracking-[0.22em] text-[#D8C9AF] uppercase block">
              GULABCHAND HERITAGE
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              WHY GULABCHAND
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            <div className="p-6 rounded-[2px] bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                01 · PATTERN
              </span>
              <h4 className="font-serif font-bold text-lg text-white uppercase">
                JAIPUR PRINT LANGUAGE
              </h4>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Motifs drawn with proportion, repeating bootis, and Jaipur's distinctive textile vocabulary.
              </p>
            </div>

            <div className="p-6 rounded-[2px] bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                02 · WEAVE
              </span>
              <h4 className="font-serif font-bold text-lg text-white uppercase">
                BREATHABLE EVERYDAY FABRICS
              </h4>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Pure cottons, airy mulmuls, and light weaves chosen for comfort throughout Indian seasons.
              </p>
            </div>

            <div className="p-6 rounded-[2px] bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#D8C9AF] uppercase tracking-widest block">
                03 · FIT
              </span>
              <h4 className="font-serif font-bold text-lg text-white uppercase">
                MADE FOR INDIAN WARDROBES
              </h4>
              <p className="text-xs font-sans text-gc-ivory/70 font-light leading-relaxed">
                Graceful cuts, versatile sets, and relaxed silhouettes crafted for lived-in daily elegance.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Sticky Bottom Add To Bag Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gc-white/95 backdrop-blur-md border-t border-gc-border p-3 flex items-center justify-between gap-3 shadow-2xl lg:hidden">
        <div className="min-w-0 flex-1">
          <span className="text-xs font-serif font-bold text-gc-ink truncate block">
            {product.displayTitle || product.name}
          </span>
          <span className="text-xs font-sans font-bold text-gc-ink">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className="px-6 py-3 bg-gc-ink hover:bg-gc-green text-gc-white font-sans font-bold text-xs uppercase tracking-wider rounded-[2px] shrink-0 transition-colors"
        >
          {added ? "ADDED" : "ADD TO BAG"}
        </button>
      </div>

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}

