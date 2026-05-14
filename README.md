# Thrift_Store

A modern e-commerce storefront for pre-loved books and magical merchandise, inspired by the world of Harry Potter and a thriving bookish community across India.

[🚀 Live Demo](https://thrift-store-psi.vercel.app/)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## About

**Thrift_Store** is a full-stack web application that allows readers to browse, discover, and purchase second-hand books and fandom merchandise through a beautifully themed, responsive interface. Featuring Instagram-inspired stats, product filtering, community reviews, dedicated category browsing, and seamless checkout, it brings the spirit of thrift-book finds online.

---

## Features

- 📚 Browse curated collections of books and merchandise (e.g., Harry Potter collection)
- 🔗 Rich homepage experience with highlights, category filter, Instagram posts, and community testimonials
- 🛒 Shopping cart and smooth checkout flows
- 👤 User account and admin sections (scaffolded)
- 🌙 Magical dark theme with custom CSS inspired by Harry Potter
- 📱 Responsive UI for all device sizes
- 📷 Social media integrations (Instagram, YouTube)
- ⚡ Fast performance powered by Next.js and React
- 💬 Community testimonials and real Instagram stats ticker

---

## Tech Stack

- **Next.js** (React framework)
- **React** (Frontend library)
- **Express.js** (Backend server)
- **Mongoose** (MongoDB ODM)
- **Razorpay** (Payments)
- **Tailwind CSS** (Utility-first styling)
- **Custom CSS** (Magical dark theme)
- **Deployed as full-stack Node.js app**

---

## Project Structure

```
/
├── app/                  # Next.js app directory:
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Homepage
│   ├── globals.css       # Global magical theme CSS
│   ├── (pages: /about, /admin, /cart, /checkout, /login, /product, /reviews, /shop)
│
├── components/           # React UI Components (Header, Footer, ProductCard, etc.)
├── lib/                  # Data, store context, helpers
├── public/               # Static assets (images, etc.)
├── server/               # Express backend server
├── package.json          # Project manifest
├── app.js                # Entrypoint, starts server
└── ...                   # Config files and lock files
```

---

## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shreya-2511/Thrift_Store.git
   cd Thrift_Store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file to configure MongoDB and Razorpay keys, e.g.:
   ```
   MONGODB_URI=<your-mongodb-uri>
   RAZORPAY_KEY_ID=<your-razorpay-key>
   RAZORPAY_KEY_SECRET=<your-razorpay-secret>
   ```
   (Check for other variables as needed)

4. **Run the app in development mode:**
   ```bash
   npm run dev
   ```
   The app should be live at http://localhost:3000

   Or, just visit the [Live Demo](https://thrift-store-psi.vercel.app/)!

---

## Scripts

- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build for production
- `npm start` — Start Next.js in production
- `npm run lint` — Lint code with ESLint
- `npm run server` — Start backend Express server (`server/index.js`)

---

## Contributing

Contributions are welcome! 🚀

- Fork the repo and create your feature branch
- Commit your changes with clear messages
- Ensure your code is well documented
- Open a pull request describing the feature or fix

---
## Roadmap

- Integrate a payment gateway for secure online payments (coming soon)

> Made with passion for readers and sustainable shopping. ✨
---

