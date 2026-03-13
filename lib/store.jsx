"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);

const STORAGE_KEYS = {
  cart: "thrift-books-cart",
  wishlist: "thrift-books-wishlist"
};

function readStorage(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCart(readStorage(STORAGE_KEYS.cart, []));
    setWishlist(readStorage(STORAGE_KEYS.wishlist, []));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
  }, [wishlist]);

  const value = useMemo(() => ({
    cart,
    wishlist,
    addToCart(product) {
      setCart((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        return [...current, { ...product, quantity: 1 }];
      });
    },
    updateQuantity(id, quantity) {
      setCart((current) =>
        current
          .map((item) => (item.id === id ? { ...item, quantity } : item))
          .filter((item) => item.quantity > 0)
      );
    },
    removeFromCart(id) {
      setCart((current) => current.filter((item) => item.id !== id));
    },
    toggleWishlist(product) {
      setWishlist((current) =>
        current.some((item) => item.id === product.id)
          ? current.filter((item) => item.id !== product.id)
          : [...current, product]
      );
    }
  }), [cart, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}
