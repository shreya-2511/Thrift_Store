export const metadata = {
  title: "Contact | Thrift Books"
};

const contactCards = [
  {
    title: "Instagram",
    value: "@thriftbooks",
    href: "https://instagram.com/thriftbooks",
    desc: "DM us for fastest response"
  },
  {
    title: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999",
    desc: "Order help & book requests"
  },
  {
    title: "Email",
    value: "hello@thriftbooks.in",
    href: "mailto:hello@thriftbooks.in",
    desc: "General enquiries"
  }
];

export default function ContactPage() {
  return (
    <div className="shell py-16">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <p className="theme-badge">Contact Us</p>

        <h1 className="mt-6 text-4xl sm:text-5xl text-(--ink)">
          We'd love to hear from you
        </h1>

        <p className="mt-4 text-base leading-8 text-(--ink-muted)">
          Whether you’re looking for a specific book, need order help,
          or want to collaborate — feel free to reach out.
        </p>
      </section>


      {/* CONTACT CARDS */}
      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {contactCards.map((card, index) => (
          <a
            key={card.title}
            href={card.href}
            className={`${index === 1 ? "theme-panel-accent" : "glass"} rounded-4xl p-7 transition-all hover:-translate-y-2 hover:shadow-lg`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-(--ink-soft)">
              {card.title}
            </p>

            <p className="mt-4 text-2xl text-(--ink)">
              {card.value}
            </p>

            <p className="mt-2 text-sm text-(--ink-muted)">
              {card.desc}
            </p>
          </a>
        ))}
      </section>


      {/* FORM + INFO */}
      <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

        {/* FORM */}
        <div className="theme-panel rounded-[2.5rem] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-(--accent)">
            Enquiry Form
          </p>

          <h2 className="mt-4 text-3xl text-(--ink)">
            Send us a message
          </h2>

          <p className="mt-3 text-sm leading-7 text-(--ink-muted)">
            Book requests, custom reading sets, collaborations, or support —
            just fill the form below.
          </p>

          <form
            className="mt-8 space-y-5"
            action="mailto:hello@thriftbooks.in"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="contact-input"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="contact-input"
              />

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp Number"
                className="contact-input"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="contact-input"
              />

            </div>

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us what you're looking for..."
              className="contact-input resize-y"
            />

            <button
              type="submit"
              className="rounded-xl border-2 border-(--accent) bg-(--accent) px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#111] transition hover:bg-(--accent-light)"
            >
              Send Message
            </button>
          </form>
        </div>


        {/* INFO PANEL */}
        <div className="theme-panel-light rounded-[2.5rem] p-8">

          <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
            Business Location
          </p>

          <p className="mt-4 text-4xl text-(--ink)">
            Mumbai, India
          </p>

          <p className="mt-4 text-sm leading-7 text-(--ink-muted)">
            We ship books across India. All orders are prepaid and
            carefully packed before shipping.
          </p>


          <div className="mt-10 border-t border-(--border) pt-6">

            <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              Response Time
            </p>

            <p className="mt-2 text-sm leading-7 text-(--ink-muted)">
              Most messages are answered within 24 hours on working days.
            </p>

          </div>


          <div className="mt-8 rounded-2xl border border-(--border) bg-(--canvas-soft) p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              Tip
            </p>

            <p className="mt-2 text-sm leading-7 text-(--ink-muted)">
              For fastest replies, reach out via Instagram DM or WhatsApp.
            </p>

          </div>

        </div>
      </section>


      {/* TRUST SECTION */}
      <section className="mt-16 text-center border border-(--border) bg-(--canvas-soft) rounded-4xl py-10 px-6">

        <p className="text-sm uppercase tracking-[0.2em] text-(--accent)">
          Trusted by Readers
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-(--ink-muted)">
          Thrift Books has served 14,000+ happy customers across India,
          delivering affordable books and curated reading experiences.
        </p>

      </section>

    </div>
  );
}
