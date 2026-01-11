import DestinationCard from "@/components/features/DestinationCard";
import { constructMetadata } from "@/components/seo/Meta";
import { tours } from "@/data/tours";
import { ScrollTop } from 'primereact/scrolltop';

export const metadata = constructMetadata({
  title: "Tours",
  description: "Curated luxury tours and experiences.",
});

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollTop />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Tours Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Curated Journeys</h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light">Immersive experiences designed for the modern explorer. Discover the world with our handpicked tour packages.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <DestinationCard key={tour.id} {...tour} linkPrefix="/tours" />
          ))}
        </div>
      </div>

      {/* Tourism Alliances */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif mb-12">Our Tourism Alliances</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder logos - replace with actual assets */}
             <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Tourism Board 1</div>
             <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Tourism Board 2</div>
             <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Tourism Board 3</div>
             <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Tourism Board 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
