import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-label="Welcome section"
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        
        {/* 🔥 Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          I Build Fast, Reliable Web Apps <br className="hidden md:block" />
          <span className="text-blue-600">That Actually Work — At Scale</span>
        </h1>

        {/* 💡 Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          QA Engineer + Automation Specialist + Full-Stack Developer.  
          I create modern websites and automation systems that reduce manual work, improve reliability, and help your business run smarter — not harder.
        </p>

        {/* 🚀 Value bullets */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 text-gray-700 text-sm md:text-base">
          <span>⚡ High-performance websites</span>
          <span>🤖 Automation that saves hours</span>
          <span>🛡️ Built with testing-first approach</span>
        </div>

        {/* 🎯 CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            aria-label="Contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg
              hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium"
          >
            🚀 Get Your Project Built
          </a>

          <a
            href="#projects"
            aria-label="View Projects"
            className="inline-block border border-gray-300 text-gray-800 px-8 py-3 rounded-lg
              hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            View My Work
          </a>
        </div>

      </div>
    </section>
  );
}
