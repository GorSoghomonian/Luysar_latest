import React from 'react';
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <section className="py-28 px-4 font-sans bg-white" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16 py-8">
          {t('contact.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-start">
          {/* Контакты слева */}
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-light">+374 33 43 1413</p>
              <p className="text-xl py-3">luysar.official@gmail.com</p>
            </div>
            <p className="text-gray-600">{t('contact.address')}</p>
            <div className="flex gap-4 pt-4">
              <a href="https://web.telegram.org/a/#7312871835" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-2xl text-gray-700 hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/luysar.official/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-gray-700 hover:text-pink-500" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-gray-700 hover:text-blue-700" />
              </a>
              <a href="https://wa.me/37433431413" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-gray-700 hover:text-green-500" />
              </a>
            </div>
          </div>

          {/* Форма справа */}
          <form action="https://formspree.io/f/xrbqlpdz" method="POST" className="space-y-6">
            <input
              type="email"
              name="email"
              required
              placeholder={t('contact.email')}
              className="w-full border border-gray-300 p-4 text-gray-800"
            />
            <input
              type="text"
              name="name"
              required
              placeholder={t('contact.name')}
              className="w-full border border-gray-300 p-4 text-gray-800"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder={t('contact.message')}
              className="w-full border border-gray-300 p-4 text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              {t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
