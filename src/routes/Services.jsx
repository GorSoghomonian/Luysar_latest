import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { addToCart } = useCart();
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (key, card) => {
    addToCart({
      key,
      price: card.price,
      image: card.image,
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const items = t('services.items', { returnObjects: true });

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto font-sans relative">
      <Helmet>
        <title>{t('services.metaTitle')}</title>
        <meta name="description" content={t('services.metaDescription')} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': t('services.metaTitle'),
            'description': t('services.metaDescription'),
          })}
        </script>
      </Helmet>

      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow-md z-50">
          {t('services.added')}
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-10">{t('services.title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(items).map(([key, card]) => (
          <div
            key={key}
            className="flex flex-col h-full border rounded-md shadow-md overflow-hidden bg-white transition-transform hover:scale-[1.02]"
          >
            <img src={card.image} alt={card.title} className="w-full h-80 object-cover" />
            <div className="flex flex-col justify-between flex-grow p-4" itemScope itemType="https://schema.org/Product">
              <div>
                <h3 className="text-xl font-bold mb-2" itemProp="name">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3" itemProp="description">{card.description}</p>
                <meta itemProp="image" content={card.image} />
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="font-semibold mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="priceCurrency" content="USD">$</span>
                  <span itemProp="price">{card.price}</span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(key, card)}
                className="w-full py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-800 transition mt-auto"
              >
                {t('cart.add')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
