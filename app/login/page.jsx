export default function LoginPage() {
  return (
    <section className="shell py-14 sm:py-20">
      <div className="mx-auto max-w-xl rounded-4xl border border-(--border-strong) bg-(--canvas) p-6 shadow-[0_30px_90px_rgba(8,8,12,0.35)] sm:p-8">
        <p className="theme-badge">Account</p>
        <h1 className="mt-4 text-3xl leading-tight text-(--ink) sm:text-4xl">Login (Demo)</h1>
        <p className="mt-3 text-sm text-(--ink-muted)">
          This is a demo login screen for UI preview only. Authentication is not connected yet.
        </p>

        <form className="mt-8 space-y-4" action="#" method="post">
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-(--border) bg-white/5 px-4 py-3 text-(--ink) outline-none transition focus:border-(--gold)"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-(--border) bg-white/5 px-4 py-3 text-(--ink) outline-none transition focus:border-(--gold)"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-(--gold) px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111] transition hover:brightness-95"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
