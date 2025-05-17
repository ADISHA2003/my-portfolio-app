import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-label="Welcome section"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to Custom Web Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          We specialize in delivering more than just website development. Our expertise spans across building fully responsive, modern websites tailored specifically to your business needs, integrating intelligent automation to streamline your workflows, and creating powerful web applications that boost productivity and customer engagement.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          Whether you're a small business looking to establish your online presence, an entrepreneur wanting a scalable e-commerce platform, or a company aiming to optimize your digital operations, we craft personalized solutions that fit your unique goals. We also focus on performance optimization, SEO best practices, and ongoing support to ensure your website not only looks great but ranks well and performs smoothly.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Partner with us to transform your digital presence with cutting-edge technology, tailored automation, and dedicated maintenance — everything designed to help your business grow efficiently and stand out in the digital landscape.
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
