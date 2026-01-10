"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroCarouselProps {
  images: string[];
  title: string;
  location: string;
  rating: number;
}

export default function HeroCarousel({ images, title, location, rating }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[60vh] w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <motion.div
          key={title} // Re-animate text when title changes (if package specific)
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="uppercase tracking-widest text-sm font-medium mb-4 block">Destinations / {location}</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">{title}</h1>
          <div className="flex items-center justify-center gap-2 text-yellow-400 text-xl">
             <i className="pi pi-star-fill" />
             <span className="text-white font-medium">{rating} (223 Reviews)</span>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <i className="pi pi-chevron-left text-2xl" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <i className="pi pi-chevron-right text-2xl" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
