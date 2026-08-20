import React from 'react';

interface MaisonMonoLogoProps {
  variant?: 'badge' | 'inline' | 'hero' | 'minimal';
  className?: string;
}

export function MaisonMonoLogo({ variant = 'inline', className = '' }: MaisonMonoLogoProps) {
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex flex-col overflow-hidden rounded-xl border border-[#977600]/25 shadow-sm transition-all hover:border-[#322700] group ${className}`}
      >
        {/* Top Ochre Section with Script */}
        <div className="bg-[#D9A900] px-6 py-3.5 flex items-center justify-center">
          <span className="font-script text-2xl sm:text-3xl text-[#FFFBEB] tracking-wide font-normal select-none drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
            Maison mono
          </span>
        </div>
        {/* Bottom Off-white Section with Tagline */}
        <div className="bg-[#FFFBEB] px-5 py-2 flex items-center justify-center border-t border-[#977600]/15">
          <span className="font-tagline text-[10px] sm:text-[11px] uppercase text-[#977600] font-semibold tracking-[0.24em] select-none">
            Crafting for the Dreams.
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="inline-block px-8 py-5 rounded-2xl bg-[#D9A900] border border-[#977600]/30 shadow-md">
          <span className="font-script text-4xl sm:text-6xl text-[#FFFBEB] tracking-wide font-normal select-none block text-center drop-shadow-sm">
            Maison mono
          </span>
        </div>
        <div className="text-center">
          <span className="font-tagline text-xs sm:text-sm uppercase text-[#977600] font-semibold tracking-[0.28em] block">
            Crafting for the Dreams.
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <span className="font-script text-2xl text-[#322700] hover:text-[#977600] transition-colors leading-none">
          Maison mono
        </span>
        <span className="font-tagline text-[8px] uppercase text-[#977600] font-semibold tracking-[0.2em] mt-1">
          Crafting for the Dreams.
        </span>
      </div>
    );
  }

  // Default inline for navigation bar
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="px-3 py-1 rounded-lg bg-[#D9A900] text-[#FFFBEB] shadow-xs flex items-center justify-center">
        <span className="font-script text-lg sm:text-xl leading-none pt-0.5 select-none">
          Maison mono
        </span>
      </div>
      <span className="hidden sm:inline font-tagline text-[9px] uppercase text-[#977600] font-semibold tracking-[0.2em]">
        Crafting for the Dreams.
      </span>
    </div>
  );
}
