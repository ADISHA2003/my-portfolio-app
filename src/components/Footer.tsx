const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-6 h-6 fill-current"
    role="img"
  >
    <title>LinkedIn</title>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 
    108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.1 
    0 53.79 0c29.71 0 53.8 24.1 53.8 53.8 0 
    29.7-24.09 54.3-53.8 54.3zM447.9 
    448h-92.4V304.1c0-34.3-.7-78.3-47.7-78.3-47.8 
    0-55.1 37.3-55.1 75.9V448h-92.4V148.9h88.6v40.8h1.3c12.3-23.4 
    42.4-47.9 87.2-47.9 93.3 0 110.5 61.4 110.5 141.3V448z"/>
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    className="w-6 h-6 fill-current"
    role="img"
  >
    <title>GitHub</title>
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 
    3.6-3.2.3-5.5-1.3-5.5-3.6 0-2 
    2.3-3.6 5.2-3.6 3-.3 5.5 1.3 
    5.5 3.6zm-31.1-4.5c-.7 2 
    1.3 4.3 4.5 4.9 3 .7 6.2-.7 
    6.9-2.6.7-2-1.3-4.3-4.5-5-3-.6-6.2.7-6.9 
    2.7zm44.2-1.7c-2.9.7-4.9 
    2.6-4.5 4.9.3 2 2.9 3.3 5.8 
    2.6 2.9-.7 4.9-2.6 4.5-4.9-.3-2-2.9-3.3-5.8-2.6zM244 
    8C106.1 8 0 114.1 0 252c0 108.2 
    69.8 199.9 166.5 232.4 12.1 2.3 
    16.5-5.2 16.5-11.6 0-5.8-.3-24.9-.3-45.2-67.7 
    14.7-81.9-29.1-81.9-29.1-11-28.1-26.8-35.5-26.8-35.5-21.9-15 
    1.6-14.7 1.6-14.7 24.2 1.6 36.9 
    24.9 36.9 24.9 21.6 37.1 56.5 26.4 
    70.5 20.1 2.3-15.7 8.4-26.4 
    15.2-32.4-54-6.2-110.8-27-110.8-119.6 
    0-26.4 9.4-48.1 24.9-65-2.6-6.2-10.7-32 
    2.3-66.4 0 0 20.1-6.5 
    66.1 24.9 19.1-5.2 39.5-7.8 
    59.8-7.8s40.7 2.6 59.8 
    7.8c46-31.4 66.1-24.9 
    66.1-24.9 13 34.4 4.9 60.2 
    2.3 66.4 15.5 16.9 24.9 
    38.6 24.9 65 0 92.9-56.8 
    113.4-110.8 119.6 8.7 7.5 16.2 
    22.6 16.2 45.8 0 33.1-.3 
    59.8-.3 68.1 0 6.5 4.5 13.9 
    16.5 11.6C426.2 451.9 496 
    360.2 496 252 496 114.1 383.9 8 244 8z"/>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    className="w-6 h-6 fill-current"
    role="img"
  >
    <title>X</title>
    <path d="M714.163 519.284L1160.89 0H1050.3L667.137 
      442.67L395.61 0H0L468.137 729.49L0 
      1226.37H110.59L515.137 761.517L804.39 
      1226.37H1200L714.137 519.284H714.163ZM564.59 
      696.655L521.445 630.07L150.3 
      79.524h190.21L694.72 585.24L737.864 
      651.825L1109.42 1200H919.21L564.59 
      696.655Z"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/aditya-sharma-334528296',
      label: 'LinkedIn',
    },
    {
      icon: <GithubIcon />,
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
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:text-blue-400 transition-colors duration-300"
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
