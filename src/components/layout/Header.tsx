"use client";

import { useEffect, useState } from "react";

const navigation = [
  {
    title: "News",
    items: [
      { label: "Latest News", slug: "latest-news" },
      { label: "Pakistan", slug: "pakistan" },
      { label: "Politics", slug: "politics" },
      { label: "World", slug: "world" },
      { label: "Economy & Business", slug: "economy-business" },
      { label: "Education", slug: "education" },
      { label: "Health", slug: "health" },
      { label: "Law", slug: "law" },
      { label: "Crime", slug: "crime" },
      { label: "Environment", slug: "environment" },
      { label: "Sports", slug: "sports" },
    ],
  },
  {
    title: "Culture",
    items: [
      { label: "Arts & Culture", slug: "arts-culture" },
      { label: "History", slug: "history" },
      { label: "Fashion", slug: "fashion" },
      { label: "Media", slug: "media" },
      { label: "Society", slug: "society" },
      { label: "Entertainment", slug: "entertainment" },
      { label: "Literature", slug: "literature" },
      { label: "Book Reviews", slug: "book-reviews" },
    ],
  },
  {
    title: "Ideas",
    items: [
      { label: "Opinion", slug: "opinion" },
      { label: "Editorial", slug: "editorial" },
      { label: "Technology", slug: "technology" },
      { label: "Science", slug: "science" },
      { label: "Philosophy", slug: "philosophy" },
      { label: "Abstract", slug: "abstract" },
      { label: "Spotlight", slug: "spotlight" },
    ],
  },
  {
    title: "Creative",
    items: [
      { label: "Poetry", slug: "poetry" },
      { label: "Fiction", slug: "fiction" },
      { label: "Letters", slug: "letters" },
      { label: "Cartoons", slug: "cartoons" },
      { label: "News Photos", slug: "news-photos" },
      { label: "Audio", slug: "audio" },
    ],
  },
  {
    title: "Special",
    items: [
      { label: "Print Edition", slug: "print-edition" },
      { label: "Magazine", slug: "magazine" },
      { label: "Special Features", slug: "special-features" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-PK", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Karachi",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071A2F]/95 backdrop-blur-xl">
      <div className="site-container">

        {/* TOP INFORMATION BAR */}
        <div className="flex min-h-10 flex-col justify-between gap-2 border-b border-white/10 py-2 text-[11px] text-slate-400 sm:flex-row sm:items-center">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">

            <span className="font-medium text-slate-300">
              Lahore, Pakistan
            </span>

            <span className="hidden text-slate-600 sm:inline">
              |
            </span>

            <span>
              35°C · Hazy sunshine
            </span>

            <span className="hidden text-slate-600 md:inline">
              AQI · Updating
            </span>

          </div>

          <div className="flex items-center gap-4">

            <span>
              {new Date().toLocaleDateString("en-PK", {
                weekday: "long",
                day: "numeric",
                month: "long",
                timeZone: "Asia/Karachi",
              })}
            </span>

            <span className="font-semibold text-slate-200">
              {time}
            </span>

          </div>

        </div>

        {/* MAIN HEADER */}
        <div className="flex min-h-24 items-center justify-between gap-4">

          {/* MENU */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <span className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          {/* LOGO */}
          <a
            href="/"
            className="group min-w-0 text-center"
          >
            <div className="editorial-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Jarida Today
            </div>

            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500 transition group-hover:text-slate-300 sm:text-[10px]">
              Beyond the Narrative
            </div>
          </a>

          {/* MODE */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle appearance"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            {darkMode ? "☼" : "☾"}
          </button>

        </div>

        {/* SEARCH */}
        <div className="pb-5">

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left transition hover:border-white/20 hover:bg-white/[0.07]"
          >

            <span className="text-xl text-slate-400">
              ⌕
            </span>

            <span className="text-sm text-slate-500">
              Search Jarida Today for stories, authors, topics and sections...
            </span>

            <span className="ml-auto hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-600 sm:block">
              SEARCH
            </span>

          </button>

          {searchOpen && (
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-3 flex gap-3"
            >

              <input
                autoFocus
                type="search"
                placeholder="What are you looking for?"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-[#B4232D]"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#B4232D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8F1C24]"
              >
                Search
              </button>

            </form>
          )}

        </div>

        {/* MEGA MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[900px] border-t border-white/10 pb-7 pt-5"
              : "max-h-0"
          }`}
        >

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            {navigation.map((section) => (
              <div key={section.title}>

                <h2 className="editorial-label text-[#B4232D]">
                  {section.title}
                </h2>

                <ul className="mt-4 space-y-2">

                  {section.items.map((item) => (
                    <li key={item.slug}>

                      <a
                        href={`/category/${item.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-lg px-2 py-1.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </a>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

      </div>
    </header>
  );
}