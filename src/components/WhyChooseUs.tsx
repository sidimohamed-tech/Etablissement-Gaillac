import { Wrench, Clock, CreditCard, Phone } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Wrench,
      title: "35 ans d'expérience",
      description: "Une expertise reconnue dans le domaine de la plomberie",
    },
    {
      icon: Clock,
      title: "Intervention sous 30 minutes",
      description: "Rapidité garantie pour toutes vos urgences plomberie",
    },
    {
      icon: CreditCard,
      title: "Devis gratuit et sans engagement",
      description: "Transparence totale sur nos tarifs",
    },
    {
      icon: Phone,
      title: "Assistance disponible 24/7",
      description: "Joignable à tout moment pour vos urgences",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#212121] mb-4 uppercase">
            Pourquoi choisir Établissement Gaillac ?
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex gap-6 items-start p-6 bg-gray-50 rounded-xl hover:bg-[#E0F2FE] transition border-l-4 border-[#E63946]"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1E88E5] rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
