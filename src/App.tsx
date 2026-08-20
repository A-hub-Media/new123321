import { useState, useEffect, useLayoutEffect } from 'react';
import { NavigationHUD, AppPage } from './components/NavigationHUD';
import { FooterSection } from './components/sections/FooterSection';
import { AboutSection } from './components/sections/AboutSection';
import { SecondaryCTASection } from './components/sections/SecondaryCTASection';
import { FeaturedContentSection } from './components/sections/FeaturedContentSection';
import { ValuePropsSection } from './components/sections/ValuePropsSection';
import { HeroSection } from './components/sections/HeroSection';
import { StudioPage } from './components/pages/StudioPage';
import { PhilosophyPage } from './components/pages/PhilosophyPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { SECTIONS_ORDER } from './data/websiteData';
import { sound } from './utils/audio';
import { InvertScrollProvider, useInvertScroll } from './context/InvertScrollContext';

function InvertWebsiteContent() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSectionId, setCurrentSectionId] = useState<string>('section-hero');
  const { smoothScrollTo, smoothScrollToElement, lenisInstance, setActivePage } = useInvertScroll();

  // Sync current page with InvertScroll context so scroll engine updates instantly
  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage, setActivePage]);

  // When on Home: start at Origin Launchpad (Hero at bottom)
  // When switching to Studio / Philosophy / Contact: reset to top (0)
  useLayoutEffect(() => {
    if (currentPage === 'home') {
      const scrollToHeroBottom = () => {
        const max = document.documentElement.scrollHeight;
        window.scrollTo({
          top: max,
          behavior: 'instant',
        });
        if (lenisInstance) {
          lenisInstance.scrollTo(max, { immediate: true });
        }
      };

      scrollToHeroBottom();
      const timer1 = setTimeout(scrollToHeroBottom, 40);
      const timer2 = setTimeout(scrollToHeroBottom, 150);
      const timer3 = setTimeout(scrollToHeroBottom, 350);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      // Non-home pages: instant reset to the top
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    }
  }, [currentPage, lenisInstance]);

  // Section observer to track viewport layer on Home
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionElements = SECTIONS_ORDER.map((sec) => document.getElementById(sec.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSectionId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.15,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]);

  const handleNavigateSection = (sectionId: string) => {
    sound.playClick(600);
    smoothScrollToElement(sectionId);
  };

  const handleStartAutoTour = () => {
    sound.playAscend();
    smoothScrollTo(0, 2.2);
  };

  const handlePageChange = (page: AppPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-[#FFFBEB] text-[#322700] flex flex-col justify-start">
      {/* Top Navigation HUD with direct page switching */}
      <NavigationHUD
        currentPage={currentPage}
        onPageChange={handlePageChange}
        currentSectionId={currentSectionId}
        onNavigate={handleNavigateSection}
      />

      <main className="flex-1 w-full">
        {/* HOME PAGE: Inverted Bottom-Up DOM structure (Invert scroll active) */}
        {currentPage === 'home' && (
          <div className="w-full">
            {/* 01. Top: Footer / Apex Epilogue */}
            <FooterSection
              onNavigate={handleNavigateSection}
              onPageChange={handlePageChange}
            />

            {/* 02. About Snippet */}
            <AboutSection />

            {/* 03. Secondary CTA */}
            <SecondaryCTASection />

            {/* 04. Featured Content & Case Studies */}
            <FeaturedContentSection
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            {/* 05. Core Value Propositions */}
            <ValuePropsSection />

            {/* 06. Hero Section (Bottom of DOM - Landing point) */}
            <HeroSection
              onNavigate={handleNavigateSection}
              onStartAutoTour={handleStartAutoTour}
            />
          </div>
        )}

        {/* STUDIO PAGE: Standard Top-Down Scroll */}
        {currentPage === 'studio' && (
          <div className="w-full animate-in fade-in duration-200">
            <StudioPage onNavigateContact={() => handlePageChange('contact')} />
            <FooterSection
              isStandalone
              onPageChange={handlePageChange}
            />
          </div>
        )}

        {/* PHILOSOPHY PAGE: Standard Top-Down Scroll */}
        {currentPage === 'philosophy' && (
          <div className="w-full animate-in fade-in duration-200">
            <PhilosophyPage />
            <FooterSection
              isStandalone
              onPageChange={handlePageChange}
            />
          </div>
        )}

        {/* CONTACT PAGE: Standard Top-Down Scroll */}
        {currentPage === 'contact' && (
          <div className="w-full animate-in fade-in duration-200">
            <ContactPage />
            <FooterSection
              isStandalone
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </main>

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <InvertScrollProvider>
      <InvertWebsiteContent />
    </InvertScrollProvider>
  );
}
