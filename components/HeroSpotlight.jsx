"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSpotlight() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [spotlightEnabled, setSpotlightEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateMode = () => setSpotlightEnabled(mediaQuery.matches);

    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    if (!spotlightEnabled) {
      setSpotlight((prev) => ({ ...prev, active: false }));
    }
  }, [spotlightEnabled]);

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    setSpotlight({ x, y, active: true });
  };

  const handleLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  const spotlightMask =
    spotlightEnabled && spotlight.active
      ? `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, transparent 85px, rgba(0, 0, 0, 0.25) 85px, black 85px)`
      : "none";

  return (
    <div
      className="relative h-125 w-full md:h-150 lg:h-175"
      onMouseMove={spotlightEnabled ? handleMove : undefined}
      onMouseLeave={spotlightEnabled ? handleLeave : undefined}
    >
      <Image
        src="/images/image.png"
        alt="Thrift Books Hero"
        fill
        className="object-cover opacity-95"
        priority
      />

      <div
        className="pointer-events-none absolute inset-0 bg-black/50 md:bg-black/85 transition-opacity duration-200"
        style={{
          opacity: spotlightEnabled,
          maskImage: spotlightMask,
          WebkitMaskImage: spotlightMask
        }}
      />

      {spotlightEnabled && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-200"
          style={{
            opacity: spotlight.active ? 0.9 : 0,
          }}
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block">
            <p className="text-xs uppercase tracking-[0.3em] text-(--accent)">Curated Collections</p>
            <div className="mx-auto mt-2 h-px w-16 bg-(--accent)" />
          </div>

          <h1 className="mt-8 text-5xl leading-[0.9] text-white drop-shadow-lg lg:text-7xl">
            Rare Books &<br />
            <span className="text-(--accent)">Curiosities</span>
          </h1>

          <div className="mt-10">
            <Link
              href="/shop"
              className="inline-block font-semibold border-2 border-(--accent-dark) bg-(--accent-dark) px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#111] transition-all duration-300 hover:bg-transparent hover:text-(--accent)"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
