import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 text-center font-sans" id="gallery">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <img
          src="/gallery1.jpg"
          alt="Before and After 1"
          className="w-full rounded-2xl shadow-md object-cover"
        />
        <img
          src="/gallery2.jpg"
          alt="Before and After 2"
          className="w-full rounded-2xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}
