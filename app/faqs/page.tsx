"use client";

import React from "react";
import Link from "next/link";

export default function FAQsPage() {
  const faqs = [
    {
      q: "Are Gulabchand products authentic Jaipur hand block prints?",
      a: "Yes. Our products are block printed in Sanganer and Bagru by master artisans using traditionally hand-carved teakwood blocks and natural/AZO-free dyes."
    },
    {
      q: "What is the domestic shipping timeframe and charge?",
      a: "Domestic orders deliver within 3 to 7 business days. We provide complimentary shipping on all prepaid orders within India."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, Gulabchand delivers to over 140 countries globally within 5 to 11 business days. A flat shipping charge of ₹2,500 applies to international orders."
    },
    {
      q: "Why are there slight variations or color overlaps on my fabric?",
      a: "Manual alignment of repeated wooden blocks creates small gaps and overlaps which serve as authentic signatures of genuine hand block printing."
    }
  ];

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            HELP & FAQS
          </h1>
        </div>
      </div>

      <div className="gc-container py-12 max-w-3xl space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-2">
            <h3 className="font-serif font-bold text-base text-gc-ink">{faq.q}</h3>
            <p className="text-xs font-sans text-gc-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
