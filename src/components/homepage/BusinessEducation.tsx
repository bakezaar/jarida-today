const businessStories = [
  {
    category: "Business",
    title: "The economic developments shaping businesses and consumers",
    excerpt:
      "A closer look at markets, businesses, investment and the economic questions affecting everyday life.",
    time: "36 min ago",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Economy",
    title: "What the latest economic numbers tell us",
    excerpt:
      "Understanding the figures behind the country's changing economic landscape.",
    time: "1 hr ago",
  },
  {
    category: "Business",
    title: "Inside the businesses building what comes next",
    excerpt:
      "Entrepreneurs, companies and ideas changing the way Pakistan does business.",
    time: "2 hrs ago",
  },
];

const educationStories = [
  {
    category: "Education",
    title: "The changing face of education in Pakistan",
    excerpt:
      "How students, teachers and institutions are navigating a rapidly changing educational landscape.",
    time: "49 min ago",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Education",
    title: "Inside classrooms beyond the headlines",
    excerpt:
      "The people and ideas shaping learning across the country.",
    time: "2 hrs ago",
  },
];

export default function BusinessEducation() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* SECTION HEADER */}
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label text-[#B4232D]">
              Economy & Public Life
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Business & Education
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            The markets, businesses, institutions and educational stories
            influencing Pakistan's future.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">

          {/* BUSINESS */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B4232D]" />

                <span className="editorial-label text-white">
                  Business & Economy
                </span>
              </div>

              <a
                href="#"
                className="text-xs font-semibold text-slate-500 transition hover:text-white"
              >
                View All →
              </a>
            </div>

            {/* FEATURED BUSINESS STORY */}
            <article className="group">
              <a href="#" className="block">

                <div className="editorial-image-wrapper aspect-[16/8]">
                  <img
                    src={businessStories[0].image}
                    alt={businessStories[0].title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-6 md:p-7">

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                      {businessStories[0].category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {businessStories[0].time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-3 text-2xl font-bold leading-tight md:text-3xl">
                    {businessStories[0].title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                    {businessStories[0].excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    Read Story →
                  </div>

                </div>

              </a>
            </article>

            {/* BUSINESS SUPPORTING STORIES */}
            <div className="grid border-t border-white/10 sm:grid-cols-2">

              {businessStories.slice(1).map((story) => (
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

          {/* EDUCATION */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B4232D]" />

                <span className="editorial-label text-white">
                  Education
                </span>
              </div>

              <a
                href="#"
                className="text-xs font-semibold text-slate-500 transition hover:text-white"
              >
                View All →
              </a>
            </div>

            {/* FEATURED EDUCATION STORY */}
            <article className="group">
              <a href="#" className="block">

                <div className="editorial-image-wrapper aspect-[16/9]">
                  <img
                    src={educationStories[0].image}
                    alt={educationStories[0].title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                      {educationStories[0].category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {educationStories[0].time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-3 text-2xl font-bold leading-tight">
                    {educationStories[0].title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {educationStories[0].excerpt}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                    Read Story →
                  </div>

                </div>

              </a>
            </article>

            {/* SECOND EDUCATION STORY */}
            <article className="group border-t border-white/10 p-6">
              <a href="#" className="block">

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B4232D]">
                    {educationStories[1].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {educationStories[1].time}
                  </span>
                </div>

                <h4 className="editorial-heading mt-3 text-xl font-semibold leading-snug">
                  {educationStories[1].title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {educationStories[1].excerpt}
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