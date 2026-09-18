"use client";

import React from "react";
import { X, Ruler } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizes = [
    { size: "S", bust: '36"', waist: '32"', hips: '40"', shoulder: '14"' },
    { size: "M", bust: '38"', waist: '34"', hips: '42"', shoulder: '14.5"' },
    { size: "L", bust: '41"', waist: '37"', hips: '45"', shoulder: '15"' },
    { size: "XL", bust: '44"', waist: '40"', hips: '48"', shoulder: '15.5"' },
    { size: "XXL", bust: '47"', waist: '43"', hips: '51"', shoulder: '16"' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-gc-white rounded-sm shadow-2xl p-6 space-y-6 relative border border-gc-border">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gc-border pb-4">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-gc-green" />
            <h3 className="font-serif font-bold text-lg text-gc-ink uppercase tracking-wider">
              GARMENT SIZE GUIDE
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-gc-ink hover:text-gc-green" aria-label="Close size guide">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs font-sans text-gc-muted leading-relaxed">
          Measurements below reflect actual garment dimensions in inches. For comfortable everyday wear, choose a size that is 2 inches larger than your body measurements.
        </p>

        {/* Size Table */}
        <div className="overflow-x-auto border border-gc-border rounded-sm">
          <table className="w-full text-xs font-sans text-left">
            <thead className="bg-gc-cotton text-gc-ink uppercase font-bold text-[10px] tracking-wider border-b border-gc-border">
              <tr>
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">Bust</th>
                <th className="py-2.5 px-3">Waist</th>
                <th className="py-2.5 px-3">Hips</th>
                <th className="py-2.5 px-3">Shoulder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gc-border text-gc-ink">
              {sizes.map((row) => (
                <tr key={row.size} className="hover:bg-gc-ivory">
                  <td className="py-2.5 px-3 font-bold text-gc-green">{row.size}</td>
                  <td className="py-2.5 px-3">{row.bust}</td>
                  <td className="py-2.5 px-3">{row.waist}</td>
                  <td className="py-2.5 px-3">{row.hips}</td>
                  <td className="py-2.5 px-3">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gc-cotton p-3.5 rounded-sm border border-gc-border text-[11px] font-sans text-gc-muted space-y-1">
          <p className="font-bold text-gc-ink uppercase">Handwork & Fit Note:</p>
          <p>
            Due to the traditional hand-block printing and tailoring process, minor variations of up to 0.5 inches may occur.
          </p>
        </div>

      </div>
    </div>
  );
};
