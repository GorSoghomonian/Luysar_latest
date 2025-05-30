import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru/translation.json';
import hy from './locales/hy/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(LanguageDetector) // добавили сюда
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      hy: { translation: hy },
      en: { translation: en },
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
