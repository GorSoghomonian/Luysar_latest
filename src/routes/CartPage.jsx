// src/routes/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function CartPage() {
  const { cart, clearCart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  const generateWhatsAppLink = () => {
    const phone = '37433431413'; // без плюса
    const list = cart
      .map((item, index) => `${index + 1}. ${item.title} — $${item.price}`)
      .join('%0A');
    const message = `Здравствуйте! Я хочу оформить заказ:%0A%0A${list}%0A%0AИтого: $${total}`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center font-sans">
        <Helmet>
          <title>Корзина пуста | Luysar</title>
          <meta name="description" content="Ваша корзина пуста. Перейдите к выбору услуг и оформите заказ." />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
        <Link to="/services" className="text-blue-600 underline">Перейти к услугам</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 font-sans">
      <Helmet>
        <title>Корзина | Luysar</title>
        <meta name="description" content="Просмотрите и оформите выбранные услуги по уходу за могилами. Прозрачная корзина и удобное оформление заказа." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Корзина',
            'description': 'Выбранные услуги по уходу за могилами — Luysar',
            'url': 'https://luysar.am/cart'
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Ваша корзина</h1>
      <div className="space-y-6">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center border rounded p-4 gap-4">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="font-semibold mt-2">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="ml-4 text-red-500 hover:text-red-700 text-sm"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <p className="text-xl font-bold mb-4">Итого: ${total}</p>
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => clearCart()}
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Оформить заказ в WhatsApp
        </a>
      </div>
    </div>
  );
}
