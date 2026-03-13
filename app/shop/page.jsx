import ShopPageClient from "./shop-page-client";
import { products } from "@/lib/data";

export const metadata = {
  title: "Shop | Thrift Books"
};

export default async function ShopPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q ?? "";
  const wishlistMode = resolvedSearchParams?.wishlist === "true";

  return <ShopPageClient products={products} query={query} wishlistMode={wishlistMode} />;
}
