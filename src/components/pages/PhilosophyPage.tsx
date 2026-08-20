import { MaisonMonoLogo } from '../MaisonMonoLogo';

export function PhilosophyPage() {
  const pillars = [
    {
      number: '01',
      title: 'Form Follows Sensation',
      body:
        'In the golden age of utilitarian frameworks, software became uniform and sterile. We believe digital spaces should evoke tactile emotion, curiosity, and aesthetic wonder while maintaining effortless utility.',
    },
    {
      number: '02',
      title: 'Crafting for the Dreams',
      body:
        'Every line of code and typographic rhythm is crafted for visionary thinkers, brands, and creators who dare to stand apart. We reject algorithmic templating in pursuit of timeless digital artifacts.',
    },
    {
      number: '03',
      title: 'Bottom-Up Inversion',
      body:
        'By starting at the foundation and grounding our interfaces in tangible proof, we honor the user’s agency and cognitive focus before demanding their allegiance.',
    },
    {
      number: '04',
      title: 'Permanent Over Disposable',
      body:
        'We engineer systems built to outlive ephemeral trend cycles. Robust performance, structural negative space, and typographic integrity remain relevant across decades.',
    },
  ];

  return (
    <div className="w-full pt-24 sm:pt-32 pb-24 bg-[#FFFBEB] text-[#322700] space-y-20">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
          <span className="font-bold text-[#322700]">PHILOSOPHY</span>
          <span className="text-[#977600]/40">/</span>
          <span>Manifesto & Ethos</span>
          <span className="text-[#977600]/40">•</span>
          <span>Maison Mono</span>
        </div>

        <div className="space-y-6 max-w-3xl">
          <MaisonMonoLogo variant="badge" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#322700] tracking-tight leading-[1.08]">
            Crafting for the Dreams.
          </h1>
          <p className="text-lg sm:text-xl text-[#322700]/75 font-normal leading-relaxed">
            A treatise on digital permanence, tactile computing, and the resurgence of haute craftsmanship on the web.
          </p>
        </div>
      </section>

      {/* Deep Dive Manifesto */}
      <section className="max-w-4xl mx-auto px-6 space-y-16">
        <div className="space-y-6 text-base sm:text-lg text-[#322700]/80 leading-relaxed font-normal border-t border-[#977600]/15 pt-12">
          <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-[#322700] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            The web has become excessively commodified. Millions of websites are churned out daily through identical boilerplates, pre-fabricated templates, and soulless layouts designed to maximize momentary metrics rather than human connection.
          </p>
          <p>
            At Maison Mono, we choose a different trajectory. We believe in the slow, meticulous discipline of the atelier. We believe that software architecture can possess the same bespoke tactile dignity as a tailored coat, a hand-bound volume, or an architectural sanctuary.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-10 pt-8">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] font-semibold block">
            The Four Tenets of Maison Mono
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {pillars.map((p) => (
              <div key={p.number} className="space-y-4 p-8 rounded-3xl border border-[#977600]/15 bg-[#FFFBEB]">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#977600]">
                  <span>{p.number}</span>
                  <span className="text-[#977600]/30">—</span>
                  <span className="text-[#322700]">TENET</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#322700]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#322700]/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotation Highlight */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#977600]/25 bg-[#FFFBEB] text-center space-y-4">
          <p className="font-display text-xl sm:text-2xl font-bold text-[#322700] italic leading-relaxed">
            "When elegance, speed, and tactile reverence converge, technology ceases to be an obstacle and becomes an inspiration."
          </p>
          <div className="text-xs font-mono-tech text-[#977600] uppercase tracking-widest">
            — Maison Mono Atelier Declaration
          </div>
        </div>
      </section>
    </div>
  );
}
