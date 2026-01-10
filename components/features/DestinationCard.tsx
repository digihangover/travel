import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface DestinationCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  rating?: number;
  category?: string;
  tag?: string;
  linkPrefix?: string;
}

const DestinationCard = ({ 
  id, 
  title, 
  location, 
  price, 
  image, 
  rating = 4.8,
  linkPrefix = "/destinations"
}: DestinationCardProps) => {
  return (
    <Link href={`${linkPrefix}/${id}`} className="group block h-full">
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute top-4 left-4">
           {rating && (
             <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white text-xs font-medium border border-white/10">
               <i className="pi pi-star-fill text-yellow-400 text-[10px]" />
               <span>{rating}</span>
             </div>
           )}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium text-blue-300 mb-1 uppercase tracking-wider">{location}</p>
          <h3 className="text-2xl font-bold font-serif mb-2">{title}</h3>
          <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <div>
              <span className="text-xs text-gray-300 block">Starting from</span>
              <span className="font-semibold text-lg">{price}</span>
            </div>
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
              Explore
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
