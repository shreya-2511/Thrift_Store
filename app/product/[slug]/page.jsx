import { notFound } from "next/navigation";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import ProductMediaGallery from "@/components/ProductMediaGallery";
import { formatPrice, getProductBySlug, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.collection === product.collection && item.id !== product.id).slice(0, 3);

  return (
    <div className="shell py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <ProductMediaGallery product={product} />
        <div className="space-y-6">
          <div className="glass rounded-4xl p-8">
            <p className="theme-badge">{product.collection}</p>
            <h1 className="mt-5 text-4xl text-(--ink) sm:text-5xl">{product.name}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="theme-chip mt-5">{product.category}</span>
              <span className={`mt-5 rounded-full px-4 py-2 text-sm uppercase tracking-[0.14em] ${product.stock === 0 ? "status-bad" : product.stock <= 5 ? "status-alert" : "status-good"}`}>
                {product.stock === 0 ? "Sold Out" : product.stock <= 5 ? `Only ${product.stock} left` : "In stock"}
              </span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-(--gold-soft)">{formatPrice(product.price)}</p>
            <p className="mt-5 text-base leading-8 text-(--ink-muted)">{product.description}</p>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                <dt className="text-(--ink-soft)">Category</dt>
                <dd className="mt-1 font-semibold text-(--ink)">{product.category}</dd>
              </div>
              <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                <dt className="text-(--ink-soft)">Availability</dt>
                <dd className="mt-1 font-semibold text-(--ink)">{product.stock === 0 ? "Sold out" : `${product.stock} units ready to ship`}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <ProductActions product={product} />
            </div>
          </div>
          <div className="theme-panel-light rounded-4xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#705a40]">Why shoppers buy this</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5c4a36]">
              <li>Carefully packed for gifting and unboxing content.</li>
              <li>Great fit for bookstagram desks, reading vlogs, and themed shelves.</li>
              <li>Prepaid checkout with UPI or Razorpay support.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="mb-8 flex flex-col gap-5">
          <div className="max-w-2xl">
            <p className="theme-badge">Related</p>
            <h2 className="mt-4 text-3xl leading-tight text-(--ink) sm:text-4xl">You may also like</h2>
            <div className="theme-divider mt-4 max-w-sm" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
