import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesPage from './routes/Services';


// Компоненты главной страницы
import HeroSection from './components/main/HeroSection';
import MemorialImage from './components/main/MemorialImage';
import ServicesIntro from './components/main/ServicesIntro';
import ServiceBlock from './components/cards/ServiceBlock';
import ServiceBlock2 from './components/cards/ServiceBlock2';
import ProcessBlock from './components/process/ProcessBlock';
import GalleryIntro from './components/difference/GalleryIntro';
import GallerySection from './components/difference/GallerySection';
import Testimonials from './components/reviews/Testimonials';
import ContactForm from './components/contact/ContactForm';
import PricingPage from './routes/Pricing';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Уборка кладбищ и уход за могилами в Армении — Luysar</title>
        <meta name="description" content="Профессиональные услуги по уборке кладбищ..." />
        <meta name="keywords" content="уборка кладбищ, Luysar, Армения" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Luysar — уход за могилами" />
        <meta property="og:url" content="https://luysar.com" />
        <meta property="og:type" content="website" />
        <html lang="ru" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
