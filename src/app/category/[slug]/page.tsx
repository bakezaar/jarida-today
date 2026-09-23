import Link from "next/link";

import Header from "@/components/layout/Header";
import NewsTicker from "@/components/layout/NewsTicker";
import Footer from "@/components/layout/Footer";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Story = {
  category: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
};

const categoryNames: Record<string, string> = {
  "latest-news": "Latest News",
  pakistan: "Pakistan",
  politics: "Politics",
  world: "World",
  "economy-business": "Economy & Business",
  education: "Education",
  health: "Health",
  law: "Law",
  crime: "Crime",
  environment: "Environment",
  sports: "Sports",

  "arts-culture": "Arts & Culture",
  history: "History",
  fashion: "Fashion",
  media: "Media",
  society: "Society",
  entertainment: "Entertainment",
  literature: "Literature",
  "book-reviews": "Book Reviews",

  opinion: "Opinion",
  editorial: "Editorial",
  technology: "Technology",
  science: "Science",
  philosophy: "Philosophy",
  abstract: "Abstract",
  spotlight: "Spotlight",

  poetry: "Poetry",
  fiction: "Fiction",
  letters: "Letters",
  cartoons: "Cartoons",
  "news-photos": "News Photos",
  audio: "Audio",

  "print-edition": "Print Edition",
  magazine: "Magazine",
  "special-features": "Special Features",
};
export function generateStaticParams() {
  return Object.keys(categoryNames).map((slug) => ({
    slug,
  }));
}

const sampleStories: Story[] = [
  {
    category: "Pakistan",
    title: "A Changing Pakistan Through the Eyes of Its Cities",
    slug: "a-changing-pakistan-through-the-eyes-of-its-cities",
    excerpt:
      "A closer look at the people, places and conversations shaping everyday life across the country.",
    author: "Jarida Editorial",
    date: "23 September 2026",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    category: "Pakistan",
    title: "The Stories Behind the Headlines",
    slug: "the-stories-behind-the-headlines",
    excerpt:
      "Beyond breaking news, communities continue to shape the country's wider social conversation.",
    author: "Jarida Report",
    date: "23 September 2026",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Politics",
    title: "Inside the Conversations Shaping Public Life",
    slug: "inside-the-conversations-shaping-public-life",
    excerpt:
      "An overview of the issues currently occupying Pakistan's political discourse.",
    author: "Jarida Editorial",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Society",
    title: "How Communities Are Reimagining Everyday Spaces",
    slug: "how-communities-are-reimagining-everyday-spaces",
    excerpt:
      "From neighbourhoods to public places, ordinary spaces can reveal extraordinary stories.",
    author: "Zahra Noor",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Culture",
    title: "Memory, Heritage and the New Cultural Conversation",
    slug: "memory-heritage-and-the-new-cultural-conversation",
    excerpt:
      "What happens when history meets the visual language of contemporary Pakistan?",
    author: "Jarida Culture",
    date: "21 September 2026",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f4?auto=format&fit=crop&w=900&q=85",
  },
];

