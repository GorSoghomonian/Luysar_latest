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

  const mobileLinkClass = `block font-bold w-full text-left ${isAboutPage ? 'text-white' : 'text-black'}`;
  const mobileButtonClass = `text-lg ${isAboutPage ? 'text-white' : 'text-black'}`;

  return (
    <nav
      className={`w-full font-sans z-50 ${
        isAboutPage
          ? 'absolute top-0 left-0 pt-8 bg-transparent'
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

        <div className="md:hidden z-50 relative w-10 h-10">
  {!isMenuOpen && (
    <button
      onClick={() => setIsMenuOpen(true)}
      className="absolute inset-0 flex items-center justify-center text-3xl focus:outline-none"
      aria-label="Open menu"
    >
      <HiMenu className={isAboutPage ? 'text-white' : 'text-black'} />
    </button>
  )}

  {isMenuOpen && (
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute inset-0 flex items-center justify-center text-3xl focus:outline-none"
      aria-label="Close menu"
    >
      <HiX className={isAboutPage ? 'text-white' : 'text-black'} />
    </button>
  )}
</div>

      </div>

      {/* Мобильное бургер-меню */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-6 pb-4 pt-9 space-y-4 ${
            isAboutPage
              ? 'bg-black bg-opacity-60 backdrop-blur-md text-white mt-8'
              : 'bg-white text-black'
          } z-10`}
        >
          <Link to="/services" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('menu.services')}
          </Link>
          <Link to="/about" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('menu.about')}
          </Link>
          <button onClick={() => handleScrollOrNavigate('contact')} className={mobileLinkClass}>
            {t('menu.contact')}
          </button>
          <button onClick={() => handleScrollOrNavigate('reviews')} className={mobileLinkClass}>
            {t('menu.reviews')}
          </button>
          <Link to="/services" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('menu.pricing')}
          </Link>
          <button onClick={() => handleScrollOrNavigate('gallery')} className={mobileLinkClass}>
            {t('menu.gallery')}
          </button>

          {/* Корзина */}
          <Link to="/cart" className={`flex items-center gap-2 font-bold ${isAboutPage ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(false)}>
            <FaShoppingCart />
            {cartItemCount > 0 && <span>({cartItemCount})</span>}
          </Link>

          {/* Языки */}
          <div className="pt-4 flex gap-3">
            <button onClick={() => i18n.changeLanguage('hy')} className={mobileButtonClass}>🇦🇲</button>
            <button onClick={() => i18n.changeLanguage('ru')} className={mobileButtonClass}>🇷🇺</button>
            <button onClick={() => i18n.changeLanguage('en')} className={mobileButtonClass}>🇬🇧</button>
          </div>
        </div>
      )}
    </nav>
  );
}
