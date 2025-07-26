import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* Фоновое видео */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/about-bg.mp4"
        autoPlay
        muted
        loop
      />

      {/* Тёмная подложка поверх видео */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Контент страницы */}
      <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-1px)] px-6 text-center pt-40 md:pt-60 pb-20">
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold">{t("about.title")}</h1>
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <ul className="text-left list-disc list-inside">
          <p>{t("about.services.1")}</p>
          <p>{t("about.services.2")}</p>
          <p>{t("about.services.3")}</p>
          <p>{t("about.services.4")}</p>
          </ul>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
          <p className="italic">{t("about.footer")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
