"use client";

import React from "react";
import { SizeGuideModal } from "@/components/SizeGuideModal";

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            GARMENT DIMENSIONS & FIT
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            SIZE GUIDE
          </h1>
        </div>
      </div>

      <div className="gc-container py-12 max-w-3xl">
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-6">
          <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
            WOMEN'S GARMENT MEASUREMENTS (INCHES)
          </h3>

          <div className="overflow-x-auto border border-gc-border rounded-sm">
            <table className="w-full text-xs font-sans text-left">
              <thead className="bg-gc-cotton text-gc-ink uppercase font-bold text-[10px] tracking-wider border-b border-gc-border">
                <tr>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Bust</th>
                  <th className="py-3 px-4">Waist</th>
                  <th className="py-3 px-4">Hips</th>
                  <th className="py-3 px-4">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gc-border text-gc-ink">
                <tr><td className="py-3 px-4 font-bold text-gc-green">S</td><td className="py-3 px-4">36"</td><td className="py-3 px-4">32"</td><td className="py-3 px-4">40"</td><td className="py-3 px-4">14"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-gc-green">M</td><td className="py-3 px-4">38"</td><td className="py-3 px-4">34"</td><td className="py-3 px-4">42"</td><td className="py-3 px-4">14.5"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-gc-green">L</td><td className="py-3 px-4">41"</td><td className="py-3 px-4">37"</td><td className="py-3 px-4">45"</td><td className="py-3 px-4">15"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-gc-green">XL</td><td className="py-3 px-4">44"</td><td className="py-3 px-4">40"</td><td className="py-3 px-4">48"</td><td className="py-3 px-4">15.5"</td></tr>
                <tr><td className="py-3 px-4 font-bold text-gc-green">XXL</td><td className="py-3 px-4">47"</td><td className="py-3 px-4">43"</td><td className="py-3 px-4">51"</td><td className="py-3 px-4">16"</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
