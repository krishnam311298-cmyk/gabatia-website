import Link from "next/link";
import Image from "next/image";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

export default function Clients() {
  const clients = [
    "Indian Oil Corporation",
    "Bharat Petroleum",
    "Hindustan Petroleum",
    "Reliance Industries",
    "ONGC",
    "GAIL India",
    "Adani Petronet",
    "Nayara Energy",
    "Petroleum Development Oman",
    "BAPCO Bahrain",
    "ADNOC",
    "Saudi Aramco"
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ CLIENTS / 01 ]</span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-12 max-w-5xl">
            Trusted by national<br/>
            and <span className="highlight-black mt-2 text-brand-yellow">international</span><br/>
            <span className="highlight-black mt-2 text-brand-yellow">operators.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl border-t border-gray-200 pt-8">
            From state-owned majors to independent EPCs — Gabatia has supported owners across the hydrocarbon value chain.
          </p>
        </div>
      </section>

      {/* ROSTER GRID */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ SELECTED CLIENT ROSTER ]</span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border-l border-t border-gray-200 mt-12">
            {clients.map((client, i) => (
              <div key={i} className="border-r border-b border-gray-200 p-8 h-32 flex items-center justify-center text-center font-bold text-gray-700 hover:text-brand-yellow hover:bg-gray-50 transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN THE FIELD */}
      <section className="bg-white py-16 px-6 md:px-12 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-8">
          <span className="overline-text">[ IN THE FIELD ]</span>
        </div>
        <div className="flex gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
          <div className="w-32 h-16 bg-gray-200 flex items-center justify-center font-bold text-gray-400">LOGO</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-32 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ TESTIMONIALS / 02 ]</span>
          <h2 className="text-5xl md:text-6xl font-chivo font-black leading-[0.95] tracking-tight mb-16">
            What our clients say.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonial 1 */}
            <div className="md:w-1/2 border border-gray-200 p-12">
              <div className="text-brand-yellow text-6xl font-serif leading-none mb-6">"</div>
              <p className="text-2xl font-medium leading-relaxed mb-12 text-brand-black">
                Gabatia's tank engineering package was unusually buildable — minimal RFIs and zero fabrication clashes. They are now our go-to for storage scope.
              </p>
              <div className="border-t border-gray-100 pt-6 font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest">
                PROJECT MANAGER — TIER-1 INDIAN REFINER
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="md:w-1/2 border border-gray-200 p-12">
              <div className="text-brand-yellow text-6xl font-serif leading-none mb-6">"</div>
              <p className="text-2xl font-medium leading-relaxed mb-12 text-brand-black">
                Their structural team delivered the SRU pipe rack drawings on time and to international code. Communication was crisp throughout.
              </p>
              <div className="border-t border-gray-100 pt-6 font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest">
                LEAD ENGINEER — GULF-BASED EPC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-black text-white py-32 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest block mb-6">
              [ BECOME A CLIENT ]
            </span>
            <h2 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight">
              Join the roster.
            </h2>
          </div>
          <div>
            <Link href="/contact" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              Start an engagement <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
