import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 text-center font-sans" id="gallery">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
        <img
          src="/gallery1.jpg"
          alt="Before and After 1"
          className="w-full h-[32rem] md:col-span-3 rounded-2xl shadow-md object-cover"
        />
        <img
          src="/gallery2.jpg"
          alt="Before and After 2"
          className="w-full h-[32rem] md:col-span-2 rounded-2xl shadow-md object-cover"
        />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <img
          src="/gallery3.jpg"
          alt="Before and After 3"
          className="w-full h-[32rem] md:col-span-2 rounded-2xl shadow-md object-cover"
        />
        <img
          src="/gallery4.jpg"
          alt="Before and After 4"
          className="w-full h-[32rem] md:col-span-3 rounded-2xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}