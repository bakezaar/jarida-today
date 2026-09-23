const editorPicks = [
  {
    category: "Editor's Pick",
    title: "The stories that deserve a little more of your time",
    excerpt:
      "A selection of stories chosen by the editorial desk for their depth, relevance and perspective.",
    time: "Today",
  },
  {
    category: "Editor's Pick",
    title: "Beyond the immediate news cycle",
    excerpt:
      "Reporting and ideas selected for the context they add to the larger conversation.",
    time: "Today",
  },
  {
    category: "Editor's Pick",
    title: "A story worth returning to",
    excerpt:
      "A closer look at a subject that continues to matter beyond today's headlines.",
    time: "Yesterday",
  },
];

const mostViewed = [
  {
    category: "Pakistan",
    title: "The story readers are talking about today",
    views: "12.4K views",
  },
  {
    category: "World",
    title: "The international story drawing the most attention",
    views: "9.8K views",
  },
  {
    category: "Culture",
    title: "A cultural story readers keep coming back to",
    views: "8.6K views",
  },
  {
    category: "Opinion",
    title: "The perspective generating conversation",
    views: "7.9K views",
  },
  {
    category: "Sports",
    title: "The latest sporting story readers are following",
    views: "6.7K views",
  },
];

export default function EditorsPicksMostViewed() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Inside Jarida
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Picks & Popular
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Stories selected by our editors alongside the articles readers
              are viewing most.
            </p>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* EDITOR'S PICKS */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="editorial-label text-[#B4232D]">
                  Curated by the Desk
                </p>

                <h3 className="editorial-heading mt-1 text-2xl font-bold">
                  Editor's Picks
                </h3>
              </div>

              <span className="hidden text-xs text-slate-600 sm:block">
                Handpicked
              </span>
            </div>

            <div>
              {editorPicks.map((story, index) => (
                <article
                  key={story.title}
                  className={`group p-6 transition hover:bg-[#102D48] md:p-7 ${
                    index !== editorPicks.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <a href="#" className="block">

                    <div className="flex items-center justify-between gap-4">
                      <span className="editorial-label text-[#B4232D]">
                        {story.category}
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {story.time}
                      </span>
                    </div>

                    <h4 className="editorial-heading mt-3 text-xl font-semibold leading-snug md:text-2xl">
                      {story.title}
                    </h4>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      {story.excerpt}
                    </p>

                    <div className="mt-5 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                      Read Story →
                    </div>

                  </a>
                </article>
              ))}
            </div>

          </div>

          {/* MOST VIEWED */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="border-b border-white/10 px-6 py-5">

              <p className="editorial-label text-[#B4232D]">
                Trending
              </p>

              <h3 className="editorial-heading mt-1 text-2xl font-bold">
                Most Viewed
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Automatically ranked by reader activity.
              </p>

            </div>

            <div>
              {mostViewed.map((story, index) => (
                <article
                  key={story.title}
                  className={`group transition hover:bg-[#102D48] ${
                    index !== mostViewed.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <a
                    href="#"
                    className="flex gap-5 p-5 md:p-6"
                  >

                    <span className="editorial-heading shrink-0 text-3xl font-bold text-slate-700 transition group-hover:text-[#B4232D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                        {story.category}
                      </span>

                      <h4 className="editorial-heading mt-2 text-lg font-semibold leading-snug">
                        {story.title}
                      </h4>

                      <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600">
                        {story.views}
                      </div>

                    </div>

                  </a>
                </article>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}