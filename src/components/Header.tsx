"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + nom */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Hôtel"
            width={100}
            height={100}
            className="rounded-full shadow-md"
          />
          <h1
  className="text-3xl font-bold text-blue-800 tracking-wide"
  style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
>
  Hôtel FIVE STAR GROUP
</h1>

        </div>

        {/* Liens de navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Accueil
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Contact
          </Link>

          {/* Élément décoratif pour équilibrer */}
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full shadow-md hover:bg-blue-700 transition-all">
            Réserver
          </button>
        </nav>
      </div>
    </header>
  );
}
