const stories = [
  {
    category: "Literature",
    title: "The words, writers and ideas shaping our literary world",
    excerpt:
      "Exploring fiction, poetry, criticism and the writers giving new meaning to familiar stories.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1400&q=85",
    time: "1 hr ago",
  },
  {
    category: "Fashion",
    title: "Fashion as a language of identity",
    excerpt:
      "Designers and creators turning clothing into conversations about culture, memory and expression.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
    time: "2 hrs ago",
  },
  {
    category: "Media",
    title: "How media is changing the way we see the world",
    excerpt:
      "The platforms, creators and conversations reshaping contemporary media.",
    time: "3 hrs ago",
  },
  {
    category: "Entertainment",
    title: "Stories from film, television and popular culture",
    excerpt:
      "The people and productions creating conversations beyond the screen.",
    time: "4 hrs ago",
  },
];

export default function LiteratureFashionMedia() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Culture & Ideas
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Literature, Fashion & Media
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Writers, designers, creators and cultural voices shaping the
              conversations of today.
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

        {/* FEATURED MAGAZINE GRID */}
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LITERATURE FEATURE */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[16/9]">
                <img
                  src={stories[0].image}
                  alt={stories[0].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6 md:p-8">

                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {stories[0].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {stories[0].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  {stories[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {stories[0].excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Read Literature →
                </div>

              </div>

            </a>

          </article>

          {/* RIGHT COLUMN */}
          <div className="grid gap-5">

            {/* FASHION */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

              <a href="#" className="block">

                <div className="grid sm:grid-cols-[0.85fr_1.15fr]">

                  <div className="editorial-image-wrapper aspect-[4/3] sm:aspect-auto">
                    <img
                      src={stories[1].image}
                      alt={stories[1].title}
                      className="editorial-image"
                    />
                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between gap-3">
                      <span className="editorial-label text-[#B4232D]">
                        {stories[1].category}
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {stories[1].time}
                      </span>
                    </div>

                    <h3 className="editorial-heading mt-3 text-xl font-semibold leading-snug">
                      {stories[1].title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {stories[1].excerpt}
                    </p>

                    <div className="mt-4 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                      Explore Fashion →
                    </div>

                  </div>

                </div>

              </a>

            </article>

            {/* MEDIA + ENTERTAINMENT */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">

              {stories.slice(2).map((story) => (
                <article
                  key={story.title}
                  className="group bg-[#0B2239] p-5 transition hover:bg-[#102D48]"
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

                    <h3 className="editorial-heading mt-3 text-lg font-semibold leading-snug">
                      {story.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                      Explore {story.category} →
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