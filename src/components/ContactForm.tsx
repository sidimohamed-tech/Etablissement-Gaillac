import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-1773466851/9bb8CK6kt7obEIPmjPpB",
      });
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/Verchantplomberie@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nom: formData.nom,
            prenom: formData.prenom,
            telephone: formData.telephone,
            _subject: "Nouvelle demande de rappel - Établissement Gaillac",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ nom: "", prenom: "", telephone: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="py-16 md:py-24 bg-gradient-to-br from-[#1E88E5] to-[#1565C0]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase">
              Contactez un plombier dès maintenant
            </h2>
            <p className="text-xl text-white/95">
              Remplissez le formulaire ci-dessous et un technicien vous rappelle
              immédiatement
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#212121] mb-2">
                Merci !
              </h3>
              <p className="text-gray-600 text-lg">
                Un technicien va vous rappeler dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-[#212121] font-bold mb-2 text-lg"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E88E5] focus:outline-none transition text-lg"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-[#212121] font-bold mb-2 text-lg"
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E88E5] focus:outline-none transition text-lg"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-[#212121] font-bold mb-2 text-lg"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E88E5] focus:outline-none transition text-lg"
                    placeholder="06 00 00 00 00"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-4 px-8 rounded-lg transition shadow-xl text-lg uppercase flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  <Send className="w-6 h-6" />
                  {isSubmitting
                    ? "Envoi en cours..."
                    : "Être rappelé immédiatement"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
