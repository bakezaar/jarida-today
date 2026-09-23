const communityItems = [
  {
    category: "Letters",
    title: "Write to Jarida",
    description:
      "Share your thoughts, responses and perspectives with the editorial team.",
    action: "Send a Letter",
  },
  {
    category: "Newsletter",
    title: "Stay beyond the headlines",
    description:
      "Receive selected stories, ideas and cultural features from Jarida Today.",
    action: "Subscribe",
  },
  {
    category: "Reader Survey",
    title: "Tell us what you think",
    description:
      "Help shape the publication by sharing your experience and feedback.",
    action: "Take the Survey",
  },
  {
    category: "WhatsApp",
    title: "Follow Jarida directly",
    description:
      "Get important stories and updates through the Jarida Today WhatsApp channel.",
    action: "Join Channel",
  },
];

export default function CommunityHub() {
  return (
    <section className="border-t border-white/10">
      <div className="site-container py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="editorial-label text-[#B4232D]">
              Community
            </p>

            <h2 className="editorial-heading mt-2 text-4xl font-bold md:text-5xl">
              Stay Connected
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Read, respond, participate and stay connected with the people
              behind and beyond Jarida Today.
            </p>
          </div>

        </div>

        {/* COMMUNITY GRID */}
        <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {communityItems.map((item) => (
            <article
              key={item.category}
              className="group flex min-h-[260px] flex-col bg-[#0B2239] p-6 transition hover:bg-[#102D48] md:p-7"
            >
              <div className="flex items-center justify-between gap-3">

                <span className="editorial-label text-[#B4232D]">
                  {item.category}
                </span>

                <span className="text-lg text-slate-700 transition group-hover:text-slate-400">
                  ↗
                </span>

              </div>

              <div className="mt-auto pt-10">

                <h3 className="editorial-heading text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
                >
                  {item.action}
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