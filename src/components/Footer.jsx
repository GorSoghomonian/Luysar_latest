import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-300 py-10 px-6 w-full font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-black font-semibold">
        <p>© Luysar</p>
        <p>
          {t('footer.rights')}, {new Date().getFullYear()} ↑
        </p>
      </div>
    </footer>
  );
}
