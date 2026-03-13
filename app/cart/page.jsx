"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { useStore } from "@/lib/store";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shell py-12">
      <div className="hero-card glass mb-8 rounded-[2.5rem] p-8 sm:p-10">
        <p className="theme-badge">Cart</p>
        <h1 className="mt-5 text-5xl text-(--ink)">Your current stack</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cart.length === 0 ? (
            <div className="glass rounded-4xl p-8">
              <p className="text-lg text-(--ink-muted)">Your cart is empty. Start with the shop grid.</p>
              <Link href="/shop" className="theme-button-primary mt-5 px-5 py-3">
                Browse products
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <article key={item.id} className="glass flex flex-col gap-5 rounded-4xl p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className={`size-24 rounded-3xl bg-linear-to-br ${item.palette}`} />
                  <div>
                    <h2 className="text-2xl text-(--ink)">{item.name}</h2>
                    <p className="text-sm text-(--ink-soft)">{item.category}</p>
                    <p className="mt-2 font-semibold text-(--gold-soft)">{formatPrice(item.price)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-[rgba(223,194,139,0.22)] px-3 py-2 text-(--ink)">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button type="button" onClick={() => removeFromCart(item.id)} className="text-sm text-(--ink-soft)">
                    Remove
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
        <aside className="glass h-fit rounded-4xl p-6 lg:sticky lg:top-28">
          <p className="text-2xl text-(--ink)">Order summary</p>
          <div className="mt-6 space-y-3 text-sm text-(--ink-muted)">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{subtotal > 0 ? formatPrice(99) : formatPrice(0)}</span>
            </div>
            <div className="flex justify-between border-t border-[rgba(223,194,139,0.16)] pt-3 text-base font-semibold text-(--ink)">
              <span>Total</span>
              <span>{formatPrice(subtotal > 0 ? subtotal + 99 : 0)}</span>
            </div>
          </div>
          <p className="mt-6 rounded-3xl bg-[rgba(184,141,91,0.14)] p-4 text-sm text-[#f0d8af]">
            No Cash on Delivery. Payment required before shipping.
          </p>
          <Link href="/checkout" className="theme-button-primary border-2 border-(--accent-dark) bg-(--accent-dark) px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#111] transition-all duration-300 hover:bg-transparent hover:text-(--accent) mt-6 inline-flex w-full justify-center px-5 py-3">
            Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
