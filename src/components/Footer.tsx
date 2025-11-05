import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212121] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <img
              src="/logo.png"
              alt="Établissement Gaillac"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Service de plomberie d'urgence disponible 24h/24 et 7j/7 à
              proximité.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:0671411480"
                className="flex items-center gap-3 text-gray-300 hover:text-[#E63946] transition"
              >
                <Phone className="w-5 h-5" />
                06 71 41 14 80
              </a>
              <a
                href="mailto:Verchantplomberie@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#E63946] transition"
              >
                <Mail className="w-5 h-5" />
                Verchantplomberie@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Informations</h3>
            <p className="text-gray-400 mb-2">Plombier agréé</p>
            <p className="text-gray-400 mb-4">Service d'urgence national</p>
            <a
              href="#"
              className="text-[#1E88E5] hover:text-[#E63946] transition underline"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Établissement Gaillac. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
