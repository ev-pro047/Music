import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./editorial-refine.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "KK Music House | Musical Instruments in Faridabad",
  description:
    "Musical instruments sales and repair in Sector 86, Greater Faridabad. Guitars, keyboards, percussion, Indian instruments and accessories.",
  keywords: [
    "music instrument shop Faridabad",
    "guitar shop Faridabad",
    "guitar repair Faridabad",
    "KK Music House",
    "musical instruments Sector 86",
  ],
  openGraph: {
    title: "KK Music House",
    description: "Place for music lovers — instruments, accessories and repairs in Faridabad.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
