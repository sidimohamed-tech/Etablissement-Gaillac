import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const handleCall = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-1773466851/phone_call",
      });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-1773466851/whatsapp_click",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Établissement Gaillac"
            className="h-12 md:h-16"
          />
          <div className="hidden md:block">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              Urgence Plomberie 24h/24 – Intervention rapide avec plus de 35 ans
              d’expérience
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:0671411480"
            onClick={handleCall}
            className="hidden md:flex items-center gap-2 text-lg font-semibold text-[#1E88E5] hover:text-[#1565C0] transition"
          >
            <Phone className="w-5 h-5" />
            06 71 41 14 80
          </a>
          <a
            href="https://wa.me/33671411480?text=Bonjour%2C%20j%E2%80%99ai%20besoin%20d%E2%80%99une%20intervention%20de%20plomberie%C2%A0en%C2%A0urgence."
            onClick={handleWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1faf51] text-white font-bold py-2 px-3 md:py-3 md:px-4 rounded-lg transition shadow-lg text-sm md:text-base flex items-center gap-2"
            title="Contacter via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="tel:0671411480"
            onClick={handleCall}
            className="bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition shadow-lg text-sm md:text-base uppercase"
          >
            Appeler maintenant
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
