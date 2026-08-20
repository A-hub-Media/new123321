import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#322700]/40 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        id={`modal-${project.id}`}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FFFBEB] border border-[#977600]/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#322700] space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#977600]/15 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#977600]">
              <span className="uppercase font-semibold tracking-wider">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#322700]">
              {project.title}
            </h3>
          </div>

          <button
            id="close-modal-btn"
            onClick={() => {
              sound.playClick(400);
              onClose();
            }}
            className="p-2 rounded-full border border-[#977600]/20 hover:border-[#322700] text-[#977600] hover:text-[#322700] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal body */}
        <div className="space-y-6">
          <p className="text-base sm:text-lg text-[#322700]/80 font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl border border-[#977600]/15 bg-[#FFFBEB]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#322700]">
                  {metric.value}
                </div>
                <div className="text-xs text-[#977600] font-mono-tech uppercase tracking-wider mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full story */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono-tech tracking-wider text-[#977600] font-semibold block">
              Architectural Overview
            </span>
            <p className="text-sm text-[#322700]/75 leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono-tech tracking-wider text-[#977600] font-semibold block">
              Technologies Utilized
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech border border-[#977600]/20 text-[#322700]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-4 flex items-center justify-end border-t border-[#977600]/15">
            <button
              id="request-spec-btn"
              onClick={() => {
                sound.playAscend();
                onClose();
                const sec = document.getElementById('section-secondary-cta');
                if (sec) sec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#322700] hover:bg-[#977600] text-[#FFFBEB] font-display font-semibold text-xs transition-all"
            >
              <span>Engage Architecture Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
