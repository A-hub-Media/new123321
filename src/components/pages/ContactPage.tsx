import { useState, type FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { sound } from '../../utils/audio';
import { MaisonMonoLogo } from '../MaisonMonoLogo';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budget: '$25,000 - $50,000',
    timeline: 'Within 2 Months',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    sound.playAscend();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.4 },
        colors: ['#D9A900', '#977600', '#322700'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full pt-24 sm:pt-32 pb-24 bg-[#FFFBEB] text-[#322700] space-y-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-widest text-[#977600]">
          <span className="font-bold text-[#322700]">CONTACT</span>
          <span className="text-[#977600]/40">/</span>
          <span>Direct Inquiries</span>
          <span className="text-[#977600]/40">•</span>
          <span>Maison Mono</span>
        </div>

        <div className="space-y-6 max-w-3xl">
          <MaisonMonoLogo variant="badge" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#322700] tracking-tight leading-[1.08]">
            Initiate an atelier commission.
          </h1>
          <p className="text-lg sm:text-xl text-[#322700]/75 font-normal leading-relaxed">
            We partner with visionary founders, established luxury houses, and cultural institutions globally.
            Tell us about your dreams, and let us shape them into digital reality.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Details */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#977600]/15 pt-12">
          {/* Contact Details & Atelier Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#977600] font-semibold block">
                Direct Channels
              </span>
              <div className="space-y-4 text-xs font-mono-tech">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#977600] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#322700] font-semibold block">Inquiries</span>
                    <a
                      href="mailto:contact@maisonmono.com"
                      className="text-[#977600] hover:text-[#322700] transition-colors"
                    >
                      atelier@maisonmono.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#977600] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#322700] font-semibold block">Main Atelier</span>
                    <span className="text-[#322700]/75">
                      Place Vendôme, 75001 Paris, France
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#977600] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#322700] font-semibold block">Private Line</span>
                    <span className="text-[#322700]/75">+33 (0)1 42 68 00 00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#977600]/15 bg-[#FFFBEB] space-y-3">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] font-semibold block">
                Studio Availability
              </span>
              <p className="text-xs text-[#322700]/75 leading-relaxed">
                We accept a strictly limited number of commissions per quarter to ensure uncompromised atelier focus. Currently booking for upcoming quarters.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="p-8 sm:p-12 rounded-3xl border border-[#D9A900]/40 bg-[#D9A900]/10 text-[#322700] space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#D9A900] text-[#FFFBEB] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-[#322700]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#322700]/80 leading-relaxed font-mono-tech">
                    Thank you, {formData.name || 'esteemed partner'}. Your commission dossier has been routed to our Creative Partners. We will respond with an initial architectural blueprint within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#322700] text-xs font-mono-tech text-[#322700] hover:bg-[#322700] hover:text-[#FFFBEB] transition-all cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl border border-[#977600]/20 bg-[#FFFBEB] space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#322700]">
                    Project Commission Form
                  </h3>
                  <p className="text-xs font-mono-tech text-[#977600]">
                    All transmissions are strictly confidential.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Moreau"
                      className="w-full px-4 py-3 rounded-xl border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] focus:outline-none focus:border-[#322700]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] focus:outline-none focus:border-[#322700]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                      Organization / Brand
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] focus:outline-none focus:border-[#322700]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                      Target Investment
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] focus:outline-none focus:border-[#322700]"
                    >
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#977600] block">
                    Vision & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, timeline, and what you aim to achieve..."
                    className="w-full px-4 py-3 rounded-xl border border-[#977600]/25 bg-[#FFFBEB] text-xs font-mono-tech text-[#322700] focus:outline-none focus:border-[#322700] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#322700] text-[#FFFBEB] hover:bg-[#977600] font-display font-semibold text-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Submit Commission Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
