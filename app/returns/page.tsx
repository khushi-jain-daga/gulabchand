"use client";

import React from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            EXCHANGES & RETURNS POLICY
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            RETURNS & EXCHANGES
          </h1>
          <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
            Guidelines for size exchanges and item returns.
          </p>
        </div>
      </div>

      <div className="gc-container py-12 max-w-4xl space-y-6 text-xs font-sans text-gc-muted">
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-4">
          <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
            EXCHANGE POLICY
          </h3>
          <p className="leading-relaxed">
            We offer size exchanges within 7 days of delivery for domestic orders. Items must be unworn, unwashed, with original tags intact.
          </p>
          <div className="bg-gc-cotton p-3.5 rounded-sm border border-gc-border text-gc-ink font-medium">
            <strong>Handwork Note:</strong> Small color or motif irregularities are natural characteristics of Jaipur hand block printing and are not considered manufacturing defects.
          </div>
        </div>
      </div>
    </div>
  );
}
