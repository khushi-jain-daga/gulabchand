"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12">
        <div className="gc-container max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            PRIVACY POLICY
          </h1>
        </div>
      </div>

      <div className="gc-container py-12 max-w-3xl space-y-4 text-xs font-sans text-gc-muted leading-relaxed">
        <div className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-3">
          <p>
            Gulabchand Prints Pvt Ltd is committed to respecting your privacy. We collect personal information solely for processing your orders, providing order status updates, and delivering customer service.
          </p>
          <p>
            We do not sell, rent, or trade your personal data to third parties. All online payments are securely processed through encrypted payment gateways.
          </p>
        </div>
      </div>
    </div>
  );
}
