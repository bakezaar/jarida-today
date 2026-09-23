const pakistanStories = [
  {
    category: "Pakistan",
    title: "The stories shaping Pakistan beyond the headlines",
    excerpt:
      "A closer look at the people, places and developments shaping the country today.",
    time: "32 min ago",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Punjab",
    title: "Across Punjab, everyday life tells a larger story",
    excerpt:
      "Communities, cities and changing realities across Pakistan's most populous province.",
    time: "1 hr ago",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Society",
    title: "The people behind the numbers",
    excerpt:
      "Stories of ordinary lives, changing communities and the questions facing society.",
    time: "2 hrs ago",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Development",
    title: "What is changing across Pakistan?",
    excerpt:
      "From cities to smaller communities, development is reshaping how people live and work.",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=85",
  },
];

export default function PakistanNews() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label text-[#B4232D]">
              National Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Pakistan
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Reporting on the country, its people, institutions, communities
              and the stories shaping everyday life.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            View Pakistan News
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* EDITORIAL GRID */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.45fr_1fr]">

          {/* LEAD STORY */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">
            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[16/9]">
                <img
                  src={pakistanStories[0].image}
                  alt={pakistanStories[0].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {pakistanStories[0].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {pakistanStories[0].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  {pakistanStories[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {pakistanStories[0].excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Read Story →
                </div>
              </div>

            </a>
          </article>

          {/* SUPPORTING STORIES */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {pakistanStories.slice(1, 3).map((story) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]"
              >
                <a
                  href="#"
                  className="grid sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="editorial-image-wrapper aspect-[4/3] sm:aspect-auto">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="editorial-image"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="editorial-label text-[#B4232D]">
                        {story.category}
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {story.time}
                      </span>
                    </div>

                    <h3 className="editorial-heading mt-3 text-xl font-semibold leading-snug">
                      {story.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                      Read Story →
                    </div>
                  </div>
                </a>
              </article>
            ))}

          </div>
        </div>

        {/* LOWER STORY */}
        <article className="group mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">
          <a
            href="#"
            className="grid md:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="editorial-image-wrapper aspect-[16/9] md:aspect-auto">
              <img
                src={pakistanStories[3].image}
                alt={pakistanStories[3].title}
                className="editorial-image"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="flex items-center gap-4">
                <span className="editorial-label text-[#B4232D]">
                  {pakistanStories[3].category}
                </span>

                <span className="text-[11px] text-slate-600">
                  {pakistanStories[3].time}
                </span>
              </div>

              <h3 className="editorial-heading mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                {pakistanStories[3].title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                {pakistanStories[3].excerpt}
              </p>

              <span className="mt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                Explore Story →
              </span>
            </div>
          </a>
        </article>

      </div>
    </section>
  );
}