"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + nom */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Hôtel"
            width={70}
            height={70}
            className="rounded-full shadow-md"
          />
          <h1
            className="text-2xl md:text-3xl font-bold text-blue-800 tracking-wide"
            style={{
              fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive",
            }}
          >
            Hôtel FIVE STAR GROUP
          </h1>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
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

          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full shadow-md hover:bg-blue-700 transition-all">
            Réserver
          </button>
        </nav>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner animate-slideDown">
          <ul className="flex flex-col items-center py-4 gap-4">
            <li>
              <Link
                href="/"
                className={`text-lg font-medium ${
                  pathname === "/" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-lg font-medium ${
                  pathname === "/contact" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded-full shadow-md hover:bg-blue-700 transition-all">
                Réserver
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
