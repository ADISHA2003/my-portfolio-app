import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: `"Aditya provided an excellent automation and data scraping solution that greatly improved our workflow efficiency. His technical skills, attention to detail, and timely communication made the entire project smooth and successful. I highly recommend Aditya for any web automation or data extraction needs."`,
      name: "Karan Verma",
      role: "Client",
      location: "Vancouver, Canada",
    },
    {
      text: `"We had the pleasure of having Aditya Sharma intern with us as a Front-End Developer. During his time at Realezi, Aditya demonstrated dedication, growth, and a strong work ethic. His contributions to our projects were valuable, and his skills in HTML, CSS, JavaScript, and UI/UX design made a positive impact."`,
      name: "Hitesh Udhwani",
      role: "Founder & CEO",
      location: "Realezi",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* 🔥 Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People Say
        </h2>

        {/* 💡 Subheading */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Real feedback from clients and teams I’ve worked with — focused on results, reliability, and impact.
        </p>

        {/* 🧱 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              {/* <Quote className="absolute top-6 right-6 text-gray-200 w-10 h-10" /> */}

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.text}
              </p>

              {/* Divider */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🚀 Bottom trust line */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          Focused on delivering real value — not just code.
        </p>

      </div>
    </section>
  );
}
