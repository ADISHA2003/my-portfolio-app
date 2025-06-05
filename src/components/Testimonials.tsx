import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Aditya provided an excellent automation and data scraping solution that greatly improved our workflow efficiency. His technical skills, attention to detail, and timely communication made the entire project smooth and successful. I highly recommend Aditya for any web automation or data extraction needs."
            </p>
            <h4 className="font-bold">Karan Verma</h4>
            <p className="text-gray-600">Vancouver, Canada</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "We had the pleasure of having Aditya Sharma intern with us as a Front-End Developer. During his time at Realezi, Aditya demonstrated dedication, growth, and a strong work ethic. His contributions to our projects were valuable, and his skills in HTML, CSS, JavaScript, and UI/UX design made a positive impact. We commend his commitment to the role and wish him all the best in his future endeavors."
            </p>
            <h4 className="font-bold">Hitesh Udhwani</h4>
            <p className="text-gray-600">Founder & CEO Realezi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
