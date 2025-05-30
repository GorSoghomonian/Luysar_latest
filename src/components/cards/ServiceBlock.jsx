import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ServiceBlock() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-5 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Фото слева */}
        <div className="w-full md:w-1/2">
          <img
            src="/nadgr.jpg"
            alt={t('serviceBlock.imageAlt')}
            className="rounded-2xl w-full h-[420px] object-cover shadow-md"
          />
        </div>

        {/* Текст справа */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-2xl md:text-2xl font-bold mb-4">
            {t('serviceBlock.title')}
          </h3>
          <p className="text-lg leading-relaxed tracking-wide text-gray-800">
            {t('serviceBlock.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
