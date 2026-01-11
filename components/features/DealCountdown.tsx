"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DealCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    // In a real app, this would come from an API or config
    // For now, we'll set it to 5 days from the first visit (stored in localStorage) 
    // or use a fixed date if provided
    
    const calculateTimeLeft = () => {
      // Fixed date for the sale end (e.g., 5 days from now)
      // You can adjust this date to be dynamic or fixed
      const saleEndDate = new Date();
      saleEndDate.setDate(saleEndDate.getDate() + 5); // Default 5 days from now if not stored
      
      let targetDate = localStorage.getItem('saleTargetDate');
      
      if (!targetDate) {
        targetDate = saleEndDate.toISOString();
        localStorage.setItem('saleTargetDate', targetDate);
      }

      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      // If timer ends, reset it for demo purposes or show 0
      // For this demo, let's reset it to 5 days again to keep the UI active
      const newTarget = new Date();
      newTarget.setDate(newTarget.getDate() + 5);
      localStorage.setItem('saleTargetDate', newTarget.toISOString());
      
      return {
        days: 5,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -ml-16 -mb-16" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl md:text-3xl font-bold">Up to INR 24,800 OFF</h3>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">on selected trips</span>
          <motion.span 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase shadow-lg shadow-orange-500/20"
          >
            Republic Day Sale!
          </motion.span>
        </div>
        <p className="text-gray-400 text-sm mb-6">Connect with our destination experts to get exciting discounts</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-600 to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">Know more about the Deal</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-end">
        <p className="text-sm font-medium mb-3">Hurry - up Sale ends in!</p>
        <div className="flex gap-3">
          <TimeBox value={timeLeft.days} label="DAYS" />
          <span className="text-2xl font-bold mt-2">:</span>
          <TimeBox value={timeLeft.hours} label="HOURS" />
          <span className="text-2xl font-bold mt-2">:</span>
          <TimeBox value={timeLeft.minutes} label="MINUTES" />
          <span className="text-2xl font-bold mt-2">:</span>
          <TimeBox value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-gray-800 rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-2 shadow-inner border border-gray-700">
        <span className="text-3xl font-mono font-bold text-white">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[10px] font-bold text-gray-500 tracking-wider">{label}</span>
    </div>
  );
}
