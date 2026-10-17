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
  Wand2,
  Flame,
  Zap,
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
  Wand2,
  Flame,
  Zap,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-[#171717] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="max-w-3xl mb-8 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
              02. SKILLS & EXPERTISE
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Technical Foundations & Modern Workflows
            </h2>
            <p className="text-content-secondary text-sm sm:text-base lg:text-lg">
              Practical competencies developed through university coursework, algorithmic programming, modern web engineering, and AI-accelerated workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Prominent Modern AI & Accelerated Engineering Highlight Cards */}
        <div className="mb-10 sm:mb-14">
          <ScrollReveal distance={14}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 text-accent-orange" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-orange">
                Modern AI & Accelerated Workflows
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Prompt Engineering */}
            <ScrollReveal delay={100} distance={16} className="h-full">
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#222222]/90 via-[#1F1F1F]/90 to-[#191919]/90 backdrop-blur-md border border-accent-orange/40 hover:border-accent-orange shadow-[0_0_25px_rgba(244,81,22,0.12)] hover:shadow-glow-orange transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full">
                {/* Decorative Ambient Orange Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-orange/15 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-orange/25 transition-all duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange group-hover:scale-105 group-hover:bg-accent-orange/20 transition-all duration-300 shadow-sm">
                      <Wand2 className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-accent-orange/20 text-accent-orange border border-accent-orange/30 uppercase">
                      AI WORKFLOW
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-accent-orange transition-colors mb-2">
                    Prompt Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4 sm:mb-5">
                    Formulating precise, context-rich directives, structured system instructions, and persona constraints to steer LLMs into producing robust, accurate, and production-ready code solutions.
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-dark-border/60">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['System Directives', 'Context Steering', 'Structured Outputs', 'LLM Architecture'].map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#272727] text-content-secondary border border-dark-border group-hover:border-accent-orange/30 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Vibe Coding */}
            <ScrollReveal delay={180} distance={16} className="h-full">
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#222222]/90 via-[#1F1F1F]/90 to-[#191919]/90 backdrop-blur-md border border-accent-orange/40 hover:border-accent-orange shadow-[0_0_25px_rgba(244,81,22,0.12)] hover:shadow-glow-orange transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full">
                {/* Decorative Ambient Orange Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-orange/15 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-orange/25 transition-all duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange group-hover:scale-105 group-hover:bg-accent-orange/20 transition-all duration-300 shadow-sm">
                      <Flame className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-accent-orange/20 text-accent-orange border border-accent-orange/30 uppercase">
                      RAPID FLOW
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-accent-orange transition-colors mb-2">
                    Vibe Coding
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4 sm:mb-5">
                    Harnessing high-speed conversational AI pair-programming, intuitive rapid prototyping, and immediate iterative testing to transform ideas into functional applications at peak velocity.
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-dark-border/60">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['AI Pair-Programming', 'Rapid Prototyping', 'Interactive Flow', 'Code Synthesis'].map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#272727] text-content-secondary border border-dark-border group-hover:border-accent-orange/30 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

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
                      const isModernAi = skill.name === 'Prompt Engineering' || skill.name === 'Vibe Coding';
                      return (
                        <div
                          key={sIdx}
                          className={`flex items-center gap-3 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-lg border transition-all duration-200 group ${
                            isModernAi
                              ? 'bg-gradient-to-r from-[#28211E] to-[#242424] border-accent-orange/40 hover:border-accent-orange hover:bg-[#2D2421]'
                              : 'bg-[#272727] border-dark-border/60 hover:border-accent-orange/40 hover:bg-[#2b2b2b]'
                          } hover:translate-x-1`}
                        >
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-200 ${
                              isModernAi
                                ? 'bg-accent-orange/20 text-accent-orange'
                                : 'bg-[#1D1D1D] text-accent-orange group-hover:bg-accent-orange/15'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-orange transition-colors">
                            {skill.name}
                          </span>
                          {isModernAi && (
                            <span className="ml-auto px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-accent-orange/20 text-accent-orange border border-accent-orange/30">
                              MODERN
                            </span>
                          )}
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
