import React from 'react';
import { Laptop, Smartphone, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Creating custom and responsive websites.',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: 'Mobile-Friendly Design',
      description: 'Ensuring your website looks great on all devices.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Maintenance & Support',
      description: 'Providing ongoing support and maintenance for websites.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}