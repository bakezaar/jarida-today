const politicsStories = [
  {
    category: "Politics",
    title: "The political questions shaping the national conversation",
    excerpt:
      "Key developments, decisions and debates from Pakistan's political landscape.",
    time: "28 min ago",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Politics",
    title: "What the latest political developments mean",
    excerpt:
      "Context and analysis around the issues dominating political discussion.",
    time: "1 hr ago",
  },
  {
    category: "Politics",
    title: "Inside the institutions shaping public life",
    excerpt:
      "A closer look at decisions, institutions and the people behind them.",
    time: "2 hrs ago",
  },
];

const worldStories = [
  {
    category: "World",
    title: "A changing world, viewed beyond the headlines",
    excerpt:
      "International developments and the wider context behind today's global stories.",
    time: "42 min ago",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "World",
    title: "Across borders, the stories connecting us",
    excerpt:
      "People, places and developments shaping conversations around the world.",
    time: "1 hr ago",
  },
];

export default function PoliticsWorld() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* SECTION INTRO */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label text-[#B4232D]">
              News Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Politics & World
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            Political developments at home and the international stories
            shaping the wider world.
          </p>
        </div>

        {/* MAIN TWO COLUMN EDITORIAL LAYOUT */}
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* POLITICS */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="editorial-label text-[#B4232D]">
                Politics
              </span>

              <a
                href="#"
                className="text-xs font-semibold text-slate-500 transition hover:text-white"
              >
                View All →
              </a>
            </div>

            {/* LEAD POLITICS STORY */}
            <article className="group">
              <a href="#" className="block">

                <div className="editorial-image-wrapper aspect-[16/8]">
                  <img
                    src={politicsStories[0].image}
                    alt={politicsStories[0].title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {politicsStories[0].category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {politicsStories[0].time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-3 text-2xl font-bold leading-tight md:text-3xl">
                    {politicsStories[0].title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {politicsStories[0].excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    Read Story →
                  </div>
                </div>

              </a>
            </article>

            {/* SMALL POLITICS STORIES */}
            <div className="grid border-t border-white/10 sm:grid-cols-2">

              {politicsStories.slice(1).map((story) => (
                <article
                  key={story.title}
                  className="group border-white/10 p-5 transition hover:bg-white/[0.03] sm:p-6 sm:[&+article]:border-l"
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

                    <h4 className="editorial-heading mt-3 text-lg font-semibold leading-snug">
                      {story.title}
                    </h4>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                      Read →
                    </div>

                  </a>
                </article>
              ))}

            </div>

          </div>

          {/* WORLD */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="editorial-label text-[#B4232D]">
                World
              </span>

              <a
                href="#"
                className="text-xs font-semibold text-slate-500 transition hover:text-white"
              >
                View All →
              </a>
            </div>

            {/* LEAD WORLD STORY */}
            <article className="group">
              <a href="#" className="block">

                <div className="editorial-image-wrapper aspect-[16/9]">
                  <img
                    src={worldStories[0].image}
                    alt={worldStories[0].title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {worldStories[0].category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {worldStories[0].time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-3 text-2xl font-bold leading-tight">
                    {worldStories[0].title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {worldStories[0].excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    Read Story →
                  </div>
                </div>

              </a>
            </article>

            {/* SECOND WORLD STORY */}
            <article className="group border-t border-white/10 p-6">
              <a href="#" className="block">

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                    {worldStories[1].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {worldStories[1].time}
                  </span>
                </div>

                <h4 className="editorial-heading mt-3 text-xl font-semibold leading-snug">
                  {worldStories[1].title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {worldStories[1].excerpt}
                </p>

                <div className="mt-4 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                  Read →
                </div>

              </a>
            </article>

          </div>

        </div>

      </div>
    </section>
  );
}