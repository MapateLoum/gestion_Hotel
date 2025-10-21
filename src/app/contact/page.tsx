import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Titre principal */}
      <section className="text-center mt-0">
        <h1
          className="text-4xl font-bold text-blue-800 mb-4"
          style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
        ><br />
          Contactez-nous
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Nous sommes à votre disposition pour toute réservation, question ou
          demande d’information.<br />
          N’hésitez pas à nous contacter, notre équipe se fera un plaisir de vous répondre.
        </p>
      </section>

      {/* Coordonnées avec icônes */}
     <section className="grid md:grid-cols-4 gap-8 text-center px-6">
  {/* Téléphone */}
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3">
    <a href="tel:+221771234567" className="flex flex-col items-center gap-2">
      <FiPhone className="w-10 h-10 text-blue-600" />
      <h2
        className="text-lg font-semibold text-blue-700"
        style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
      >
        Téléphone
      </h2>
      <p className="text-gray-600 leading-relaxed">+221 77 </p>
    </a>
  </div>

  {/* Instagram */}
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3">
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

  {/* Facebook */}
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3">
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
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3">
    <a
      href="mailto:contact@fivestargroup.com"
      className="flex flex-col items-center gap-2"
    >
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


      {/* Google Maps */}
      <section className="rounded-2xl overflow-hidden shadow-lg px-6">
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
    </div>
  );
}
