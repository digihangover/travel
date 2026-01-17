import Link from "next/link";
import Image from "next/image";

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

export interface Package {
  id: string;
  name: string;
  duration: string;
  days: number;
  price: string;
  image: string;
  images?: string[];
  route: RouteItem[] | string[];
  highlights: string[];
  itinerary: ItineraryItem[];
}

interface DurationSelectorProps {
  packages: Package[];
  selectedPackage: Package | null;
  tourId: string;
}

export default function DurationSelector({ packages, selectedPackage, tourId }: DurationSelectorProps) {
  if (!packages || packages.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Choose Trip Duration</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {packages.map((pkg) => (
          <Link
            key={pkg.id}
            href={`/tours/${tourId}/${pkg.id}`}
            className={`relative h-32 rounded-xl overflow-hidden text-left group transition-all duration-300 block ${
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
          </Link>
        ))}
      </div>
    </div>
  );
}
