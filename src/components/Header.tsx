"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center px-6 md:px-12 justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-black flex items-center justify-center text-brand-yellow font-chivo font-bold text-xl">
          G
        </div>
        <div className="flex flex-col">
          <span className="font-chivo font-black text-lg leading-none tracking-tight text-brand-black">GABATIA</span>
          <span className="text-[0.6rem] font-plex-sans text-gray-500 uppercase tracking-widest mt-0.5">Engineers & Consultants</span>
        </div>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`h-full flex items-center border-b-2 transition-colors ${
                isActive 
                  ? "border-brand-yellow text-brand-black" 
                  : "border-transparent text-gray-600 hover:text-brand-yellow"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <Link href="/contact" className="hidden md:inline-flex bg-brand-yellow text-brand-black px-6 py-3 font-medium text-sm hover:bg-yellow-400 transition-colors items-center gap-2">
        Request a Quote <ArrowUpRight />
      </Link>
    </header>
  );
}
