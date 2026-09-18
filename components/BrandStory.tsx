"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, ShieldCheck } from "lucide-react";

export const BrandStory = () => {
  return (
    <section className="py-24 relative bg-chai-950 border-t border-brass-500/15 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gulabi-700/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brass-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-chai-850 border border-brass-500/30 text-xs font-mono text-brass-400 uppercase tracking-widest shadow-md">
              <Award className="w-3.5 h-3.5 text-brass-400" />
              <span>JAIPUR HERITAGE SINCE 1946</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-hindi font-bold text-cream-50 leading-[1.15]">
              जयपुर की सुबह का <span className="font-serif italic font-normal text-gold-gradient">पहला घूँट</span>
            </h2>

            <p className="text-base sm:text-xl text-cream-200/90 leading-relaxed font-serif italic border-l-2 border-brass-400/40 pl-4 py-1">
              "Since 1946, Gulab Ji Chai has been part of Jaipur’s morning rhythm."
            </p>

            <p className="text-sm sm:text-base text-cream-300/80 leading-relaxed font-sans font-light">
              Situated on prime MI Road, Gulab Ji Chai is more than a tea stall — it is an enduring cultural landmark. Every dawn, as charcoal embers flare, buffalo milk simmers with cardamom and fresh ginger, crafting tea that has defined Pink City mornings for generations.
            </p>

            {/* Generous Tradition Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-chai-850/80 border border-brass-500/20 glass-panel space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gulabi-700/20 border border-gulabi-500/40 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-gulabi-300" />
                </div>
                <h4 className="font-serif font-bold text-cream-50 text-base sm:text-lg">The Sacred Morning Tradition</h4>
              </div>
              <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed font-sans font-light">
                Preserving decades of hospitality, Gulab Ji Chai opens every morning with warmth for all — sharing hot tea and fresh food with morning workers and city elders before the day's bustle begins.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brass-500/15">
              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-brass-400 block">1946</span>
                <span className="text-[11px] text-cream-300/60 font-mono uppercase tracking-wider">FOUNDED</span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-cream-50 block">78+</span>
                <span className="text-[11px] text-cream-300/60 font-mono uppercase tracking-wider">YEARS OF TASTE</span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-gulabi-300 block">7 Spices</span>
                <span className="text-[11px] text-cream-300/60 font-mono uppercase tracking-wider">SECRET RECIPE</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-brass-500/30 shadow-2xl group">
              <img
                src="file:///C:/Users/HP/.gemini/antigravity-ide/brain/28736e07-a921-4454-92c5-af426b951fbb/bun_maska_samosa_1789338259475.jpg"
                alt="Gulab Ji Bun Maska Samosa Heritage"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chai-950 via-chai-950/30 to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-chai-900/90 backdrop-blur-xl border border-brass-500/30 shadow-2xl">
                <span className="text-[10px] font-mono text-brass-400 uppercase tracking-widest block font-semibold">MI ROAD LANDMARK</span>
                <p className="font-hindi text-base sm:text-lg font-bold text-cream-50 mt-1">"स्वाद जो दिल छू जाए, परम्परा जो मिसाल बन जाए।"</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
