import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { Contact } from "../components/ContactUs";
import ContactsBar from "../components/ContactsBar";
import FeaturesSection from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ServicesSection from "../components/ServicesSection";
import { Testimonial } from "../components/Testimonial";

function Home() {
  return (
    <>
      <ContactsBar />
      <NavBar />
      <div className="relative overflow-hidden">
        <motion.div
          className="z-5 bg-hero-pattern bg-hero-shifted bg-no-repeat bg-cover mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-theme"
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      <FeaturesSection />
      <AboutUs />
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-service-pattern overlay bg-no-repeat bg-cover bg-bottom"
        >
          <ServicesSection />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-theme"
          initial={{ x: "0%" }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
