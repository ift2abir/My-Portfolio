import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact', 'contact-cta'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#171717]/95 backdrop-blur-md border-b border-dark-border py-3 sm:py-4'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent-orange rounded-lg"
            aria-label="Ifta Abir - Home"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
              IFTA ABIR<span className="text-accent-orange">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 focus:outline-none focus:ring-2 focus:ring-accent-orange rounded ${
                    isActive ? 'text-white' : 'text-content-secondary hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent-orange rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Prominent LET'S TALK CTA Button (opens WhatsApp chat) */}
          <div className="hidden md:flex items-center">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-accent-orange hover:bg-accent-orange-hover shadow-sm hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-label="Chat with Ifta Abir on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>LET'S TALK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-content-secondary hover:text-white hover:bg-dark-surface border border-transparent hover:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-orange"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-xs z-40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-50 bg-[#171717]/98 backdrop-blur-xl border-b border-dark-border px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-dark-surface border-l-2 border-accent-orange'
                      : 'text-content-secondary hover:text-white hover:bg-dark-surface/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 mt-1.5 border-t border-dark-border">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-accent-orange hover:bg-accent-orange-hover shadow-glow-orange"
                aria-label="Chat with Ifta Abir on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>LET'S TALK</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
