import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Services() {
  const cards = [
    {
      title: 'Первый визит',
      description: 'Этот пакет включает в себя один визит на место захоронения: уборка мусора, мытьё памятника и фотоотчёт.',
      price: '59.99',
      image: '/gallery2.jpg',
    },
    {
      title: 'Год ухода за могилой',
      description: 'Пакет включает 4 визита в течение года с полным обслуживанием и поддержкой чистоты.',
      price: '159.99',
      image: '/gallery2.jpg',
    },
    {
      title: 'Мраморная Декоративная Крошка',
      description: 'Укладка мраморной крошки, уборка территории, декоративное оформление.',
      price: '499.00',
      image: '/gallery2.jpg',
    },
    {
      title: 'Гвоздики 100 шт',
      description: '100 гвоздик будет доставлены и возложены к могиле с уважением и заботой.',
      price: '149.99',
      image: '/flowers.webp',
    },
    {
      title: 'Гвоздики 20 шт',
      description: '20 белых гвоздик — простой, но красивый способ вспомнить о любимых.',
      price: '49.99',
      image: '/flowers.webp',
    },
    {
      title: 'Похоронные венки с доставкой в Ереване',
      description: 'Элегантные венки с цветами и лентами. Быстрая доставка по городу.',
      price: '125.99',
      image: '/venok.webp',
    },
    {
      title: 'Розы 20 шт',
      description: '20 роз будут возложены к памятнику. Символ памяти и любви.',
      price: '79.99',
      image: '/rose.jpg',
    },
    {
      title: 'Розы 100 шт',
      description: '100 роз будут возложены к памятнику. Символ памяти и любви.',
      price: '199.99',
      image: '/rose.jpg',
    },
  ];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Наши предложения</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col h-full border rounded-md shadow-md overflow-hidden bg-white">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover"
            />
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="font-semibold mb-4">${card.price}</p>
              </div>
              <button className="w-full py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-800 transition mt-auto">
                Заказать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
