const sportsStories = [
  {
    category: "Cricket",
    title: "The latest stories from Pakistan's sporting world",
    excerpt:
      "Matches, players, performances and the conversations shaping sport today.",
    time: "25 min ago",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Football",
    title: "The game beyond the scoreboard",
    excerpt:
      "Stories from football, its players and the communities around the sport.",
    time: "1 hr ago",
  },
  {
    category: "Tennis",
    title: "The players and moments defining the court",
    excerpt:
      "Following the latest developments from the world of tennis.",
    time: "2 hrs ago",
  },
];

const sportsCategories = [
  "Cricket",
  "Football",
  "Tennis",
  "Hockey",
  "Athletics",
  "Other Sports",
];

export default function SportsNews() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Sports Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Sports
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              The latest from cricket, football, tennis and the wider sporting
              world.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            View All Sports
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* SPORT CATEGORIES */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {sportsCategories.map((category) => (
              <a
                key={category}
                href="#"
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* MAIN SPORTS GRID */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.45fr_0.8fr]">

          {/* FEATURED STORY */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">
            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[16/8]">
                <img
                  src={sportsStories[0].image}
                  alt={sportsStories[0].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6 md:p-8">

                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {sportsStories[0].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {sportsStories[0].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  {sportsStories[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {sportsStories[0].excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Read Sports Story →
                </div>

              </div>

            </a>
          </article>

          {/* SUPPORTING STORIES */}
          <div className="grid gap-5">

            {sportsStories.slice(1).map((story) => (
              <article
                key={story.title}
                className="group rounded-2xl border border-white/10 bg-[#0B2239] p-6 transition hover:bg-[#102D48]"
              >
                <a href="#" className="block">

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                      {story.category}
                    </span>

                    <span className="text-[10px] text-slate-600">
                      {story.time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-4 text-xl font-semibold leading-snug md:text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {story.excerpt}
                  </p>

                  <div className="mt-5 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                    Read →
                  </div>

                </a>
              </article>
            ))}

          </div>

        </div>

        {/* RESULTS / QUICK LINKS */}
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

          <a
            href="#"
            className="group bg-[#0B2239] p-5 transition hover:bg-[#102D48]"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Cricket
            </span>

            <p className="editorial-heading mt-2 text-lg font-semibold">
              Latest Matches
            </p>

            <span className="mt-3 block text-xs font-semibold text-slate-500 transition group-hover:text-white">
              Explore →
            </span>
          </a>

          <a
            href="#"
            className="group bg-[#0B2239] p-5 transition hover:bg-[#102D48]"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Fixtures
            </span>

            <p className="editorial-heading mt-2 text-lg font-semibold">
              Upcoming Games
            </p>

            <span className="mt-3 block text-xs font-semibold text-slate-500 transition group-hover:text-white">
              Explore →
            </span>
          </a>

          <a
            href="#"
            className="group bg-[#0B2239] p-5 transition hover:bg-[#102D48]"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Archive
            </span>

            <p className="editorial-heading mt-2 text-lg font-semibold">
              Sports Archive
            </p>

            <span className="mt-3 block text-xs font-semibold text-slate-500 transition group-hover:text-white">
              Explore →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}