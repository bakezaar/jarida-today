const heroStories = [
  {
    category: "Pakistan",
    title: "The stories shaping Pakistan today",
    excerpt:
      "A closer look at the developments, people and conversations shaping the country.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "World",
    title: "A changing world, viewed beyond the headlines",
    excerpt:
      "International developments and the wider context behind the day's biggest stories.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Culture",
    title: "Where heritage meets contemporary expression",
    excerpt:
      "Exploring the people, ideas and cultural movements shaping today's Pakistan.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HeroNews() {
  return (
    <section className="site-container py-10 md:py-14">

      {/* SECTION LABEL */}
      <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="editorial-label text-[#B4232D]">
            Front Page
          </p>

          <h1 className="editorial-heading mt-1 text-2xl font-semibold md:text-3xl">
            Today's Stories
          </h1>
        </div>

        <span className="hidden text-xs text-slate-500 sm:block">
          Lahore · Pakistan
        </span>
      </div>

      {/* HERO GRID */}
      <div className="grid gap-5 lg:grid-cols-[1.65fr_1fr]">

        {/* MAIN STORY */}
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

          <a href="#" className="block">

            <div className="editorial-image-wrapper aspect-[16/9]">
              <img
                src={heroStories[0].image}
                alt={heroStories[0].title}
                className="editorial-image"
              />
            </div>

            <div className="p-6 md:p-8">

              <p className="editorial-label text-[#B4232D]">
                {heroStories[0].category}
              </p>

              <h2 className="editorial-heading mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                {heroStories[0].title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                {heroStories[0].excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-slate-500">
                  Featured Story
                </span>

                <span className="text-sm font-semibold text-white transition group-hover:text-[#B4232D]">
                  Read Story →
                </span>
              </div>

            </div>

          </a>

        </article>

        {/* SECONDARY STORIES */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

          {heroStories.slice(1).map((story) => (
            <article
              key={story.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]"
            >
              <a href="#" className="grid sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">

                <div className="editorial-image-wrapper aspect-[4/3] lg:aspect-[16/8]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="editorial-image"
                  />
                </div>

                <div className="p-5">

                  <p className="editorial-label text-[#B4232D]">
                    {story.category}
                  </p>

                  <h3 className="editorial-heading mt-2 text-xl font-semibold leading-snug md:text-2xl">
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
    </section>
  );
}