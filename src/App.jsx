// src/App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicesPage from './routes/Services';
import CartPage from './routes/CartPage';

// Главная страница
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
        <meta name="description" content="Профессиональные услуги по уборке кладбищ, уходу за памятниками и доставке цветов в Армении. Уход за могилами с уважением." />
        <meta name="keywords" content="уборка кладбищ, Luysar, уход за могилами, памятники, Армения" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Luysar — уход за могилами в Армении" />
        <meta property="og:description" content="Услуги по уборке и уходу за могилами в Армении. Фотоотчет. Цветы. Памятники." />
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
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
