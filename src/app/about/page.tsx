import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About & Services — Gabatia Engineers',
  description: 'Learn about our engineering expertise and comprehensive service offerings.',
};

export default function AboutServices() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="py-20 md:py-28 bg-zinc-900 text-white relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <h1 className="font-chivo text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About <span className="text-brand-yellow">Gabatia</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            A legacy of precision and reliability in the oil, gas, and energy sectors.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="font-chivo text-3xl md:text-4xl font-bold mb-6">Company Introduction</h2>
          <div className="prose prose-zinc max-w-none text-lg text-zinc-600 space-y-6">
            <p>
              Founded in 2003, GABATIA ENGINEER AND CONSULTANTS LLP has established itself as a premier engineering consultancy firm specializing in the energy sector. We bring decades of hands-on experience and deep technical expertise to every project we undertake.
            </p>
            <p>
              Our multidisciplinary team of engineers is dedicated to delivering robust, compliant, and cost-effective solutions for complex industrial challenges, with a particular focus on oil storage tank design and associated infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="font-chivo text-3xl md:text-4xl font-bold mb-12 text-center">Our Expertise</h2>
          
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="h-16 w-16 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                <span className="font-chivo font-bold text-2xl text-zinc-900">01</span>
              </div>
              <div>
                <h3 className="font-chivo text-2xl font-bold mb-4">Mechanical Engineering</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  We specialize in the design and engineering of API 650, API 620, and AWWA D100 storage tanks. Our mechanical services include finite element analysis, equipment specification, pressure vessel design, and comprehensive mechanical fitness-for-service assessments.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="h-16 w-16 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                <span className="font-chivo font-bold text-2xl text-zinc-900">02</span>
              </div>
              <div>
                <h3 className="font-chivo text-2xl font-bold mb-4">Civil & Structural Engineering</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Our civil engineering division provides comprehensive structural analysis, foundation design for heavy industrial equipment, concrete and steel structure design, and site development engineering for oil terminals and industrial plants.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="h-16 w-16 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                <span className="font-chivo font-bold text-2xl text-zinc-900">03</span>
              </div>
              <div>
                <h3 className="font-chivo text-2xl font-bold mb-4">Piping & Layout Design</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  We offer end-to-end piping design solutions including 3D plant layout, pipe stress analysis, isometric generation, and material take-offs (MTO). Our designs comply with ASME B31.3 and B31.4 codes ensuring safety and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-brand-yellow text-zinc-900 text-center">
        <h2 className="font-chivo text-3xl font-bold mb-6">Ready to start your next project?</h2>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md font-medium bg-zinc-900 text-white h-12 px-8 py-3 hover:bg-zinc-800 transition-colors">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
