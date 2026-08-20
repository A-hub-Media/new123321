import { Sparkles, Compass, Eye, Cpu } from 'lucide-react';
import { MaisonMonoLogo } from '../MaisonMonoLogo';

interface StudioPageProps {
  onNavigateContact?: () => void;
}

export function StudioPage({ onNavigateContact }: StudioPageProps) {
  const disciplines = [
    {
      num: '01',
      title: 'Digital Haute Couture',
      description:
        'Bespoke web platforms, editorial digital flagships, and spatial interfaces crafted with couture-level attention to detail, motion physics, and typography.',
      icon: Sparkles,
      deliverables: ['Custom Webflagships', 'Motion Identity', 'Spatial DOM Architecture'],
    },
    {
      num: '02',
      title: 'Tactile Computing & UI Artistry',
      description:
        'Re-engineering standard UI interactions into tactile, sensory digital experiences that elevate brand prestige and emotional resonance.',
      icon: Compass,
      deliverables: ['Kinetic Interactions', 'Adaptive Micro-Layouts', 'Audio Haptics'],
    },
    {
      num: '03',
      title: 'Systems & Architecture Engine',
      description:
        'Robust edge-ready software architecture that delivers instantaneous rendering, sub-millisecond execution, and uncompromised uptime.',
      icon: Cpu,
      deliverables: ['Serverless Edge Deployments', 'High-Performance APIs', 'Full-Stack Engineering'],
    },
    {
      num: '04',
      title: 'Strategic Brand Immersion',
      description:
        'Translating luxury heritage, contemporary culture, and artistic vision into interactive digital realities.',
      icon: Eye,
      deliverables: ['Brand Spatialization', 'Creative Direction', 'Digital Storytelling'],
    },
  ];

  const studioPrinciples = [
    {
      title: 'Intention Over Accumulation',
      text: 'We do not add elements to fill space; every pixel, transition, and micro-interaction serves a deliberate emotional and structural purpose.',
    },
    {
      title: 'Craft As Standard',
      text: 'From the internal code architecture to the surface typography, our creations adhere to atelier standards of excellence.',
    },
    {
      title: 'Radical Subtlety',
      text: 'Luxury whispers. We favor balanced negative space, refined tonal contrasts, and timeless aesthetic restraint.',
    },
  ];

  const spaces = [
    {
      location: 'Atelier Paris',
      focus: 'Creative Direction & Typography',
      address: 'Place Vendôme, 75001 Paris',
    },
    {
      location: 'Studio Tokyo',
      focus: 'Kinetic Computing & Motion Systems',
      address: 'Minato City, Aoyama, Tokyo',
    },
    {
      location: 'Lab Zurich',
      focus: 'Edge Architecture & Computational Fluidity',
      address: 'Bahnhofstrasse, 8001 Zürich',
    },
  ];

  return (
    <div className="w-full pt-24 sm:pt-32 pb-24 bg-[#FFFBEB] text-[#322700] space-y-20">
      {/* Studio Header */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
          <span className="font-bold text-[#322700]">STUDIO</span>
          <span className="text-[#977600]/40">/</span>
          <span>The Atelier & Craft</span>
          <span className="text-[#977600]/40">•</span>
          <span>Maison Mono</span>
        </div>

        <div className="space-y-6 max-w-3xl">
          <MaisonMonoLogo variant="badge" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#322700] tracking-tight leading-[1.08]">
            An atelier for the modern digital era.
          </h1>
          <p className="text-lg sm:text-xl text-[#322700]/75 font-normal leading-relaxed">
            Maison Mono is an independent digital studio operating at the intersection of haute craftsmanship,
            contemporary typography, and high-performance computing. We design and engineer experiences that
            leave lasting cultural impressions.
          </p>

          {onNavigateContact && (
            <div className="pt-2">
              <button
                onClick={onNavigateContact}
                className="px-6 py-3 rounded-full bg-[#322700] text-[#FFFBEB] hover:bg-[#977600] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
              >
                Initiate Studio Commission
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Studio Disciplines */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#977600]/15 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] font-semibold">
              Disciplines & Practice
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#322700]">
              What we craft.
            </h2>
          </div>
          <span className="text-xs font-mono-tech text-[#977600]">
            Bespoke Engagements Only
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="p-8 sm:p-10 rounded-3xl border border-[#977600]/15 bg-[#FFFBEB] space-y-6 flex flex-col justify-between hover:border-[#322700] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs font-bold text-[#977600]">{d.num} //</span>
                    <Icon className="w-5 h-5 text-[#977600]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#322700]">
                    {d.title}
                  </h3>
                  <p className="text-sm text-[#322700]/75 leading-relaxed">
                    {d.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#977600]/10 space-y-2">
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#977600] block">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {d.deliverables.map((del, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[#322700]/5 text-[#322700]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Studio Principles */}
      <section className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#977600]/20 bg-[#FFFBEB] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] font-semibold">
              The Code of Craft
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#322700]">
              Our Studio Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#977600]/15">
            {studioPrinciples.map((sp, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-xs font-mono-tech font-bold text-[#977600]">
                  0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-lg text-[#322700]">
                  {sp.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#322700]/70 leading-relaxed">
                  {sp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Locations */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#977600]/15 pb-4">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] font-semibold">
            Global Presences
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {spaces.map((space, i) => (
            <div key={i} className="space-y-2 font-mono-tech text-xs">
              <span className="font-display font-bold text-base text-[#322700] block">
                {space.location}
              </span>
              <span className="text-[#977600] block">{space.focus}</span>
              <span className="text-[#322700]/60 block">{space.address}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
