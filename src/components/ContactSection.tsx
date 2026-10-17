import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionText: 'Send Email',
      isCopyable: true,
    },
    {
      icon: Github,
      label: 'GitHub Profile',
      value: 'github.com/ift2abir',
      href: personalInfo.github,
      actionText: 'View Repositories',
      isExternal: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Network',
      value: 'linkedin.com/in/ift2abir',
      href: personalInfo.linkedin,
      actionText: 'Connect on LinkedIn',
      isExternal: true,
    },
    {
      icon: MapPin,
      label: 'Current Base',
      value: personalInfo.location,
      desc: 'Open to local & remote opportunities',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
              05. CONTACT INFORMATION
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-content-secondary text-base sm:text-lg">
              Whether you are interested in discussing software projects, sharing insights on data science, or exploring collaboration opportunities—feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80} distance={16}>
                <div className="p-7 rounded-xl bg-[#202020] border border-dark-border hover:border-accent-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#272727] flex items-center justify-center text-accent-orange mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase text-content-muted tracking-wider block mb-1">
                      {channel.label}
                    </span>
                    <p className="text-base font-bold text-white mb-2 break-all">
                      {channel.value}
                    </p>
                    {channel.desc && (
                      <p className="text-xs text-content-secondary mb-4">
                        {channel.desc}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-dark-border/60 flex items-center gap-3">
                    {channel.href && (
                      <a
                        href={channel.href}
                        target={channel.isExternal ? '_blank' : undefined}
                        rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-orange hover:text-white transition-colors"
                      >
                        <span>{channel.actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {channel.isCopyable && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-secondary hover:text-white transition-colors ml-auto"
                        aria-label="Copy email address"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-xs">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
