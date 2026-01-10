"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollTop } from 'primereact/scrolltop';
import HeroCarousel from "./HeroCarousel";
import DealCountdown from "./DealCountdown";
import RouteTimeline from "./RouteTimeline";
import ItineraryTabs from "./ItineraryTabs";
import BookingCard from "./BookingCard";

interface ItineraryItem {
  day?: number;
  title: string;
  activity: string;
  description: string;
  image?: string;
  stay?: string;
  transfer?: string;
}

interface RouteItem {
  city: string;
  days: number;
}

interface Package {
  id: string;
  duration: string;
  days: number;
  price: string;
  image: string;
  images?: string[];
  route: RouteItem[] | string[]; // Support both for backward compatibility
  highlights: string[];
  itinerary: ItineraryItem[];
}

interface Tour {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  packages?: Package[];
  itinerary?: ItineraryItem[];
  duration?: string;
}

interface TourContentProps {
  tour: Tour;
}

export default function TourContent({ tour }: TourContentProps) {
  const hasPackages = tour.packages && tour.packages.length > 0;
  const initialPackage = hasPackages ? tour.packages![0] : null;
  
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(initialPackage);

  // Derived data
  const currentImages = selectedPackage?.images || [tour.image];
  const currentPrice = selectedPackage ? selectedPackage.price : tour.price;
  const currentDuration = selectedPackage ? selectedPackage.duration : tour.duration;
  const currentItinerary = selectedPackage ? selectedPackage.itinerary : tour.itinerary;
  const currentRoute = selectedPackage ? selectedPackage.route : [];
  const currentHighlights = selectedPackage ? selectedPackage.highlights : [];

  // Helper to normalize route data
  const normalizedRoute: RouteItem[] = Array.isArray(currentRoute) 
    ? currentRoute.map(item => 
        typeof item === 'string' ? { city: item, days: 1 } : item
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <ScrollTop />
      
      {/* Hero Carousel */}
      <HeroCarousel 
        key={selectedPackage?.id || "default"} // Force re-render on package change to update images
        images={currentImages} 
        title={tour.title} 
        location={tour.location} 
        rating={tour.rating} 
      />

      <div className="container mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Duration Selector */}
            {hasPackages && (
              <div>
                <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Choose Trip Duration</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.packages!.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`relative h-24 rounded-xl overflow-hidden text-left group transition-all ${
                        selectedPackage?.id === pkg.id ? "ring-4 ring-blue-600 scale-105 z-10" : "hover:opacity-90"
                      }`}
                    >
                      <Image src={pkg.image} alt={pkg.duration} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="text-lg font-bold">{pkg.duration}</p>
                        <p className="font-semibold text-xs opacity-90">{pkg.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Route Timeline */}
            {normalizedRoute.length > 0 && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-serif mb-6">Destination Routes</h2>
                <RouteTimeline route={normalizedRoute} />
              </section>
            )}

            {/* About */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold font-serif mb-4">About the Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {tour.description}
              </p>
              
              {/* Highlights */}
              {currentHighlights.length > 0 && (
                 <div className="mb-6">
                   <h3 className="font-bold text-gray-900 mb-3">Trip Highlights</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                     {currentHighlights.map((highlight, idx) => (
                       <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                         <i className="pi pi-check-circle text-green-500" />
                         {highlight}
                       </li>
                     ))}
                   </ul>
                 </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                 <div className="text-center p-4 bg-gray-50 rounded-xl">
                   <i className="pi pi-home text-blue-600 text-2xl mb-2" />
                   <p className="text-xs font-bold text-gray-900">Luxury Stays</p>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-xl">
                   <i className="pi pi-apple text-blue-600 text-2xl mb-2" />
                   <p className="text-xs font-bold text-gray-900">Gourmet Meals</p>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-xl">
                   <i className="pi pi-car text-blue-600 text-2xl mb-2" />
                   <p className="text-xs font-bold text-gray-900">Priv. Transport</p>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-xl">
                   <i className="pi pi-users text-blue-600 text-2xl mb-2" />
                   <p className="text-xs font-bold text-gray-900">Guided Tours</p>
                 </div>
              </div>
            </section>

            {/* Itinerary Tabs */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
               <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-bold font-serif">Your Itinerary</h2>
                 <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                   <i className="pi pi-download" /> Download PDF
                 </button>
               </div>
               
               <div className="mb-8">
                 <ItineraryTabs 
                   key={selectedPackage?.id || "default"} 
                   items={currentItinerary || []} 
                 />
               </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
             {/* Booking Card - Moved to top of sidebar */}
             <div className="sticky top-24 z-20">
                <BookingCard 
                  price={currentPrice} 
                  duration={currentDuration || "Duration"} 
                />
             </div>
          </div>
        </div>
        
        {/* Deal Countdown - Above Footer */}
        <div className="mt-16">
          <DealCountdown />
        </div>

      </div>
    </div>
  );
}
