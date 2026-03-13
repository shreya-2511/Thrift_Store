"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const fallbackMedia = [
  { type: "image", src: "/images/products/product-shot-1.svg", alt: "Product photo 1" },
  { type: "image", src: "/images/products/product-shot-2.svg", alt: "Product photo 2" },
  { type: "image", src: "/images/products/product-shot-3.svg", alt: "Product photo 3" }
];

export default function ProductMediaGallery({ product }) {
  const media = useMemo(() => {
    if (Array.isArray(product.media) && product.media.length > 0) {
      return product.media;
    }
    return fallbackMedia;
  }, [product.media]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = media[selectedIndex] || media[0];

  const photoCount = media.filter((item) => item.type === "image").length;
  const videoCount = media.filter((item) => item.type === "youtube").length;

  return (
    <div className="glass rounded-4xl p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 text-xs text-(--ink-soft)">
      </div>

      <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col">
          {media.map((item, index) => (
            <button
              type="button"
              key={`${item.type}-${item.src || item.embedUrl}-${index}`}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border ${selectedIndex === index ? "border-(--gold) shadow-[0_0_0_1px_rgba(223,194,139,0.28)]" : "border-white/14"}`}
              aria-label={`Open media ${index + 1}`}
            >
              {item.type === "image" ? (
                <Image src={item.src} alt={item.alt || product.name} fill className="object-cover" />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumbnail} alt={item.title || "Product video"} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 grid place-items-center bg-black/35 text-white">▶</span>
                </>
              )}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          {selected.type === "image" ? (
            <div className="relative aspect-square w-full">
              <Image src={selected.src} alt={selected.alt || product.name} fill className="object-cover" priority />
            </div>
          ) : (
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={selected.embedUrl}
                title={selected.title || `${product.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
