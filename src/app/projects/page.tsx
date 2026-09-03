"use client";

import { useState } from "react";
import Link from "next/link";

// Custom SVG Icons
const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <path d="M7 17l9.2-9.2M17 17V7H7"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projects = [
    {
      id: 1,
      title: "100,000 KL Crude Storage Terminal",
      category: "OIL TERMINAL",
      description: "Greenfield design of six floating-roof tanks with associated dyke, pump house and pipeline tie-in.",
      location: "MUNDRA, GUJARAT",
      year: "2023",
      image: "/images/image1.jpeg"
    },
    {
      id: 2,
      title: "Refinery Hydrocracker Unit Piping",
      category: "REFINERY",
      description: "Detail engineering of 14 km process piping with stress analysis and pipe support design.",
      location: "JAMNAGAR, GUJARAT",
      year: "2022",
      image: "/images/image2.jpeg"
    },
    {
      id: 3,
      title: "Petrochemical Olefins Storage",
      category: "PETROCHEMICAL",
      description: "Cryogenic ethylene storage tanks (40,000 m³) with full structural and civil package.",
      location: "DAHEJ, GUJARAT",
      year: "2021",
      image: "/images/image4.jpeg"
    },
    {
      id: 4,
      title: "Multi-Product Oil Depot Expansion",
      category: "OIL DEPOT",
      description: "Brownfield depot expansion: 8 cone-roof tanks, TLF, FW system & pipe rack rerouting.",
      location: "HAZIRA, GUJARAT",
      year: "2020",
      image: "/images/image5.jpeg"
    },
    {
      id: 5,
      title: "LPG Mounded Storage Bullets",
      category: "OIL TERMINAL",
      description: "Mechanical & civil design for 6 × 1500 m³ mounded LPG bullets including FW deluge.",
      location: "VISAKHAPATNAM, AP",
      year: "2019",
      image: "/images/image6.jpeg"
    },
    {
      id: 6,
      title: "Refinery Sulphur Recovery Unit",
      category: "REFINERY",
      description: "International assignment: structural design of SRU pipe rack and equipment supports.",
      location: "BAHRAIN",
      year: "2018",
      image: "/images/image7.jpeg"
    }
  ];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = ["ALL", "OIL TERMINAL", "REFINERY", "PETROCHEMICAL", "OIL DEPOT"];

  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="overline-text">[ PROJECTS / 01 ]</span>
          
          <h1 className="text-6xl md:text-8xl font-chivo font-black leading-[0.95] tracking-tight mt-8 mb-12 max-w-5xl">
            Selected work, <br/>
            <span className="highlight-yellow mt-2">delivered.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl border-t border-gray-200 pt-8">
            A cross-section of recent assignments across oil terminals, refineries, petrochemicals and depots.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-gray-50 border-y border-gray-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto text-xs font-plex-mono tracking-widest uppercase pb-2 md:pb-0">
          <span className="text-gray-500 whitespace-nowrap mr-4">[ FILTER ]</span>
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 whitespace-nowrap transition-colors ${
                activeFilter === filter 
                  ? "bg-brand-black text-white" 
                  : "bg-white border border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredProjects.map(project => (
            <div key={project.id} className="border border-gray-200 group cursor-pointer flex flex-col h-full bg-white hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black font-plex-mono text-[0.6rem] uppercase tracking-widest px-3 py-1 font-bold z-10">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-chivo font-black mb-4 tracking-tight group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-[0.6rem] font-plex-mono text-gray-400 uppercase tracking-widest pt-6 border-t border-gray-100">
                  <span className="flex items-center gap-2"><LocationIcon /> {project.location}</span>
                  <span className="flex items-center gap-2"><CalendarIcon /> {project.year}</span>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500 font-plex-mono uppercase tracking-widest">
              No projects found for this category.
            </div>
          )}

        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="bg-brand-black text-white py-32 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="font-plex-mono text-[0.6rem] text-gray-400 uppercase tracking-widest block mb-6">
              [ NEXT CASE ]
            </span>
            <h2 className="text-5xl md:text-7xl font-chivo font-black leading-[0.95] tracking-tight">
              Could be<br/>yours.
            </h2>
          </div>
          <div>
            <Link href="/contact" className="bg-brand-yellow text-brand-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-2">
              Discuss your project <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
