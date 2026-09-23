"use client";

import { useState } from "react";

const tickerStories = [
  {
    category: "LATEST",
    headline: "Jarida Today brings you the latest stories from Pakistan and beyond",
  },
  {
    category: "PAKISTAN",
    headline: "Follow the developments shaping the country today",
  },
  {
    category: "WORLD",
    headline: "The latest international stories and perspectives",
  },
  {
    category: "CULTURE",
    headline: "Exploring art, heritage, literature and contemporary culture",
  },
  {
    category: "IDEAS",
    headline: "Conversations, opinions and perspectives beyond the headlines",
  },
];

export default function NewsTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="border-b border-white/10 bg-[#061525]"
      aria-label="Latest news"
    >
      <div className="site-container flex min-h-12 items-center overflow-hidden">

        {/* LABEL */}
        <div className="relative z-10 flex shrink-0 items-center gap-3 border-r border-white/10 bg-[#061525] pr-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4232D] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B4232D]" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Latest
          </span>
        </div>

        {/* MOVING CONTENT */}
        <div
          className="relative min-w-0 flex-1 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`ticker-track flex w-max items-center ${
              paused ? "ticker-paused" : ""
            }`}
          >
            {[...tickerStories, ...tickerStories].map((story, index) => (
              <a
                key={`${story.headline}-${index}`}
                href="#"
                className="flex items-center whitespace-nowrap px-6 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="mr-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#B4232D]">
                  {story.category}
                </span>

                <span>{story.headline}</span>

                <span className="ml-6 text-slate-700">
                  •
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* PAUSE */}
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Resume ticker" : "Pause ticker"}
          className="relative z-10 ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#061525] text-xs text-slate-400 transition hover:border-white/30 hover:text-white"
        >
          {paused ? "▶" : "Ⅱ"}
        </button>

      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 45s linear infinite;
        }

        .ticker-paused {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}