"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollTop } from 'primereact/scrolltop';
import HeroCarousel from "./HeroCarousel";
import DealCountdown from "./DealCountdown";
import RouteTimeline from "./RouteTimeline";
import ItineraryTabs from "./ItineraryTabs";
import BookingCard from "./BookingCard";
import InquiryForm from "./InquiryForm";
import ConnectDialog from "./ConnectDialog";

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
  const [isConnectOpen, setIsConnectOpen] = useState(false);

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

  // Derive dynamic location string from route
  const dynamicLocation = normalizedRoute.length > 0 
    ? normalizedRoute.map(r => r.city).join(" • ")
    : tour.location;

  const handleEnquire = () => {
    setIsConnectOpen(true);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <ScrollTop />
      <ConnectDialog isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
      
      {/* Hero Carousel */}
      <HeroCarousel 
        key={selectedPackage?.id || "default"} // Force re-render on package change to update images
        images={currentImages} 
        title={tour.title} 
        location={dynamicLocation} 
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tour.packages!.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`relative h-32 rounded-xl overflow-hidden text-left group transition-all duration-300 ${
                        selectedPackage?.id === pkg.id 
                          ? "ring-4 ring-blue-600 scale-105 z-10 shadow-xl" 
                          : "hover:opacity-90 hover:scale-105 hover:shadow-lg opacity-80"
                      }`}
                    >
                      <Image src={pkg.image} alt={pkg.duration} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className={`absolute inset-0 transition-colors duration-300 ${selectedPackage?.id === pkg.id ? 'bg-black/40' : 'bg-black/50 group-hover:bg-black/40'}`} />
                      <div className="absolute bottom-3 left-3 text-white z-10">
                        <p className="text-2xl font-bold mb-1">{pkg.duration}</p>
                        <p className="font-semibold text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md inline-block">{pkg.price}</p>
                      </div>
                      {selectedPackage?.id === pkg.id && (
                        <div className="absolute top-3 right-3 bg-blue-600 text-white p-1 rounded-full">
                          <i className="pi pi-check text-xs font-bold" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Route Timeline */}
            {normalizedRoute.length > 0 && (
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-serif mb-4">Destination Routes</h2>
                <RouteTimeline route={normalizedRoute} />
                
                {/* Stay Category - Moved here */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <label className="text-lg font-bold text-gray-900 block mb-3">Stay Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="border border-gray-200 bg-white text-gray-600 px-3 py-3 rounded-xl font-medium flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all text-center">
                      <span className="text-sm">Deluxe</span>
                    </div>
                    <div className="border-2 border-orange-500 bg-orange-50 text-orange-700 px-3 py-3 rounded-xl font-medium flex flex-col items-center justify-center cursor-pointer relative text-center">
                      <span className="text-sm font-bold">Super Deluxe</span>
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1 shadow-sm">
                        <i className="pi pi-check text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
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
            <section id="full-itinerary" className="bg-white p-8 rounded-2xl shadow-sm">
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
                  onEnquire={handleEnquire}
                  onWhatsApp={handleWhatsApp}
                />
                <InquiryForm />
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
