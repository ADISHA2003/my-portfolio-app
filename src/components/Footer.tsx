import { Linkedin, Github } from 'lucide-react';

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    className="w-6 h-6 fill-current"
  >
    <path d="M714.163 519.284L1160.89 0H1050.3L667.137 442.67L395.61 0H0L468.137 
      729.49L0 1226.37H110.59L515.137 761.517L804.39 1226.37H1200L714.137 
      519.284H714.163ZM564.59 696.655L521.445 630.07L150.3 79.524h190.21L694.72 
      585.24L737.864 651.825L1109.42 1200H919.21L564.59 696.655Z"/>
  </svg>
);

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
      icon: <XIcon />,
      href: 'https://x.com/AdityaS47782205',
      label: 'X',
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
