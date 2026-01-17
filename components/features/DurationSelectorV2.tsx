import Link from "next/link";
import Image from "next/image";
import { Package } from "./DurationSelector";

interface DurationSelectorProps {
  packages: Package[];
  selectedPackage: Package | null;
  tourId: string;
}

export default function DurationSelectorV2({ packages, selectedPackage, tourId }: DurationSelectorProps) {
  if (!packages || packages.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Choose Trip Duration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => {
           // Derive subtitle from route if available, e.g., "Paris 3N, Zurich 2N"
           const subtitle = Array.isArray(pkg.route) 
             ? pkg.route.map((r: any) => `${r.city} ${r.days}N`).join(", ")
             : "";

           return (
            <Link 
              key={pkg.id}
              href={`/tours/${tourId}/${pkg.id}`}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border flex flex-col h-full ${
                selectedPackage?.id === pkg.id ? 'border-blue-600 ring-2 ring-blue-600 ring-offset-2' : 'border-gray-100'
              }`}
            >
              {/* Image Section with Info Bar */}
              <div className="relative h-48 w-full shrink-0">
                <Image 
                  src={pkg.image} 
                  alt={pkg.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Dark Info Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm text-white py-2 px-3 flex justify-between items-center">
                  <span className="text-sm font-medium">{pkg.duration}</span>
                  <span className="text-sm font-bold">{pkg.price}* pp</span>
                </div>

                {/* Selected Checkmark Overlay */}
                {selectedPackage?.id === pkg.id && (
                  <div className="absolute inset-0 bg-blue-600/10 z-10">
                    <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-2 shadow-lg scale-110">
                      <i className="pi pi-check text-lg font-bold" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 line-clamp-2 mb-1 leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {subtitle}
                  </p>
                </div>

                <div className="mt-3 flex justify-center items-center">
                  <span className="bg-[#0056D2] text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-blue-800 transition-colors uppercase whitespace-nowrap">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
