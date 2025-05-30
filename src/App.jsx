import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/main/HeroSection';
import MemorialImage from './components/main/MemorialImage';
import ServicesIntro from './components/main/ServicesIntro';
import ServiceBlock from './components/cards/ServiceBlock';
import ServiceBlock2 from './components/cards/ServiceBlock2';
import ProcessBlock from './components/process/ProcessBlock';
import GalleryIntro from './components/difference/GalleryIntro';
import Testimonials from './components/reviews/Testimonials';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/Footer';
import GallerySection from './components/difference/GallerySection';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Уборка кладбищ и уход за могилами в Армении — Luysar</title>
        <meta
          name="description"
          content="Профессиональные услуги по уборке кладбищ, очистке надгробий и уходу за могилами в Ереване и по всей Армении. Закажите чистку памятников с заботой и уважением."
        />
        <meta
          name="keywords"
          content="уборка кладбищ Армения, уход за могилами, чистка памятников, Luysar, Ереван, клининг могил, реставрация надгробий"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Luysar — уход за могилами и уборка кладбищ в Армении" />
        <meta
          property="og:description"
          content="Услуги по очистке памятников, уходу за местами захоронений и реставрации надгробий в Ереване и регионах Армении."
        />
        <meta property="og:url" content="https://luysar.com" />
        <meta property="og:type" content="website" />
        <html lang="ru" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <MemorialImage />
      <ServicesIntro />
      <ServiceBlock />
      <ServiceBlock2 />
      <ProcessBlock />
      <GalleryIntro />
      <GallerySection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
