import { useState, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/websiteData';
import { sound } from '../../utils/audio';

export function SecondaryCTASection() {
  const [projectType, setProjectType] = useState<'spatial' | 'core' | 'design' | 'enterprise'>('spatial');
  const [submitted, setSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  const pricing = {
    spatial: { price: '$14,000', weeks: '2 Weeks', label: 'Spatial UI & 3D' },
    core: { price: '$22,000', weeks: '4 Weeks', label: 'Core Architecture Engine' },
    design: { price: '$9,500', weeks: '2 Weeks', label: 'Kinetic Design System' },
    enterprise: { price: '$34,000', weeks: '8 Weeks', label: 'Full Inversion Suite' },
  };

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;

    sound.playAscend();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#D9A900', '#977600', '#322700'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="section-secondary-cta"
      className="relative w-full py-28 sm:py-36 bg-[#FFFBEB] text-[#322700] border-t border-[#977600]/15"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
            <span className="font-bold text-[#322700]">03</span>
            <span className="text-[#977600]/40">/</span>
            <span>Architecture Engagement</span>
            <span className="text-[#977600]/40">•</span>
            <span>6,000m Altitude</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#322700] tracking-tight leading-tight">
            Configure your inverse build.
          </h2>

          <p className="text-base sm:text-lg text-[#322700]/70 font-normal leading-relaxed">
            Select your architectural scope below and receive immediate timelines and engineering specifications.
          </p>
        </div>

        {/* Minimal Configuration Box */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#977600]/20 bg-[#FFFBEB] space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] font-semibold block">
              Select Architecture Archetype
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(
                [
                  { id: 'spatial', label: 'Spatial UI' },
                  { id: 'core', label: 'Core Engine' },
                  { id: 'design', label: 'Kinetic Brand' },
                  { id: 'enterprise', label: 'Full Inversion' },
                ] as const
              ).map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    sound.playClick(500);
                    setProjectType(type.id);
                  }}
                  className={`p-3.5 rounded-xl border text-center font-mono-tech text-xs transition-all ${
                    projectType === type.id
                      ? 'bg-[#322700] text-[#FFFBEB] border-[#322700] font-semibold'
                      : 'border-[#977600]/20 text-[#322700] hover:border-[#322700]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-[#977600]/15">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                Estimated Timeline
              </span>
              <span className="text-xl font-display font-bold text-[#322700] mt-0.5 block">
                {pricing[projectType].weeks}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                Standard Investment
              </span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-[#322700] mt-0.5 block">
                {pricing[projectType].price} <span className="text-xs font-mono-tech text-[#977600]">USD</span>
              </span>
            </div>
          </div>

          {/* Inquiry form */}
          {submitted ? (
            <div className="p-4 rounded-xl bg-[#D9A900]/15 border border-[#D9A900]/30 text-[#322700] text-xs font-mono-tech flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#977600] shrink-0" />
              <span>Specification transmitted to {contactEmail}. We will connect within 4 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="flex flex-col sm:flex-row gap-3">
              <input
                id="scope-contact-email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter work email for blueprint..."
                required
                className="flex-1 px-4 py-3.5 rounded-full border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] placeholder:text-[#977600]/60 focus:outline-none focus:border-[#322700]"
              />
              <button
                id="scope-submit-btn"
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#322700] text-[#FFFBEB] hover:bg-[#977600] font-display font-semibold text-xs transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* Minimal Client Testimonials */}
        <div className="space-y-8 pt-8">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] block">
            Client Validations
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="space-y-3">
                <p className="text-sm text-[#322700]/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="text-xs font-mono-tech text-[#977600]">
                  <strong className="text-[#322700] font-medium">{t.author}</strong>, {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
