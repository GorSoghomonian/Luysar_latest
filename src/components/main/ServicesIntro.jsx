import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ServicesIntro() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-24 px-4 font-sans mt-14" id="services" >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-black">
        {t('servicesIntro.title')}
      </h2>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-lg md:text-xl text-black"
          style={{ lineHeight: '2.2rem', letterSpacing: '0.015em' }}
        >
          {t('servicesIntro.description')}
        </p>
      </div>
    </section>
  );
}
