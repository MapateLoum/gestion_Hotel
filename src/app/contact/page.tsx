"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-white flex flex-col items-center text-gray-800">
      {/* HERO */}
      <section className="w-full text-center py-16 bg-[url('/hotel-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
          >
            Contactez-nous
          </h1>
          <p className="text-gray-200 leading-relaxed text-lg">
            Pour toute réservation, question ou demande d’information,<br />
            notre équipe se fera un plaisir de vous répondre.
          </p>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 py-16 max-w-6xl w-full">
        {/* Téléphone */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3">
          <a href="tel:+221750011278" className="flex flex-col items-center gap-2">
            <FiPhone className="w-10 h-10 text-blue-600" />
            <h2
              className="text-lg font-semibold text-blue-700"
              style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
            >
              Téléphone
            </h2>
            <p className="text-gray-600 leading-relaxed">+221 75 001 12 78</p>
          </a>
        </div>

        {/* Instagram */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3">
          <a
            href="https://www.instagram.com/henryiv_officiel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <FaInstagram className="w-10 h-10 text-pink-600" />
            <h2
              className="text-lg font-semibold text-pink-600"
              style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
            >
              Instagram
            </h2>
            <p className="text-gray-600 leading-relaxed">@hotel_fivestar</p>
          </a>
        </div>

        {/* TikTok */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3">
          <a
            href="https://www.tiktok.com/@henry_iv4?_t=ZM-90kAodUxxZg&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <FaTiktok className="w-10 h-10 text-black" />
            <h2
              className="text-lg font-semibold text-black"
              style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
            >
              TikTok
            </h2>
            <p className="text-gray-600 leading-relaxed">@FiveStarHotel</p>
          </a>
        </div>

        {/* Email */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3">
          <a href="mailto:contact@fivestargroup.com" className="flex flex-col items-center gap-2">
            <FiMail className="w-10 h-10 text-red-600" />
            <h2
              className="text-lg font-semibold text-red-600"
              style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
            >
              Email
            </h2>
            <p className="text-gray-600 leading-relaxed">contact@fivestargroup.com</p>
          </a>
        </div>
      </section>

      {/* INFOS SUPPLÉMENTAIRES */}
      <section className="bg-white rounded-2xl shadow-inner py-12 px-6 max-w-5xl mx-4 text-center mb-12">
        <h2
          className="text-2xl font-bold text-blue-800 mb-4"
          style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
        >
          Informations pratiques
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          📍 Adresse : Quartier Central, Mboro, Sénégal <br />
          🕒 Horaires : Ouvert tous les jours, 8h00 - 22h00 <br />
          💬 Langues parlées : Français, Anglais, Wolof <br />
          🚗 Accès facile : à 5 minutes du centre-ville, parking sécurisé disponible.
        </p>
      </section>

      {/* GOOGLE MAPS */}
      <section className="rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl px-6 mb-16">
        <iframe
          src="https://maps.google.com/maps?q=15.168836,-16.902200&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* FOOTER */}
      {/* <footer className="w-full bg-blue-900 text-white text-center py-6">
        <p className="opacity-90 text-sm">
          © 2025 Hôtel Five Star Group — Tous droits réservés.
        </p>
      </footer> */}
    </main>
  );
}
