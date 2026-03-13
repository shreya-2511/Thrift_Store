"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ShopClient({ products, initialQuery = "", showWishlistOnly = false, wishlist = [] }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [priceBand, setPriceBand] = useState("all");

  const categories = useMemo(() => ["All", ...new Set(products.map((product) => product.category))], [products]);

  const filtered = useMemo(() => {
    const source = showWishlistOnly ? products.filter((product) => wishlist.some((item) => item.id === product.id)) : products;

    return source
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => {
        if (priceBand === "under500") return product.price < 500;
        if (priceBand === "500to1000") return product.price >= 500 && product.price <= 1000;
        if (priceBand === "above1000") return product.price > 1000;
        return true;
      })
      .filter((product) => {
        if (!initialQuery) return true;
        const text = `${product.name} ${product.category} ${product.collection}`.toLowerCase();
        return text.includes(initialQuery.toLowerCase());
      })
      .sort((a, b) => {
        if (sort === "new") return Number(b.isNew) - Number(a.isNew);
        if (sort === "priceLow") return a.price - b.price;
        if (sort === "priceHigh") return b.price - a.price;
        return Number(b.isPopular) - Number(a.isPopular);
      });
  }, [category, initialQuery, priceBand, products, showWishlistOnly, sort, wishlist]);

  return (
    <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="glass h-fit rounded-4xl p-6 md:sticky md:top-24">
        <p className="theme-badge">Filters</p>
        <h2 className="mt-4 text-2xl text-(--ink)">Refine the shelf</h2>
        <div className="mt-6 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--ink-soft)">Category</p>
            <div className="mt-3 flex flex-col gap-1.5">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`w-full rounded-full px-4 py-2 text-left text-sm uppercase tracking-[0.12em] ${category === item ? "bg-(--gold) text-(--ink-dark)" : "bg-white/6 text-(--ink-muted)"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-(--ink-soft)">Price</label>
            <select
              value={priceBand}
              onChange={(event) => setPriceBand(event.target.value)}
              className="theme-select mt-3 px-4 py-3 text-sm"
            >
              <option value="all">All prices</option>
              <option value="under500">Under Rs. 500</option>
              <option value="500to1000">Rs. 500 - Rs. 1000</option>
              <option value="above1000">Above Rs. 1000</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.28em] text-(--ink-soft)">Sort</label>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="theme-select mt-3 px-4 py-3 text-sm"
            >
              <option value="popular">Popular items</option>
              <option value="new">New arrivals</option>
              <option value="priceLow">Price: low to high</option>
              <option value="priceHigh">Price: high to low</option>
            </select>
          </div>
        </div>
      </aside>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-(--ink-soft)">{filtered.length} products</p>
          {initialQuery ? <p className="text-sm uppercase tracking-[0.18em] text-(--ink-soft)">Search: {initialQuery}</p> : null}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
