"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Package, MapPin, Heart, LogOut } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "addresses">("profile");

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12">
        <div className="gc-container">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            MY ACCOUNT
          </h1>
          <p className="text-xs font-sans text-gc-muted mt-1">
            Manage your Gulabchand profile, track recent orders, and update delivery addresses.
          </p>
        </div>
      </div>

      <div className="gc-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Sidebar Menu */}
          <div className="md:col-span-3 gc-card p-4 rounded-sm bg-gc-white border border-gc-border space-y-1 text-xs font-sans">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full py-3 px-4 rounded-sm font-bold uppercase tracking-wider flex items-center gap-2 text-left ${
                activeTab === "profile" ? "bg-gc-ink text-gc-white" : "text-gc-ink hover:bg-gc-cotton"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile Details</span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full py-3 px-4 rounded-sm font-bold uppercase tracking-wider flex items-center gap-2 text-left ${
                activeTab === "orders" ? "bg-gc-ink text-gc-white" : "text-gc-ink hover:bg-gc-cotton"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>My Orders</span>
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full py-3 px-4 rounded-sm font-bold uppercase tracking-wider flex items-center gap-2 text-left ${
                activeTab === "addresses" ? "bg-gc-ink text-gc-white" : "text-gc-ink hover:bg-gc-cotton"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Addresses</span>
            </button>

            <Link
              href="/wishlist"
              className="w-full py-3 px-4 rounded-sm font-bold uppercase tracking-wider flex items-center gap-2 text-gc-ink hover:bg-gc-cotton block"
            >
              <Heart className="w-4 h-4" />
              <span>Saved Wishlist</span>
            </Link>
          </div>

          {/* Main Tab Content */}
          <div className="md:col-span-9 gc-card p-6 sm:p-8 rounded-sm bg-gc-white border border-gc-border space-y-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
                  PROFILE DETAILS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-4 bg-gc-ivory rounded-sm border border-gc-border">
                    <span className="text-gc-muted font-semibold uppercase block">FULL NAME</span>
                    <p className="font-bold text-gc-ink text-sm mt-1">Gulabchand Patron</p>
                  </div>
                  <div className="p-4 bg-gc-ivory rounded-sm border border-gc-border">
                    <span className="text-gc-muted font-semibold uppercase block">EMAIL ADDRESS</span>
                    <p className="font-bold text-gc-ink text-sm mt-1">customer@gulabchand.com</p>
                  </div>
                  <div className="p-4 bg-gc-ivory rounded-sm border border-gc-border">
                    <span className="text-gc-muted font-semibold uppercase block">PRIMARY PHONE</span>
                    <p className="font-bold text-gc-ink text-sm mt-1">+91 98290 12345</p>
                  </div>
                  <div className="p-4 bg-gc-ivory rounded-sm border border-gc-border">
                    <span className="text-gc-muted font-semibold uppercase block">PREFERRED STORE</span>
                    <p className="font-bold text-gc-green text-sm mt-1">Citypulse Showroom, Jaipur</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
                  RECENT ORDERS
                </h3>

                <div className="gc-card p-4 rounded-sm border border-gc-border bg-gc-ivory space-y-2 text-xs font-sans">
                  <div className="flex justify-between font-bold text-gc-ink border-b border-gc-border pb-2">
                    <span>ORDER #GC-84920</span>
                    <span className="text-gc-green">DISPATCHED</span>
                  </div>
                  <p className="text-gc-muted">Date: September 12, 2026 · Total: ₹2,450</p>
                  <p className="font-semibold text-gc-ink">Indigo Dabu Print Cotton Midi Dress (Size M)</p>
                  <p className="text-[11px] text-gc-muted">Estimated Delivery: September 16, 2026</p>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
                  SAVED ADDRESSES
                </h3>

                <div className="gc-card p-4 rounded-sm border border-gc-border bg-gc-ivory space-y-2 text-xs font-sans">
                  <span className="px-2 py-0.5 rounded bg-gc-green text-gc-white text-[10px] font-bold uppercase">PRIMARY</span>
                  <h4 className="font-bold text-gc-ink text-sm">Gulabchand Patron</h4>
                  <p className="text-gc-muted">MI Road / C Scheme, Jaipur, Rajasthan 302001, India</p>
                  <p className="text-gc-muted">Phone: +91 98290 12345</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
