"use client";

import React from "react";
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const LocationCTA = () => {
  const whatsappNumber = "+919829012345";
  const whatsappMessage = encodeURIComponent(
    "Namaste Gulab Ji Chai Jaipur! ☕ I would like to order fresh Kulhad Chai & Bun Maska."
  );

  return (
    <section className="py-24 relative bg-chai-900 border-t border-brass-500/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-chai-850 via-chai-900 to-chai-950 border border-brass-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden glass-panel">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass-500/20 border border-brass-500/30 text-xs font-mono text-brass-300 uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-brass-400" />
                <span>MI ROAD • JAIPUR LANDMARK</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-cream-50 leading-tight">
                Visit Us on MI Road or <span className="text-gold-gradient">Order via WhatsApp</span>
              </h2>

              <p className="text-sm sm:text-base text-cream-300/80 leading-relaxed font-sans font-light">
                Located in the heart of Jaipur's prime shopping boulevard. Stop by for your early morning 4:30 AM kulhad cup or request hot delivery in thermal flasks.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-2xl bg-chai-900/80 border border-brass-500/15 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brass-500/20 flex items-center justify-center shrink-0 border border-brass-500/30">
                    <Clock className="w-5 h-5 text-brass-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-brass-400 uppercase font-semibold">STORE HOURS</h4>
                    <p className="text-sm font-bold text-cream-50 mt-0.5">4:30 AM – 9:00 PM</p>
                    <span className="text-[11px] text-cream-300/60">Open 365 Days a Year</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-chai-900/80 border border-brass-500/15 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brass-500/20 flex items-center justify-center shrink-0 border border-brass-500/30">
                    <MapPin className="w-5 h-5 text-brass-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-brass-400 uppercase font-semibold">ADDRESS</h4>
                    <p className="text-sm font-bold text-cream-50 mt-0.5">MI Road, Opposite Ganpati Plaza</p>
                    <span className="text-[11px] text-cream-300/60">Jaipur, Rajasthan 302001</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp & Map Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>ORDER DIRECT ON WHATSAPP</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Gulab+Ji+Chai+MI+Road+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-chai-850 border border-brass-500/30 text-cream-100 hover:border-brass-400 font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-brass-400" />
                  <span>GET MAP DIRECTIONS</span>
                </a>
              </div>

            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-brass-500/30 aspect-video lg:aspect-square shadow-2xl">
              <img
                src="file:///C:/Users/HP/.gemini/antigravity-ide/brain/28736e07-a921-4454-92c5-af426b951fbb/mawa_peda_sweet_1789338271630.jpg"
                alt="Gulab Ji Saffron Sweets & Chai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chai-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-chai-900/90 backdrop-blur-md border border-brass-500/20 text-center">
                <p className="font-hindi text-sm text-brass-300">"पधारो म्हारे देस — गुलाबी नगरी का पहला घूँट।"</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
