"use client";

import { useState, useEffect } from "react";

export default function DealCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 8,
    minutes: 19,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
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
          <span className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase">Republic Day Sale!</span>
        </div>
        <p className="text-gray-400 text-sm mb-6">Connect with our destination experts to get exciting discounts</p>
        <button className="bg-gradient-to-r from-orange-600 to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all">
          Know more about the Deal
        </button>
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
