const ideas = [
  {
    category: "Opinion",
    title: "The questions behind the stories we read every day",
    excerpt:
      "Perspectives from writers and contributors examining the ideas, choices and debates shaping public life.",
    time: "1 hr ago",
    featured: true,
  },
  {
    category: "Editorial",
    title: "Beyond the headline: what deserves our attention?",
    excerpt:
      "Jarida Today's editorial perspective on the issues that demand a closer look.",
    time: "2 hrs ago",
    featured: true,
  },
  {
    category: "Technology",
    title: "Technology is changing more than the tools we use",
    excerpt:
      "How digital systems are reshaping communication, work and everyday life.",
    time: "3 hrs ago",
    featured: false,
  },
  {
    category: "Science",
    title: "The discoveries helping us understand a changing world",
    excerpt:
      "Research, evidence and scientific developments explained beyond the technical language.",
    time: "4 hrs ago",
    featured: false,
  },
  {
    category: "Philosophy",
    title: "Questions without easy answers",
    excerpt:
      "Exploring the ideas that make us pause, question and reconsider what we think we know.",
    time: "5 hrs ago",
    featured: false,
  },
  {
    category: "Abstract",
    title: "Thoughts that resist a simple category",
    excerpt:
      "Ideas, observations and unusual perspectives from beyond the conventional newsroom.",
    time: "6 hrs ago",
    featured: false,
  },
  {
    category: "Spotlight",
    title: "A closer look at one story worth knowing",
    excerpt:
      "People, subjects and conversations receiving the deeper attention they deserve.",
    time: "Today",
    featured: false,
  },
];

export default function IdeasAnalysis() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Ideas Desk
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Ideas & Analysis
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Opinion, analysis, technology, science and the questions behind
              the stories shaping our world.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Explore Ideas
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* OPINION + EDITORIAL */}
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">

          {ideas
            .filter((idea) => idea.featured)
            .map((idea) => (
              <article
                key={idea.category}
                className="group bg-[#0B2239] p-7 transition hover:bg-[#102D48] md:p-8"
              >
                <a href="#" className="block">

                  <div className="flex items-center justify-between gap-4">
                    <span className="editorial-label text-[#B4232D]">
                      {idea.category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {idea.time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-5 max-w-xl text-2xl font-bold leading-tight md:text-3xl">
                    {idea.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                    {idea.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-xs text-slate-600">
                      Jarida Ideas
                    </span>

                    <span className="text-sm font-semibold text-slate-300 transition group-hover:text-white">
                      Read {idea.category} →
                    </span>

                  </div>

                </a>
              </article>
            ))}

        </div>

        {/* TECHNOLOGY + SCIENCE */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          {ideas
            .filter(
              (idea) =>
                idea.category === "Technology" ||
                idea.category === "Science"
            )
            .map((idea) => (
              <article
                key={idea.category}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239] transition hover:border-white/20 hover:bg-[#102D48]"
              >
                <a href="#" className="block p-6 md:p-7">

                  <div className="flex items-center justify-between gap-4">
                    <span className="editorial-label text-[#B4232D]">
                      {idea.category}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {idea.time}
                    </span>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-6">

                    <div>
                      <h3 className="editorial-heading text-2xl font-semibold leading-tight md:text-3xl">
                        {idea.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                        {idea.excerpt}
                      </p>
                    </div>

                    <span className="hidden shrink-0 text-3xl text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-white sm:block">
                      →
                    </span>

                  </div>

                </a>
              </article>
            ))}

        </div>

        {/* PHILOSOPHY + ABSTRACT + SPOTLIGHT */}
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">

          {ideas
            .filter(
              (idea) =>
                idea.category === "Philosophy" ||
                idea.category === "Abstract" ||
                idea.category === "Spotlight"
            )
            .map((idea) => (
              <article
                key={idea.category}
                className="group bg-[#0B2239] p-6 transition hover:bg-[#102D48] md:p-7"
              >
                <a href="#" className="block">

                  <div className="flex items-center justify-between gap-3">
                    <span className="editorial-label text-[#B4232D]">
                      {idea.category}
                    </span>

                    <span className="text-[10px] text-slate-600">
                      {idea.time}
                    </span>
                  </div>

                  <h3 className="editorial-heading mt-5 text-xl font-semibold leading-snug">
                    {idea.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {idea.excerpt}
                  </p>

                  <div className="mt-5 text-xs font-semibold text-slate-500 transition group-hover:text-white">
                    Explore {idea.category} →
                  </div>

                </a>
              </article>
            ))}

        </div>

      </div>
    </section>
  );
}