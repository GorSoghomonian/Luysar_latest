import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

export default function PricingPage() {
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

  const cards = [
    {
      key: 'firstVisit',
      title: 'Первый визит',
      description: 'Один визит: уборка, мытьё памятника и фотоотчёт.',
      price: '69.99',
      image: '/gallery2.jpg',
    },
    {
      key: 'yearCare',
      title: 'Год ухода за могилой',
      description: '4 визита в год с полным обслуживанием.',
      price: '179.99',
      image: '/gallery2.jpg',
    },
    {
      key: 'marbleGravel',
      title: 'Мраморная крошка',
      description: 'Укладка крошки и декоративное оформление.',
      price: '690.00',
      image: '/gallery2.jpg',
    },
  ];

  return (
    <div className="mt-20 relative max-w-7xl mx-auto px-4">
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-600 text-white py-2 px-4 rounded shadow-md z-50">
          {t('services.added')}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        {t('hero.pricingTitle') || 'Наши предложения'}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div
            key={card.key}
            className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] flex flex-col border rounded-xl shadow-md overflow-hidden bg-white transition-transform hover:scale-[1.02]"
          >
            <img src={card.image} alt={card.title} className="w-full h-60 object-cover" />
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
                onClick={() => handleAddToCart(card.key, card)}
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
