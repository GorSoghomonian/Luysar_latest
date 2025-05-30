import React from 'react';

export default function MemorialImage() {
  return (
    <section className="w-full  px-10">
      <div className="w-full">
        <img
          src="/grave-image.png"
          alt="Чтение памяти"
          className="w-full h-[700px] object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}
