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
import DurationSelector from "./DurationSelector";
import DurationSelectorV2 from "./DurationSelectorV2";

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
  name: string;
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
  initialPackageId?: string;
}

export default function TourContent({ tour, initialPackageId }: TourContentProps) {
  const hasPackages = tour.packages && tour.packages.length > 0;
  
  // Find initial package based on ID or default to first
  const initialPackage = hasPackages 
    ? (initialPackageId ? tour.packages!.find(p => p.id === initialPackageId) || tour.packages![0] : tour.packages![0])
    : null;
  
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
        packageName={selectedPackage?.name}
        location={dynamicLocation} 
        rating={tour.rating} 
      />

      <div className="container mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Duration Selector */}
            {hasPackages && (
              tour.id === 'europe-tour-v2' ? (
                <DurationSelectorV2 
                  packages={tour.packages!} 
                  selectedPackage={selectedPackage} 
                  tourId={tour.id}
                />
              ) : (
                <DurationSelector 
                  packages={tour.packages!} 
                  selectedPackage={selectedPackage} 
                  tourId={tour.id}
                />
              )
            )}

            {/* Route Timeline */}
            {normalizedRoute.length > 0 && (
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-serif mb-4">Destination Routes</h2>
                <RouteTimeline route={normalizedRoute} />

              </section>
            )}

            {/* About */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold font-serif mb-4">About the Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {tour.description}
              </p>
              
              {currentHighlights.length > 0 && (
                 <div className="mb-8">
                   <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Highlights</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                     {/* Combining dynamic highlights with some static ones for "more items" request */}
                     {[...currentHighlights, "Professional English Speaking Guide", "All Entry Fees Included", "Comfortable AC Coach"].map((highlight, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <i className="pi pi-check-circle text-green-500 text-lg mt-0.5" />
                         <span className="text-gray-700 font-medium">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center p-4 bg-blue-50 hover:bg-blue-600 rounded-xl border border-blue-100 hover:border-blue-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/hotel.png" alt="Hotel" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">4 Star Accomodation</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 hover:bg-orange-600 rounded-xl border border-orange-100 hover:border-orange-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/transport.png" alt="Transport" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Luxury Transport</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 hover:bg-green-600 rounded-xl border border-green-100 hover:border-green-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/veg-food.png" alt="Meals" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Vegetarian Meals Options</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 hover:bg-purple-600 rounded-xl border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/guide.png" alt="Guide" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Professional Tour Guide</p>
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
                  packageName={selectedPackage?.name}
                  onEnquire={handleEnquire}
                />
                <div className="mt-16">
                  <DealCountdown onClaim={handleEnquire} />
                </div>
                {/* <InquiryForm /> */}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
