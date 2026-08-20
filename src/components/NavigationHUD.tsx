import { sound } from '../utils/audio';
import { useInvertScroll } from '../context/InvertScrollContext';
import { MaisonMonoLogo } from './MaisonMonoLogo';

export type AppPage = 'home' | 'studio' | 'philosophy' | 'contact';

interface NavigationHUDProps {
  currentPage: AppPage;
  onPageChange: (page: AppPage) => void;
  currentSectionId?: string;
  onNavigate?: (sectionId: string) => void;
}

export function NavigationHUD({
  currentPage,
  onPageChange,
  currentSectionId: _currentSectionId,
  onNavigate: _onNavigate,
}: NavigationHUDProps) {
  const { resetToHeroBottom } = useInvertScroll();

  const navLinks: { id: AppPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'studio', label: 'Studio' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSelectPage = (pageId: AppPage) => {
    sound.playClick(500);
    onPageChange(pageId);
    if (pageId !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      resetToHeroBottom();
    }
  };

  return (
    <header
      id="main-navigation-header"
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBEB]/95 backdrop-blur-md border-b border-[#977600]/20 px-4 sm:px-8 py-3.5 transition-colors shadow-xs"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo Button */}
        <button
          id="nav-brand-logo-btn"
          type="button"
          onClick={() => handleSelectPage('home')}
          className="group transition-transform hover:opacity-90 cursor-pointer flex items-center shrink-0"
          title="Maison Mono Home"
        >
          <MaisonMonoLogo variant="inline" />
        </button>

        {/* Desktop & Mobile Direct Navigation Links */}
        <nav
          id="main-nav-menu"
          aria-label="Main Navigation"
          className="flex items-center gap-1.5 sm:gap-2.5"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                type="button"
                onClick={() => handleSelectPage(link.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono-tech tracking-wider uppercase transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#322700] text-[#FFFBEB] border-[#322700] font-bold shadow-xs'
                    : 'bg-transparent text-[#322700] border-[#977600]/20 hover:border-[#322700] hover:bg-[#977600]/10 font-medium'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
