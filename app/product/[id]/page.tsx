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
  Tag,
  Copy
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "Standard");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gc-white border-b border-gc-border py-3.5">
        <div className="gc-container flex items-center gap-2 text-xs font-sans text-gc-muted">
          <Link href="/" className="hover:text-gc-ink">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gc-ink">Shop</Link>
          <span>/</span>
          <Link href={`/shop?cat=${encodeURIComponent(product.category)}`} className="hover:text-gc-ink">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gc-ink font-semibold line-clamp-1">{product.displayTitle || product.name}</span>
        </div>
      </div>

      <div className="gc-container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Large 2-Column Gallery on Desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-gc-cotton rounded-sm overflow-hidden relative">
              <ProductImage
                src={product.image}
                alt={product.name}
                category={product.category}
                technique={product.craftTechnique}
                className="w-full h-full object-cover"
              />
            </div>
            {product.alternateImage && (
              <div className="aspect-[4/5] bg-gc-cotton rounded-sm overflow-hidden relative">
                <ProductImage
                  src={product.alternateImage}
                  alt={`${product.name} Alternate View`}
                  category={product.category}
                  technique={product.craftTechnique}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column: Calm Sticky Purchasing Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Title & Hierarchy */}
            <div className="space-y-2 border-b border-gc-border pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-sm bg-gc-green text-gc-white font-sans font-bold text-[9px] uppercase tracking-wider">
                  {product.craftTechnique}
                </span>
                <span className="text-xs font-sans font-semibold text-gc-muted uppercase">
                  {product.fabric} Weave
                </span>
              </div>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-gc-ink leading-tight">
                {product.displayTitle || product.name}
              </h1>

              {product.subtitle && (
                <p className="text-xs font-sans text-gc-muted font-medium">
                  {product.subtitle}
                </p>
              )}

              {/* Price & Savings */}
              <div className="flex flex-wrap items-baseline gap-3 pt-2">
                <span className="font-sans font-bold text-2xl text-gc-ink">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="font-sans text-sm text-gc-muted line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans font-bold text-xs text-gc-rose">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                    <span className="font-sans text-xs font-semibold text-gc-green bg-gc-sand/60 px-2 py-0.5 rounded-xs">
                      SAVE ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                    </span>
                  </>
                )}
              </div>

              {/* Promotional Offer Row (Rendered if promotion.active and promotion.code exist) */}
              {promotion.active && promotion.code && (
                <div className="mt-3 bg-gc-sand/40 border border-gc-border p-3 rounded-sm flex items-center justify-between gap-3 text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gc-rose shrink-0" />
                    <div>
                      <span className="font-bold uppercase text-gc-ink block leading-none">{promotion.name || "FESTIVE OFFER"}</span>
                      <span className="text-[11px] text-gc-muted">
                        Use code <strong className="text-gc-ink font-mono">{promotion.code}</strong> for additional savings
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
                        <Check className="w-3 h-3" />
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

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[44px] min-h-[44px] px-3.5 py-2 rounded-sm text-xs font-sans font-bold transition-all ${
                        selectedSize === sz
                          ? "bg-gc-ink text-gc-white"
                          : "bg-gc-white border border-gc-border text-gc-ink hover:border-gc-ink"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Deep Green/Charcoal CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="flex items-center border border-gc-border rounded-sm bg-gc-white min-h-[44px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gc-ink hover:bg-gc-cotton"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-sans font-bold text-gc-ink">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-gc-ink hover:bg-gc-cotton"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 min-h-[44px] gc-btn-primary flex items-center justify-center gap-2 ${
                    added ? "bg-gc-green text-gc-white" : ""
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <span>ADD TO BAG · ₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`min-w-[44px] min-h-[44px] p-3 rounded-sm border transition-colors flex items-center justify-center ${
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

            {/* Delivery Status Line */}
            <div className="flex items-center gap-2 py-3 border-y border-gc-border text-xs font-sans text-gc-muted">
              <Truck className="w-4 h-4 text-gc-green shrink-0" />
              <span>Complimentary shipping on prepaid domestic orders (3–7 days).</span>
            </div>

            {/* Accordions */}
            <div className="space-y-2 text-xs font-sans">
              <div className="border border-gc-border rounded-sm bg-gc-white">
                <button
                  onClick={() => toggleAccordion("details")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>PRODUCT DETAILS</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "details" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "details" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p className="leading-relaxed font-light">{product.description}</p>
                    {product.garmentLength && <p><strong>Garment Length:</strong> {product.garmentLength}</p>}
                    {product.sku && <p><strong>SKU:</strong> {product.sku}</p>}
                  </div>
                )}
              </div>

              <div className="border border-gc-border rounded-sm bg-gc-white">
                <button
                  onClick={() => toggleAccordion("craft")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>MATERIAL & CRAFT</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "craft" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "craft" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Craft Technique:</strong> {product.craftTechnique}</p>
                    <div className="bg-gc-cotton p-3.5 rounded-sm text-[11px] leading-relaxed text-gc-ink mt-2 border border-gc-border">
                      <strong>Handwork Disclaimer:</strong> Variations in colour, alignment and print are natural characteristics of handcrafted textiles and contribute to the individuality of each piece.
                    </div>
                  </div>
                )}
              </div>

              <div className="border border-gc-border rounded-sm bg-gc-white">
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-sm text-gc-ink uppercase"
                >
                  <span>DELIVERY & RETURNS</span>
                  <ChevronDown className={`w-4 h-4 text-gc-muted transition-transform ${openAccordion === "shipping" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "shipping" && (
                  <div className="p-4 pt-0 text-gc-muted space-y-2 border-t border-gc-border/60">
                    <p><strong>Domestic Shipping:</strong> 3–7 business days. Free shipping on prepaid orders.</p>
                    <p><strong>International Shipping:</strong> 5–11 business days. Flat shipping charge ₹2,500.</p>
                    <p><strong>Wash Care:</strong> {product.careInstructions}</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 space-y-8 border-t border-gc-border mt-16">
            <h3 className="font-serif text-2xl font-bold uppercase text-gc-ink">YOU MAY ALSO LIKE</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
