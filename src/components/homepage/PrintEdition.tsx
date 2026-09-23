const editions = [
  {
    type: "Latest Print Edition",
    issue: "Issue 01",
    date: "September 2026",
    title: "Jarida Today",
    description:
      "The latest edition of Jarida Today, bringing together the week's journalism, ideas, culture and creative work.",
    cover:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    type: "Previous Edition",
    issue: "Issue 00",
    date: "August 2026",
    title: "Jarida Today",
    description:
      "Browse an earlier edition of the publication.",
    cover:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=700&q=85",
    featured: false,
  },
  {
    type: "Magazine",
    issue: "Special Issue",
    date: "2026",
    title: "Jarida Magazine",
    description:
      "Long form stories, culture, ideas and special features in magazine format.",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=85",
    featured: false,
  },
];

export default function PrintEdition() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Print & Magazine
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              The Print Edition
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Read the publication beyond the website through digital editions,
              archived issues and special magazine features.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            View All Editions
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* EDITION GRID */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LATEST EDITION */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

            <a href="#" className="block">

              <div className="grid md:grid-cols-[0.75fr_1.25fr]">

                <div className="editorial-image-wrapper aspect-[3/4] md:aspect-auto">
                  <img
                    src={editions[0].cover}
                    alt={`${editions[0].title} ${editions[0].date}`}
                    className="editorial-image"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8">

                  <div className="flex items-center justify-between gap-4">
                    <span className="editorial-label text-[#B4232D]">
                      {editions[0].type}
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {editions[0].date}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {editions[0].issue}
                  </p>

                  <h3 className="editorial-heading mt-2 text-3xl font-bold md:text-4xl">
                    {editions[0].title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {editions[0].description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">

                    <span className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#071A2F] transition group-hover:bg-[#B4232D] group-hover:text-white">
                      Read Edition →
                    </span>

                    <span className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold text-slate-400">
                      Open PDF
                    </span>

                  </div>

                </div>

              </div>

            </a>

          </article>

          {/* OTHER EDITIONS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {editions.slice(1).map((edition) => (
              <article
                key={`${edition.type}-${edition.date}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239] transition hover:bg-[#102D48]"
              >
                <a
                  href="#"
                  className="grid sm:grid-cols-[0.65fr_1.35fr]"
                >

                  <div className="editorial-image-wrapper aspect-[3/4] sm:aspect-auto">
                    <img
                      src={edition.cover}
                      alt={`${edition.title} ${edition.date}`}
                      className="editorial-image"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-5">

                    <span className="editorial-label text-[#B4232D]">
                      {edition.type}
                    </span>

                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                      {edition.issue} · {edition.date}
                    </p>

                    <h3 className="editorial-heading mt-2 text-xl font-semibold">
                      {edition.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {edition.description}
                    </p>

                    <span className="mt-4 text-xs font-semibold text-slate-400 transition group-hover:text-white">
                      View Edition →
                    </span>

                  </div>

                </a>
              </article>
            ))}

          </div>

        </div>

        {/* DIGITAL READING NOTE */}
        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-300">
              Digital reading experience
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              Future editions will open directly in the browser through the
              built in PDF viewer.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
          >
            Browse Archive
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}