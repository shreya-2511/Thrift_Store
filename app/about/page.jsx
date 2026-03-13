export const metadata = {
  title: "About | Thrift Books"
};

export default function AboutPage() {
  const values = [
    {
      title: "Our Promise",
      body: "Every title we share is chosen with care to make reading affordable, joyful, and worth returning to."
    },
    {
      title: "Our Vision",
      body: "To build a warm reader-first space where stories are easy to discover and exciting to collect."
    },
    {
      title: "Our Craft",
      body: "From curated book sets to giveaway planning, each detail is designed to feel personal and community-led."
    },
    {
      title: "Our Community",
      body: "More than customers, we are a shared network of readers who support, recommend, and grow together."
    }
  ];

  return (
    <div className="shell py-16">

      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto">
        <p className="theme-badge">Our Story</p>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-(--ink) leading-tight">
          A small Instagram page that turned into a community of readers.
        </h1>

        <p className="mt-6 text-base leading-8 text-(--ink-muted)">
          Thrift Books started with a simple belief — books should be affordable and accessible
          to everyone. What began with Instagram DMs slowly became a growing reader
          community across India.
        </p>
      </section>


      {/* FOUNDER STORY */}
      <section className="mt-20 grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Image Placeholder */}
        <div className="rounded-[2rem] overflow-hidden border border-(--border)">
          <div className="h-[420px] bg-(--canvas-soft) flex items-center justify-center text-(--ink-muted)">
            Founder Image
          </div>
        </div>

        {/* Story */}
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
            Founder
          </p>

          <h2 className="mt-4 text-3xl text-(--ink)">
            Built with passion by Khushi Kotak
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-(--ink-muted)">
            <p>
              I’m Khushi Kotak, founder of Thrift Books and Shop Your Fav Books.
              I always believed reading should never feel expensive or inaccessible.
            </p>

            <p>
              What started as a small Instagram initiative quickly grew as readers
              began discovering affordable pre-loved and new books through my page.
            </p>

            <p>
              Orders initially came through Instagram DMs, and each conversation
              helped build trust and connection with readers across the country.
            </p>
          </div>
        </div>
      </section>


      {/* STORY SECTIONS (like FairyLoot) */}
      <section className="mt-24 space-y-20">

        {/* Section 1 */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          <div>
            <h3 className="text-3xl text-(--ink)">From DMs to 14,000+ readers</h3>

            <p className="mt-6 text-base leading-8 text-(--ink-muted)">
              Over time, the small Instagram project transformed into a trusted
              community of readers. Today, Thrift Books ships across India and
              continues to grow through reader recommendations and word of mouth.
            </p>

            <p className="mt-4 text-base leading-8 text-(--ink-muted)">
              With every order packed personally, the aim has always been the same —
              make reading affordable while keeping the experience warm and personal.
            </p>
          </div>

          <div className="rounded-[2rem] border border-(--border) bg-(--canvas-soft) h-[350px] flex items-center justify-center text-(--ink-muted)">
            Community Image
          </div>
        </div>


        {/* Section 2 */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          <div className="order-2 lg:order-1 rounded-[2rem] border border-(--border) bg-(--canvas-soft) h-[350px] flex items-center justify-center text-(--ink-muted)">
            Books Image
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl text-(--ink)">
              More than just selling books
            </h3>

            <p className="mt-6 text-base leading-8 text-(--ink-muted)">
              Thrift Books focuses on building a reader-first environment where
              people can discover new stories, explore curated sets, and enjoy
              book culture together.
            </p>

            <p className="mt-4 text-base leading-8 text-(--ink-muted)">
              Along with Instagram, YouTube content and community campaigns
              bring readers closer to giveaways, launches, and book discussions.
            </p>
          </div>
        </div>

      </section>


      {/* VALUES */}
      <section className="mt-24 text-center">

        <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
          Our Values
        </p>

        <h2 className="mt-4 text-3xl text-(--ink)">
          What drives Thrift Books
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <article
              key={item.title}
              className="glass rounded-3xl p-6 text-left"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
                {item.title}
              </p>

              <p className="mt-3 text-sm leading-7 text-(--ink-muted)">
                {item.body}
              </p>
            </article>
          ))}
        </div>

      </section>


      {/* FINAL MESSAGE */}
      <section className="mt-24 text-center max-w-3xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-(--accent)">
          The Journey Continues
        </p>

        <p className="mt-6 text-lg leading-8 text-(--ink-muted)">
          Thank you for being part of this journey. Because every book deserves
          a reader, and every reader deserves a story.
        </p>

      </section>

    </div>
  );
}
