"use client";

import React from "react";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "./ProductImage";
import { promotion } from "@/data/promotion";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  if (!isCartOpen) return null;

  const productSavings = cart.reduce((acc, item) => {
    const orig = item.product.originalPrice ?? item.product.price;
    if (orig > item.product.price) {
      return acc + (orig - item.product.price) * item.quantity;
    }
    return acc;
  }, 0);

  const showSavings = productSavings > 0 || promotion.active;
  const savingsLabel = promotion.active ? "PROMOTIONAL SAVINGS" : "PRODUCT SAVINGS";

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-in fade-in slide-in-from-right duration-300">
      <div className="w-full max-w-md bg-gc-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-gc-border flex items-center justify-between bg-gc-white">
          <div className="flex items-baseline gap-2">
            <h3 className="font-serif font-bold text-lg text-gc-ink uppercase tracking-wider">
              YOUR BAG
            </h3>
            <span className="text-xs font-sans text-gc-muted font-semibold">
              ({totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gc-ink hover:text-gc-green transition-colors rounded-sm"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Notice */}
        <div className="bg-gc-cotton px-5 py-2.5 border-b border-gc-border flex items-center gap-2 text-xs font-sans text-gc-ink">
          <ShieldCheck className="w-4 h-4 text-gc-green shrink-0" />
          <span>Complimentary shipping on prepaid orders within India.</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 px-4">
              <p className="font-serif text-xl text-gc-ink font-bold tracking-wide">YOUR BAG IS EMPTY</p>
              <p className="text-xs font-sans text-gc-muted max-w-xs leading-relaxed font-light">
                Start with new arrivals, printed kurtis, unstitched suits, or home textiles from Jaipur.
              </p>
              <div className="flex flex-col gap-2.5 w-full max-w-xs pt-2">
                <Link
                  href="/shop?cat=New Arrivals"
                  onClick={() => setIsCartOpen(false)}
                  className="gc-btn-primary text-center block text-xs py-3"
                >
                  SHOP NEW ARRIVALS
                </Link>
                <Link
                  href="/women"
                  onClick={() => setIsCartOpen(false)}
                  className="gc-btn-secondary text-center block text-xs py-3"
                >
                  SHOP WOMEN
                </Link>
              </div>
            </div>
          ) : (
            cart.map((item) => {
              const itemMeta = [
                item.selectedSize ? `Size ${item.selectedSize}` : null,
                item.selectedColor ? item.selectedColor : null,
              ].filter(Boolean).join(" · ");

              return (
                <div
                  key={item.id}
                  className="gc-card p-3 rounded-sm flex gap-4 items-start relative group hover:border-gc-green/40 transition-colors"
                >
                  <div className="w-20 h-24 bg-gc-cotton rounded-sm overflow-hidden shrink-0 aspect-[4/5]">
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

                    {itemMeta && (
                      <div className="text-[11px] font-sans text-gc-muted font-medium">
                        {itemMeta}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-gc-border rounded-sm bg-gc-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-gc-ink hover:bg-gc-cotton hover:text-gc-green transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-sans font-bold text-gc-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-gc-ink hover:bg-gc-cotton hover:text-gc-green transition-colors"
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
                    className="absolute top-3 right-3 text-gc-muted hover:text-gc-rose hover:scale-110 transition-all duration-200"
                    title="Remove Item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gc-border bg-gc-white space-y-4">
            {showSavings && productSavings > 0 && (
              <div className="flex items-center justify-between text-xs font-sans text-gc-rose font-bold bg-gc-rose/5 px-3 py-2 rounded-xs border border-gc-rose/20">
                <span>{savingsLabel}</span>
                <span>YOU SAVED ₹{productSavings.toLocaleString("en-IN")}</span>
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
              <p className="text-[10px] font-sans text-gc-muted leading-tight">
                Taxes are included. International shipping charges, if applicable, are calculated at checkout.
              </p>
            </div>

            <div className="space-y-2">
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full gc-btn-primary text-center block transition-colors duration-200 hover:bg-gc-green"
              >
                PROCEED TO CHECKOUT
              </Link>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs font-sans font-semibold text-gc-muted hover:text-gc-ink py-2 uppercase tracking-wider transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
