import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GalleryIntro() {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="text-center py-24 px-4 font-sans mt-14"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-black">
        {t('galleryIntro.title')}
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-black" style={{ lineHeight: '2.2rem', letterSpacing: '0.015em' }}>
          {t('galleryIntro.description1')}
          <br />
          {t('galleryIntro.description2')}
        </p>
      </div>
    </section>
  );
}
