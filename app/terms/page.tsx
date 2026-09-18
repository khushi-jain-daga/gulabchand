"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12">
        <div className="gc-container max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            TERMS OF SERVICE
          </h1>
        </div>
      </div>

      <div className="gc-container py-12 max-w-3xl space-y-4 text-xs font-sans text-gc-muted leading-relaxed">
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-3">
          <p>
            Welcome to Gulabchand Prints. By using our website and purchasing our handcrafted products, you agree to comply with our terms and conditions.
          </p>
          <p>
            All content, images, designs, and trademarks displayed on this site are the intellectual property of Gulabchand Prints Pvt Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
