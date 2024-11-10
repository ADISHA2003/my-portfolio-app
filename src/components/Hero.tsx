import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to Custom Web Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Creating modern and responsive websites for small businesses
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg
            hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}