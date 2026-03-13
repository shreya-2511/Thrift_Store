"use client";

import { useState } from "react";
import { formatPrice, orderSamples, products as seedProducts } from "@/lib/data";

export default function AdminPage() {
  const [products, setProducts] = useState(seedProducts);

  function markSoldOut(id) {
    setProducts((current) => current.map((item) => (item.id === id ? { ...item, stock: 0, badge: "Sold Out" } : item)));
  }

  function restock(id) {
    setProducts((current) => current.map((item) => (item.id === id ? { ...item, stock: 10, badge: "Restocked" } : item)));
  }

  function removeProduct(id) {
    setProducts((current) => current.filter((item) => item.id !== id));
  }

  return (
    <div className="shell py-12">
      <div className="hero-card glass mb-8 rounded-[2.5rem] p-8 sm:p-10">
        <p className="theme-badge">Admin dashboard</p>
        <h1 className="mt-5 text-5xl text-(--ink)">Catalog and orders</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-(--ink-muted)">
          This is the UI scaffold for product management. Connect it to the Express and Mongo endpoints in `server/` for persistence.
        </p>
      </div>
      <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
        <section className="glass rounded-4xl p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl text-(--ink)">Products</h2>
            <button className="theme-button-primary px-4 py-2">Add new product</button>
          </div>
          <div className="space-y-4">
            {products.map((product) => (
              <article key={product.id} className="rounded-3xl border border-white/8 bg-white/5 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl text-(--ink)">{product.name}</p>
                    <p className="text-sm text-(--ink-soft)">{product.category} • {formatPrice(product.price)}</p>
                    <p className="mt-2 text-sm text-(--ink-muted)">Stock: {product.stock}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="theme-button-secondary px-4 py-2">Edit price</button>
                    <button className="theme-button-secondary px-4 py-2">Upload photos / videos</button>
                    <button onClick={() => restock(product.id)} className="theme-button-secondary px-4 py-2">Update stock</button>
                    <button onClick={() => markSoldOut(product.id)} className="theme-button-primary px-4 py-2">Mark sold out</button>
                    <button onClick={() => removeProduct(product.id)} className="rounded-full border border-[#8d3f35] px-4 py-2 text-sm uppercase tracking-[0.12em] text-[#f0bbb3]">Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <aside className="space-y-6">
          <div className="glass rounded-4xl p-6">
            <h2 className="text-3xl text-(--ink)">Orders</h2>
            <div className="mt-5 space-y-4">
              {orderSamples.map((order) => (
                <div key={order.id} className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <p className="font-semibold text-(--ink)">{order.id}</p>
                  <p className="mt-1 text-sm text-(--ink-muted)">{order.customer}</p>
                  <p className="mt-1 text-sm text-(--ink-muted)">{order.items} items • {formatPrice(order.total)}</p>
                  <p className="status-good mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                    {order.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="theme-panel-light rounded-4xl p-6">
            <h2 className="text-3xl text-(--ink-dark)">Go-live notes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5c4a36]">
              <li>Create authenticated admin routes before exposing mutation actions.</li>
              <li>Store uploads in Cloudinary, S3, or Vercel Blob rather than local disk on Vercel.</li>
              <li>Persist orders and products in MongoDB through the included backend scaffold.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
