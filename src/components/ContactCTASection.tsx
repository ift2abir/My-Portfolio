import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ScrollReveal } from './ui/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

export const ContactCTASection: React.FC = () => {
  return (
    <section id="contact-cta" className="py-20 sm:py-24 bg-[#171717] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Contact CTA Panel matching Reference 1 with Smooth Entrance */}
        <ScrollReveal distance={20}>
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#202020] border border-dark-border overflow-hidden shadow-panel hover:border-accent-orange/30 transition-colors duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Editorial Heading, Supporting Text, and CTA Button */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-20 flex flex-col justify-center">
                
                {/* Small Orange Section Number */}
                <p className="text-sm font-extrabold text-accent-orange font-mono tracking-wider mb-4">
                  05.
                </p>

                {/* Bold White Dominant Heading */}
                <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6 max-w-lg">
                  Let's build something meaningful together.
                </h2>

                {/* Light Gray Readable Supporting Paragraph */}
                <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl mb-10 font-sans">
                  I'm always interested in exploring software development, learning new technologies, and collaborating on meaningful projects. Have an idea or want to connect? Let's talk.
                </p>

                {/* Primary Vibrant Orange CTA Button (opens WhatsApp chat) */}
                <div className="flex items-center">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-accent-orange hover:bg-accent-orange-hover shadow-sm hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-[#202020]"
                    aria-label="Chat with Ifta Abir on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>LET'S TALK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Right Column: Actual Portrait with Vibrant Orange Backdrop (Matching Accent #FF4D16) */}
              <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-auto min-h-[420px] overflow-hidden bg-accent-orange flex items-end justify-center lg:justify-end">
                
                <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
                  <img
                    src={personalInfo.contactCtaImage}
                    alt="Ifta Abir - Let's build something meaningful together"
                    className="w-full h-full object-cover object-[70%_top] sm:object-[68%_top] lg:object-[65%_top] select-none"
                    loading="lazy"
                  />

                  {/* Subtle soft gradient transition from charcoal panel into orange image on desktop */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#202020] via-[#202020]/40 to-transparent pointer-events-none z-10" />

                  {/* Top gradient overlay on mobile when stacked */}
                  <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#202020] to-transparent pointer-events-none z-10" />

                  {/* Bottom subtle edge anchor */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#202020]/60 to-transparent pointer-events-none z-10" />
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
