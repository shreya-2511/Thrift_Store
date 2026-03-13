import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[rgba(223,194,139,0.12)] bg-[rgba(8,7,5,0.85)]">

      {/* MAIN FOOTER */}
      <div className="shell grid gap-12 py-14 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <p className="theme-badge">Thrift Books</p>

          <h3 className="mt-4 text-3xl leading-tight text-(--ink)">
            A warmer storefront for readers.
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-(--ink-muted)">
            Discover affordable pre-loved and new books with curated collections,
            aesthetic reading sets, and a growing community of readers across India.
          </p>

          <p className="mt-6 text-xs text-(--ink-soft)">
            Mumbai, India
          </p>
        </div>


        {/* SHOP LINKS */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-(--ink-soft)">
            Shop
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-(--ink-muted)">
            <Link href="/shop" className="hover:text-(--gold-soft)">
              All Products
            </Link>

            <Link href="/shop/books" className="hover:text-(--gold-soft)">
              Books
            </Link>

            <Link href="/shop/harry-potter" className="hover:text-(--gold-soft)">
              Harry Potter Merchandise
            </Link>

            <Link href="/shop/accessories" className="hover:text-(--gold-soft)">
              Book Accessories
            </Link>
          </div>
        </div>


        {/* COMPANY */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-(--ink-soft)">
            Company
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-(--ink-muted)">
            <Link href="/about" className="hover:text-(--gold-soft)">
              Our Story
            </Link>

            <Link href="/reviews" className="hover:text-(--gold-soft)">
              Customer Reviews
            </Link>

            <Link href="/contact" className="hover:text-(--gold-soft)">
              Contact Us
            </Link>

            <Link href="/faq" className="hover:text-(--gold-soft)">
              FAQs
            </Link>
          </div>
        </div>


        {/* SUPPORT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-(--ink-soft)">
            Support
          </p>

          <div className="mt-4 space-y-3 text-sm text-(--ink-muted)">
            <p>Instagram-first bookstore</p>
            <p>40k+ followers</p>
            <p>14k+ happy customers</p>
            <p>No Cash on Delivery</p>
            <p>Payment required before shipping</p>
          </div>
        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="border-t border-[rgba(223,194,139,0.12)]">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-(--ink-soft) md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Thrift Books. All rights reserved.
          </p>

          <div className="flex gap-6 uppercase tracking-[0.12em]">
            <Link href="/privacy" className="hover:text-(--gold-soft)">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-(--gold-soft)">
              Terms
            </Link>

            <Link href="/shipping" className="hover:text-(--gold-soft)">
              Shipping
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
