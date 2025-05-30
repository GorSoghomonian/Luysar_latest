import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/main/HeroSection';
import MemorialImage from './components/main/MemorialImage';
import ServicesIntro from './components/main/ServicesIntro';
import ServiceBlock from './components/cards/ServiceBlock';
import ServiceBlock2 from './components/cards/ServiceBlock2';
import ProcessBlock from './components/process/ProcessBlock';
import Testimonials from './components/reviews/Testimonials';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/Footer';




export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <MemorialImage />
      <ServicesIntro />
      <ServiceBlock />
      <ServiceBlock2 />
      <ProcessBlock />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
