import { useState, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { sound } from '../../utils/audio';
import { MaisonMonoLogo } from '../MaisonMonoLogo';
import { AppPage } from '../NavigationHUD';

interface FooterSectionProps {
  onNavigate?: (sectionId: string) => void;
  onPageChange?: (page: AppPage) => void;
  isStandalone?: boolean;
}

export function FooterSection({ onNavigate, onPageChange, isStandalone = false }: FooterSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    sound.playClick(700);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      sound.playAscend();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.2 },
          colors: ['#D9A900', '#977600', '#FFFBEB'],
        });
      } catch {
        // Fallback
      }
    }, 400);
  };

  return (
    <footer
      id="section-footer"
      className="relative w-full py-20 sm:py-28 bg-[#322700] text-[#FFFBEB] border-b border-[#977600]/30"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Top Apex Indicator Bar (Only on Home bottom-up layout) */}
        {!isStandalone && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#977600]/25">
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#D9A900]">
                <span className="font-bold text-[#FFFBEB]">01</span>
                <span className="text-[#D9A900]/40">/</span>
                <span>Apex Summit</span>
                <span className="text-[#D9A900]/40">•</span>
                <span>10,000m Altitude</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#FFFBEB]">
                The Inverted Epilogue
              </h2>
            </div>

            {onNavigate && (
              <button
                id="footer-jump-to-hero-btn"
                type="button"
                onClick={() => {
                  sound.playClick(400);
                  onNavigate('section-hero');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#977600]/50 hover:border-[#D9A900] text-xs font-mono-tech text-[#FFFBEB] transition-colors cursor-pointer"
              >
                <span>Descend to Origin Launchpad</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D9A900]" />
              </button>
            )}
          </div>
        )}

        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <MaisonMonoLogo variant="badge" />

            <p className="text-sm text-[#FFFBEB]/75 leading-relaxed max-w-sm pt-2">
              Maison Mono — An inverted digital atelier crafting bottom-up architecture where substance, verified proof, and design elegance precede all rhetoric.
            </p>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#D9A900] font-semibold block">
              Atelier Directory
            </span>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(500);
                    onPageChange?.('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FFFBEB]/75 hover:text-[#D9A900] transition-colors cursor-pointer text-left"
                >
                  01. Home Showcase
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(500);
                    onPageChange?.('studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FFFBEB]/75 hover:text-[#D9A900] transition-colors cursor-pointer text-left"
                >
                  02. Studio Atelier
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(500);
                    onPageChange?.('philosophy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FFFBEB]/75 hover:text-[#D9A900] transition-colors cursor-pointer text-left"
                >
                  03. Philosophy & Manifesto
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(500);
                    onPageChange?.('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FFFBEB]/75 hover:text-[#D9A900] transition-colors cursor-pointer text-left"
                >
                  04. Contact & Commissions
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#D9A900] font-semibold block">
              Technical Dispatch
            </span>
            <p className="text-xs text-[#FFFBEB]/75 leading-relaxed">
              Periodic writings from Maison Mono on bottom-up software craftsmanship and spatial interaction.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-xl bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#FFFBEB] text-xs font-mono-tech flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D9A900] shrink-0" />
                <span>Subscribed to Maison Mono dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full px-3.5 py-2 rounded-full border border-[#977600]/40 bg-[#FFFBEB]/10 text-xs font-mono-tech text-[#FFFBEB] placeholder:text-[#FFFBEB]/40 focus:outline-none focus:border-[#D9A900]"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 rounded-full bg-[#D9A900] text-[#322700] hover:bg-[#FFFBEB] text-xs font-mono-tech font-semibold transition-all cursor-pointer"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Meta */}
        <div className="pt-8 border-t border-[#977600]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#FFFBEB]/60">
          <div>© 2026 MAISON MONO. All rights reversed.</div>
          <div className="flex items-center gap-6">
            <span>Crafting for the Dreams.</span>
            <span>Bottom-Up Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
