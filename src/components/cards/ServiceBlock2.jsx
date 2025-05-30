import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ServiceBlock2() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 py-8">
        {/* Фото справа */}
        <div className="w-full md:w-1/2">
          <img
            src="/deep-clean.jpg"
            alt={t('serviceBlock2.imageAlt')}
            className="rounded-2xl w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Текст слева */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-2xl md:text-2xl font-bold mb-4">
            {t('serviceBlock2.title')}
          </h3>
          <p className="text-lg leading-relaxed tracking-wide text-gray-800">
            {t('serviceBlock2.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
