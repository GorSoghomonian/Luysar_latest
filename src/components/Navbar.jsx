import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartItemCount = cart.length;

  const isAboutPage = location.pathname === '/about';

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

  const linkClass = "font-bold transition " + (isAboutPage
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-600");

  const menuItem = (label, id) => (
    <button
      onClick={() => handleScrollOrNavigate(id)}
      className={linkClass}
    >
      {label}
    </button>
  );

  return (
    <nav
      className={`w-full font-sans z-50 ${
        isAboutPage
          ? 'absolute top-0 left-0 bg-transparent pt-8'  // изменено pt-6 для большего отступа сверху
          : 'relative border-b border-gray-300 mt-8 bg-white'
      }`}
    >
      <div className="w-full px-4 py-4 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Левая часть */}
        <div className="hidden md:flex justify-start pl-8 space-x-10">
          <Link to="/services" className={linkClass}>
            {t('menu.services')}
          </Link>
          <Link to="/about" className={linkClass}>
            {t('menu.about')}
          </Link>
          {menuItem(t('menu.contact'), 'contact')}
        </div>

        {/* Центр — логотип */}
        <div className="flex justify-center relative z-20">
          <Link
            to="/"
            className={`relative -mb-[32px] md:-mb-[52px] px-4 transition ${
              isAboutPage ? 'bg-transparent' : 'bg-white'
            }`}
          >
            <img
        src={isAboutPage ? "/logo-clean-white.png" : "/logo-clean.png"}
        alt="LUYSAR"
        className="w-24 md:w-32 h-auto object-contain transition"
      />
          </Link>
        </div>

        {/* Правая часть */}
        <div className="hidden md:flex justify-end pr-8 space-x-6 items-center">
          {menuItem(t('menu.reviews'), 'reviews')}
          <Link to="/services" className={linkClass}>
            {t('menu.pricing')}
          </Link>
          {menuItem(t('menu.gallery'), 'gallery')}

          {/* Корзина */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className={`text-2xl hover:text-gray-600 ${isAboutPage ? 'text-white' : 'text-black'}`} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Языки */}
          <div className="ml-4 flex gap-2">
            <button onClick={() => i18n.changeLanguage('hy')} className={isAboutPage ? 'text-white text-lg' : 'text-lg'}>
              🇦🇲
            </button>
            <button onClick={() => i18n.changeLanguage('ru')} className={isAboutPage ? 'text-white text-lg' : 'text-lg'}>
              🇷🇺
            </button>
            <button onClick={() => i18n.changeLanguage('en')} className={isAboutPage ? 'text-white text-lg' : 'text-lg'}>
              🇬🇧
            </button>
          </div>
        </div>

        {/* Мобильная кнопка */}
        <div className="md:hidden z-30">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={isAboutPage ? "text-white text-3xl focus:outline-none" : "text-black text-3xl focus:outline-none"}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-9 space-y-4 bg-white z-10">
          <Link
            to="/services"
            className="block text-black font-bold w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('menu.services')}
          </Link>
          <button
            onClick={() => handleScrollOrNavigate('about')}
            className="block text-black font-bold w-full text-left"
          >
            {t('menu.about')}
          </button>
          <button
            onClick={() => handleScrollOrNavigate('contact')}
            className="block text-black font-bold w-full text-left"
          >
            {t('menu.contact')}
          </button>
          <button
            onClick={() => handleScrollOrNavigate('reviews')}
            className="block text-black font-bold w-full text-left"
          >
            {t('menu.reviews')}
          </button>
          <Link
            to="/services"
            className="block text-black font-bold w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('menu.pricing')}
          </Link>
          <button
            onClick={() => handleScrollOrNavigate('gallery')}
            className="block text-black font-bold w-full text-left"
          >
            {t('menu.gallery')}
          </button>

          {/* Корзина */}
          <Link
            to="/cart"
            className="flex items-center gap-2 text-black font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaShoppingCart />
            {cartItemCount > 0 && <span>({cartItemCount})</span>}
          </Link>

          {/* Языки */}
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
