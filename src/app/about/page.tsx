import Link from "next/link";
import Image from "next/image";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

const PrecisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow mb-4">
    <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>
  </svg>
);

const TransparencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow mb-4">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const AccountabilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow mb-4">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);


export default function About() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ ABOUT / 01 ]</span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-24 max-w-5xl">
            We design the <br/>
            <span className="highlight-yellow mt-2">structures</span> that hold <br/>
            the hydrocarbon <br/>
            economy.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32 border-t border-gray-200 pt-16">
            <div className="md:w-1/3">
              <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-4">
                [ MISSION ]
              </span>
              <h2 className="text-4xl font-chivo font-black leading-tight">
                Engineering<br/>without compromise.
              </h2>
            </div>
            
            <div className="md:w-2/3 text-lg text-gray-600 space-y-6">
              <p>
                Since 2003, Gabatia has served as a single-point engineering partner for owners and EPC contractors in the oil & gas industry. Our specialism is the design of storage tanks — atmospheric, low-pressure, cryogenic and mounded — but our integrated team also delivers the civil, piping and structural packages that surround them.
              </p>
              <p>
                We don't outsource disciplines. Mechanical, civil, piping and structural engineers sit one room apart. That proximity is why our drawings work the first time on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SPLIT SECTION */}
      <section className="bg-brand-black text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
             <img src="https://placehold.co/800x800/222/555?text=Engineering+Values" alt="Values" className="w-full h-full object-cover" />
          </div>
          
          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-6">
              [ VALUES / 02 ]
            </span>
            <h2 className="text-5xl md:text-6xl font-chivo font-black leading-tight mb-16">
              What we<br/>stand for.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div>
                <PrecisionIcon />
                <h3 className="font-bold mb-3">Precision</h3>
                <p className="text-sm text-gray-400">Buildable, code-compliant drawings — checked twice, signed once.</p>
              </div>
              <div>
                <TransparencyIcon />
                <h3 className="font-bold mb-3">Transparency</h3>
                <p className="text-sm text-gray-400">Clear engineering memos, weekly progress, and traceable revisions.</p>
              </div>
              <div>
                <AccountabilityIcon />
                <h3 className="font-bold mb-3">Accountability</h3>
                <p className="text-sm text-gray-400">We sign our drawings — and stand behind every line of them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <span className="overline-text">[ TIMELINE / 03 ]</span>
          <h2 className="text-5xl md:text-6xl font-chivo font-black leading-tight mb-24">
            Two decades, one trajectory.
          </h2>
          
          <div className="border border-gray-200 bg-white">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 01</span>
              </div>
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-5xl font-chivo font-black">2003</div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-bold text-lg mb-2">Founded</h4>
                <p className="text-sm text-gray-500">Gabatia Engineers & Consultants opens its first office in Vadodara, focused on storage tank design.</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 02</span>
              </div>
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-5xl font-chivo font-black">2008</div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-bold text-lg mb-2">First refinery contract</h4>
                <p className="text-sm text-gray-500">Awarded detailed engineering for an Indian refinery hydrocracker piping package.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 03</span>
              </div>
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-5xl font-chivo font-black">2013</div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-bold text-lg mb-2">International expansion</h4>
                <p className="text-sm text-gray-500">First overseas assignment in the Gulf — structural design for an SRU pipe rack.</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row border-b border-gray-200">
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 04</span>
              </div>
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-5xl font-chivo font-black">2018</div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-bold text-lg mb-2">Multi-discipline team</h4>
                <p className="text-sm text-gray-500">Civil & structural studios formalized; integrated four-discipline delivery.</p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 05</span>
              </div>
              <div className="md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-5xl font-chivo font-black">2023</div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="font-bold text-lg mb-2">180+ projects delivered</h4>
                <p className="text-sm text-gray-500">Crossed the milestone of 180 delivered projects across India, Gulf and SE Asia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left divide-x divide-gray-100">
          <div className="px-4">
            <div className="text-6xl md:text-7xl font-chivo font-black mb-2 tracking-tighter text-brand-black">22+</div>
            <div className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest">YEARS IN INDUSTRY</div>
          </div>
          <div className="px-4">
            <div className="text-6xl md:text-7xl font-chivo font-black mb-2 tracking-tighter text-brand-black">180+</div>
            <div className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest">PROJECTS DELIVERED</div>
          </div>
          <div className="px-4">
            <div className="text-6xl md:text-7xl font-chivo font-black mb-2 tracking-tighter text-brand-black">60+</div>
            <div className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest">CLIENTS SERVED</div>
          </div>
          <div className="px-4">
            <div className="text-6xl md:text-7xl font-chivo font-black mb-2 tracking-tighter text-brand-black">12</div>
            <div className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest">COUNTRIES REACHED</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-zinc-900 py-32 px-6 md:px-12 border-t border-gray-800 text-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest block mb-6">
            [ WORK WITH US ]
          </span>
          <h2 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight mb-12">
            Ready to specify<br/>your next project?
          </h2>
          
          <Link href="/contact" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
            Start the conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
