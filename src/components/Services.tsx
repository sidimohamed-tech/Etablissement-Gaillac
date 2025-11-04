import { Wrench, Droplets, Flame, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Débouchage canalisation',
      description: 'Débouchage rapide et efficace de toutes vos canalisations',
    },
    {
      icon: Droplets,
      title: 'Réparation fuite d\'eau',
      description: 'Recherche et réparation de fuites d\'eau',
    },
    {
      icon: Flame,
      title: 'Remplacement chauffe-eau',
      description: 'Dépannage et installation de chauffe-eau',
    },
    {
      icon: Clock,
      title: 'Urgence plomberie',
      description: 'Intervention express 24/7 pour toute urgence',
    },
  ];

  const handleCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1773466851/phone_call',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#212121] mb-4 uppercase">
            Nos interventions plomberie
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-[#1E88E5]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#1E88E5] rounded-full mb-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="tel:0671411480"
            onClick={handleCall}
            className="inline-block bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-4 px-10 rounded-lg transition shadow-xl text-lg uppercase transform hover:scale-105"
          >
            Appeler un plombier maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
