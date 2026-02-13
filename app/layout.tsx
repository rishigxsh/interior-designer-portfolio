import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Interior Designer — Residential Interior Design Portfolio",
    template: "%s — Interior Designer",
  },
  description: "Premium residential interior design services in Canada. Specializing in modern, minimal spaces that balance aesthetics with functionality.",
  keywords: ["interior design", "residential design", "Canada interior designer", "modern interiors", "luxury design"],
  authors: [{ name: "Interior Designer" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://yoursite.com",
    siteName: "Interior Designer Portfolio",
    title: "Interior Designer — Residential Interior Design Portfolio",
    description: "Premium residential interior design services in Canada. Specializing in modern, minimal spaces.",
    images: [
      {
        url: "/portfolio/portfolio-01.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer — Residential Interior Design Portfolio",
    description: "Premium residential interior design services in Canada.",
    images: ["/portfolio/portfolio-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
