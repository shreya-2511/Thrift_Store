import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import HeroSpotlight from "@/components/HeroSpotlight";
import InstagramStatsTicker from "@/components/InstagramStatsTicker";
import { categoryGroups, instagramPosts, instagramStats, products, testimonials } from "@/lib/data";

const featuredProducts = products.slice(0, 4);
const merchProducts = products.filter((product) => product.collection !== "Books").slice(0, 4);
const bookBestsellers = products.filter((product) => product.collection === "Books").slice(0, 4);

export default function HomePage() {
  const heroStats = [
    { label: "Collectors waiting", value: "40k+" },
    { label: "Orders packed", value: "14k+" },
    { label: "Across India", value: "PAN" }
  ];

  const marqueeItems = [
    "Collector editions",
    "Dark academia stationery",
    "Harry Potter keepsakes",
    "Pre-loved classics",
    "Gift-ready parcels",
    "Instagram drop energy"
  ];

  return (
    <div className="bg-(--canvas)">
      {/* Hero Section - Full Width Image */}
      <section className="relative overflow-hidden">
        <HeroSpotlight />
        
        {/* Stats below hero */}
        <div className="shell py-12">
          <div className="mx-auto flex max-w-md justify-between border-t border-(--border) pt-8">
            {heroStats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl text-(--accent)">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-(--ink-soft)">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Separator */}
      <section className="shell">
              <div className="border-b border-[rgba(199,182,151,0.62)]">
                <div className="shell flex flex-wrap items-center justify-between gap-3 py-2 text-[17px] font-semibold uppercase tracking-[0.28em] text-(--ink-soft)">
                  <p>Owls dispatch across India</p>
                  <p>Prepaid orders only</p>
                </div>
              </div>
        <div className="border-t border-(--border) py-6">
          <div className="marquee-shell">
            <div className="marquee-track w-max items-center gap-12 will-change-transform">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <p key={`${item}-${index}`} className="whitespace-nowrap text-sm uppercase tracking-[0.3em] text-(--ink-soft)">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Editorial Grid */}
      <section className="shell pt-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Collections</p>
          <div className="mx-auto mt-2 h-px w-16 bg-(--accent)" />
          <h2 className="mt-8 text-4xl text-(--ink) lg:text-5xl">Browse by Category</h2>
        </div>
        
        <div className="grid gap-px bg-[rgba(199,182,151,0.3)] md:grid-cols-2 lg:grid-cols-5">
          {categoryGroups.map((group, index) => (
            <div key={group.title} className="bg-(--canvas) p-8 hover:bg-(--surface) transition-colors">
              <h3 className="text-xl text-(--ink)">{group.title}</h3>
              <div className="mt-4 space-y-1">
                {group.items.map((item) => (
                  <p key={item} className="text-sm text-(--ink-muted)">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products - Minimal */}
      <section className="shell pt-20">
        <div className="mb-12 flex items-end justify-between border-b border-(--border) pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Curated</p>
            <h2 className="mt-2 text-4xl text-(--ink)">Featured Selection</h2>
          </div>
          <Link 
            href="/shop" 
            className="text-sm uppercase tracking-[0.2em] text-(--accent) hover:text-(--accent-light) border-b border-(--accent) pb-1"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <div className="mb-12 flex items-end justify-between border-b border-(--border) pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Specialty</p>
            <h2 className="mt-2 text-4xl text-(--ink)">Harry Potter Collection</h2>
          </div>
          <Link 
            href="/shop?q=harry%20potter" 
            className="text-sm uppercase tracking-[0.2em] text-(--accent) hover:text-(--accent-light) border-b border-(--accent) pb-1"
          >
            View All
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {merchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <div className="mb-12 flex items-end justify-between border-b border-(--border) pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Popular</p>
            <h2 className="mt-2 text-4xl text-(--ink)">Best-Selling Books</h2>
          </div>
          <Link 
            href="/shop?q=books" 
            className="text-sm uppercase tracking-[0.2em] text-(--accent) hover:text-(--accent-light) border-b border-(--accent) pb-1"
          >
            View All
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bookBestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shell pt-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Testimonials</p>
          <div className="mx-auto mt-2 h-px w-16 bg-(--accent)" />
          <h2 className="mt-8 text-4xl text-(--ink)">Reader Reviews</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <article key={review.name} className="border-l-2 border-(--accent) pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-(--accent)">{review.tag}</p>
              <p className="mt-4 text-lg leading-8 text-(--ink)">"{review.quote}"</p>
              <p className="mt-6 text-sm text-(--ink-muted)">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Social Proof - Instagram */}
      <section className="shell pt-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Social</p>
          <div className="mx-auto mt-2 h-px w-16 bg-(--accent)" />
          <h2 className="mt-8 text-4xl text-(--ink)">From our Community</h2>
        </div>
        
        <div className="mb-6 overflow-hidden border border-(--border) bg-(--canvas) md:flex md:items-center">
          <div className="relative h-60 md:h-44 md:w-80 md:shrink-0">
            <Image src="/images/instagram/image.png" alt="Thrift Books Instagram profile snapshot" fill className="object-cover" />
          </div>
          <div className="w-full bg-linear-to-br from-(--accent-muted) to-(--panel)">
            <InstagramStatsTicker stats={instagramStats} />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {instagramPosts.map((post) => (
            <article key={post.id} className="overflow-hidden border border-(--border) bg-(--canvas) hover:bg-(--panel) transition-colors">
              <div className="relative h-72">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-lg font-semibold text-(--ink)">{post.title}</p>
                <p className="mt-2 text-sm leading-6 text-(--ink-muted)">{post.caption}</p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4">
            <a
              href="https://www.instagram.com/thrift_.books?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-2 border-(--accent) px-6 py-3 text-sm uppercase tracking-[0.2em] text-(--accent) hover:bg-(--accent) hover:text-[#111] transition-all"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2.1" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.1" />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
              </svg>
              Follow Instagram
            </a>
            <a
              href="https://youtube.com/@khushi_kotak?si=MJT1X7r52pY4HRgx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-2 border-(--accent) px-6 py-3 text-sm uppercase tracking-[0.2em] text-(--accent) hover:bg-(--accent) hover:text-[#111] transition-all"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23 12c0 2.44-.3 4.22-.58 5.17a3.27 3.27 0 0 1-2.25 2.25c-.95.28-2.73.58-8.17.58s-7.22-.3-8.17-.58a3.27 3.27 0 0 1-2.25-2.25C1.3 16.22 1 14.44 1 12s.3-4.22.58-5.17A3.27 3.27 0 0 1 3.83 4.58C4.78 4.3 6.56 4 12 4s7.22.3 8.17.58a3.27 3.27 0 0 1 2.25 2.25C22.7 7.78 23 9.56 23 12Zm-13.5 3.9 6.2-3.9-6.2-3.9v7.8Z" />
              </svg>
              Watch YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Editorial */}
      <section className="shell pt-20 pb-20">
        <div className="border-2 border-(--accent) bg-(--accent-muted) px-8 py-16 text-center sm:px-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Shop Now</p>
            <h2 className="mt-6 text-4xl leading-tight text-(--ink) lg:text-5xl">
              No more "Available hai?" in DMs.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-(--ink-muted)">
              Customers can browse, add to bag, and place prepaid orders in one smooth flow.
            </p>
            <div className="mt-10">
              <Link 
                href="/shop" 
                className="inline-block font-semibold border-2 border-(--accent-dark) bg-(--accent-dark) px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#111] transition-all duration-300 hover:bg-transparent hover:text-(--accent)"
              >
                Shop the full collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
