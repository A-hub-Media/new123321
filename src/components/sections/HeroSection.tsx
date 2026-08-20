import { MaisonMonoLogo } from '../MaisonMonoLogo';

interface HeroSectionProps {
  onNavigate?: (sectionId: string) => void;
  onStartAutoTour?: () => void;
}

export function HeroSection({ onNavigate: _onNavigate }: HeroSectionProps) {
  return (
    <section
      id="section-hero"
      className="relative min-h-[92vh] flex flex-col justify-between py-24 sm:py-36 bg-[#FFFBEB] text-[#322700] border-t border-[#977600]/15"
    >
      {/* Top Layer Index Cue */}
      <div className="max-w-5xl mx-auto px-6 w-full mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
          <span className="font-bold text-[#322700]">06</span>
          <span className="text-[#977600]/40">/</span>
          <span>Origin Launchpad</span>
          <span className="text-[#977600]/40">•</span>
          <span>0m Altitude</span>
        </div>

        <div className="text-xs font-mono-tech text-[#977600]">
          Maison Mono Digital Atelier
        </div>
      </div>

      {/* Main Minimalist Hero Content */}
      <div className="max-w-5xl mx-auto px-6 w-full my-auto space-y-10">
        {/* Brand Logo Presentation */}
        <div>
          <MaisonMonoLogo variant="badge" />
        </div>

        <div className="space-y-6 max-w-3xl">
          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#322700] tracking-tight leading-[1.08]">
            The web turned upside down.{' '}
            <span className="text-[#977600] font-normal">
              Crafting for the Dreams.
            </span>
          </h1>

          {/* Subtitle with spacious typography */}
          <p className="text-lg sm:text-xl text-[#322700]/75 font-normal leading-relaxed max-w-2xl">
            You are positioned at the ground launchpad. Instead of scrolling down through empty promises,
            scroll <strong className="text-[#322700] font-semibold">UP</strong> to ascend through verified value propositions,
            case studies, live configurations, and the summit epilogue.
          </p>
        </div>
      </div>

      {/* Subtle Bottom Architectural Note */}
      <div className="max-w-5xl mx-auto px-6 w-full pt-16">
        <div className="flex items-center justify-between border-t border-[#977600]/15 pt-6 text-xs font-mono-tech text-[#977600]">
          <span>Maison Mono · Bottom-Up DOM Architecture</span>
          <span className="hidden sm:inline">Crafting for the Dreams.</span>
        </div>
      </div>
    </section>
  );
}
