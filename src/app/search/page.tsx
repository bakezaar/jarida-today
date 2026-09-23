import Link from "next/link";

import Header from "@/components/layout/Header";
import NewsTicker from "@/components/layout/NewsTicker";
import Footer from "@/components/layout/Footer";

type SearchResult = {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
};

const sampleResults: SearchResult[] = [
  {
    category: "Pakistan",
    title: "A Changing Pakistan Through the Eyes of Its Cities",
    excerpt:
      "A closer look at the people, places and conversations shaping everyday life across the country.",
    author: "Jarida Editorial",
    date: "23 September 2026",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85",
    slug: "a-changing-pakistan-through-the-eyes-of-its-cities",
  },
  {
    category: "Politics",
    title: "Inside the Conversations Shaping Public Life",
    excerpt:
      "An overview of the issues currently occupying Pakistan's political discourse.",
    author: "Jarida Editorial",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
    slug: "inside-the-conversations-shaping-public-life",
  },
  {
    category: "Society",
    title: "How Communities Are Reimagining Everyday Spaces",
    excerpt:
      "From neighbourhoods to public places, ordinary spaces can reveal extraordinary stories.",
    author: "Zahra Noor",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    slug: "how-communities-are-reimagining-everyday-spaces",
  },
  {
    category: "Culture",
    title: "Memory, Heritage and the New Cultural Conversation",
    excerpt:
      "What happens when history meets the visual language of contemporary Pakistan?",
    author: "Jarida Culture",
    date: "21 September 2026",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f4?auto=format&fit=crop&w=900&q=85",
    slug: "memory-heritage-and-the-new-cultural-conversation",
  },
  {
    category: "Pakistan",
    title: "The Stories Behind the Headlines",
    excerpt:
      "Beyond breaking news, communities continue to shape the country's wider social conversation.",
    author: "Jarida Report",
    date: "23 September 2026",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=85",
    slug: "the-stories-behind-the-headlines",
  },
  {
    category: "World",
    title: "Understanding a World in Constant Motion",
    excerpt:
      "The international developments, people and ideas shaping conversations beyond borders.",
    author: "Jarida World",
    date: "20 September 2026",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=85",
    slug: "understanding-a-world-in-constant-motion",
  },
];

const categories = [
  "All",
  "Pakistan",
  "Politics",
  "World",
  "Economy & Business",
  "Education",
  "Health",
  "Culture",
  "Sports",
  "Opinion",
];

export default function SearchPage() {
  return (
    <div className="min-h-screen">

      <Header />

      <NewsTicker />

      <main>

        {/* SEARCH HERO */}
        <section className="border-b border-white/10">

          <div className="site-container py-12 md:py-16">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition hover:text-white"
            >
              <span>←</span>
              Jarida Today
            </Link>

            <div className="mt-10">

              <p className="editorial-label text-[#B4232D]">
                Search
              </p>

              <h1 className="editorial-heading mt-3 text-5xl font-bold md:text-6xl">
                Find a Story
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                Search Jarida Today&apos;s reporting, ideas, culture and
                archives.
              </p>

            </div>

            <div className="mt-8 max-w-4xl">

              <form
                action="/search"
                method="GET"
                className="flex flex-col gap-3 sm:flex-row"
              >

                <div className="relative flex-1">

                  <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-600">
                    ⌕
                  </span>

                  <input
                    type="search"
                    name="q"
                    placeholder="Search stories, topics, authors..."
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#0B2239] pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#B4232D]"
                  />

                </div>

                <button
                  type="submit"
                  className="h-14 rounded-xl bg-[#B4232D] px-8 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#8F1C24]"
                >
                  Search
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* FILTER BAR */}
        <section className="border-b border-white/10 bg-[#061525]">

          <div className="site-container py-4">

            <div className="flex flex-wrap items-center gap-2">

              <span className="mr-2 text-xs text-slate-600">
                Filter:
              </span>

              {categories.map((category, index) => (

                <button
                  key={category}
                  type="button"
                  className={
                    index === 0
                      ? "rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#071A2F]"
                      : "rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500 transition hover:border-white/25 hover:text-white"
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

        </section>

        {/* RESULTS */}
        <section className="site-container py-12 md:py-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* RESULTS LIST */}
            <section>

              <div className="flex items-end justify-between border-b border-white/10 pb-5">

                <div>

                  <p className="editorial-label text-[#B4232D]">
                    Search Results
                  </p>

                  <h2 className="editorial-heading mt-2 text-3xl font-bold">
                    Latest Stories
                  </h2>

                </div>

                <span className="text-xs text-slate-600">
                  {sampleResults.length} stories
                </span>

              </div>

              <div className="mt-7 space-y-5">

                {sampleResults.map((result) => (

                  <article
                    key={result.slug}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239] transition hover:border-white/20 hover:bg-[#102D48]"
                  >

                    <Link
                      href={`/article/${result.slug}`}
                      className="grid md:grid-cols-[240px_1fr]"
                    >

                      <div className="editorial-image-wrapper aspect-[16/10] md:aspect-auto">

                        <img
                          src={result.image}
                          alt={result.title}
                          className="editorial-image"
                        />

                      </div>

                      <div className="flex flex-col justify-center p-5 md:p-6">

                        <span className="editorial-label text-[#B4232D]">
                          {result.category}
                        </span>

                        <h3 className="editorial-heading mt-2 text-2xl font-semibold leading-tight">
                          {result.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                          {result.excerpt}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">

                          <span>{result.author}</span>

                          <span>•</span>

                          <span>{result.date}</span>

                        </div>

                      </div>

                    </Link>

                  </article>

                ))}

              </div>

            </section>

            {/* SIDEBAR */}
            <aside className="space-y-5">

              <div className="rounded-2xl border border-white/10 bg-[#0B2239] p-6">

                <p className="editorial-label text-[#B4232D]">
                  Explore
                </p>

                <h2 className="editorial-heading mt-3 text-2xl font-semibold">
                  Browse Sections
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-2">

                  {[
                    ["Pakistan", "/category/pakistan"],
                    ["Politics", "/category/politics"],
                    ["World", "/category/world"],
                    ["Business", "/category/economy-business"],
                    ["Culture", "/category/arts-culture"],
                    ["Sports", "/category/sports"],
                    ["Opinion", "/category/opinion"],
                    ["Technology", "/category/technology"],
                  ].map(([label, href]) => (

                    <Link
                      key={label}
                      href={href}
                      className="rounded-lg border border-white/10 px-3 py-3 text-xs text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                    >
                      {label}
                    </Link>

                  ))}

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-[#102D48] p-6">

                <p className="editorial-label text-[#B4232D]">
                  Beyond the Headlines
                </p>

                <h2 className="editorial-heading mt-3 text-2xl font-semibold">
                  Stay Connected
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Receive selected stories, ideas and cultural features from
                  Jarida Today.
                </p>

                <div className="mt-5 space-y-3">

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl border border-white/10 bg-[#071A2F] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-[#B4232D]"
                  />

                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#B4232D] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#8F1C24]"
                  >
                    Subscribe
                  </button>

                </div>

              </div>

            </aside>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}