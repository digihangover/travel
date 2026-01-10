"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const alliances = [
  { name: "Dubai", logo: "/images/dubai-logo.png", placeholder: "DUBAI" },
  { name: "Singapore", logo: "/images/singapore-logo.png", placeholder: "Singapore" },
  { name: "Sweden", logo: "/images/sweden-logo.png", placeholder: "Visit Sweden" },
  { name: "Japan", logo: "/images/japan-logo.png", placeholder: "Japan. Endless Discovery" },
  { name: "France", logo: "/images/france-logo.png", placeholder: "France" },
  { name: "Abu Dhabi", logo: "/images/abudhabi-logo.png", placeholder: "Abu Dhabi" },
];

export default function TourismAlliances() {
  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-2xl font-bold font-serif text-gray-900">Tourism Board Alliances</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap py-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...alliances, ...alliances, ...alliances].map((alliance, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
              {/* Since we don't have actual logos, we'll use styled text/placeholders */}
              <div className="h-16 flex items-center justify-center px-4">
                 <span className="text-2xl font-bold text-gray-800 font-serif">{alliance.placeholder}</span>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fade Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
