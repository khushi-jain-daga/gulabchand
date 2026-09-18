"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, CheckCircle2 } from "lucide-react";

const SUNRISE_TIMELINE = [
  {
    id: "430am",
    time: "4:30 AM",
    title: "Ember & Fabric Prep",
    titleHindi: "सुबह की शुरुआत",
    subtitle: "Heritage Hand Block Workshop",
    desc: "Opening the Jaipur artisanal workshop, preparing block prints and natural dye vats.",
    description: "Opening the Jaipur artisanal workshop, preparing block prints and natural dye vats.",
    tagline: "Heritage Craft",
    badge: "DAILY RITUAL",
    highlights: ["Hand Block Stamps", "Natural Indigo Dye", "Pure Cotton Fabric"],
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80",
  }
];

export const SunriseTimeline = () => {
  const [activeStepId, setActiveStepId] = useState("430am");
  const activeStep = SUNRISE_TIMELINE.find((item) => item.id === activeStepId) || SUNRISE_TIMELINE[0];

  return (
    <section id="timeline" className="py-24 relative bg-chai-900 overflow-hidden border-t border-brass-500/15">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brass-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gulabi-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-chai-850 border border-brass-500/30 text-xs font-mono text-brass-400 uppercase tracking-widest mb-3 shadow-md">
            <Clock className="w-3.5 h-3.5" />
            <span>SUNRISE CHRONICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-hindi font-bold text-cream-50 mb-3">
            जयपुर का सवेरा <span className="font-serif italic font-normal text-gold-gradient">— 4:30 AM Timeline</span>
          </h2>
          <p className="text-xs sm:text-base text-cream-300/80 font-sans font-light max-w-2xl mx-auto">
            Experience the rhythmic morning ritual of Jaipur. From charcoal embers at 4:30 AM to the vibrant morning rush on MI Road.
          </p>
        </motion.div>

        {/* Timeline Scrub Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {SUNRISE_TIMELINE.map((item, index) => {
            const isSelected = item.id === activeStepId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveStepId(item.id)}
                className={`relative p-5 rounded-2xl text-left transition-all backdrop-blur-md border ${
                  isSelected
                    ? "bg-gradient-to-br from-chai-800 via-chai-850 to-chai-900 border-brass-400 shadow-[0_0_25px_rgba(223,177,91,0.25)] scale-[1.02]"
                    : "bg-chai-850/50 border-brass-500/15 hover:border-brass-500/30 hover:bg-chai-850"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-sm sm:text-base font-bold ${isSelected ? "text-brass-400" : "text-cream-300/70"}`}>
                    {item.time}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase ${isSelected ? "bg-brass-500/20 text-brass-300 border border-brass-500/30" : "bg-chai-900 text-cream-300/40"}`}>
                    STEP 0{index + 1}
                  </span>
                </div>
                <h4 className={`font-serif font-semibold text-xs sm:text-base truncate ${isSelected ? "text-cream-50" : "text-cream-200/80"}`}>
                  {item.title}
                </h4>
                <p className="font-hindi text-xs text-brass-400/80 mt-0.5 truncate">
                  {item.titleHindi}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="timelineActive"
                    className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-brass-400 via-gulabi-500 to-brass-500 rounded-t-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-12 rounded-3xl bg-chai-850/90 border border-brass-500/25 glass-panel shadow-2xl relative overflow-hidden"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gulabi-700/30 border border-gulabi-500/30 text-gulabi-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-brass-400" />
                  <span>{activeStep.badge}</span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-brass-400 mb-1">
                    {activeStep.time}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream-50">
                    {activeStep.title}
                  </h3>
                  <h4 className="text-base sm:text-lg font-hindi text-brass-400 mt-1">
                    {activeStep.titleHindi}
                  </h4>
                </div>

                <p className="text-xs sm:text-base text-cream-200/90 leading-relaxed font-sans font-light">
                  {activeStep.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeStep.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-chai-900/80 border border-brass-500/15">
                      <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                      <span className="text-xs font-semibold text-cream-100">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-brass-500/30 aspect-square shadow-2xl group">
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chai-950 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-chai-900/90 backdrop-blur-md border border-brass-500/20">
                  <p className="text-xs text-brass-400 font-mono font-semibold">MI ROAD LANDMARK</p>
                  <p className="text-xs sm:text-sm font-serif font-bold text-cream-50 mt-0.5">{activeStep.subtitle}</p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
