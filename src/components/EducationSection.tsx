import React from 'react';
import { Award, Building, Trophy, Calendar } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { educationList, activitiesList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 lg:py-24 bg-[#171717] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
              04. ACADEMIC JOURNEY
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Education & Activities
            </h2>
            <p className="text-content-secondary text-sm sm:text-base lg:text-lg">
              Structured academic milestones in science and software engineering complemented by programming contest operations and volunteering.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Degrees & Qualifications (3 cards) */}
          <ScrollReveal delay={100} distance={18} className="space-y-4 sm:space-y-6">
            <div className="pb-2 border-b border-dark-border">
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Degrees & Qualifications
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-xl bg-[#202020] border border-dark-border hover:border-accent-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-orange uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    {item.grade && (
                      <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded text-xs font-semibold bg-[#272727] text-white border border-dark-border">
                        <Award className="w-3.5 h-3.5 text-accent-orange" />
                        <span>{item.grade}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                    {item.degree}
                  </h4>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-content-secondary mb-2.5 sm:mb-3">
                    <Building className="w-4 h-4 text-accent-orange flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Leadership & Activities (1 card with natural height) */}
          <ScrollReveal delay={150} distance={18} className="space-y-4 sm:space-y-6">
            <div className="pb-2 border-b border-dark-border">
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Leadership & Activities
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {activitiesList.map((act, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-xl bg-[#202020] border border-dark-border hover:border-accent-orange/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#272727] border border-dark-border flex items-center justify-center text-accent-orange flex-shrink-0">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg font-bold text-white leading-snug">
                        {act.role}
                      </h4>
                      {act.organization && (
                        <p className="text-xs text-content-muted font-mono mt-0.5">
                          {act.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4 sm:mb-5">
                    {act.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {act.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#272727] text-content-secondary border border-dark-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
