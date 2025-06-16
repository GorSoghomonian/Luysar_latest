import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleScrollOrNavigate = (id) => {
    if (location.pathname === '/') {
      scrollTo(id);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollTo(id);
      }, 100);
    }
  };

  const menuItem = (label, id) => (
    <button
      onClick={() => handleScrollOrNavigate(id)}
      className="text-black font-bold hover:text-gray-600"
    >
      {label}
    </button>
  );

  return (
    <nav className="relative w-full border-b border-gray-300 mt-8 font-sans">
      <div className="w-full px-4 py-4 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Левая часть */}
        <div className="hidden md:flex justify-start pl-8 space-x-10">
          <Link to="/services" className="text-black font-bold hover:text-gray-600">
            {t('menu.services')}
          </Link>
          {menuItem(t('menu.about'), 'about')}
          {menuItem(t('menu.contact'), 'contact')}
        </div>

        {/* Центр — логотип */}
        <div className="flex justify-center relative z-20">
          <Link to="/" className="relative -mb-[32px] md:-mb-[52px] bg-white px-4">
            <img
              src="/logo-clean.png"
              alt="LUYSAR"
              className="w-24 md:w-32 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Правая часть */}
        <div className="hidden md:flex justify-end pr-8 space-x-6 items-center">
          {menuItem(t('menu.reviews'), 'reviews')}
          <Link to="/services" className="text-black font-bold hover:text-gray-600">
            {t('menu.pricing')}
          </Link>
          {menuItem(t('menu.gallery'), 'gallery')}

          {/* Языки */}
          <div className="ml-4 flex gap-2">
            <button onClick={() => i18n.changeLanguage('hy')} className="text-lg">🇦🇲</button>
            <button onClick={() => i18n.changeLanguage('ru')} className="text-lg">🇷🇺</button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-lg">🇬🇧</button>
          </div>
        </div>

        {/* Мобильная кнопка */}
        <div className="md:hidden z-30">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black text-3xl focus:outline-none">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-9 space-y-4 bg-white z-10">
          <Link to="/services" className="block text-black font-bold" onClick={() => setIsMenuOpen(false)}>
            {t('menu.services')}
          </Link>
          {menuItem(t('menu.about'), 'about')}
          {menuItem(t('menu.contact'), 'contact')}
          {menuItem(t('menu.reviews'), 'reviews')}
          <Link to="/services" className="block text-black font-bold" onClick={() => setIsMenuOpen(false)}>
            {t('menu.pricing')}
          </Link>
          {menuItem(t('menu.gallery'), 'gallery')}

          <div className="pt-4 flex gap-3">
            <button onClick={() => i18n.changeLanguage('hy')} className="text-lg">🇦🇲</button>
            <button onClick={() => i18n.changeLanguage('ru')} className="text-lg">🇷🇺</button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-lg">🇬🇧</button>
          </div>
        </div>
      )}
    </nav>
  );
}
