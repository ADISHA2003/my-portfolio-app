import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/aditya-sharma-334528296',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/adisha2003',
      label: 'GitHub',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/dev_studio_2003',
      label: 'Instagram',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/AdityaS47782205',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" id='footer'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-400">
          &copy; 2024 Custom Web Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}