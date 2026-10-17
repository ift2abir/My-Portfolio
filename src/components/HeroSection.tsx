import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#171717] bg-[radial-gradient(ellipse_75%_75%_at_75%_30%,rgba(55,55,55,0.35),rgba(23,23,23,0.95)_70%)] flex items-center justify-center pt-20 sm:pt-24 lg:pt-20 pb-10 sm:pb-12 lg:pb-8 overflow-hidden"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          
          {/* Left Column: Typography, Mobile Framed Portrait & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 z-20 flex flex-col justify-center text-left">
            <ScrollReveal delay={0} distance={12}>
              {/* Small Orange Intro Label */}
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-accent-orange mb-2 sm:mb-4 font-mono">
                HELLO, I'M
              </p>

              {/* Display Heading - Scaled cleanly for mobile without awkward wrapping */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05] sm:leading-[0.98] mb-2 sm:mb-4">
                Ifta Abir
              </h1>

              {/* Supporting Headline */}
              <h2 className="text-xs sm:text-base md:text-lg lg:text-xl font-extrabold text-accent-orange sm:text-white uppercase tracking-wider mb-4 sm:mb-6">
                SOFTWARE ENGINEERING STUDENT
              </h2>

              {/* MOBILE ONLY: Beautifully Framed Profile Portrait with Soft Glowing Orange Rim */}
              <div className="lg:hidden my-4 sm:my-6 flex justify-center w-full">
                <div className="relative group">
                  {/* Soft Glowing Ambient Orange Rim */}
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-accent-orange/40 to-accent-orange/20 blur-md opacity-80 pointer-events-none" />
                  
                  {/* Framed Picture Container */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#242424] to-[#171717] border-2 border-accent-orange/50 shadow-2xl flex items-end justify-center">
                    <img
                      src={personalInfo.heroImage}
                      alt="Ifta Abir - Software Engineering Student"
                      className="w-full h-full object-cover object-top select-none"
                      loading="eager"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Hero Paragraph */}
              <p className="text-sm sm:text-lg text-content-secondary leading-relaxed max-w-xl mb-6 sm:mb-10 font-sans">
                I am learning to build practical applications that solve real-world problems.
              </p>

              {/* Action Buttons: Stacked vertically full-width on mobile for effortless thumb tapping */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-accent-orange hover:bg-accent-orange-hover shadow-sm hover:shadow-glow-orange transition-all duration-300 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-dark"
                >
                  <span>EXPLORE MY WORK</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {personalInfo.cvPath && (
                  <a
                    href={personalInfo.cvPath}
                    download="Md_Ifta_Khirul_Haque_Abir_CV.pdf"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#2A2A2A] border border-dark-border transition-all duration-300 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-dark"
                  >
                    <Download className="w-4 h-4 text-accent-orange transition-transform group-hover:-translate-y-0.5" />
                    <span>DOWNLOAD CV</span>
                  </a>
                )}
              </div>

              {/* Circular Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#222222] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#222222] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-11 h-11 rounded-full bg-[#222222] border border-dark-border flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                  aria-label="Email Ifta Abir"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* DESKTOP ONLY: Natural Full-Color Uncropped Portrait in Right Column */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative justify-end items-end w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[590px] flex items-end justify-end">
              <img
                src={personalInfo.heroImage}
                alt="Ifta Abir - Software Engineering Student"
                className="w-full h-auto object-contain object-bottom select-none drop-shadow-none"
                style={{ filter: 'none' }}
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-6 sm:h-10 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
