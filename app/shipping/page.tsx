"use client";

import React from "react";
import Link from "next/link";
import { Truck, Globe, ShieldCheck } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            DELIVERY POLICIES & CHARGES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            SHIPPING & DELIVERY
          </h1>
          <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
            Verified shipping terms for domestic orders across India and international deliveries to 140+ countries.
          </p>
        </div>
      </div>

      <div className="gc-container py-12 max-w-4xl space-y-8">
        
        {/* Domestic Shipping */}
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-4">
          <div className="flex items-center gap-3 border-b border-gc-border pb-3">
            <Truck className="w-5 h-5 text-gc-green" />
            <h3 className="font-serif font-bold text-xl uppercase text-gc-ink">DOMESTIC SHIPPING (INDIA)</h3>
          </div>

          <div className="space-y-2 text-xs font-sans text-gc-muted leading-relaxed">
            <p><strong>Delivery Timeline:</strong> 3 to 7 business days from order confirmation.</p>
            <p><strong>Shipping Charges:</strong> Complimentary (Free Shipping) on all prepaid domestic orders in India.</p>
            <p><strong>Tracking:</strong> Tracking details are sent via email and SMS once your package is dispatched from our Jaipur atelier.</p>
          </div>
        </div>

        {/* International Shipping */}
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-4">
          <div className="flex items-center gap-3 border-b border-gc-border pb-3">
            <Globe className="w-5 h-5 text-gc-green" />
            <h3 className="font-serif font-bold text-xl uppercase text-gc-ink">INTERNATIONAL SHIPPING</h3>
          </div>

          <div className="space-y-2 text-xs font-sans text-gc-muted leading-relaxed">
            <p><strong>Global Reach:</strong> Gulabchand delivers internationally to over 140 countries including USA, UK, Australia, Canada, UAE, and Europe.</p>
            <p><strong>Delivery Timeline:</strong> 5 to 11 business days.</p>
            <p><strong>Flat Shipping Fee:</strong> ₹2,500 flat shipping charge for international orders.</p>
            <p><strong>Customs & Duties:</strong> Any applicable import duties or customs taxes levied by the destination country are the responsibility of the recipient.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
