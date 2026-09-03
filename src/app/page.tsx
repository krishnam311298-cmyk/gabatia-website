import Link from "next/link";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-brand-black text-white relative flex flex-col min-h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 to-brand-black/95 z-0"></div>
        
        <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 py-24 max-w-7xl mx-auto w-full">
          <span className="font-plex-mono text-xs text-gray-400 uppercase tracking-[0.2em] mb-8 block">
            EST. 2003 / VADODARA, INDIA
          </span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mb-8">
            Designing the<br/>
            <span className="text-brand-yellow">storage backbone</span><br/>
            of oil & gas.
          </h1>
          
          <p className="text-gray-300 max-w-2xl text-lg md:text-xl font-light mb-12">
            Gabatia Engineers & Consultants is a 22-year specialist consultancy in mechanical, civil, piping and structural design — trusted by terminals, refineries, petrochemicals and depots across India and the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link href="/projects" className="bg-brand-yellow text-brand-black px-8 py-4 font-medium hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              View Projects <ArrowUpRight />
            </Link>
            <Link href="/contact" className="border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              Request a Quote <ArrowUpRight />
            </Link>
            
            <div className="mt-8 sm:mt-0 sm:ml-auto text-right">
              <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-1">
                [ SPECIALISM ]
              </span>
              <span className="font-medium text-white">
                Oil storage tank<br/>
                design — API 650 / 620
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 border-t border-white/10 flex flex-wrap gap-8 px-6 md:px-12 py-6 font-plex-mono text-xs text-gray-500 uppercase tracking-widest bg-brand-black/50 backdrop-blur-md">
          <span className="text-white">SECTORS SERVED</span>
          <span>/ OIL TERMINALS</span>
          <span>/ REFINERIES</span>
          <span>/ PETROCHEMICALS</span>
          <span>/ OIL DEPOTS</span>
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

      {/* OVERVIEW SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ 01 / OVERVIEW ]</span>
          
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start mt-8">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-chivo font-black leading-[0.95] tracking-tight">
                Two decades of engineering for <span className="highlight-yellow">hydrocarbons.</span>
              </h2>
            </div>
            
            <div className="md:w-1/2 text-lg text-gray-600 space-y-6 pt-2">
              <p>
                Founded in 2003, Gabatia Engineers & Consultants delivers integrated design services for the oil & gas industry. Our engineers work across mechanical, civil, piping and structural disciplines under one roof — eliminating co-ordination gaps that typically plague storage and process facility projects.
              </p>
              <p>
                From feasibility studies to construction-ready drawings, we produce documentation that is buildable, code-compliant and audit-ready. Our practice spans Indian operators (IOCL, BPCL, HPCL, Reliance) and international clients in the Gulf and South-East Asia.
              </p>
              <div className="pt-4">
                <Link href="/about" className="font-bold border-b-2 border-brand-black pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors inline-flex items-center gap-2">
                  Read our story <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-brand-gray py-32 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ 02 / SERVICES ]</span>
          
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-6xl font-chivo font-black leading-[0.95] tracking-tight max-w-lg">
              Four disciplines.<br/>
              One delivery team.
            </h2>
            <Link href="/services" className="hidden md:inline-flex font-bold border-b-2 border-brand-black pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors items-center gap-2">
              Explore all services <ArrowUpRight />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Service 1 */}
            <div className="p-10 hover:bg-gray-50 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 01</span>
                <span className="text-gray-300 group-hover:text-brand-yellow transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-2xl font-chivo font-black mb-4 tracking-tight">Mechanical</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Storage tank design, pressure vessels, heat exchangers and rotating equipment.</p>
            </div>
            {/* Service 2 */}
            <div className="p-10 hover:bg-gray-50 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 02</span>
                <span className="text-gray-300 group-hover:text-brand-yellow transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-2xl font-chivo font-black mb-4 tracking-tight">Civil</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Foundations, paving, dyke walls and full plot development for terminals.</p>
            </div>
            {/* Service 3 */}
            <div className="p-10 hover:bg-gray-50 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 03</span>
                <span className="text-gray-300 group-hover:text-brand-yellow transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-2xl font-chivo font-black mb-4 tracking-tight">Piping</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Process piping layout, stress analysis and fabrication isometrics.</p>
            </div>
            {/* Service 4 */}
            <div className="p-10 hover:bg-gray-50 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase">/ 04</span>
                <span className="text-gray-300 group-hover:text-brand-yellow transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-2xl font-chivo font-black mb-4 tracking-tight">Structural</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pipe racks, technological structures and offshore steel design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ 03 / SELECTED WORK ]</span>
          
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-6xl font-chivo font-black leading-[0.95] tracking-tight">
              Built where it matters most.
            </h2>
            <Link href="/projects" className="hidden md:inline-flex font-bold border-b-2 border-brand-black pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors items-center gap-2">
              All projects <ArrowUpRight />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image1.jpeg" alt="Crude Storage Terminal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ OIL TERMINAL</span>
                <span>2023</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">100,000 KL Crude Storage Terminal</h3>
              <p className="text-gray-500 text-sm">Mundra, Gujarat</p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image2.jpeg" alt="Refinery Piping" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ REFINERY</span>
                <span>2022</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">Refinery Hydrocracker Unit Piping</h3>
              <p className="text-gray-500 text-sm">Jamnagar, Gujarat</p>
            </div>
            
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image4.jpeg" alt="Olefins Storage" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ PETROCHEMICALS</span>
                <span>2021</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">Petrochemical Olefins Storage</h3>
              <p className="text-gray-500 text-sm">Dahej, Gujarat</p>
            </div>
            
            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image5.jpeg" alt="Oil Depot Expansion" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ OIL DEPOTS</span>
                <span>2020</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">Multi-Product Oil Depot Expansion</h3>
              <p className="text-gray-500 text-sm">Pune, Maharashtra</p>
            </div>
            
            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image6.jpeg" alt="Mounded Bullets" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ LPG</span>
                <span>2019</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">LPG Mounded Storage Bullets</h3>
              <p className="text-gray-500 text-sm">Visakhapatnam, AP</p>
            </div>
            
            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-[4/3] mb-6 relative overflow-hidden">
                <img src="/images/image7.jpeg" alt="Sulphur Recovery Unit" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest mb-3">
                <span>/ REFINERY</span>
                <span>2018</span>
              </div>
              <h3 className="text-xl font-chivo font-bold mb-2">Refinery Sulphur Recovery Unit</h3>
              <p className="text-gray-500 text-sm">Bina, MP</p>
            </div>
          </div>
          
          {/* TRUSTED BY INDUSTRY LEADERS */}
          <div className="mt-32 border-t border-gray-100 pt-16 mb-32 overflow-hidden w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 bg-gray-50/50 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
              <span className="overline-text block">[ TRUSTED BY INDUSTRY LEADERS ]</span>
            </div>
            
            {/* Edge-to-edge sliding text marquee */}
            <div className="flex w-max animate-marquee gap-8 opacity-100 pl-6 md:pl-12">
              {[
                "HPCL", "BPCL", "IOCL", "MEIL", "KOC", "GAIL", "EIL", "Technip", "Toyo", "MRPL", "PDIL", "B & R", "Mongol Refinery", "Worley", "SAIL", "DRDO",
                "HPCL", "BPCL", "IOCL", "MEIL", "KOC", "GAIL", "EIL", "Technip", "Toyo", "MRPL", "PDIL", "B & R", "Mongol Refinery", "Worley", "SAIL", "DRDO"
              ].map((client, i) => (
                <div key={i} className="h-24 px-10 bg-white flex items-center justify-center border border-gray-200 shadow-sm hover:border-gray-300 transition-all cursor-default">
                  <span className="font-chivo font-black text-2xl md:text-3xl text-gray-400 hover:text-brand-yellow transition-colors whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-zinc-900 py-32 px-6 md:px-12 border-t border-gray-800 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-100 mix-blend-overlay">
          <img src="/images/image3.jpeg" alt="Blueprint" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight mb-6">
              Have a tank, terminal<br/>or refinery scope?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              Share your concept, capacity and site. We'll respond with a feasibility note and indicative engineering hours within 24 hours.
            </p>
          </div>
          <div>
            <Link href="/contact" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              Start the conversation <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
