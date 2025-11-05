import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <MobileCallBar />
    </div>
  );
}

export default App;
