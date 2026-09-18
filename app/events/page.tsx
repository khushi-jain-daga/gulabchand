"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Sparkles } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: "jaipur-festive-popup",
      title: "Jaipur Heritage Block Print Exhibition 2026",
      city: "Jaipur",
      venue: "Citypulse Showroom Courtyard",
      dates: "October 15 – October 20, 2026",
      status: "Upcoming",
      description: "Discover exclusive unstitched silk suits, hand-quilted dohars, and limited botanical dye edits."
    },
    {
      id: "mumbai-craft-edit",
      title: "Gulabchand Contemporary Jaipur Edit — Mumbai Pop-Up",
      city: "Mumbai",
      venue: "World Trade Center, Cuffe Parade",
      dates: "November 5 – November 8, 2026",
      status: "Upcoming",
      description: "Bringing Jaipur's living block printing tradition to Mumbai. Featuring our cotton dresses and suit sets."
    }
  ];

  return (
    <div className="min-h-screen bg-gc-ivory text-gc-ink font-sans pb-24">
      <div className="bg-gc-cotton border-b border-gc-border py-12 md:py-16">
        <div className="gc-container max-w-4xl space-y-3">
          <span className="text-[11px] font-sans font-bold text-gc-green uppercase tracking-[0.2em]">
            EXHIBITIONS & POP-UP STORES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gc-ink uppercase tracking-tight">
            EXHIBITIONS & EVENTS
          </h1>
          <p className="text-base font-serif text-gc-muted font-light leading-relaxed">
            Experience Gulabchand's hand block print collections in person across major Indian cities and craft pop-ups.
          </p>
        </div>
      </div>

      <div className="gc-container py-12 max-w-4xl space-y-6">
        {events.map((event) => (
          <div key={event.id} className="gc-card p-6 rounded-sm bg-gc-white border border-gc-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-sm bg-gc-green text-gc-white text-[10px] font-sans font-bold uppercase tracking-wider">
                {event.status}
              </span>
              <span className="text-xs font-serif font-bold text-gc-green flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {event.dates}
              </span>
            </div>

            <h3 className="font-serif font-bold text-xl text-gc-ink uppercase">{event.title}</h3>
            <p className="text-xs font-sans text-gc-muted leading-relaxed font-light">{event.description}</p>

            <div className="pt-2 border-t border-gc-border flex items-center justify-between text-xs font-sans text-gc-muted">
              <span className="flex items-center gap-1 font-semibold text-gc-ink">
                <MapPin className="w-3.5 h-3.5 text-gc-green" />
                {event.venue}, {event.city}
              </span>
              <Link href="/contact" className="font-bold text-gc-green hover:underline uppercase">
                INQUIRE FOR INVITATION →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
