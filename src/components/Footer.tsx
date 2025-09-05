import React from 'react';
import { Github, Linkedin, Twitter , Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full z-20 bg-transparent text-gray-600 text-xs py-4 px-4 mt-auto">
      <div className="flex flex-col items-center space-y-1">
        <p className="opacity-70">
          Designed by{' '}
          <a
            href="http://www.jayanth.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Donavalli Jayanth
          </a>
        </p>
        <div className="flex space-x-3">
          <a
            href="https://github.com/Jayanth0124"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-black transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.instagram.com/jayanth.chowdary__"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-black transition-all"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/jayanth-donavalli"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-black transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;