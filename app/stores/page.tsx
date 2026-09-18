"use client";

import React from "react";
import { JAIPUR_STORES } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      
      {/* Hero Header with Jaipur Imagery */}
      <div className="bg-gc-cotton border-b border-gc-border py-16 md:py-24">
        <div className="gc-container max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.25em]">
              JAIPUR SHOWROOMS & ATELIERS
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
              VISIT GULABCHAND
            </h1>
            <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
              Experience hand block printed fabrics, kurtis, suit sets, and home decor in person at our four flagship Jaipur showrooms.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden relative shadow-md">
              <ProductImage
                src="/images/hero_indigo.jpg"
                alt="Gulabchand Jaipur Store Atmosphere"
                technique="Flagship Store"
                category="Stores"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Store List with Fine Horizontal Lines */}
      <div className="gc-container py-16 max-w-5xl">
        <div className="border-t border-gc-border divide-y divide-gc-border">
          {JAIPUR_STORES.map((store, idx) => (
            <div key={store.id} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1 font-serif text-2xl font-bold text-gc-green">
                0{idx + 1}
              </div>

              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-sans font-bold text-gc-green uppercase tracking-widest block">
                  {store.area}
                </span>
                <h3 className="font-serif font-bold text-xl text-gc-ink uppercase">
                  {store.name}
                </h3>
              </div>

              <div className="md:col-span-4 text-xs font-sans text-gc-muted leading-relaxed font-light">
                <p>{store.address}</p>
                <p>{store.city}, Rajasthan</p>
                <p className="font-mono text-gc-ink font-semibold mt-1">Phone: {store.phone}</p>
              </div>

              <div className="md:col-span-3 text-right">
                <a
                  href={store.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gc-btn-secondary py-2.5 px-5 text-[11px] inline-flex items-center gap-1.5"
                >
                  <span>GET DIRECTIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Banner */}
      <div className="gc-container max-w-5xl">
        <div className="bg-gc-white p-6 sm:p-8 rounded-sm border border-gc-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gc-green shrink-0" />
            <div>
              <p className="font-bold text-gc-ink uppercase">General Support & Store Inquiries</p>
              <p className="text-gc-muted">gulabchandjaipur21@gmail.com · 9079788804 (11 AM – 6 PM)</p>
            </div>
          </div>
          <a href="mailto:gulabchandjaipur21@gmail.com" className="gc-btn-primary py-2.5 px-6">
            EMAIL STORE TEAM
          </a>
        </div>
      </div>

    </div>
  );
}
