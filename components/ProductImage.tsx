"use client";

import React, { useState } from "react";

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
}) => {
  const [imageError, setImageError] = useState(false);

  const fallbackSrc = "/brand/category-women.jpg";
  const displaySrc = (!src || imageError) ? fallbackSrc : src;

  return (
    <img
      src={displaySrc}
      alt={alt}
      onError={() => {
        if (!imageError) setImageError(true);
      }}
      className={className}
      loading="lazy"
    />
  );
};
