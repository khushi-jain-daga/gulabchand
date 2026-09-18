import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchOverlay } from "@/components/SearchOverlay";

export const metadata: Metadata = {
  title: "Gulabchand Prints | Contemporary Jaipur Hand Block Printed Fashion & Textiles",
  description: "Contemporary clothing rooted in Jaipur. Crafted through generations. Discover hand block printed kurtis, dresses, suit sets, men shirts, unstitched fabric, and home decor from Gulabchand, Jaipur.",
  keywords: ["Gulabchand", "Gulabchand Prints", "Gulabchand Jaipur", "Hand Block Print Kurti", "Dabu Print Dress", "Bagru Print Men Shirt", "Jaipur Hand Block Textiles", "Unstitched Suit Material"],
  openGraph: {
    title: "Gulabchand — Contemporary Jaipur Fashion House",
    description: "A Jaipur legacy in print. Crafted through generations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gc-ivory text-gc-ink antialiased min-h-screen flex flex-col selection:bg-gc-green selection:text-gc-white">
        <CartProvider>
          <Navbar />
          <SearchOverlay />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
