const desks = [
  {
    category: "Law",
    title: "The laws and legal questions shaping public life",
    excerpt:
      "Important legal developments, institutions and provisions explained with context.",
    time: "45 min ago",
  },
  {
    category: "Crime",
    title: "Reporting the facts behind crime and public safety",
    excerpt:
      "Following developments while keeping the focus on verified information and public interest.",
    time: "1 hr ago",
  },
  {
    category: "Health",
    title: "The health stories affecting communities",
    excerpt:
      "Developments, research and public health issues that matter to everyday life.",
    time: "1 hr ago",
  },
  {
    category: "Environment",
    title: "The changing environment around us",
    excerpt:
      "Climate, pollution, conservation and the environmental challenges facing Pakistan.",
    time: "2 hrs ago",
  },
];

export default function LawCrimeHealthEnvironment() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label text-[#B4232D]">
              Public Interest
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Law, Crime, Health & Environment
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            Reporting on the institutions, issues and developments that affect
            public life and everyday communities.
          </p>
        </div>

        {/* DESK GRID */}
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {desks.map((desk) => (
            <article
              key={desk.category}
              className="group flex min-h-[300px] flex-col bg-[#0B2239] p-6 transition hover:bg-[#102D48] md:p-7"
            >
              <div className="flex items-center justify-between gap-3">

                <span className="editorial-label text-[#B4232D]">
                  {desk.category}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#B4232D] opacity-70" />

              </div>

              <div className="mt-auto pt-12">

                <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600">
                  {desk.time}
                </div>

                <h3 className="editorial-heading mt-3 text-xl font-semibold leading-snug md:text-2xl">
                  {desk.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {desk.excerpt}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition group-hover:text-white"
                >
                  Explore {desk.category}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}