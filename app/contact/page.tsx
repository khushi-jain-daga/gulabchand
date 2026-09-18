"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Order Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", topic: "Order Inquiry", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            CUSTOMER CARE & ENQUIRIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            CONTACT US
          </h1>
          <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
            Have a question about an order, custom fabric requirements, or visiting our Jaipur showrooms? Our team is available 11 AM to 6 PM.
          </p>
        </div>
      </div>

      <div className="gc-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="gc-card p-6 rounded-sm space-y-4 bg-gc-white border border-gc-border">
              <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
                DIRECT CONTACT
              </h3>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gc-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase text-gc-ink">Email Support</p>
                    <p className="text-gc-muted">gulabchandjaipur21@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gc-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase text-gc-ink">Phone Helpline</p>
                    <p className="text-gc-muted">9079788804</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gc-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase text-gc-ink">Support Hours</p>
                    <p className="text-gc-muted">11:00 AM – 6:00 PM IST (Mon–Sat)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gc-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase text-gc-ink">Citypulse Flagship</p>
                    <p className="text-gc-muted">Citypulse Mall, Narain Singh Circle, MI Road, Jaipur 302001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="gc-card p-6 sm:p-8 rounded-sm bg-gc-white border border-gc-border space-y-6">
              <h3 className="font-serif font-bold text-xl uppercase text-gc-ink border-b border-gc-border pb-3">
                SEND A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-gc-ink uppercase tracking-wider block">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full p-3 border border-gc-border rounded-sm bg-gc-ivory focus:outline-none focus:border-gc-ink"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gc-ink uppercase tracking-wider block">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                      className="w-full p-3 border border-gc-border rounded-sm bg-gc-ivory focus:outline-none focus:border-gc-ink"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-gc-ink uppercase tracking-wider block">PHONE NUMBER (OPTIONAL)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 Phone number"
                      className="w-full p-3 border border-gc-border rounded-sm bg-gc-ivory focus:outline-none focus:border-gc-ink"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gc-ink uppercase tracking-wider block">INQUIRY TOPIC</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full p-3 border border-gc-border rounded-sm bg-gc-ivory focus:outline-none focus:border-gc-ink"
                    >
                      <option value="Order Inquiry">Order & Shipping Inquiry</option>
                      <option value="Exchange/Return">Exchange / Return Request</option>
                      <option value="Product Details">Product & Fabric Query</option>
                      <option value="Store Visit">Store Location Query</option>
                      <option value="Wholesale">Wholesale & Business</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-gc-ink uppercase tracking-wider block">MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full p-3 border border-gc-border rounded-sm bg-gc-ivory focus:outline-none focus:border-gc-ink"
                  />
                </div>

                <button type="submit" className="gc-btn-primary w-full py-3.5">
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-gc-sand" />
                      MESSAGE SENT SUCCESSFULLY
                    </span>
                  ) : (
                    "SUBMIT INQUIRY"
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
