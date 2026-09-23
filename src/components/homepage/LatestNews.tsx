"use client";

import { useMemo, useState } from "react";

type Story = {
  id: number;
  category: string;
  type: string;
  title: string;
  excerpt: string;
  time: string;
  author: string;
};

const categories = [
  "All",
  "Pakistan",
  "Politics",
  "World",
  "Business",
  "Culture",
  "Sports",
  "Technology",
];

const stories: Story[] = [
  {
    id: 1,
    category: "Pakistan",
    type: "News",
    title: "The stories shaping Pakistan today",
    excerpt:
      "A closer look at the developments and conversations shaping the country.",
    time: "12 min ago",
    author: "Jarida Report",
  },
  {
    id: 2,
    category: "Politics",
    type: "News",
    title: "Inside the political conversations making headlines",
    excerpt:
      "Key developments, statements and debates from the country's political landscape.",
    time: "24 min ago",
    author: "Jarida Report",
  },
  {
    id: 3,
    category: "World",
    type: "News",
    title: "The world beyond today's biggest headlines",
    excerpt:
      "International developments and the wider context behind global events.",
    time: "38 min ago",
    author: "International Desk",
  },
  {
    id: 4,
    category: "Business",
    type: "Feature",
    title: "What changing markets mean for everyday life",
    excerpt:
      "Understanding the economic developments affecting businesses and consumers.",
    time: "51 min ago",
    author: "Business Desk",
  },
  {
    id: 5,
    category: "Culture",
    type: "Culture",
    title: "Where heritage meets contemporary expression",
    excerpt:
      "Artists and creators finding new ways to engage with culture and identity.",
    time: "1 hr ago",
    author: "Culture Desk",
  },
  {
    id: 6,
    category: "Technology",
    type: "Technology",
    title: "How technology is changing the way we experience information",
    excerpt:
      "A look at the digital tools reshaping media, communication and everyday life.",
    time: "2 hrs ago",
    author: "Technology Desk",
  },
  {
    id: 7,
    category: "Sports",
    type: "Sports",
    title: "The moments everyone is talking about in sport",
    excerpt:
      "The latest developments, performances and stories from the sporting world.",
    time: "2 hrs ago",
    author: "Sports Desk",
  },
  {
    id: 8,
    category: "Pakistan",
    type: "Feature",
    title: "People, places and stories from across the country",
    excerpt:
      "Stories that go beyond the daily news cycle to explore life across Pakistan.",
    time: "3 hrs ago",
    author: "Jarida Report",
  },
];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [contentType, setContentType] = useState("All");
  const [dateFilter, setDateFilter] = useState("Today");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const categoryMatch =
        activeCategory === "All" ||
        story.category === activeCategory;

      const typeMatch =
        contentType === "All" ||
        story.type === contentType;

      return categoryMatch && typeMatch;
    });
  }, [activeCategory, contentType]);

  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4232D] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#B4232D]" />
              </span>

              <p className="editorial-label text-[#B4232D]">
                Live Newsroom
              </p>
            </div>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Latest News
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              The latest stories from Jarida Today, updated throughout the day.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex w-fit items-center gap-3 rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <span>☷</span>
            <span>
              {filtersOpen ? "Hide Filters" : "Filter News"}
            </span>
          </button>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-white text-[#071A2F]"
                      : "border border-white/10 text-slate-500 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ADVANCED FILTERS */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            filtersOpen
              ? "mt-5 max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-3">

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Category
              </span>

              <select
                value={activeCategory}
                onChange={(event) =>
                  setActiveCategory(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-[#0B2239] px-4 py-3 text-sm text-slate-300 outline-none focus:border-[#B4232D]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Content Type
              </span>

              <select
                value={contentType}
                onChange={(event) =>
                  setContentType(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-[#0B2239] px-4 py-3 text-sm text-slate-300 outline-none focus:border-[#B4232D]"
              >
                <option value="All">All Types</option>
                <option value="News">News</option>
                <option value="Feature">Feature</option>
                <option value="Culture">Culture</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Date
              </span>

              <select
                value={dateFilter}
                onChange={(event) =>
                  setDateFilter(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-[#0B2239] px-4 py-3 text-sm text-slate-300 outline-none focus:border-[#B4232D]"
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
            </label>

          </div>
        </div>

        {/* RESULT COUNT */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-slate-600">
            Showing{" "}
            <span className="text-slate-400">
              {filteredStories.length}
            </span>{" "}
            stories
          </p>

          <span className="hidden text-xs text-slate-600 sm:block">
            Updated continuously
          </span>
        </div>

        {/* STORIES */}
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">

          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="group bg-[#0B2239] p-6 transition hover:bg-[#102D48] md:p-7"
            >
              <a href="#">

                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {story.category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {story.time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-4 text-2xl font-semibold leading-tight transition group-hover:text-slate-200">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {story.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-600">
                    {story.author}
                  </span>

                  <span className="text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    Read →
                  </span>
                </div>

              </a>
            </article>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredStories.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <p className="editorial-heading text-2xl text-slate-300">
              No stories found
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Try changing your category or content type.
            </p>
          </div>
        )}

        {/* VIEW ALL */}
        <div className="mt-7 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            View All News
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}