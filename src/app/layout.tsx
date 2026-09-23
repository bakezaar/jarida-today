import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jarida Today | Beyond the Narrative",
    template: "%s | Jarida Today",
  },
  description:
    "Jarida Today is a digital newspaper bringing together news, ideas, culture and creative expression from Pakistan and beyond.",
  keywords: [
    "Jarida Today",
    "Pakistan news",
    "Lahore news",
    "digital newspaper",
    "journalism",
    "culture",
    "opinion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}