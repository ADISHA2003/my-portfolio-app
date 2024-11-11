import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
 {/*{ href: '#plans', label: 'Our Plans' },*/}
    { href: '#testimonials', label: 'Experience' },
    { href: '#contact', label: 'Contact Us' },
    { href: '#footer', label: 'Social Links' }
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Custom Web Solutions</div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <ul className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent
            md:flex gap-6 transition-all duration-300 ease-in-out
            ${isOpen ? 'flex flex-col items-center py-4' : 'hidden md:flex'}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 block md:inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}