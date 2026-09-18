"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans flex flex-col justify-center items-center px-4 py-24 text-center">
      <div className="gc-card p-10 max-w-md rounded-sm bg-gc-white border border-gc-border space-y-4">
        <span className="font-serif text-6xl font-bold text-gc-green block">404</span>
        <h2 className="font-serif font-bold text-2xl uppercase tracking-tight text-gc-ink">PAGE NOT FOUND</h2>
        <p className="text-xs font-sans text-gc-muted leading-relaxed font-light">
          The page you are looking for might have been moved or is temporarily unavailable.
        </p>
        <Link href="/" className="gc-btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </Link>
      </div>
    </div>
  );
}
