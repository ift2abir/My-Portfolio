import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121212] border-t border-dark-border py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-dark-border/60">
          
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-1.5 mb-2 group">
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                IFTA ABIR<span className="text-accent-orange">.</span>
              </span>
            </a>
            <p className="text-xs text-content-secondary max-w-sm">
              Software Engineering Student at Daffodil International University | Aspiring Data Science Engineer
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-content-secondary uppercase tracking-wider" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-accent-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#202020] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#202020] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-[#202020] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-label="Email Ifta Abir"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#202020] border border-dark-border flex items-center justify-center text-white hover:text-white hover:bg-accent-orange hover:border-accent-orange transition-all ml-2 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-content-muted gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} Ifta Abir. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Designed with Editorial Dark Direction & Orange Accents
          </p>
        </div>

      </div>
    </footer>
  );
};
