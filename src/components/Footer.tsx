export default function Footer() {
  return (
    <footer className="bg-blue-900/70 from-blue-900 via-gray-800 to-blue-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
        
        {/* Logo / Nom de l'hôtel */}
        <h2
          className="text-2xl font-bold text-white drop-shadow-sm"
          style={{ fontFamily: "'Lucida Calligraphy', 'Segoe Script', cursive" }}
        >
          Hôtel Five Star Group
        </h2>

        {/* Slogan */}
        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
          Confort, élégance et hospitalité au cœur de Mboro.<br />
          Votre satisfaction est notre priorité.
        </p>

        {/* Ligne décorative */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Hôtel Five Star Group — Tous droits réservés.<br />
          Site développé par{" "}
          <span className="text-blue-300 font-semibold hover:text-blue-200 transition">
            Papa Mapatè Loum
          </span>.
        </p>
      </div>
    </footer>
  );
}
