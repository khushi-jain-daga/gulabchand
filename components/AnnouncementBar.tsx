"use client";

import React from "react";
import Link from "next/link";
import { promotion } from "@/data/promotion";

export const AnnouncementBar = () => {
  return (
    <div className="bg-gc-ink text-gc-white py-2 text-[11px] font-sans font-medium tracking-[0.15em] text-center uppercase border-b border-white/10 select-none">
      {promotion.active ? (
        <Link
          href={promotion.url}
          className="hover:text-gc-sand transition-colors inline-flex items-center justify-center gap-2"
        >
          <span>{promotion.announcement}</span>
        </Link>
      ) : (
        <span>COMPLIMENTARY SHIPPING ON PREPAID ORDERS · INDIA</span>
      )}
    </div>
  );
};
