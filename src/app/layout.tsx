import type { Metadata } from 'next';
import { Chivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const chivo = Chivo({ subsets: ['latin'], variable: '--font-chivo' });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-ibm-sans' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-ibm-mono' });

export const metadata: Metadata = {
  title: 'Gabatia Engineers & Consultants — Oil & Gas Engineering Since 2003',
  description: 'Specialists in oil storage tank design and engineering consultancy across mechanical, civil, piping & structural domains since 2003.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} ${chivo.variable} ${ibmPlexMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
            <Link href="/" className="font-chivo font-bold text-xl tracking-tight">
              GABATIA <span className="text-brand-yellow">ENGINEERS</span>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
              <Link href="/about" className="hover:text-brand-yellow transition-colors">About & Services</Link>
              <Link href="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
            </nav>
            <Link href="/contact" className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-900 text-white h-10 px-4 py-2 hover:bg-zinc-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t bg-zinc-50 py-12">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="font-chivo font-bold text-xl tracking-tight">
                GABATIA <span className="text-brand-yellow">ENGINEERS</span>
              </Link>
              <p className="mt-4 text-sm text-zinc-500 max-w-sm">
                Specialists in oil storage tank design and engineering consultancy across mechanical, civil, piping & structural domains since 2003.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/" className="hover:text-brand-yellow">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-yellow">About & Services</Link></li>
                <li><Link href="/contact" className="hover:text-brand-yellow">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>Jay Shah</li>
                <li>8080853001</li>
                <li>gabatia@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-zinc-200 text-xs text-zinc-400 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} GABATIA ENGINEER AND CONSULTANTS LLP. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
