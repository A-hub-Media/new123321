import { VALUE_PROPS } from '../../data/websiteData';

export function ValuePropsSection() {
  return (
    <section
      id="section-value-props"
      className="relative w-full py-28 sm:py-36 bg-[#FFFBEB] text-[#322700] border-t border-[#977600]/15"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
            <span className="font-bold text-[#322700]">05</span>
            <span className="text-[#977600]/40">/</span>
            <span>Core Value Propositions</span>
            <span className="text-[#977600]/40">•</span>
            <span>2,000m Altitude</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#322700] tracking-tight leading-tight">
            The foundation of bottom-up value.
          </h2>

          <p className="text-base sm:text-lg text-[#322700]/70 font-normal leading-relaxed">
            Every layer in our architecture is engineered to invert traditional software bottlenecks,
            delivering tangible results prior to marketing rhetoric.
          </p>
        </div>

        {/* Minimalist Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 pt-4 border-t border-[#977600]/15">
          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="font-bold text-[#977600]">{prop.number}</span>
                  <span className="text-[#322700] font-semibold">{prop.keyMetric}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#322700]">
                  {prop.title}
                </h3>

                <p className="text-sm text-[#322700]/75 font-normal leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#977600]/10 text-xs font-mono-tech text-[#977600]">
                <strong className="text-[#322700] font-medium">Advantage:</strong> {prop.invertedAdvantage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
