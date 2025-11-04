import { Phone } from 'lucide-react';

const FinalCTA = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1773466851/phone_call',
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#1E88E5] to-[#0D47A1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase leading-tight">
            Urgence plomberie 24h/24
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-8">
            Une équipe de professionnels à votre écoute partout en France
          </p>
          <a
            href="tel:0671411480"
            onClick={handleCall}
            className="inline-flex items-center gap-4 bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-5 px-12 rounded-lg transition shadow-2xl text-xl md:text-2xl uppercase transform hover:scale-105"
          >
            <Phone className="w-8 h-8" />
            Appelez le 06 71 41 14 80
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
