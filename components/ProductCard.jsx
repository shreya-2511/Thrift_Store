"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/data";
import { useStore } from "@/lib/store";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.some((item) => item.id === product.id);
  const soldOut = product.stock === 0;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--canvas) md:border-2 md:border-(--border-strong)">
      {/* Image Container */}
      <div className="relative h-44 overflow-hidden sm:h-56 md:h-64 lg:h-80">
        {/* Product Image */}
        {product.media?.[0]?.src ? (
          <Image
            src={product.media[0].src}
            alt={product.media[0].alt || product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-linear-to-br ${product.palette}`} />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute left-3 top-3 z-10 border border-white/20 bg-black/40 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-5 sm:top-4 sm:px-3 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
            {product.badge}
          </div>
        )}
        
        {/* Save Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-all hover:bg-white/20 sm:right-5 sm:top-4 sm:h-10 sm:w-10 sm:text-2xl"
        >
          {wished ? "♥" : "♡"}
        </button>

        {/* Product Name Visible on Hover */}
        <div className="absolute inset-0 flex items-end bg-black/5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
          <div className="w-full bg-linear-to-t from-black/85 to-transparent p-4 sm:p-6">
            <div className="translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-white/60 sm:mb-2 sm:text-xs sm:tracking-[0.3em]">{product.collection}</p>
              {/* Description */}
              <p className="text-xs leading-4 text-(--ink-muted) sm:text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-1 flex-col border-t border-(--border) bg-(--canvas)">
        {/* Category Label */}
        <div className="px-3 pt-3 sm:px-5 sm:pt-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-(--ink-muted) sm:text-xs sm:tracking-[0.3em]">{product.category}</p>
        </div>

        {/* Title */}
        <div className="px-3 pb-2 pt-2 sm:px-5 sm:pb-3">
          <h3 className="text-base font-semibold leading-tight text-(--ink) sm:text-lg">
            {product.name}
          </h3>
        </div>

        {/* Description
        <div className="px-6 pb-2">
          <p className="text-sm leading-4 text-(--ink-muted)">{product.description}</p>
        </div> */}

        {/* Price and Stock */}
        <div className="mt-auto flex items-baseline justify-between px-3 pb-2 sm:px-5">
          <p className="text-xl font-bold text-(--accent) sm:text-2xl">{formatPrice(product.price)}</p>
          <div className={`text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs ${
            soldOut 
              ? "text-red-600" 
              : product.stock <= 5 
                ? "text-orange-600" 
                : "text-green-600"
          }`}>
            {soldOut ? "Sold Out" : product.stock <= 5 ? `Only ${product.stock}` : "In Stock"}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          disabled={soldOut}
          onClick={() => addToCart(product)}
          className="w-full border-t border-(--border) bg-(--accent-dark) px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#111] transition-colors hover:bg-(--accent) disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:py-3 sm:text-sm sm:tracking-widest"
        >
          Add to Cart
        </button>

        {/* Secondary Action */}
        <Link 
          href={`/product/${product.slug}`} 
          className="block w-full border-t border-(--border) px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em] text-(--accent) transition-colors hover:bg-(--accent)/10 hover:font-semibold sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.2em]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
