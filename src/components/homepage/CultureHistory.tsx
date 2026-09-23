const cultureStories = [
  {
    category: "Arts & Culture",
    title: "Where heritage meets contemporary expression",
    excerpt:
      "Artists, creators and cultural voices finding new ways to explore identity, memory and belonging.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1400&q=85",
    time: "52 min ago",
  },
  {
    category: "History",
    title: "The stories hidden inside places we pass every day",
    excerpt:
      "Looking at Pakistan's history through its cities, architecture, people and forgotten stories.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=85",
    time: "2 hrs ago",
  },
  {
    category: "Book Reviews",
    title: "Books worth opening beyond the first page",
    excerpt:
      "Ideas, authors and books that deserve a closer conversation.",
    time: "3 hrs ago",
  },
];

export default function CultureHistory() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Culture Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Arts, Culture & History
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Exploring creativity, heritage, memory and the cultural
              conversations shaping Pakistan and beyond.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Explore Culture
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* FEATURED CULTURE GRID */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.5fr_0.8fr]">

          {/* MAIN CULTURE STORY */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">
            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[16/9]">
                <img
                  src={cultureStories[0].image}
                  alt={cultureStories[0].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6 md:p-8">

                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {cultureStories[0].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {cultureStories[0].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  {cultureStories[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {cultureStories[0].excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Read Culture Story →
                </div>

              </div>

            </a>
          </article>

          {/* HISTORY + BOOK REVIEW */}
          <div className="grid gap-5">

            {/* HISTORY */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

              <a href="#" className="block">

                <div className="editorial-image-wrapper aspect-[16/8]">
                  <img
                    src={cultureStories[1].image}
                    alt={cultureStories[1].title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">
                    <span className="editorial-label text-[#B4232D]">
                      {cultureStories[1].category}
                    </span>

                    <span className="text-[10px] text-slate-600">
                      {cultureStories[1].time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-3 text-xl font-semibold leading-snug">
                    {cultureStories[1].title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {cultureStories[1].excerpt}
                  </p>

                  <div className="mt-4 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                    Explore History →
                  </div>

                </div>

              </a>

            </article>

            {/* BOOK REVIEWS */}
            <article className="group rounded-2xl border border-white/10 bg-[#0B2239] p-6 transition hover:bg-[#102D48]">

              <a href="#" className="block">

                <div className="flex items-center justify-between gap-3">
                  <span className="editorial-label text-[#B4232D]">
                    {cultureStories[2].category}
                  </span>

                  <span className="text-[10px] text-slate-600">
                    {cultureStories[2].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-2xl font-semibold leading-tight">
                  {cultureStories[2].title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {cultureStories[2].excerpt}
                </p>

                <div className="mt-5 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                  Read Reviews →
                </div>

              </a>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
}