"use client";

import ShopClient from "@/components/ShopClient";
import { useStore } from "@/lib/store";

export default function ShopPageClient({ products, query, wishlistMode }) {
  const { wishlist } = useStore();

  return (
    <div className="shell">
      <div className="mt-5">
        <ShopClient products={products} initialQuery={query} showWishlistOnly={wishlistMode} wishlist={wishlist} />
      </div>
    </div>
  );
}
