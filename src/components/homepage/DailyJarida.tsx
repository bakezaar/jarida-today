const dailyFeatures = [
  {
    category: "Quote of the Day",
    label: "A thought for today",
    title: "The stories we tell shape the way we understand the world.",
    source: "Jarida Today",
  },
  {
    category: "Poem of the Day",
    label: "Today's poetry",
    title: "Some words arrive quietly, then stay with us for years.",
    source: "Jarida Poetry",
  },
  {
    category: "Legal Provision of the Day",
    label: "Know the law",
    title: "Understanding the law begins with knowing the provision behind it.",
    source: "Jarida Legal Desk",
  },
  {
    category: "Author of the Week",
    label: "Writer in focus",
    title: "A closer look at the writer, ideas and work behind the words.",
    source: "Jarida Literature",
  },
];

export default function DailyJarida() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Daily Jarida
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              A Little More to Read
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Small daily features offering a thought, a poem, a legal insight
              and a closer look at the people behind the words.
            </p>
          </div>

          <span className="text-xs text-slate-600">
            Updated by the editorial desk
          </span>

        </div>

        {/* DAILY FEATURES */}
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {dailyFeatures.map((feature, index) => (
            <article
              key={feature.category}
              className={`group flex min-h-[300px] flex-col bg-[#0B2239] p-6 transition hover:bg-[#102D48] md:p-7 ${
                index === 0 ? "lg:bg-[#102D48]" : ""
              }`}
            >
              <a href="#" className="flex h-full flex-col">

                <div className="flex items-start justify-between gap-4">

                  <span className="editorial-label text-[#B4232D]">
                    {feature.category}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-slate-500 transition group-hover:border-white/25 group-hover:text-white">
                    {index + 1}
                  </span>

                </div>

                <div className="mt-auto pt-12">

                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                    {feature.label}
                  </p>

                  <h3 className="editorial-heading mt-3 text-xl font-semibold leading-snug md:text-2xl">
                    {feature.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                    <span className="text-[10px] text-slate-600">
                      {feature.source}
                    </span>

                    <span className="text-xs font-semibold text-slate-400 transition group-hover:text-white">
                      Explore →
                    </span>

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