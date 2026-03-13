"use client";

import { useState } from "react";

const paymentOptions = ["UPI", "Razorpay"];

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("UPI");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="shell py-12">
      <div className="hero-card glass mb-8 rounded-[2.5rem] p-8 sm:p-10">
        <p className="theme-badge">Checkout</p>
        <h1 className="mt-5 text-5xl text-[var(--ink)]">Finish your order</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <form onSubmit={handleSubmit} className="glass rounded-4xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-[var(--ink-muted)]">
              Name
              <input required className="theme-input mt-2 px-4 py-3" />
            </label>
            <label className="text-sm text-[var(--ink-muted)]">
              Phone number
              <input required className="theme-input mt-2 px-4 py-3" />
            </label>
            <label className="text-sm text-[var(--ink-muted)] sm:col-span-2">
              Address
              <textarea required rows="4" className="theme-input mt-2 px-4 py-3" />
            </label>
            <label className="text-sm text-[var(--ink-muted)] sm:col-span-2">
              Email
              <input type="email" required className="theme-input mt-2 px-4 py-3" />
            </label>
          </div>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ink-soft)]">Payment option</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {paymentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedPayment(option)}
                  className={`rounded-3xl border px-4 py-4 text-left ${selectedPayment === option ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--ink-dark)]" : "border-[rgba(223,194,139,0.18)] bg-white/6 text-[var(--ink)]"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 rounded-3xl bg-[rgba(184,141,91,0.14)] p-4 text-sm text-[#f0d8af]">
            No Cash on Delivery. Payment required before shipping.
          </p>
          <button className="theme-button-primary mt-6 px-6 py-3">
            Place order
          </button>
          {submitted ? (
            <p className="mt-4 text-sm text-[#b7d3c1]">
              Order request captured. Connect this form to the Express API and Razorpay order creation endpoint to go live.
            </p>
          ) : null}
        </form>
        <aside className="theme-panel-light h-fit rounded-4xl p-6 lg:sticky lg:top-28">
          <p className="text-2xl text-[var(--ink-dark)]">Payment flow</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5c4a36]">
            <li>1. Customer submits shipping details.</li>
            <li>2. Frontend creates a Razorpay order or shares UPI intent.</li>
            <li>3. Payment is confirmed before the order is packed.</li>
            <li>4. Admin dashboard tracks the order status.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
