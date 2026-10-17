import React from 'react';
import {
  Code2,
  Terminal,
  Globe,
  Palette,
  GitBranch,
  Github,
  Table,
  FileText,
  Presentation,
  Cpu,
  Binary,
  MessageSquare,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Terminal,
  Globe,
  Palette,
  GitBranch,
  Github,
  Table,
  FileText,
  Presentation,
  Cpu,
  Binary,
  MessageSquare,
  Users,
  Clock,
  Sparkles,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-[#171717] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
              02. SKILLS & EXPERTISE
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Technical Foundations & Strengths
            </h2>
            <p className="text-content-secondary text-sm sm:text-base lg:text-lg">
              Practical competencies developed through university coursework, algorithmic programming, and hands-on web development.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Categories Balanced Grid with Subtle 3D Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} distance={18} className="h-full">
              <TiltCard
                maxTilt={2.2}
                elevation={-4}
                scale={1.008}
                className="h-full rounded-xl"
              >
                <div className="p-5 sm:p-7 lg:p-8 rounded-xl bg-[#202020] border border-dark-border hover:border-accent-orange/30 transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {category.categoryTitle}
                    </h3>
                    <span className="text-xs font-mono text-accent-orange font-bold">
                      0{idx + 1}.
                    </span>
                  </div>
                  <p className="text-xs text-content-muted mb-5 sm:mb-6 leading-relaxed">
                    {category.categoryDescription}
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 mt-auto">
                    {category.skills.map((skill, sIdx) => {
                      const Icon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-3 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-lg bg-[#272727] border border-dark-border/60 hover:border-accent-orange/40 hover:bg-[#2b2b2b] hover:translate-x-1 transition-all duration-200 group"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#1D1D1D] flex items-center justify-center text-accent-orange flex-shrink-0 group-hover:scale-105 group-hover:bg-accent-orange/15 transition-all duration-200">
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-orange transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
