import React from 'react';
import {
  Laptop, Smartphone, Wrench, Bot, DatabaseZap, UploadCloud, ShieldCheck
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: 'High-Performance Web Applications',
      description:
        'I build fast, scalable web apps using React and Node.js — optimized for performance, SEO, and real-world usage, not just good-looking UI.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
      title: 'Testing-First Development',
      description:
        'Unlike typical developers, I build with a QA mindset — ensuring your product is stable, bug-free, and reliable before it reaches users.',
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-600" />,
      title: 'Automation Systems',
      description:
        'Automate repetitive tasks, workflows, and browser actions using Playwright, Selenium, and Python — saving hours of manual work.',
    },
    {
      icon: <DatabaseZap className="w-12 h-12 text-pink-600" />,
      title: 'Data & Scraping Solutions',
      description:
        'Extract, process, and transform data from websites, APIs, and files into structured, usable formats for your business needs.',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
      title: 'PWA & Modern Web Experiences',
      description:
        'Convert your website into an installable app with offline support, fast loading, and app-like experience across devices.',
    },
    {
      icon: <UploadCloud className="w-12 h-12 text-yellow-600" />,
      title: 'Deployment & Optimization',
      description:
        'Deploy on Vercel/AWS with proper setup, performance tuning, and scalability in mind — so your app runs smoothly under load.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* 🔥 Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What I Can Help You With
        </h2>

        {/* 💡 Subheading */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I don’t just build websites — I create reliable, automated systems that save time,
          reduce errors, and scale with your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