const mostViewed = [
  {
    title: "The stories readers are talking about today",
    slug: "the-stories-readers-are-talking-about-today",
  },
  {
    title: "What is changing across Pakistan's cities",
    slug: "what-is-changing-across-pakistans-cities",
  },
  {
    title: "A conversation about culture and identity",
    slug: "a-conversation-about-culture-and-identity",
  },
  {
    title: "Beyond the headlines: stories worth reading",
    slug: "beyond-the-headlines-stories-worth-reading",
  },
  {
    title: "The week's most discussed ideas",
    slug: "the-weeks-most-discussed-ideas",
  },
];

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const categoryName =
    categoryNames[slug] ?? formatSlug(slug);

  const stories = sampleStories.map((story) => ({
    ...story,
    category: categoryName,
  }));

  const featuredStory = stories[0];
  const remainingStories = stories.slice(1);

  return (
    <div className="min-h-screen">

      <Header />

      <NewsTicker />

      <main>

        {/* CATEGORY HEADER */}
        <section className="border-b border-white/10">

          <div className="site-container py-12 md:py-16">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition hover:text-white"
            >
              <span>←</span>
              Jarida Today
            </Link>

            <div className="mt-8">

              <p className="editorial-label text-[#B4232D]">
                Section
              </p>

              <h1 className="editorial-heading mt-3 text-5xl font-bold md:text-6xl">
                {categoryName}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                The latest stories, reporting and perspectives from the{" "}
                {categoryName.toLowerCase()} section of Jarida Today.
              </p>

            </div>

          </div>

        </section>

        {/* FILTER BAR */}
        <section className="border-b border-white/10 bg-[#061525]">

          <div className="site-container py-4">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex flex-wrap gap-2">

                <button
                  type="button"
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#071A2F]"
                >
                  Latest
                </button>

                <button
                  type="button"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500 transition hover:border-white/25 hover:text-white"
                >
                  Most Viewed
                </button>

                <button
                  type="button"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-500 transition hover:border-white/25 hover:text-white"
                >
                  This Week
                </button>

              </div>

              <div className="text-xs text-slate-600">
                {categoryName}
              </div>

            </div>

          </div>

        </section>

        {/* MAIN CONTENT */}
        <section className="site-container py-12 md:py-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* STORIES */}
            <div>

              <div className="flex items-end justify-between border-b border-white/10 pb-5">

                <div>

                  <p className="editorial-label text-[#B4232D]">
                    Latest Stories
                  </p>

                  <h2 className="editorial-heading mt-2 text-3xl font-bold">
                    {categoryName}
                  </h2>

                </div>

                <span className="hidden text-xs text-slate-600 sm:block">
                  Updated continuously
                </span>

              </div>

              {/* FEATURED STORY */}
              <article className="group mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239]">

                <Link href={`/article/${featuredStory.slug}`}>

                  <div className="grid md:grid-cols-[1.2fr_0.8fr]">

                    <div className="editorial-image-wrapper aspect-[16/10] md:aspect-auto">

                      <img
                        src={featuredStory.image}
                        alt={featuredStory.title}
                        className="editorial-image"
                      />

                    </div>

                    <div className="flex flex-col justify-center p-6 md:p-8">

                      <span className="editorial-label text-[#B4232D]">
                        {featuredStory.category}
                      </span>

                      <h3 className="editorial-heading mt-3 text-3xl font-bold leading-tight md:text-4xl">
                        {featuredStory.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {featuredStory.excerpt}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-600">

                        <span>{featuredStory.author}</span>

                        <span>•</span>

                        <span>{featuredStory.date}</span>

                      </div>

                      <span className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-semibold text-slate-300 transition group-hover:text-white">

                        Read Story

                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>

                      </span>

                    </div>

                  </div>

                </Link>

              </article>

              {/* STORY GRID */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {remainingStories.map((story) => (

                  <article
                    key={story.slug}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2239] transition hover:border-white/20 hover:bg-[#102D48]"
                  >

                    <Link href={`/article/${story.slug}`}>

                      <div className="editorial-image-wrapper aspect-[16/10]">

                        <img
                          src={story.image}
                          alt={story.title}
                          className="editorial-image"
                        />

                      </div>

                      <div className="p-5">

                        <span className="editorial-label text-[#B4232D]">
                          {story.category}
                        </span>

                        <h3 className="editorial-heading mt-2 text-2xl font-semibold leading-tight">
                          {story.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                          {story.excerpt}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-[11px] text-slate-600">

                          <span>{story.author}</span>

                          <span>•</span>

                          <span>{story.date}</span>

                        </div>

                      </div>

                    </Link>

                  </article>

                ))}

              </div>

              {/* LOAD MORE */}
              <div className="mt-10 flex justify-center">

                <button
                  type="button"
                  className="rounded-full border border-white/10 px-6 py-3 text-xs font-semibold text-slate-400 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  Load More Stories
                </button>

              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5">

              <div className="rounded-2xl border border-white/10 bg-[#0B2239] p-6">

                <p className="editorial-label text-[#B4232D]">
                  Most Viewed
                </p>

                <h2 className="editorial-heading mt-3 text-2xl font-semibold">
                  Readers Are Reading
                </h2>

                <div className="mt-6 space-y-5">

                  {mostViewed.map((story, index) => (

                    <Link
                      key={story.slug}
                      href="#"
                      className="group flex gap-4"
                    >

                      <span className="editorial-heading text-2xl font-bold text-slate-700 transition group-hover:text-[#B4232D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="pt-1 text-sm leading-6 text-slate-400 transition group-hover:text-white">
                        {story.title}
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-[#102D48] p-6">

                <p className="editorial-label text-[#B4232D]">
                  Newsletter
                </p>

                <h2 className="editorial-heading mt-3 text-2xl font-semibold">
                  Beyond the Headlines
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