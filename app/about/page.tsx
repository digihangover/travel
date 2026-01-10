import Image from "next/image";
import { constructMetadata } from "@/components/seo/Meta";

export const metadata = constructMetadata({
  title: "About Us",
  description: "Learn about our journey and commitment to luxury travel.",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2010, Jaya Travels was born from a passion for discovery and a commitment to excellence. We believe that travel is not just about seeing new places, but about feeling them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
           <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
             <Image src="/images/santorini.png" alt="Our Story" fill className="object-cover" />
           </div>
           <div>
             <h2 className="text-3xl font-bold font-serif mb-6">Redefining Luxury</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               We specialize in crafting bespoke itineraries that go beyond the ordinary. From private island escapes to exclusive cultural immersions, our team of expert travel designers works tirelessly to ensure every moment of your journey is perfect.
             </p>
             <p className="text-gray-600 leading-relaxed">
               Our global network of partners allows us to open doors that are otherwise closed, granting you access to the world's most coveted experiences.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
