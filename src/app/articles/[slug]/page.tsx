import Link from "next/link";

import Header from "@/components/layout/Header";
import NewsTicker from "@/components/layout/NewsTicker";
import Footer from "@/components/layout/Footer";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Article = {
  slug: string;
  category: string;
  title: string;
  subheading: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  paragraphs: string[];
};
export function generateStaticParams() {
  return [
    { slug: "a-changing-pakistan-through-the-eyes-of-its-cities" },
    { slug: "the-stories-behind-the-headlines" },
    { slug: "inside-the-conversations-shaping-public-life" },
    { slug: "how-communities-are-reimagining-everyday-spaces" },
    { slug: "memory-heritage-and-the-new-cultural-conversation" },
  ];
}
const articles: Record<string, Article> = {
  "a-changing-pakistan-through-the-eyes-of-its-cities": {
    slug: "a-changing-pakistan-through-the-eyes-of-its-cities",
    category: "Pakistan",
    title: "A Changing Pakistan Through the Eyes of Its Cities",
    subheading:
      "A closer look at the people, places and conversations shaping everyday life across the country.",
    author: "Jarida Editorial",
    date: "23 September 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=90",
    paragraphs: [
      "Pakistan is often described through its biggest headlines, but the country's story is also being written quietly in its streets, neighbourhoods, markets, universities and public spaces.",
      "From Lahore to Karachi, Islamabad to Peshawar, cities continue to evolve alongside the people who live in them. Their changing rhythms reveal something larger about the country itself.",
      "Every city carries its own character. Historic streets sit alongside modern developments, while traditional businesses operate beside new creative and technological communities. These contrasts create a constantly changing urban landscape.",
      "For many people, these changes are experienced not through statistics but through everyday life. A familiar road looks different. A neighbourhood gains new spaces. A once quiet area becomes a centre of activity.",
      "Journalism has an important role in documenting these changes. Breaking news tells readers what happened, while deeper reporting can help explain why it matters and how it affects people.",
      "Looking beyond the immediate headline creates room for conversations about communities, culture, development, identity and the experiences that are sometimes overlooked.",
      "Pakistan's cities will continue to change. Their stories will continue to grow with them, shaped by the people who occupy these spaces every day.",
    ],
  },

  "the-stories-behind-the-headlines": {
    slug: "the-stories-behind-the-headlines",
    category: "Pakistan",
    title: "The Stories Behind the Headlines",
    subheading:
      "Beyond breaking news, communities continue to shape the country's wider social conversation.",
    author: "Jarida Report",
    date: "23 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1800&q=90",
    paragraphs: [
      "News is often consumed in fragments: a headline, a photograph, a notification and then the next story. Yet behind every headline are people, communities and circumstances that deserve a closer look.",
      "Across Pakistan, ordinary experiences frequently reveal the wider forces shaping society. Conversations in neighbourhoods, workplaces and public spaces can tell stories that breaking news alone cannot capture.",
      "Good journalism creates room for those stories. It connects events with context and gives readers an opportunity to understand the people affected by them.",
      "The stories behind the headlines are often slower, quieter and more human. They remind us that news is ultimately about people.",
    ],
  },

  "inside-the-conversations-shaping-public-life": {
    slug: "inside-the-conversations-shaping-public-life",
    category: "Politics",
    title: "Inside the Conversations Shaping Public Life",
    subheading:
      "An overview of the issues currently occupying Pakistan's political discourse.",
    author: "Jarida Editorial",
    date: "22 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=90",
    paragraphs: [
      "Political conversations extend far beyond official statements and parliamentary proceedings. They also take place in homes, universities, workplaces and public spaces.",
      "The issues discussed by citizens often reflect questions about governance, opportunity, representation and the future direction of society.",
      "Understanding these conversations requires attention to both public institutions and the experiences of ordinary people.",
      "For journalism, the challenge is to provide context while allowing readers to examine different perspectives for themselves.",
    ],
  },

  "how-communities-are-reimagining-everyday-spaces": {
    slug: "how-communities-are-reimagining-everyday-spaces",
    category: "Society",
    title: "How Communities Are Reimagining Everyday Spaces",
    subheading:
      "From neighbourhoods to public places, ordinary spaces can reveal extraordinary stories.",
    author: "Zahra Noor",
    date: "22 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    paragraphs: [
      "The places people share can tell us a great deal about the communities that use them. Streets, parks, markets and public buildings become part of everyday social life.",
      "Across growing cities, communities are finding new ways to use familiar spaces. Some changes are planned, while others emerge naturally through the way people interact with their surroundings.",
      "These spaces can create opportunities for connection, creativity and civic participation.",
      "Looking closely at everyday environments can therefore reveal broader stories about how societies change.",
    ],
  },

  "memory-heritage-and-the-new-cultural-conversation": {
    slug: "memory-heritage-and-the-new-cultural-conversation",
    category: "Culture",
    title: "Memory, Heritage and the New Cultural Conversation",
    subheading:
      "What happens when history meets the visual language of contemporary Pakistan?",
    author: "Jarida Culture",
    date: "21 September 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f4?auto=format&fit=crop&w=1800&q=90",
    paragraphs: [
      "Cultural memory does not remain fixed in the past. It continues to influence the way communities understand themselves and the way artists interpret the present.",
      "Across Pakistan, designers, writers, photographers and artists are finding contemporary ways to engage with heritage.",
      "The result is a cultural conversation in which old references can acquire new meanings.",
      "For audiences, this creates an opportunity to encounter history not simply as something preserved, but as something that continues to participate in contemporary life.",
    ],
  },
};

