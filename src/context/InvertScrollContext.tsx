import React, { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import Lenis from 'lenis';
import { sound } from '../utils/audio';

export type SmoothnessMode = 'silky' | 'balanced' | 'snappy';

interface InvertScrollContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  invertScrollEnabled: boolean;
  setInvertScrollEnabled: (enabled: boolean) => void;
  toggleInvertScroll: () => void;
  scrollSensitivity: number;
  setScrollSensitivity: (sens: number) => void;
  smoothness: SmoothnessMode;
  setSmoothness: (mode: SmoothnessMode) => void;
  lastScrollDirection: 'up' | 'down' | null;
  scrollIntensity: number;
  smoothScrollTo: (targetY: number | string, duration?: number) => void;
  smoothScrollToElement: (elementId: string) => void;
  resetToHeroBottom: () => void;
  lenisInstance: Lenis | null;
}

const InvertScrollContext = createContext<InvertScrollContextType | undefined>(undefined);

const LERP_MAP: Record<SmoothnessMode, number> = {
  silky: 0.055,
  balanced: 0.1,
  snappy: 0.18,
};

export function InvertScrollProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<string>('home');
  // Invert scroll is strictly enabled on home (multiplier = -1) and standard on other pages (multiplier = 1)
  const [invertScrollEnabled, setInvertScrollEnabled] = useState<boolean>(true);
  const [scrollSensitivity, setScrollSensitivity] = useState<number>(1.2);
  const [smoothness, setSmoothness] = useState<SmoothnessMode>('balanced');
  const [lastScrollDirection, setLastScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollIntensity, setScrollIntensity] = useState<number>(0);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  const lenisRef = useRef<Lenis | null>(null);
  const directionTimeoutRef = useRef<number | null>(null);

  // Synchronize invertScrollEnabled with activePage
  useEffect(() => {
    if (activePage === 'home') {
      setInvertScrollEnabled(true);
    } else {
      setInvertScrollEnabled(false);
    }
  }, [activePage]);

  // Toggle invert mode manually with auditory feedback
  const toggleInvertScroll = useCallback(() => {
    setInvertScrollEnabled((prev) => {
      const next = !prev;
      sound.playClick(next ? 880 : 440);
      return next;
    });
  }, []);

  // Initialize and maintain Lenis instance with page-aware scroll inversion
  useEffect(() => {
    const isHome = activePage === 'home';
    const shouldInvert = isHome && invertScrollEnabled;
    // On home: negative multiplier turns wheel downward into upward scroll
    // On other pages: positive multiplier provides standard smooth scrolling
    const multiplier = shouldInvert ? -1 * scrollSensitivity : 1 * scrollSensitivity;
    const lerpVal = LERP_MAP[smoothness];

    const lenis = new Lenis({
      wheelMultiplier: multiplier,
      touchMultiplier: multiplier * 1.2,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 1.8,
      lerp: lerpVal,
      autoRaf: true,
      prevent: (node) => {
        return (
          node.closest('#project-modal-backdrop') !== null ||
          node.closest('[data-lenis-prevent]') !== null ||
          node.closest('[data-no-invert]') !== null
        );
      },
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Track scroll events
    lenis.on('scroll', (e: Lenis) => {
      const vel = e.velocity;
      if (Math.abs(vel) > 0.1) {
        const isAscending = vel < 0;
        setLastScrollDirection(isAscending ? 'up' : 'down');
        setScrollIntensity(Math.min(100, Math.abs(vel) * 15));

        if (directionTimeoutRef.current) {
          window.clearTimeout(directionTimeoutRef.current);
        }
        directionTimeoutRef.current = window.setTimeout(() => {
          setLastScrollDirection(null);
          setScrollIntensity(0);
        }, 400);
      }
    });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, [activePage, invertScrollEnabled, scrollSensitivity, smoothness]);

  // Programmatic smooth scroll to position or element
  const smoothScrollTo = useCallback((target: number | string, duration = 1.2) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target.startsWith('#') ? target : `#${target}`);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const smoothScrollToElement = useCallback(
    (elementId: string) => {
      const cleanId = elementId.startsWith('#') ? elementId : `#${elementId}`;
      smoothScrollTo(cleanId, 1.2);
    },
    [smoothScrollTo]
  );

  const resetToHeroBottom = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(document.documentElement.scrollHeight, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  return (
    <InvertScrollContext.Provider
      value={{
        activePage,
        setActivePage,
        invertScrollEnabled,
        setInvertScrollEnabled,
        toggleInvertScroll,
        scrollSensitivity,
        setScrollSensitivity,
        smoothness,
        setSmoothness,
        lastScrollDirection,
        scrollIntensity,
        smoothScrollTo,
        smoothScrollToElement,
        resetToHeroBottom,
        lenisInstance,
      }}
    >
      {children}
    </InvertScrollContext.Provider>
  );
}

export function useInvertScroll() {
  const context = useContext(InvertScrollContext);
  if (!context) {
    throw new Error('useInvertScroll must be used within an InvertScrollProvider');
  }
  return context;
}
