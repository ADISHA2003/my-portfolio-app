import React from 'react';

export default function Plans() {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹1499 - ₹2499',
      features: [
        '1-3 Page Website',
        'Responsive Design',
        'Email Support',
      ],
    },
    {
      title: 'Standard Plan',
      price: '₹2,999 - ₹3,999',
      features: [
        '4-7 Page Website',
        'Responsive Design',
        'Email & Phone Support',
      ],
    },
    {
      title: 'Premium Plan',
      price: '₹4,499 - ₹5,499',
      features: [
        '8+ Page Website',
        'Responsive Design',
        'Email, Phone & Chat Support',
      ],
    },
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Plans & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-2 rounded
                  hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}