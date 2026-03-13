"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [isHydrated, setIsHydrated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, wishlist } = useStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const cartCount = isHydrated ? cart.length : 0;
  const wishlistCount = isHydrated ? wishlist.length : 0;

  function handleSearch(event) {
    event.preventDefault();
    const nextParams = new URLSearchParams();
    if (query.trim()) {
      nextParams.set("q", query.trim());
    }
    router.push(`/shop${nextParams.toString() ? `?${nextParams.toString()}` : ""}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-[rgba(24,40,70,0.68)] backdrop-blur-xl">
      <div className="shell grid grid-cols-1 gap-3 py-3 md:grid-cols-[auto_minmax(0,1fr)] md:items-center xl:flex xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="size-11 overflow-hidden rounded-2xl border border-[rgba(223,194,139,0.18)]">
              <Image
                src="/images/instagram/image.png"
                alt="Thrift Books"
                width={44}
                height={44}
                className="h-full w-full object-cover"
                unoptimized
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold uppercase tracking-[0.2em] text-(--ink) sm:text-lg sm:tracking-[0.22em]">Thrift Books</p>
              <p className="hidden text-xs text-(--ink-soft) lg:line-clamp-2 lg:block lg:text-sm">Curated books, keepsakes, and collectible drops</p>
            </div>
          </Link>
          <div className="shrink-0 flex items-center gap-1.5 xl:hidden">
            <Link href="/shop?wishlist=true" aria-label="Saved items" className="theme-icon-button relative hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4C8.24 4 9.91 4.81 11 6.09 12.09 4.81 13.76 4 15.5 4A4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
              </svg>
              <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-(--gold) px-1 text-center text-[10px] font-semibold leading-4 text-[#111]">{wishlistCount}</span>
            </Link>
            <Link href="/cart" aria-label="Shopping bag" className="theme-icon-button relative hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 7h10l1 12H6L7 7Z" />
                <path d="M9 7a3 3 0 1 1 6 0" />
              </svg>
              <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-(--gold) px-1 text-center text-[10px] font-semibold leading-4 text-[#111]">{cartCount}</span>
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="theme-icon-button"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={mobileMenuOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
              </svg>
            </button>
          </div>
        </div>
        <nav className="hidden items-center gap-3 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-2 py-2 text-sm uppercase tracking-[0.16em] transition ${pathname === link.href ? "bg-(--accent-dark) text-[#111]" : "text-(--ink-soft) hover:bg-white/5 hover:text-(--ink)"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="w-full flex items-center gap-3 xl:w-auto">
          <form onSubmit={handleSearch} className="glass flex w-full items-center gap-2 rounded-full px-3 py-2 xl:w-auto xl:min-w-[20rem]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search books, merch, fandom..."
              className="min-w-0 flex-1 bg-transparent text-sm text-(--ink) outline-none placeholder:text-(--ink-soft)"
            />
            <button type="submit" aria-label="Search" className="inline-flex size-8 items-center justify-center rounded-full bg-(--gold) text-[#111] hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </form>
          <div className="hidden items-center gap-2 xl:flex">
            <Link href="/shop?wishlist=true" aria-label="Saved items" className="theme-icon-button relative hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4C8.24 4 9.91 4.81 11 6.09 12.09 4.81 13.76 4 15.5 4A4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
              </svg>
              <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-(--gold) px-1 text-center text-[15px] font-semibold leading-4 text-[#111]">{wishlistCount}</span>
            </Link>
            <Link href="/cart" aria-label="Shopping bag" className="theme-icon-button relative hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 7h10l1 12H6L7 7Z" />
                <path d="M9 7a3 3 0 1 1 6 0" />
              </svg>
              <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-(--gold) px-1 text-center text-[15px] font-semibold leading-4 text-[#111]">{cartCount}</span>
            </Link>
            <div className="mx-1 h-5 w-px bg-[rgba(223,194,139,0.18)]" />
            <a
              href="https://www.instagram.com/thrift_.books?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center p-1 text-(--ink-soft) hover:text-(--gold-soft)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5.5 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="glass rounded-3xl p-4 md:col-span-2 xl:hidden">
            <nav className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-xs uppercase tracking-[0.14em] ${pathname === link.href ? "bg-(--accent) text-[#111]" : "text-(--ink-soft) hover:bg-white/5 hover:text-(--ink)"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-3 border-t border-(--border) pt-3">
              <a
                href="https://www.instagram.com/thrift_.books?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="theme-icon-button"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@khushi_kotak?si=MJT1X7r52pY4HRgx"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="theme-icon-button"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                  <path d="M23 12c0 2.44-.3 4.22-.58 5.17a3.27 3.27 0 0 1-2.25 2.25c-.95.28-2.73.58-8.17.58s-7.22-.3-8.17-.58a3.27 3.27 0 0 1-2.25-2.25C1.3 16.22 1 14.44 1 12s.3-4.22.58-5.17A3.27 3.27 0 0 1 3.83 4.58C4.78 4.3 6.56 4 12 4s7.22.3 8.17.58a3.27 3.27 0 0 1 2.25 2.25C22.7 7.78 23 9.56 23 12Zm-13.5 3.9 6.2-3.9-6.2-3.9v7.8Z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
