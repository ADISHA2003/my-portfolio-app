import React, { FormEvent } from 'react';
import { Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nameField = document.querySelector('input[type="text"]') as HTMLInputElement;
    const mobileNumber = document.querySelector('input[type="tel"]') as HTMLInputElement;
    const emailField = document.querySelector('input[type="email"]') as HTMLInputElement;
    const messageField = document.querySelector('textarea') as HTMLTextAreaElement;

    const name = encodeURIComponent(nameField.value);
    const number = encodeURIComponent(mobileNumber.value);
    const email = encodeURIComponent(emailField.value);
    const message = encodeURIComponent(messageField.value);

    const whatsappMessage = `Name: ${name}%0AMobile No.: ${number}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=919289665096&text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out to discuss your project or ask any questions.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile No."
                required
                maxLength={10}
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg
                hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-12">
            <p className="text-xl font-bold mb-4">OR</p>
            <a
              href="tel:+919289665096"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg
                hover:bg-blue-700 transition-colors duration-300"
            >
              <Phone />
              +91 9289665096
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
