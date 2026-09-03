import Link from "next/link";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default function Contact() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ CONTACT / 01 ]</span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-12 max-w-5xl">
            Let's engineer <br/>
            something <span className="highlight-black mt-2 text-brand-yellow">together.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl border-t border-gray-200 pt-8">
            Share your scope, capacity and site context. Our team responds with a feasibility note within one working day.
          </p>
        </div>
      </section>

      {/* CONTACT INFO AND FORM */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* LEFT SIDE - INFO */}
          <div className="md:w-1/3">
            <div className="mb-12">
              <span className="overline-text">[ OFFICE ]</span>
              <div className="text-lg text-gray-600">
                Gabatia Engineers & Consultants<br/>
                Industrial Estate, Gorwa<br/>
                Vadodara, Gujarat 390010<br/>
                India
              </div>
            </div>
            
            <div className="mb-12 border-t border-gray-200 pt-8">
              <span className="overline-text">[ DIRECT ]</span>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-brand-yellow"><PhoneIcon /></span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-yellow"><EmailIcon /></span>
                  <span>info@gabatia-engineers.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-yellow"><ClockIcon /></span>
                  <span>Mon–Sat / 09:30 – 18:30 IST</span>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <span className="overline-text">[ DISCIPLINES ]</span>
              <div className="flex flex-wrap gap-2 text-[0.6rem] font-plex-mono text-gray-500 uppercase tracking-widest">
                <span className="border border-gray-200 bg-white px-3 py-1">/ MECHANICAL</span>
                <span className="border border-gray-200 bg-white px-3 py-1">/ CIVIL</span>
                <span className="border border-gray-200 bg-white px-3 py-1">/ PIPING</span>
                <span className="border border-gray-200 bg-white px-3 py-1">/ STRUCTURAL</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - FORM */}
          <div className="md:w-2/3 bg-white border border-gray-200 p-8 md:p-12">
            <span className="overline-text mb-8">[ SEND A MESSAGE ]</span>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-2">NAME *</label>
                  <input type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-brand-black transition-colors" />
                </div>
                <div>
                  <label className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-2">EMAIL *</label>
                  <input type="email" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-brand-black transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-2">PHONE</label>
                  <input type="tel" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-brand-black transition-colors" />
                </div>
                <div>
                  <label className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-2">SUBJECT *</label>
                  <input type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-brand-black transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="font-plex-mono text-[0.6rem] text-gray-500 uppercase tracking-widest block mb-2">MESSAGE *</label>
                <textarea rows={6} className="w-full border border-gray-200 p-3 focus:outline-none focus:border-brand-black transition-colors resize-none" placeholder="Tell us about your scope, capacity, location and timeline..."></textarea>
              </div>
              
              <div className="text-xs text-gray-500 pb-2">
                We respect your privacy. Any information you provide is used solely to respond to your inquiry. Read our full <Link href="/privacy-policy" className="underline hover:text-brand-black transition-colors">Privacy Policy</Link>.
              </div>
              
              <div>
                <button type="button" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-sm hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
                  <span className="mr-2 text-brand-black"><EmailIcon /></span> Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* MAP SECTION */}
      <section className="bg-white pt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="overline-text">[ WHERE TO FIND US ]</span>
        </div>
        <div className="w-full h-[500px] grayscale contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.7001022166!2d73.10304620000001!3d22.32210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715694294025!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
