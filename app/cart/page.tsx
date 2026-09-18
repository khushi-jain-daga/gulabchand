"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "@/components/ProductImage";
import { Trash2, Plus, Minus, ShieldCheck, ArrowRight, Check } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckedOut(true);
    setTimeout(() => {
      clearCart();
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12">
        <div className="gc-container">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            SHOPPING BAG
          </h1>
          <p className="text-xs font-sans text-gc-muted mt-1">
            Review your selected Gulabchand products and proceed to secure checkout.
          </p>
        </div>
      </div>

      <div className="gc-container py-12">
        {isCheckedOut ? (
          <div className="gc-card p-10 max-w-lg mx-auto text-center space-y-4 rounded-sm bg-gc-white border border-gc-border">
            <div className="w-12 h-12 rounded-full bg-gc-green text-gc-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-gc-ink uppercase">ORDER PLACED SUCCESSFULLY</h3>
            <p className="text-xs font-sans text-gc-muted leading-relaxed">
              Thank you for ordering from Gulabchand Prints. Your order details have been received and are being prepared by our Jaipur atelier.
            </p>
            <Link href="/" className="gc-btn-primary inline-block">
              RETURN TO HOMEPAGE
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gc-ink">YOUR BAG IS EMPTY</h3>
            <p className="text-xs font-sans text-gc-muted max-w-sm mx-auto">
              Discover authentic hand block printed kurtis, suit sets, and home decor.
            </p>
            <Link href="/shop" className="gc-btn-primary inline-block">
              EXPLORE CATALOGUE
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Items Table */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="gc-card p-4 rounded-sm flex gap-4 items-center bg-gc-white border border-gc-border">
                  <div className="w-20 h-24 bg-gc-cotton rounded-sm overflow-hidden shrink-0">
                    <ProductImage src={item.product.image} alt={item.product.name} category={item.product.category} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-wider block">
                      {item.product.craftTechnique}
                    </span>
                    <h4 className="font-serif font-bold text-base text-gc-ink">
                      {item.product.displayTitle || item.product.name}
                    </h4>
                    <p className="text-xs font-sans text-gc-muted">Size: {item.selectedSize}</p>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center border border-gc-border rounded-sm bg-gc-white">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 text-gc-ink hover:bg-gc-cotton">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-sans font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 text-gc-ink hover:bg-gc-cotton">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button onClick={() => removeFromCart(item.id)} className="text-xs font-sans text-gc-muted hover:text-gc-rose flex items-center gap-1">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>REMOVE</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-sans font-bold text-base text-gc-ink block">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Summary Panel */}
            <div className="lg:col-span-4 gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-6">
              <h3 className="font-serif font-bold text-lg text-gc-ink uppercase border-b border-gc-border pb-3">
                ORDER SUMMARY
              </h3>

              <div className="space-y-3 text-xs font-sans">
                {(() => {
                  const totalSavings = cart.reduce((acc, item) => {
                    const orig = item.product.originalPrice ?? item.product.price;
                    if (orig > item.product.price) {
                      return acc + (orig - item.product.price) * item.quantity;
                    }
                    return acc;
                  }, 0);

                  if (totalSavings <= 0) return null;

                  return (
                    <div className="flex justify-between font-bold text-gc-rose bg-gc-rose/5 p-2 rounded-xs border border-gc-rose/20">
                      <span>Promotional Savings</span>
                      <span>YOU SAVED ₹{totalSavings.toLocaleString("en-IN")}</span>
                    </div>
                  );
                })()}

                <div className="flex justify-between text-gc-muted">
                  <span>Subtotal</span>
                  <span className="font-bold text-gc-ink">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-gc-muted">
                  <span>Domestic Shipping</span>
                  <span className="font-bold text-gc-green">FREE (PREPAID)</span>
                </div>
                <div className="flex justify-between text-gc-muted">
                  <span>Estimated Taxes</span>
                  <span>Included</span>
                </div>
                <div className="border-t border-gc-border pt-3 flex justify-between text-sm font-bold text-gc-ink">
                  <span>TOTAL</span>
                  <span className="font-serif text-xl">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button onClick={handleCheckout} className="gc-btn-primary w-full py-4 text-center block">
                COMPLETE ORDER
              </button>

              <div className="flex items-center gap-2 text-[11px] font-sans text-gc-muted bg-gc-cotton p-3 rounded-sm">
                <ShieldCheck className="w-4 h-4 text-gc-green shrink-0" />
                <span>Domestic delivery: 3–7 business days. International delivery: 5–11 days (₹2500 flat).</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
