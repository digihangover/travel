import Image from "next/image";
import { constructMetadata } from "@/components/seo/Meta";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";
import { ScrollTop } from 'primereact/scrolltop';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);
  if (!destination) return constructMetadata({ title: "Destination Not Found" });
  
  return constructMetadata({
    title: destination.title,
    description: destination.description,
    image: destination.image,
  });
}

export default async function DestinationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollTop />
      {/* Hero */}
      <div className="relative h-[80vh] w-full">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <span className="uppercase tracking-widest text-sm font-medium mb-4">Destinations / {destination.location}</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">{destination.title}</h1>
          <p className="text-xl md:text-2xl font-light italic">"{destination.tag}"</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-gray-100 pb-16">
          <div className="flex items-start gap-4">
            <i className="pi pi-wallet text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Currency</h4>
              <p className="text-gray-600">{destination.quickFacts.currency}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="pi pi-comments text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Language</h4>
              <p className="text-gray-600">{destination.quickFacts.language}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
             <i className="pi pi-sun text-blue-600 text-xl mt-1" />
             <div>
               <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Avg. Temp</h4>
               <p className="text-gray-600">{destination.quickFacts.temp}</p>
             </div>
          </div>
          <div className="flex items-start gap-4">
             <i className="pi pi-send text-blue-600 text-xl mt-1" />
             <div>
               <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Main Hub</h4>
               <p className="text-gray-600">{destination.quickFacts.hub}</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-serif mb-8">About {destination.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {destination.description}
            </p>
            
            <h3 className="text-2xl font-bold font-serif mb-8">Top Experiences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {destination.images && destination.images.slice(1).map((img, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <Image src={img} alt="Experience" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Experience {idx + 1}</h4>
                    <p className="text-gray-600 text-sm">Discover the hidden gems and local secrets of this amazing destination.</p>
                  </div>
              ))}
              {(!destination.images || destination.images.length <= 1) && (
                 <p className="text-gray-500">More experiences coming soon.</p>
              )}
            </div>

            <h3 className="text-2xl font-bold font-serif mb-8">Local Culture & Traditions</h3>
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-1 space-y-6">
                 <div className="flex gap-4">
                   <i className="pi pi-home text-blue-600 text-xl" />
                   <div>
                     <h5 className="font-bold mb-1">Heritage</h5>
                     <p className="text-sm text-gray-600">Immerse yourself in the rich history and architectural marvels.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <i className="pi pi-apple text-blue-600 text-xl" />
                   <div>
                     <h5 className="font-bold mb-1">Gastronomy</h5>
                     <p className="text-sm text-gray-600">Savor the authentic flavors and culinary traditions of the region.</p>
                   </div>
                 </div>
               </div>
               <div className="w-full md:w-1/3 h-48 relative rounded-xl overflow-hidden">
                  <Image src={destination.image} alt="Culture" fill className="object-cover" />
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold font-serif mb-4">Plan your dream escape</h3>
              <p className="text-blue-100 mb-6 text-sm">Let our concierge design the perfect itinerary for your visit to {destination.location}.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-full hover:bg-blue-50 transition-colors">
                Talk to an Expert
              </button>
            </div>

            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold font-serif mb-6">Best Time to Visit</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-blue-600">Spring</h4>
                    <span className="text-xs text-gray-400">Apr - June</span>
                  </div>
                  <p className="text-xs text-gray-600">Perfect for sightseeing without the summer crowds.</p>
                </div>
                <div>
                   <div className="flex justify-between items-center mb-1">
                     <h4 className="font-bold text-blue-600">Summer</h4>
                     <span className="text-xs text-gray-400">July - Aug</span>
                   </div>
                   <p className="text-xs text-gray-600">Peak season. Vibrant atmosphere and warm weather.</p>
                </div>
                <div>
                   <div className="flex justify-between items-center mb-1">
                     <h4 className="font-bold text-blue-600">Autumn</h4>
                     <span className="text-xs text-gray-400">Sept - Oct</span>
                   </div>
                   <p className="text-xs text-gray-600">Pleasant temperatures and beautiful scenery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
