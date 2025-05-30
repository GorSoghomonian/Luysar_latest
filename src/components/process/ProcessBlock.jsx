import React from 'react';
import { Phone, Home, Droplets } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProcessBlock() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-32 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('process.title')}
        </h2>
        <p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 p-5"
          style={{ lineHeight: '2.2rem', letterSpacing: '0.015em' }}
        >
          {t('process.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center">
          {/* Шаг 1 */}
          <div>
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <p className="text-gray-700 text-sm" style={{ lineHeight: '1.5rem', letterSpacing: '0.015em' }}>
              {t('process.step1')}
            </p>
          </div>

          {/* Шаг 2 */}
          <div>
            <Home className="w-12 h-12 mx-auto mb-4" />
            <p className="text-gray-700 text-sm" style={{ lineHeight: '1.5rem', letterSpacing: '0.015em' }}>
              {t('process.step2')}
            </p>
          </div>

          {/* Шаг 3 */}
          <div>
            <Droplets className="w-12 h-12 mx-auto mb-4" />
            <p className="text-gray-700 text-sm" style={{ lineHeight: '1.5rem', letterSpacing: '0.015em' }}>
              {t('process.step3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
