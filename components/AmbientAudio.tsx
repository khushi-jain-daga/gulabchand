"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Synthetic Web Audio Chai Simmer sound synthesizer
  const toggleAudio = () => {
    if (isPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        try {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Generate brown noise for warm fire simmer
          const bufferSize = ctx.sampleRate * 2;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          let lastOut = 0.0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + 0.02 * white) / 1.02;
            lastOut = data[i];
            data[i] *= 0.08; // quiet soft ambient crackle
          }

          const noise = ctx.createBufferSource();
          noise.buffer = buffer;
          noise.loop = true;

          // Lowpass filter for warm tea boil frequency
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.value = 600;

          noise.connect(filter);
          filter.connect(ctx.destination);
          noise.start();
          noiseNodeRef.current = noise;
        } catch (e) {
          console.error("Web Audio API not supported", e);
        }
      } else {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleAudio}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border backdrop-blur-xl transition-all shadow-2xl ${
          isPlaying
            ? "bg-brass-500/20 border-brass-400 text-brass-400 shadow-[0_0_25px_rgba(223,177,91,0.3)] animate-pulse"
            : "bg-chai-850/80 border-brass-500/20 text-cream-300 hover:text-cream-50 hover:border-brass-400/40"
        }`}
        title="Toggle Ambient Chai Simmer Sound"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-brass-400 animate-bounce" />
            <span className="text-xs font-semibold tracking-wider font-mono">SIMMERING AMBIENCE ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-cream-300" />
            <span className="text-xs font-semibold tracking-wider font-mono">CHAI AMBIENCE</span>
          </>
        )}
      </button>
    </div>
  );
};
