import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function CartPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const { t } = useTranslation();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  const generateWhatsAppLink = () => {
    const phone = '37433431413';
    const list = cart
      .map((item, index) => {
        const title = t(`services.items.${item.key}.title`);
        return `${index + 1}. ${title} — $${item.price}`;
      })
      .join('%0A');

    const message = `${t('cart.whatsappMessage')}%0A%0A${list}%0A%0A${t('cart.total')}: $${total}`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center font-sans">
        <Helmet>
          <title>{t('cart.empty')} | Luysar</title>
          <meta name="description" content={t('cart.emptyDescription')} />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">{t('cart.empty')}</h1>
        <Link to="/services" className="text-blue-600 underline">
          {t('cart.backToServices')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 font-sans">
      <Helmet>
        <title>{t('cart.title')} | Luysar</title>
        <meta name="description" content={t('cart.description')} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': t('cart.title'),
            'description': t('cart.description'),
            'url': 'https://luysar.am/cart'
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">{t('cart.title')}</h1>
      <div className="space-y-6">
        {cart.map((item, index) => {
          const title = t(`services.items.${item.key}.title`);
          const description = t(`services.items.${item.key}.description`);
          return (
            <div key={index} className="flex items-center border rounded p-4 gap-4">
              <img src={item.image} alt={title} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="font-semibold mt-2">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="ml-4 text-red-500 hover:text-red-700 text-sm"
              >
                {t('cart.remove')}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-right">
        <p className="text-xl font-bold mb-4">
          {t('cart.total')}: ${total}
        </p>
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => clearCart()}
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          {t('cart.checkout')}
        </a>
      </div>
    </div>
  );
}
