const creativeStories = [
  {
    category: "Poetry",
    title: "Words that stay after the page is turned",
    excerpt:
      "Poetry that explores memory, longing, identity and the quiet moments between ordinary days.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    time: "1 hr ago",
  },
  {
    category: "Fiction",
    title: "Stories imagined from the fragments of real life",
    excerpt:
      "Fiction, short stories and imaginative writing from voices inside and beyond Pakistan.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=85",
    time: "2 hrs ago",
  },
  {
    category: "Letters",
    title: "What our readers have to say",
    excerpt:
      "A space for readers to share their thoughts, responses and perspectives.",
    time: "Today",
  },
  {
    category: "Cartoons",
    title: "A different way of seeing the news",
    excerpt:
      "Visual commentary that turns current conversations into a single frame.",
    time: "Today",
  },
  {
    category: "News Photos",
    title: "The story behind the photograph",
    excerpt:
      "Images that document people, places and moments beyond the written report.",
    time: "Today",
  },
  {
    category: "Audio",
    title: "Listen beyond the written word",
    excerpt:
      "Audio stories, conversations and voices from the Jarida Today newsroom.",
    time: "Today",
  },
];

export default function CreativeDesk() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Creative Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Creative
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Poetry, fiction, letters, cartoons, photography and audio that
              tell stories in forms beyond conventional news.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Explore Creative
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* FEATURED CREATIVE STORIES */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* POETRY */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[16/9]">
                <img
                  src={creativeStories[0].image}
                  alt={creativeStories[0].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6 md:p-8">

                <div className="flex items-center justify-between gap-4">
                  <span className="editorial-label text-[#B4232D]">
                    {creativeStories[0].category}
                  </span>

                  <span className="text-[11px] text-slate-600">
                    {creativeStories[0].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  {creativeStories[0].title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {creativeStories[0].excerpt}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-slate-300 transition group-hover:text-white">
                  Read Poetry →
                </div>

              </div>

            </a>

          </article>

          {/* FICTION */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <a href="#" className="block">

              <div className="editorial-image-wrapper aspect-[4/3]">
                <img
                  src={creativeStories[1].image}
                  alt={creativeStories[1].title}
                  className="editorial-image"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between gap-3">
                  <span className="editorial-label text-[#B4232D]">
                    {creativeStories[1].category}
                  </span>

                  <span className="text-[10px] text-slate-600">
                    {creativeStories[1].time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-3 text-2xl font-semibold leading-tight">
                  {creativeStories[1].title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {creativeStories[1].excerpt}
                </p>

                <div className="mt-5 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                  Explore Fiction →
                </div>

              </div>

            </a>

          </article>

        </div>

        {/* CREATIVE ARCHIVE STRIP */}
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {creativeStories.slice(2).map((story) => (
            <article
              key={story.category}
              className="group bg-[#0B2239] p-6 transition hover:bg-[#102D48]"
            >
              <a href="#" className="block">

                <div className="flex items-center justify-between gap-3">
                  <span className="editorial-label text-[#B4232D]">
                    {story.category}
                  </span>

                  <span className="text-[10px] text-slate-600">
                    {story.time}
                  </span>
                </div>

                <h3 className="editorial-heading mt-5 text-xl font-semibold leading-snug">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {story.excerpt}
                </p>

                <div className="mt-5 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                  Explore {story.category} →
                </div>

              </a>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}