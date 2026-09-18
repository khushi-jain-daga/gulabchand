"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
  technique?: string;
  category?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  technique = "Hand Block Print",
  category = "Textile",
}) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="relative w-full h-full bg-gc-cotton border border-gc-border/40 flex flex-col justify-between p-4 select-none overflow-hidden">
        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-sans font-bold tracking-widest text-gc-muted uppercase bg-gc-white/80 px-2 py-0.5 rounded-sm border border-gc-border">
            {technique}
          </span>
          <span className="text-[10px] font-serif text-gc-green font-bold uppercase tracking-widest">
            JAIPUR
          </span>
        </div>

        <div className="text-center my-auto space-y-1 z-10 px-2">
          <div className="w-8 h-8 rounded-full bg-gc-sand/40 border border-gc-sand flex items-center justify-center mx-auto mb-1">
            <Sparkles className="w-3.5 h-3.5 text-gc-green" />
          </div>
          <p className="font-serif font-bold text-xs text-gc-ink line-clamp-2">
            {alt}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gc-border/60 pt-1.5 text-[9px] font-sans text-gc-muted tracking-widest uppercase z-10">
          <span>GULABCHAND</span>
          <span>COTTON WEAVE</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={className}
      loading="lazy"
    />
  );
};
