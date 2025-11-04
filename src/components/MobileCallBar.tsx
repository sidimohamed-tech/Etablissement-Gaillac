import { Phone } from 'lucide-react';

const MobileCallBar = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1773466851/phone_call',
      });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#E63946] z-50 shadow-2xl">
      <a
        href="tel:0671411480"
        onClick={handleCall}
        className="flex items-center justify-center gap-3 py-4 text-white font-bold text-lg uppercase"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        Urgence plomberie – Appelez le 06 71 41 14 80
      </a>
    </div>
  );
};

export default MobileCallBar;