const relatedStories = [
  {
    category: "Pakistan",
    title: "The Stories Behind the Headlines",
    date: "23 September 2026",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=700&q=85",
    slug: "the-stories-behind-the-headlines",
  },
  {
    category: "Society",
    title: "How Communities Are Reimagining Everyday Spaces",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=85",
    slug: "how-communities-are-reimagining-everyday-spaces",
  },
  {
    category: "Culture",
    title: "Memory, Heritage and the New Cultural Conversation",
    date: "21 September 2026",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988f4?auto=format&fit=crop&w=700&q=85",
    slug: "memory-heritage-and-the-new-cultural-conversation",
  },
];

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <NewsTicker />

        <main className="site-container py-24 text-center">

          <p className="editorial-label text-[#B4232D]">
            404
          </p>

          <h1 className="editorial-heading mt-4 text-5xl font-bold">
            Story Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            The story you are looking for could not be found in the current
            Jarida Today archive.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#B4232D] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#8F1C24]"
          >
            Back to Jarida Today
          </Link>

        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      <Header />

      <NewsTicker />

      <main>

        {/* ARTICLE HEADER */}
        <section className="border-b border-white/10">

          <div className="site-container py-12 md:py-16">

            <Link
              href={`/category/${article.category.toLowerCase()}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition hover:text-white"
            >
              <span>←</span>
              {article.category}
            </Link>

            <div className="mx-auto mt-10 max-w-5xl">

              <p className="editorial-label text-[#B4232D]">
                {article.category}
              </p>

              <h1 className="editorial-heading mt-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                {article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
                {article.subheading}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">

                <span className="font-medium text-slate-400">
                  {article.author}
                </span>

                <span>•</span>

                <span>{article.date}</span>

                <span>•</span>

                <span>{article.readTime}</span>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURE IMAGE */}
        <section className="border-b border-white/10">

          <div className="site-container py-8 md:py-12">

            <div className="editorial-image-wrapper overflow-hidden rounded-2xl">

              <img
                src={article.image}
                alt={article.title}
                className="editorial-image aspect-[16/8] object-cover"
              />

            </div>

          </div>

        </section>

        {/* ARTICLE BODY */}
        <section className="site-container py-12 md:py-16">

          <div className="grid gap-12 lg:grid-cols-[minmax(0,760px)_300px] lg:justify-center">

            <article>

              <div className="space-y-6 text-[17px] leading-8 text-slate-300">

                {article.paragraphs.map((paragraph, index) => (

                  <div key={index}>

                    {index === 2 && (
                      <h2 className="editorial-heading mb-6 pt-6 text-3xl font-bold text-white">
                        {article.category === "Culture"
                          ? "A changing cultural landscape"
                          : article.category === "Politics"
                          ? "Understanding the conversation"
                          : article.category === "Society"
                          ? "Spaces that bring people together"
                          : "Cities as living stories"}
                      </h2>
                    )}

                    {index === 4 && (
                      <blockquote className="my-10 border-l-2 border-[#B4232D] pl-6 text-xl leading-8 text-white md:text-2xl">
                        The stories behind the headlines are often where the
                        human experience becomes visible.
                      </blockquote>
                    )}

                    <p>{paragraph}</p>

                  </div>

                ))}

              </div>

              {/* ARTICLE FOOTER */}
              <div className="mt-12 border-t border-white/10 pt-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="editorial-label text-[#B4232D]">
                      Written by
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white">
                      {article.author}
                    </p>

                  </div>

                  <div className="flex gap-2">

                    <button
                      type="button"
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400 transition hover:border-white/25 hover:text-white"
                    >
                      Share
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400 transition hover:border-white/25 hover:text-white"
                    >
                      Save
                    </button>

                  </div>

                </div>

              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="space-y-5 lg:pt-2">

              <div className="rounded-2xl border border-white/10 bg-[#0B2239] p-6">

                <p className="editorial-label text-[#B4232D]">
                  Most Viewed
                </p>

                <h2 className="editorial-heading mt-3 text-2xl font-semibold">
                  Readers Are Reading
                </h2>

                <div className="mt-6 space-y-5">

                  {relatedStories.map((story, index) => (

                    <Link
                      key={story.slug}
                      href={`/article/${story.slug}`}
                      className="group block"
                    >

                      <div className="flex gap-4">

                        <span className="editorial-heading text-2xl font-bold text-slate-700 transition group-hover:text-[#B4232D]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>

                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B4232D]">
                            {story.category}
                          </p>

                          <h3 className="mt-1 text-sm font-medium leading-6 text-slate-400 transition group-hover:text-white">
                            {story.title}
                          </h3>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

              </div>

            </aside>

          </div>

        </section>

        {/* RELATED STORIES */}
        <section className="border-t border-white/10">

          <div className="site-container py-12 md:py-16">

            <div className="flex items-end justify-between border-b border-white/10 pb-5">

              <div>

                <p className="editorial-label text-[#B4232D]">
                  Continue Reading
                </p>

                <h2 className="editorial-heading mt-2 text-3xl font-bold">
                  More from Jarida Today
                </h2>

              </div>

              <Link
                href="/articles"
                className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 transition hover:text-white sm:block"
              >
                View All →
              </Link>

            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">

              {relatedStories.map((story) => (

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

                      <p className="editorial-label text-[#B4232D]">
                        {story.category}
                      </p>

                      <h3 className="editorial-heading mt-2 text-2xl font-semibold leading-tight">
                        {story.title}
                      </h3>

                      <p className="mt-4 text-[11px] text-slate-600">
                        {story.date}
                      </p>

                    </div>

                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}