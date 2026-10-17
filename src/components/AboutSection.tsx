import React from 'react';
import { Terminal, Database, Code, Globe } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    {
      icon: Code,
      title: 'Software Development',
      desc: 'Developing a solid programming foundation in C and Python, with a strong focus on clean logic, structured code, and maintainable software.',
    },
    {
      icon: Database,
      title: 'Data Science',
      desc: 'Exploring computational data analysis, statistical methods, and problem-solving techniques to uncover actionable insights from data.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Building responsive, accessible web interfaces using semantic HTML, structured CSS layouts, and modern front-end tooling.',
    },
    {
      icon: Terminal,
      title: 'Algorithmic Problem-Solving',
      desc: 'Strengthening algorithmic thinking, core data structures, and computational logic through structured university coursework and contests.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#1A1A1A] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
              01. ABOUT ME
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Building with Purpose & Continuous Learning
            </h2>
            <p className="text-content-secondary text-base sm:text-lg leading-relaxed mb-4">
              I am a Software Engineering undergraduate at {personalInfo.university}. My educational journey is centered around developing strong analytical capabilities, writing clean code, and understanding how technology can be applied to solve genuine challenges.
            </p>
            <p className="text-content-secondary text-base sm:text-lg leading-relaxed">
              I am deeply interested in software engineering, data science, and front-end development. Rather than chasing superficial trends, I focus on mastering foundational computer science principles and building practical applications that deliver value.
            </p>
          </div>
        </ScrollReveal>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} distance={16}>
                <div className="p-7 rounded-xl bg-[#202020] border border-dark-border hover:border-accent-orange/40 hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#272727] flex items-center justify-center text-accent-orange mb-5 group-hover:scale-105 group-hover:bg-accent-orange/15 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Academic & Personal Snapshot */}
        <ScrollReveal delay={200} distance={14}>
          <div className="p-8 rounded-xl bg-[#202020] border border-dark-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-content-muted font-mono uppercase tracking-wider block mb-1">
                Role
              </span>
              <p className="text-base font-bold text-white">{personalInfo.role}</p>
            </div>

            <div>
              <span className="text-xs text-content-muted font-mono uppercase tracking-wider block mb-1">
                University
              </span>
              <p className="text-base font-bold text-white">{personalInfo.university}</p>
            </div>

            <div>
              <span className="text-xs text-content-muted font-mono uppercase tracking-wider block mb-1">
                Location
              </span>
              <p className="text-base font-bold text-white">{personalInfo.location}</p>
            </div>

            <div>
              <span className="text-xs text-content-muted font-mono uppercase tracking-wider block mb-1">
                Status
              </span>
              <p className="text-base font-bold text-accent-orange">Actively Learning & Building</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
