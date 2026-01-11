"use client";

import { motion } from "framer-motion";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

const Hero = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            A Season of Extraordinary
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-6 leading-tight">
            Luxury Travel <br /> Reimagined
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Experience the world's most breathtaking destinations with unparalleled comfort and curated local expertise.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl md:rounded-full p-4 md:p-3 shadow-2xl max-w-4xl w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center"
        >
          <div className="flex-1 w-full px-2 md:px-4 py-2 border-b border-gray-100 md:border-b-0 md:border-r">
            <label className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Destination</label>
            <input 
              type="text" 
              placeholder="Where to?" 
              className="w-full outline-none text-gray-800 font-medium placeholder-gray-400 bg-transparent"
            />
          </div>
          
          <div className="flex-1 w-full px-2 md:px-4 py-2 border-b border-gray-100 md:border-b-0 md:border-r">
             <label className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Date</label>
             <Calendar 
                value={date} 
                onChange={(e) => setDate(e.value as Date)} 
                placeholder="Add dates" 
                className="w-full p-inputtext-sm border-none shadow-none p-0 text-gray-800 font-medium"
                inputClassName="border-none shadow-none p-0 placeholder-gray-400 font-medium text-base"
             />
          </div>

          <div className="flex-1 w-full px-2 md:px-4 py-2">
            <label className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Travelers</label>
            <input 
              type="number" 
              placeholder="Add guests" 
              className="w-full outline-none text-gray-800 font-medium placeholder-gray-400 bg-transparent"
              min={1}
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-full px-8 py-4 font-medium transition-all shadow-lg hover:shadow-blue-500/30 w-full md:w-auto">
            Search
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
