"use client";

import React from "react";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "./ProductImage";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-gc-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-gc-border flex items-center justify-between bg-gc-white">
          <div className="flex items-baseline gap-2">
            <h3 className="font-serif font-bold text-lg text-gc-ink uppercase tracking-wider">
              YOUR BAG
            </h3>
            <span className="text-xs font-sans text-gc-muted font-semibold">
              ({cart.reduce((acc, i) => acc + i.quantity, 0)} ITEMS)
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gc-ink hover:text-gc-green transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-gc-cotton px-5 py-2.5 border-b border-gc-border flex items-center gap-2 text-xs font-sans text-gc-ink">
          <ShieldCheck className="w-4 h-4 text-gc-green shrink-0" />
          <span>Complimentary domestic shipping applied on prepaid orders</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <p className="font-serif text-lg text-gc-ink font-semibold">YOUR BAG IS EMPTY</p>
              <p className="text-xs font-sans text-gc-muted max-w-xs leading-relaxed">
                Discover contemporary Jaipur block prints, kurtis, dresses and home textiles.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="gc-btn-primary mt-2"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="gc-card p-3 rounded-sm flex gap-4 items-start relative group"
              >
                <div className="w-20 h-24 bg-gc-cotton rounded-sm overflow-hidden shrink-0">
                  <ProductImage
                    src={item.product.image}
                    alt={item.product.name}
                    category={item.product.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-1 pr-6">
                  <span className="text-[9px] font-sans font-bold text-gc-green uppercase tracking-wider block">
                    {item.product.craftTechnique}
                  </span>
                  <h4 className="font-serif font-bold text-xs text-gc-ink line-clamp-1">
                    {item.product.displayTitle || item.product.name}
                  </h4>

                  <div className="text-[11px] font-sans text-gc-muted space-x-2">
                    {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                    {item.selectedColor && <span>· Color: {item.selectedColor}</span>}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-gc-border rounded-sm bg-gc-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gc-ink hover:bg-gc-cotton"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-sans font-bold text-gc-ink">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gc-ink hover:bg-gc-cotton"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-sans font-bold text-xs text-gc-ink">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-3 right-3 text-gc-muted hover:text-gc-rose transition-colors"
                  title="Remove Item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (() => {
          const totalSavings = cart.reduce((acc, item) => {
            const orig = item.product.originalPrice ?? item.product.price;
            if (orig > item.product.price) {
              return acc + (orig - item.product.price) * item.quantity;
            }
            return acc;
          }, 0);

          return (
            <div className="p-5 border-t border-gc-border bg-gc-white space-y-4">
              {totalSavings > 0 && (
                <div className="flex items-center justify-between text-xs font-sans text-gc-rose font-bold bg-gc-rose/5 px-3 py-2 rounded-xs border border-gc-rose/20">
                  <span>PROMOTIONAL SAVINGS</span>
                  <span>YOU SAVED ₹{totalSavings.toLocaleString("en-IN")}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-xs font-semibold text-gc-muted uppercase tracking-wider">
                    SUBTOTAL
                  </span>
                  <span className="font-serif font-bold text-xl text-gc-ink">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-[10px] font-sans text-gc-muted">
                  Taxes included. International flat shipping ₹2,500 applied at checkout if applicable.
                </p>
              </div>

            <div className="space-y-2">
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full gc-btn-primary text-center block"
              >
                PROCEED TO CHECKOUT
              </Link>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs font-sans font-semibold text-gc-muted hover:text-gc-ink py-2 uppercase tracking-wider"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
          );
        })()}

      </div>
    </div>
  );
};
