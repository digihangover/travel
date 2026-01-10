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
    <div className="pt-28 pb-16 min-h-screen bg-white">
      <ScrollTop />
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">All Destinations</h1>
            <p className="text-gray-500">Discover handpicked escapes for the refined global explorer.</p>
          </div>
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
