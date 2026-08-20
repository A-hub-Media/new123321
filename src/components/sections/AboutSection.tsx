import { useState } from 'react';
import { TEAM_MEMBERS } from '../../data/websiteData';
import { sound } from '../../utils/audio';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'inverted' | 'conventional'>('inverted');

  const comparisonData = [
    {
      aspect: 'Information Arrival',
      conventional: 'Hero promises → Fluff articles → Buried conclusions',
      inverted: 'Immediate outcome delivery → Direct proof → Deep architecture',
    },
    {
      aspect: 'User Agency',
      conventional: 'Forced top-down sales funnel with delayed answers',
      inverted: 'Starts at the functional launchpad, ascends at will',
    },
    {
      aspect: 'Cognitive Friction',
      conventional: 'High — User filters through marketing rhetoric',
      inverted: 'Zero — Tangible results render within milliseconds',
    },
  ];

  return (
    <section
      id="section-about"
      className="relative w-full py-28 sm:py-36 bg-[#FFFBEB] text-[#322700] border-t border-[#977600]/15"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
            <span className="font-bold text-[#322700]">02</span>
            <span className="text-[#977600]/40">/</span>
            <span>Maison Mono Manifesto</span>
            <span className="text-[#977600]/40">•</span>
            <span>8,000m Altitude</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#322700] tracking-tight leading-tight">
            Crafting for the Dreams.
          </h2>

          <p className="text-base sm:text-lg text-[#322700]/75 leading-relaxed">
            At Maison Mono, we reject the conventional noise of digital production.
            We craft bottom-up digital architectures where verified outcomes precede slogans,
            and software elevates into an art form engineered for aspiration.
          </p>
        </div>

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#977600]/15">
          <div className="space-y-3">
            <span className="text-xs font-mono-tech font-bold text-[#977600]">01 // TENET</span>
            <h3 className="text-xl font-display font-bold text-[#322700]">
              Gravity as an Aesthetic
            </h3>
            <p className="text-sm text-[#322700]/70 leading-relaxed">
              Ascending feels earned. By placing the foundational launchpad at the bottom, every scroll upward climbs toward greater clarity.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono-tech font-bold text-[#977600]">02 // TENET</span>
            <h3 className="text-xl font-display font-bold text-[#322700]">
              Substance Precedes Slogan
            </h3>
            <p className="text-sm text-[#322700]/70 leading-relaxed">
              Execution metrics and case studies are delivered before company biography. Substance always comes first.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono-tech font-bold text-[#977600]">03 // TENET</span>
            <h3 className="text-xl font-display font-bold text-[#322700]">
              Friction Inversion
            </h3>
            <p className="text-sm text-[#322700]/70 leading-relaxed">
              Friction belongs at the back of the pipeline, not in the user’s first five seconds of exploration.
            </p>
          </div>
        </div>

        {/* Minimal Paradigm Comparison */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[#977600]/15 bg-[#FFFBEB] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-display font-bold text-[#322700]">
              System Paradigm Comparison
            </h3>

            <div className="flex items-center gap-1 font-mono-tech text-xs">
              <button
                onClick={() => {
                  sound.playClick(600);
                  setActiveTab('inverted');
                }}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'inverted'
                    ? 'bg-[#322700] text-[#FFFBEB] font-semibold'
                    : 'text-[#977600] hover:text-[#322700]'
                }`}
              >
                Inverted Architecture
              </button>
              <button
                onClick={() => {
                  sound.playClick(450);
                  setActiveTab('conventional');
                }}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'conventional'
                    ? 'bg-[#322700] text-[#FFFBEB] font-semibold'
                    : 'text-[#977600] hover:text-[#322700]'
                }`}
              >
                Conventional Web
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-[#977600]/15 font-mono-tech text-xs sm:text-sm">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[#977600]/10 gap-2"
              >
                <span className="font-semibold text-[#322700] sm:w-1/3">{row.aspect}</span>
                <span className="text-[#322700]/80 sm:w-2/3">
                  {activeTab === 'inverted' ? row.inverted : row.conventional}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Architects */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] block">
              Architects of Inversion
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#977600]/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-[#322700] text-sm">{member.name}</h4>
                    <span className="text-xs font-mono-tech text-[#977600]">{member.role}</span>
                  </div>
                </div>
                <p className="text-xs text-[#322700]/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
