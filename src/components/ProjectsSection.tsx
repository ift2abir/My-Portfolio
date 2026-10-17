import React from 'react';
import { Github, ArrowUpRight, Terminal } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { projectsData, personalInfo } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#1A1A1A] border-t border-dark-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal distance={16}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-orange font-mono mb-2">
                03. FEATURED WORK
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Projects & Engineering Work
              </h2>
              <p className="text-content-secondary text-base sm:text-lg mt-3 max-w-xl">
                Authentic software and web projects built with focus on clean code, responsiveness, and genuine utility.
              </p>
            </div>
            <div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#202020] border border-dark-border text-xs font-bold uppercase tracking-wider text-white hover:border-accent-orange hover:text-accent-orange transition-all focus:outline-none focus:ring-2 focus:ring-accent-orange"
              >
                <Github className="w-4 h-4" />
                <span>EXPLORE GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Polished Medium-Width Single-Project Showcase with Subtle 3D Tilt */}
        <div className="max-w-3xl mx-auto">
          {projectsData.map((project) => (
            <ScrollReveal key={project.id} delay={150} distance={18}>
              <TiltCard
                maxTilt={4}
                elevation={-6}
                scale={1.01}
                className="rounded-2xl"
              >
                <div className="rounded-2xl bg-[#202020] border border-dark-border hover:border-accent-orange/40 transition-all duration-300 shadow-panel overflow-hidden group">
                  {/* Card Banner / Code Header */}
                  <div className="p-7 sm:p-9 bg-[#262626] border-b border-dark-border flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1D1D1D] border border-dark-border flex items-center justify-center text-accent-orange group-hover:scale-105 transition-transform">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-accent-orange font-semibold block">
                          FEATURED REPOSITORY
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-accent-orange transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-semibold text-content-secondary bg-[#1D1D1D] border border-dark-border">
                      Active Project
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 sm:p-9">
                    <p className="text-base text-content-secondary leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mb-8">
                      <span className="text-xs font-mono uppercase text-content-muted tracking-wider block mb-3">
                        Technologies & Tools Used:
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-white bg-[#2A2A2A] border border-dark-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-dark-border flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-accent-orange hover:bg-accent-orange-hover shadow-sm hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                      >
                        <Github className="w-4 h-4" />
                        <span>VIEW GITHUB REPOSITORY</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <span className="text-xs font-mono text-content-muted hidden sm:inline-block">
                        ift2abir/personal-portfolio
                      </span>
                    </div>
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
