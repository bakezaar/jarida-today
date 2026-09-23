const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Latest News", href: "/articles" },
      { label: "Pakistan", href: "/category/pakistan" },
      { label: "World", href: "/category/world" },
      { label: "Culture", href: "/category/culture" },
      { label: "Ideas", href: "/category/ideas" },
    ],
  },
  {
    title: "Publication",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Print Edition", href: "/print-edition" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jaridatoday/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jaridatoday/",
  },
  {
    label: "X",
    href: "https://x.com/jaridatoday",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061525]">

      <div className="site-container py-14 md:py-16">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">

          {/* BRAND */}
          <div>

            <a href="/" className="group inline-block">
              <div className="editorial-heading text-3xl font-bold tracking-tight transition group-hover:text-slate-200 md:text-4xl">
                Jarida Today
              </div>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Beyond the Narrative
              </p>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              A contemporary digital newspaper bringing together journalism,
              ideas, culture and creative expression from Pakistan and beyond.
            </p>

            {/* CONTACT */}
            <div className="mt-7 space-y-2 text-sm text-slate-500">

              <p>
                120-D, Business Hub, Broadway Commercial,
                Phase-VIII, DHA, Lahore, 54000, Punjab, Pakistan
              </p>

              <a
                href="tel:+923466582352"
                className="block transition hover:text-white"
              >
                +92 346 6582 352
              </a>

              <a
                href="mailto:jaridaeditorial@gmail.com"
                className="block transition hover:text-white"
              >
                jaridaeditorial@gmail.com
              </a>

            </div>

            {/* WHATSAPP */}
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
            >
              Join our WhatsApp Channel
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">

            {footerSections.map((section) => (
              <div key={section.title}>

                <h2 className="editorial-label text-slate-300">
                  {section.title}
                </h2>

                <ul className="mt-5 space-y-3">

                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

        {/* SOCIAL + EDITORIAL IDENTITY */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">

          <div>

            <p className="editorial-label text-[#B4232D]">
              Jarida Today
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Quality journalism focused on development, cultural diversity,
              public conversation and stories that matter.
            </p>

          </div>

          <div>

            <p className="editorial-label text-slate-500">
              Follow
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-400 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  {social.label}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Jarida Today. All rights reserved.
          </p>

          <p>
            Lahore, Pakistan
          </p>

        </div>

      </div>

    </footer>
  );
}