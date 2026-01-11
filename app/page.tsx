import Hero from "@/components/features/Hero";
import DestinationCard from "@/components/features/DestinationCard";
import { constructMetadata } from "@/components/seo/Meta";
import { destinations } from "@/data/destinations";
import TourismAlliances from "@/components/features/TourismAlliances";
import Counter from "@/components/ui/Counter";

export const metadata = constructMetadata({
  title: "Home",
  description: "Discover luxury travel destinations with Jaya Travels.",
});

export default function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Trending Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Trending Destinations</h2>
              <p className="text-gray-600 max-w-xl">Curated escapes for the refined traveler. Explore our most sought-after locations this season.</p>
            </div>
            <a href="/destinations" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 transition-colors">
              View All Destinations <i className="pi pi-arrow-right text-xs" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_bg.png')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2 block">The Voyage Standard</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Why Book With Us</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We curate the finest experiences for the discerning traveler, ensuring every detail of your journey is handled with absolute precision and elegance.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                    <i className="pi pi-shield text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Exclusive Access</h4>
                    <p className="text-gray-400 text-sm">Members get early access to booking private islands, jets, and hidden gems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                    <i className="pi pi-star text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Best Price Guarantee</h4>
                    <p className="text-gray-400 text-sm">We match any verified luxury itinerary. Our relationships ensure you receive the best value.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                    <i className="pi pi-clock text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">24/7 Global Concierge</h4>
                    <p className="text-gray-400 text-sm">Our travel experts are available anytime, anywhere to assist with last-minute changes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
               {/* Placeholder for a feature image, reusing santorini or similar for now */}
               <div className="absolute inset-0 bg-[url('/images/santorini.png')] bg-cover bg-center" />
               <div className="absolute bottom-10 left-10 bg-blue-600 text-white p-6 rounded-xl max-w-xs shadow-xl">
                 <h3 className="text-3xl font-bold mb-1 flex items-center">
                   <Counter from={0} to={500} duration={2} />+
                 </h3>
                 <p className="text-sm font-medium opacity-90">Hand-picked Luxury Hotels & Villas</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Inspired Section */}
      {/* Newsletter */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_bg.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <h2 className="text-4xl font-bold font-serif mb-6">Join the Elite Circle</h2>
          <p className="text-blue-100 mb-8 text-lg">Subscribe to receive exclusive offers, travel inspiration, and invitations to private events.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <TourismAlliances />
    </div>
  );
}
