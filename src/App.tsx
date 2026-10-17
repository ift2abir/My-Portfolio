import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ContactCTASection } from './components/ContactCTASection';
import { Footer } from './components/Footer';

// Code-split AskAbirChat to preserve rapid initial page loading
const AskAbirChat = lazy(() =>
  import('./components/chat/AskAbirChat').then((mod) => ({ default: mod.AskAbirChat }))
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171717] text-white selection:bg-accent-orange/30 selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Projects Section */}
        <ProjectsSection />

        {/* 6. Education Section */}
        <EducationSection />

        {/* 7. Contact Information Section */}
        <ContactSection />

        {/* 8. Final Contact CTA Section (with Orange Background Portrait) */}
        <ContactCTASection />
      </main>

      {/* 9. Global Footer */}
      <Footer />

      {/* 10. Real AI Portfolio Assistant (Ask Abir AI) */}
      <Suspense fallback={null}>
        <AskAbirChat />
      </Suspense>
    </div>
  );
};

export default App;

