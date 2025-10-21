"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const chambres = [
    {
      titre: "Chambre Standard",
      description: "Lit double, douche et wifi. Confort simple et pratique.",
      prix: "20 000 FCFA / nuit ou 25 000 FCFA / jour",
      image: "/chambre1.jpg",
    },
    {
      titre: "Salle de conférence",
      description: "Salle spacieuse, télévision et wifi disponible, équipée pour les réunions. Idéale pour les groupes.",
      prix: "30 000 FCFA / jour ou 280 000 FCFA / semaine",
      image: "/salle_reunion1.jpg",
    },
    {
      titre: "Appartement de luxe",
      description: "Deux chambres, salon, cuisine équipée et wifi. Parfait pour un séjour prolongé.",
      prix: "30 000 FCFA / nuit ou 50 000 FCFA / jour",
      image: "/appartement1.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + chambres.length) % chambres.length);
  const next = () => setIndex((index + 1) % chambres.length);

  const chambre = chambres[index];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          Bienvenue à l’Hôtel Five Star Group
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
          Découvrez nos chambres confortables et notre service chaleureux. Cliquez pour naviguer entre les chambres.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Nous contacter
        </Link>
      </section>

      {/* Slider */}
      <section className="relative w-full max-w-4xl px-6 py-12 flex flex-col items-center">
        <div className="w-full relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            ◀
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-lg p-6">
            <div className="md:w-1/2">
              <Image
                src={chambre.image}
                alt={chambre.titre}
                width={500}
                height={300}
                className="rounded-xl shadow"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">{chambre.titre}</h2>
              <p className="text-gray-600 mb-3">{chambre.description}</p>
              <p className="text-blue-600 font-bold text-lg">{chambre.prix}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </section>
    </main>
  );
}
