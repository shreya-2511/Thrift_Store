import { instagramPosts, testimonials } from "@/lib/data";

export const metadata = {
  title: "Reviews | Thrift Books"
};

export default function ReviewsPage() {
  return (
    <div className="shell py-12">
      <div className="hero-card glass max-w-4xl rounded-[2.5rem] p-8 sm:p-10">
        <p className="theme-badge">Reviews</p>
        <h1 className="mt-5 text-5xl text-[var(--ink)]">Customer love, packed like Instagram highlights</h1>
        <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
          Delivered orders, parcel aesthetics, and repeat buyers are a major part of the Thrift Books story. This page mirrors that proof-heavy social feel.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((review, index) => (
          <article key={review.name} className="glass overflow-hidden rounded-[2rem]">
            <div className={`h-72 bg-gradient-to-br ${index === 0 ? "from-[#4f1d16] via-[#7e5434] to-[#e7d7bb]" : index === 1 ? "from-[#173126] via-[#4a6647] to-[#d8c49f]" : "from-[#0b0c08] via-[#6c5840] to-[#e7d7bb]"}`} />
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--ink-soft)]">{review.tag}</p>
              <p className="mt-4 text-xl leading-8 text-[var(--ink)]">“{review.quote}”</p>
              <p className="mt-5 text-sm text-[var(--ink-muted)]">{review.name}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {instagramPosts.map((post, index) => (
          <article key={post.id} className={`${index === 1 ? "theme-panel-light text-[var(--ink-dark)]" : "glass text-[var(--ink)]"} rounded-[2rem] p-6`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${index === 1 ? "text-[#705a40]" : "text-[var(--ink-soft)]"}`}>Highlight {index + 1}</p>
            <p className="mt-3 text-2xl">{post.title}</p>
            <p className={`mt-3 text-sm leading-7 ${index === 1 ? "text-[#5c4a36]" : "text-[var(--ink-muted)]"}`}>{post.caption}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
