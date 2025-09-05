// src/components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-transparent text-purple-400 text-xs py-2 px-4"> {/* Increased padding slightly */}
      <div className="flex flex-col items-center space-y-1"> {/* Reduced space-y slightly */}
        <p className="opacity-70">
          Designed by{' '}
          <a
            href="http://www.jayanth.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Donavalli Jayanth
          </a>
        </p>
        <div className="flex space-x-3">
          <a
            href="https://github.com/Jayanth0124"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/donavalli-jayanth-344383234/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-white transition-all"
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