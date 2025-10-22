import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // <- on importe le Header
import Footer from "../components/Footer"; // <- on importe le Footer
// Polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées du site
export const metadata: Metadata = {
  title: "Five Star Group",
  description:
    "Hôtel Five Star Group - Confort et hospitalité au cœur de la ville",
  icons: {
    icon: "/logo.png", // ton logo ici (mets le fichier dans /public/logo.png)
  },
};

// Layout global
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header /> {/* Le header s’affiche en haut de toutes les pages */}
<main className="max-w-6xl mx-auto px-6 pt-30 pb-10">{children}</main>
<Footer />

      </body>
    </html>
  );
}
