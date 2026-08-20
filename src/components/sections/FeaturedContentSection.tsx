import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/websiteData';
import { Project } from '../../types';
import { sound } from '../../utils/audio';

interface FeaturedContentSectionProps {
  onSelectProject: (project: Project) => void;
}

export function FeaturedContentSection({ onSelectProject }: FeaturedContentSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Spatial UI', 'Core Architecture', 'Kinetic Design', 'Temporal Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="section-featured-content"
      className="relative w-full py-28 sm:py-36 bg-[#FFFBEB] text-[#322700] border-t border-[#977600]/15"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
              <span className="font-bold text-[#322700]">04</span>
              <span className="text-[#977600]/40">/</span>
              <span>Featured Systems Gallery</span>
              <span className="text-[#977600]/40">•</span>
              <span>4,000m Altitude</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#322700] tracking-tight leading-tight">
              Featured Case Studies & Blueprints
            </h2>

            <p className="text-base text-[#322700]/70 font-normal leading-relaxed">
              Production architectures engineered with bottom-up principles and measurable outcomes.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto font-mono-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  sound.playClick(500);
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#322700] text-[#FFFBEB] font-semibold'
                    : 'text-[#977600] hover:text-[#322700] border border-transparent hover:border-[#977600]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#977600]/15">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onClick={() => {
                sound.playClick(600);
                onSelectProject(proj);
              }}
              className="group p-8 rounded-2xl border border-[#977600]/15 hover:border-[#322700] bg-[#FFFBEB] transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#977600] font-semibold uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-[#977600]/70">{proj.year}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-[#322700] group-hover:text-[#977600] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#977600] group-hover:text-[#322700] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm text-[#322700]/75 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-[#977600]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech text-[#977600]">
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[#322700]/80">
                      {tech}{i < Math.min(proj.technologies.length, 3) - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-[#322700]">Inspect →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
