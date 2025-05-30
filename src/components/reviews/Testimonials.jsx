import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const testimonials = t('testimonials.list', { returnObjects: true });

  return (
    <section className="bg-gray-50 py-24 px-4 font-sans" id="reviews">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          {t('testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left py-10">
          {testimonials.map((t, i) => (
            <div key={i} className="flex items-start gap-6 p-5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-18 h-24 rounded-full object-cover mt-1"
              />
              <div style={{ lineHeight: '1.5rem', letterSpacing: '0.015em' }}>
                <p className="text-gray-800 mb-3">{t.text}</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
