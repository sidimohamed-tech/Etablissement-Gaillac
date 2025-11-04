import { Phone, MessageSquare, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1773466851/phone_call',
      });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1773466851/whatsapp_click',
      });
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#1E88E5] via-[#1565C0] to-[#0D47A1]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#E63946] text-white px-4 py-2 rounded-full mb-6 font-bold text-sm md:text-base uppercase animate-pulse">
            🚨 Service d'urgence disponible 24h/24
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Besoin d'un plombier en urgence ?
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-8 md:mb-12 font-medium">
            Intervention rapide 24h/24 et 7j/7, dans toute la France
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0671411480"
              onClick={handleCall}
              className="w-full sm:w-auto bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-4 px-8 rounded-lg transition shadow-2xl text-lg uppercase flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/33671411480?text=Bonjour%2C%20j%27aimerais%20un%20devis%20pour%20une%20urgence%20plomberie"
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1faf51] text-white font-bold py-4 px-8 rounded-lg transition shadow-2xl text-lg uppercase flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1E88E5] font-bold py-4 px-8 rounded-lg transition shadow-2xl text-lg uppercase flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Être rappelé immédiatement
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">24h/24</div>
              <div className="text-sm">Service disponible tous les jours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">30 min</div>
              <div className="text-sm">Intervention rapide selon zone</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">15 ans</div>
              <div className="text-sm">D'expérience et d'expertise</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
