import type { Metadata } from "next";
import { Chivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
  weight: ["400", "700", "900"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gabatia Engineers & Consultants",
  description: "Specialists in oil storage tank design and engineering consultancy.",
};

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
  </svg>
);

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${plexSans.variable} ${plexMono.variable} antialiased min-h-screen flex flex-col`}>
        
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-brand-black text-white pt-24 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-gray-800 pb-24">
              <div className="md:w-1/2">
                <span className="overline-text text-gray-500">[ 01 / START A PROJECT ]</span>
                <h2 className="text-5xl md:text-7xl font-chivo font-black leading-tight">
                  Engineering<br/>
                  <span className="text-brand-yellow">precision since 2003.</span>
                </h2>
              </div>
              <div className="md:w-1/3 flex flex-col items-start md:items-end mt-12 md:mt-0 text-gray-400">
                <p className="mb-6 text-right md:text-right">Talk to our consultants about your next storage tank, refinery or piping project.</p>
                <Link href="/contact" className="bg-brand-yellow text-brand-black px-6 py-3 font-medium text-sm hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
                  Get in touch <ArrowUpRight />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-400">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center text-brand-black font-chivo font-bold text-sm">
                    G
                  </div>
                  <span className="font-chivo font-black text-white text-base">GABATIA</span>
                </div>
                <p>Specialists in oil storage tank design and engineering consultancy across mechanical, civil, piping & structural domains.</p>
              </div>
              
              <div>
                <h4 className="overline-text text-gray-600 mb-6">Navigate</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/clients" className="hover:text-white transition-colors">Clients</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="overline-text text-gray-600 mb-6">Domains</h4>
                <ul className="space-y-3">
                  <li>Mechanical</li>
                  <li>Civil</li>
                  <li>Piping</li>
                  <li>Structural</li>
                </ul>
              </div>
              
              <div>
                <h4 className="overline-text text-gray-600 mb-6">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-yellow mt-1"><LocationIcon /></span>
                    <span>Industrial Estate, Vadodara<br/>Gujarat, India 390010</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-yellow"><PhoneIcon /></span>
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-yellow"><EmailIcon /></span>
                    <span>info@gabatia-engineers.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-24 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between text-xs text-gray-600 font-plex-mono uppercase tracking-widest">
              <p>© 2026 GABATIA ENGINEERS & CONSULTANTS — ALL RIGHTS RESERVED</p>
              <p>EST. 2003 / VADODARA, IN</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
