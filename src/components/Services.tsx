import React from 'react';
import {
  Laptop, Smartphone, Wrench, Bot, DatabaseZap, CloudUpload
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: 'Full-Stack Web Development',
      description: 'Building scalable web apps using React, Node.js, and PostgreSQL.',
    },
    {
      icon: <Bot className="w-12 h-12 text-green-600" />,
      title: 'Web Automation & Scraping',
      description: 'Automating tasks with Puppeteer, Playwright, and Selenium.',
    },
    {
      icon: <DatabaseZap className="w-12 h-12 text-purple-600" />,
      title: 'Data Processing Pipelines',
      description: 'Reading/writing Excel, transforming data, and scraping dynamic content.',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-600" />,
      title: 'PWA Development',
      description: 'Turning websites into installable Progressive Web Apps.',
    },
    {
      icon: <CloudUpload className="w-12 h-12 text-indigo-600" />,
      title: 'Cloud Deployment',
      description: 'Deploying apps on Vercel, managing backends, and DBs on Neon/AWS.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-yellow-600" />,
      title: 'Project Maintenance',
      description: 'Ongoing support, updates, and performance optimization.',
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
