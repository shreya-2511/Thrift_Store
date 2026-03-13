import "./globals.css";
import { Alegreya_Sans, Cinzel } from "next/font/google";
import { Suspense } from "react";
import { StoreProvider } from "@/lib/store";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";

const headingFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const bodyFont = Alegreya_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700", "800"]
});

export const metadata = {
  title: "Thrift Books",
  description: "Pre-loved books and magical merchandise for readers across India."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <StoreProvider>
          <div className="site-shell min-h-screen">
            <Suspense fallback={<div className="h-24.25" />}>
              <SiteHeader />
            </Suspense>
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
