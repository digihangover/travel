"use client";

import { useState } from "react";
import DestinationCard from "@/components/features/DestinationCard";
import { destinations } from "@/data/destinations";
import { ScrollTop } from 'primereact/scrolltop';

const filters = ["All Stays", "Beach", "Mountain", "City Breaks", "Cultural"];

export default function DestinationsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilter, setActiveFilter] = useState("All Stays");

  const filteredDestinations = activeFilter === "All Stays" 
    ? destinations 
    : destinations.filter(d => d.category === activeFilter);

  const visibleDestinations = filteredDestinations.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollTop />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Destinations Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">All Destinations</h1>
          <p className="text-xl max-w-2xl font-light">Discover handpicked escapes for the refined global explorer.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-end items-center mb-8">
          <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
            Show Map <i className="pi pi-map" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter, index) => (
            <button 
              key={filter}
              onClick={() => { setActiveFilter(filter); setVisibleCount(6); }}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === filter 
                  ? "bg-gray-900 text-white border-gray-900" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleDestinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>

        {visibleCount < filteredDestinations.length && (
          <div className="flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Load More Destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
