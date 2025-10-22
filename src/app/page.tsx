"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWifi, FaUtensils, FaCar, FaConciergeBell } from "react-icons/fa";

export default function Home() {
  const chambres = [
    {
      titre: "Chambre Standard",
      description:
        "Lit double, douche et wifi. Confort simple et pratique, parfait pour les voyageurs de passage.",
      prix: "20 000 FCFA / nuit ou 25 000 FCFA / jour",
      image: "/chambre1.jpg",
    },
    {
      titre: "Salle de conférence",
      description:
        "Salle spacieuse, télévision et wifi disponible, équipée pour les réunions. Idéale pour les groupes et séminaires.",
      prix: "30 000 FCFA / jour ou 280 000 FCFA / semaine",
      image: "/salle_reunion1.jpg",
    },
    {
      titre: "Appartement de luxe",
      description:
        "Deux chambres, salon, cuisine équipée et wifi. Parfait pour un séjour prolongé ou en famille.",
      prix: "30 000 FCFA / nuit ou 50 000 FCFA / jour",
      image: "/appartement1.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + chambres.length) % chambres.length);
  const next = () => setIndex((index + 1) % chambres.length);
  const chambre = chambres[index];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-white flex flex-col items-center text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-[url('/hotel-bg.jpg')] bg-cover bg-center w-full relative">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive",
            }}
          >
            Bienvenue à l’Hôtel Five Star Group
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Confort, élégance et hospitalité au cœur de la ville.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* SLIDER */}
      <section className="relative w-full max-w-5xl px-6 py-16 flex flex-col items-center">
        <div className="w-full relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            ◀
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300">
            <div className="md:w-1/2">
              <Image
                src={chambre.image}
                alt={chambre.titre}
                width={500}
                height={300}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-3 text-blue-700">
                {chambre.titre}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {chambre.description}
              </p>
              <p className="text-blue-600 font-bold text-lg">{chambre.prix}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-8 bg-gray-100 w-full">
        <h2
          className="text-3xl font-bold text-center mb-10 text-blue-700"
          style={{
            fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive",
          }}
        >
          Nos Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <FaWifi className="text-blue-600 w-10 h-10 mb-3" />
            <p className="font-semibold">Wi-Fi Gratuit</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUtensils className="text-blue-600 w-10 h-10 mb-3" />
            <p className="font-semibold">Restaurant & Bar</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="text-blue-600 w-10 h-10 mb-3" />
            <p className="font-semibold">Parking Sécurisé</p>
          </div>
          <div className="flex flex-col items-center">
            <FaConciergeBell className="text-blue-600 w-10 h-10 mb-3" />
            <p className="font-semibold">Service 24h/24</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center w-full">
        <h2 className="text-3xl font-bold mb-4">Réservez votre séjour dès maintenant</h2>
        <p className="mb-6 opacity-90">
          Découvrez le luxe et le confort au cœur de la ville, à des prix accessibles.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  );
}
