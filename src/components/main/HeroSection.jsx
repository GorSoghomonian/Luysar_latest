import React from 'react';
import { useTranslation } from 'react-i18next';
import PricingPage from '../../routes/Pricing';
import ServiceBlock2 from '../cards/ServiceBlock2';
import Services from '../../routes/Services';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-28 px-4 font-sans mt-10">
      <div className='pb-10'>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
        {t('hero.title')}
      </h1>
      <p
        className="text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed text-black mt-10"
        style={{ lineHeight: '2.2rem', letterSpacing: '0.015em' }}
      >
        {t('hero.description')}
      </p>
      <button className="bg-gray-700 text-white font-bold py-5 px-16 rounded-full hover:bg-gray-800 transition mt-2 ">
        {t('hero.button')}
      </button>
      </div>
      < Services limit={3}/>
    </section>
  );
}
