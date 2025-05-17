import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-label="Welcome section"
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Custom Web Solutions & Automation
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          We create tailored, responsive websites paired with smart automation to streamline your business processes. From stunning web designs to powerful tools that save time and boost productivity — we deliver solutions that grow with you.
        </p>
        <a
          href="#contact"
          aria-label="Contact Us"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg
            hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
