import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enrike Maree | Agricultural Science Communicator",
  description: "Translating complex agricultural science into clear, actionable insights for farmers, industry, and policy. Expert speaker, consultant, and science communicator.",
  keywords: ["agricultural science", "science communication", "farming", "agriculture", "sustainability", "food systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-charcoal text-soft-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

