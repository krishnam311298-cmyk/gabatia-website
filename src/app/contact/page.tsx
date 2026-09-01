import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Gabatia Engineers',
  description: 'Get in touch with GABATIA ENGINEER AND CONSULTANTS LLP.',
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 md:py-28 bg-zinc-900 text-white relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <h1 className="font-chivo text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Contact <span className="text-brand-yellow">Us</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            Let's discuss how our engineering expertise can bring your project to life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div>
              <h2 className="font-chivo text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Company</h3>
                  <p className="text-lg font-medium text-zinc-900">GABATIA ENGINEER AND CONSULTANTS LLP</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Contact Person</h3>
                  <p className="text-lg font-medium text-zinc-900">Jay Shah</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Phone</h3>
                  <a href="tel:8080853001" className="text-lg font-medium text-brand-yellow-hover hover:underline">
                    8080853001
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:gabatia@gmail.com" className="text-lg font-medium text-brand-yellow-hover hover:underline">
                    gabatia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm">
              <h2 className="font-chivo text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full rounded-md border border-zinc-300 px-4 py-2 text-zinc-900 focus:border-brand-yellow focus:ring-brand-yellow outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full rounded-md border border-zinc-300 px-4 py-2 text-zinc-900 focus:border-brand-yellow focus:ring-brand-yellow outline-none transition-colors" placeholder="Your email address" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                  <input type="tel" id="phone" className="w-full rounded-md border border-zinc-300 px-4 py-2 text-zinc-900 focus:border-brand-yellow focus:ring-brand-yellow outline-none transition-colors" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full rounded-md border border-zinc-300 px-4 py-2 text-zinc-900 focus:border-brand-yellow focus:ring-brand-yellow outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-zinc-900 text-white font-medium rounded-md h-12 hover:bg-zinc-800 transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
