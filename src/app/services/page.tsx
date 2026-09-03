import Link from "next/link";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow font-bold mt-1">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Services() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ SERVICES / 01 ]</span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-12 max-w-5xl">
            Four disciplines. <br/>
            <span className="highlight-black mt-2">One signature.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl border-t border-gray-200 pt-8">
            Integrated design across mechanical, civil, piping and structural — calibrated for oil & gas storage and process facilities.
          </p>
        </div>
      </section>

      {/* DISCIPLINE 1: MECHANICAL */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-4">
              [ DISCIPLINE / 01 ]
            </span>
            <h2 className="text-5xl font-chivo font-black tracking-tight mb-6">Mechanical</h2>
            <p className="text-gray-600">Storage tank design, pressure vessels, heat exchangers and rotating equipment.</p>
          </div>
          
          <div className="md:w-2/3 border border-gray-100 divide-y divide-gray-100 bg-white">
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Atmospheric & low-pressure storage tanks (API 650 / 620)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Pressure vessels (ASME Sec VIII Div 1 & 2)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Heat exchangers (TEMA, ASME)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Rotating equipment foundations & layouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE 2: CIVIL */}
      <section className="bg-brand-gray py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-4">
              [ DISCIPLINE / 02 ]
            </span>
            <h2 className="text-5xl font-chivo font-black tracking-tight mb-6">Civil</h2>
            <p className="text-gray-600">Foundations, paving, dyke walls and full plot development for terminals.</p>
          </div>
          
          <div className="md:w-2/3 border border-gray-200 divide-y divide-gray-200 bg-white">
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Tank foundations — ringwall, pile cap, mat</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Dyke walls, fire-water reservoirs</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Roads, drains, plot grading</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">RCC & steel building structures</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE 3: PIPING */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-4">
              [ DISCIPLINE / 03 ]
            </span>
            <h2 className="text-5xl font-chivo font-black tracking-tight mb-6">Piping</h2>
            <p className="text-gray-600">Process piping layout, stress analysis and fabrication isometrics.</p>
          </div>
          
          <div className="md:w-2/3 border border-gray-100 divide-y divide-gray-100 bg-white">
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">3D piping layout (PDMS, E3D, AutoCAD)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Stress analysis (Caesar II)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Pipe support engineering</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Fabrication isometrics & MTOs</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE 4: STRUCTURAL */}
      <section className="bg-brand-gray py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-4">
              [ DISCIPLINE / 04 ]
            </span>
            <h2 className="text-5xl font-chivo font-black tracking-tight mb-6">Structural</h2>
            <p className="text-gray-600">Pipe racks, technological structures and offshore steel design.</p>
          </div>
          
          <div className="md:w-2/3 border border-gray-200 divide-y divide-gray-200 bg-white">
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Pipe racks & technological structures</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Steel buildings (STAAD.Pro, Tekla)</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Equipment supporting structures</span>
            </div>
            <div className="p-6 flex items-start gap-4">
              <CheckIcon />
              <span className="text-gray-700">Seismic & wind analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER SECTION */}
      <section className="bg-zinc-900 py-32 px-6 md:px-12 border-t border-gray-800 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-100 mix-blend-overlay">
          <img src="/images/image3.jpeg" alt="Blueprint" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest block mb-6">
            [ PROCESS / 02 ]
          </span>
          <h2 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mb-24">
            How we deliver.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 border-t border-white/20 pt-8">
            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-brand-yellow font-plex-mono text-xs uppercase tracking-widest block mb-4">/ 01</span>
              <h3 className="text-2xl font-bold mb-4">Brief & Feasibility</h3>
              <p className="text-sm text-gray-400">We unpack your scope, capacity and site constraints into an engineering brief.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8">
              <span className="text-brand-yellow font-plex-mono text-xs uppercase tracking-widest block mb-4">/ 02</span>
              <h3 className="text-2xl font-bold mb-4">Concept Design</h3>
              <p className="text-sm text-gray-400">Layout, sizing, key drawings and indicative MTOs for cost validation.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8">
              <span className="text-brand-yellow font-plex-mono text-xs uppercase tracking-widest block mb-4">/ 03</span>
              <h3 className="text-2xl font-bold mb-4">Detailed Engineering</h3>
              <p className="text-sm text-gray-400">Code-compliant calculations, GA drawings, fabrication isos and BoQs.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8">
              <span className="text-brand-yellow font-plex-mono text-xs uppercase tracking-widest block mb-4">/ 04</span>
              <h3 className="text-2xl font-bold mb-4">Construction Support</h3>
              <p className="text-sm text-gray-400">RFI resolution, vendor reviews, site visits, as-built documentation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="bg-white py-32 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-6">
              [ ENGAGEMENT ]
            </span>
            <h2 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight">
              Bring us your<br/>toughest scope.
            </h2>
          </div>
          <div>
            <Link href="/contact" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              Talk to an engineer <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
