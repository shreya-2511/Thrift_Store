"use client";

import { useEffect, useMemo, useState } from "react";

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    let start;

    function tick(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.floor(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function formatCompact(value) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

export default function InstagramStatsTicker({ stats }) {
  const postCount = useCountUp(stats.posts, 1200);
  const followerCount = useCountUp(stats.followers, 1600);
  const followingCount = useCountUp(stats.following, 1000);

  const items = useMemo(
    () => [
      { label: "Posts", value: postCount, raw: stats.posts },
      { label: "Followers", value: followerCount, raw: stats.followers },
      { label: "Following", value: followingCount, raw: stats.following }
    ],
    [postCount, followerCount, followingCount, stats.posts, stats.followers, stats.following]
  );

  const repeatedItems = [...items, ...items];

  return (
    <a href={stats.profileUrl} target="_blank" rel="noreferrer" className="block p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--ink-muted)">Instagram signal</p>
          <p className="mt-2 text-2xl text-(--ink) ">Proof, motion, and daily drop energy.</p>
        </div>
        <span className="theme-chip hidden sm:inline-flex">Open profile</span>
      </div>
      <div className="marquee-shell">
        <div className="marquee-track gap-4 pr-4">
          {repeatedItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="min-w-44 rounded-3xl border border-white/10 bg-white/8 p-4 text-center backdrop-blur-sm">
              <p className="text-xl font-semibold text-(--ink) sm:text-2xl">
                {item.raw >= 1000 ? formatCompact(item.value) : item.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-(--ink-muted)">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
