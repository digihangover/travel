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
    <div className="pt-28 pb-16 min-h-screen bg-white">
      <ScrollTop />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">Curated Journeys</h1>
           <p className="text-gray-500 text-lg">Immersive experiences designed for the modern explorer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <DestinationCard key={tour.id} {...tour} linkPrefix="/tours" />
          ))}
        </div>
      </div>
    </div>
  );
}
