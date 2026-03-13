"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";

export default function ProductActions({ product }) {
  const { addToCart } = useStore();
  const soldOut = product.stock === 0;

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          disabled={soldOut}
          onClick={() => addToCart(product)}
          className="theme-button-primary px-6 py-3 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Add to cart
        </button>
        <Link href="/checkout" className="theme-button-secondary px-6 py-3 text-center">
          Buy now
        </Link>
      </div>
      <a
        href={`https://wa.me/919999999999?text=Hi%20Thrift%20Books%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
        className="inline-flex rounded-full bg-[#1f5f46] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        WhatsApp order
      </a>
    </div>
  );
}
