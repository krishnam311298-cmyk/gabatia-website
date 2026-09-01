import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-zinc-900 text-white overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-yellow mr-2"></span>
            Engineering Excellence Since 2003
          </div>
          <h1 className="font-chivo text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            Specialists in <span className="text-brand-yellow">Oil & Gas</span> Engineering Consultancy
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
            Providing comprehensive design and engineering solutions across mechanical, civil, piping, and structural domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-brand-yellow text-zinc-900 h-12 px-8 py-3 hover:bg-brand-yellow-hover transition-colors">
              Discuss Your Project
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-zinc-700 bg-zinc-800 text-white h-12 px-8 py-3 hover:bg-zinc-700 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="font-chivo text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Competencies</h2>
              <p className="text-zinc-500 text-lg">Delivering precision engineering and robust designs for the energy sector.</p>
            </div>
            <Link href="/about" className="hidden md:inline-flex text-brand-yellow hover:text-brand-yellow-hover font-medium items-center gap-1 mt-4 md:mt-0">
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group border border-zinc-200 rounded-xl p-8 hover:border-brand-yellow transition-colors hover:shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/10 transition-colors">
                <svg className="w-6 h-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Mechanical Engineering</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Expertise in oil storage tank design and mechanical equipment specifications.</p>
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-yellow">Learn more</Link>
            </div>

            {/* Service Card 2 */}
            <div className="group border border-zinc-200 rounded-xl p-8 hover:border-brand-yellow transition-colors hover:shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/10 transition-colors">
                <svg className="w-6 h-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Civil & Structural</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Comprehensive structural analysis and civil engineering solutions for heavy industry.</p>
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-yellow">Learn more</Link>
            </div>

            {/* Service Card 3 */}
            <div className="group border border-zinc-200 rounded-xl p-8 hover:border-brand-yellow transition-colors hover:shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/10 transition-colors">
                <svg className="w-6 h-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Piping Design</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Advanced piping systems design, stress analysis, and isometric generation.</p>
              <Link href="/about" className="text-sm font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-yellow">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-chivo text-3xl md:text-4xl font-bold tracking-tight mb-6">Have an engineering or consultancy requirement?</h2>
          <p className="text-zinc-500 text-lg mb-10">Our experienced team is ready to deliver precise, compliant, and efficient engineering solutions for your next project.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-900 text-white h-12 px-8 py-3 hover:bg-zinc-800 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
