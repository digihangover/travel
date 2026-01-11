"use client";

import { motion } from "framer-motion";

interface RouteItem {
  city: string;
  days: number;
}

interface RouteTimelineProps {
  route: RouteItem[];
}

export default function RouteTimeline({ route }: RouteTimelineProps) {
  return (
    <div className="relative py-6 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Snake Line SVG */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <path 
              d="M 50 50 L 750 50 C 800 50 800 150 750 150 L 50 150 C 0 150 0 250 50 250 L 750 250"
              fill="none" 
              stroke="#E5E7EB" 
              strokeWidth="4" 
              strokeDasharray="10 5"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-8 relative z-10">
          {route.map((item, index) => {
            // Determine row for snake layout (4 items per row)
            const row = Math.floor(index / 4);
            const isEvenRow = row % 2 === 0;
            // Reverse order for odd rows to create snake effect
            const colIndex = isEvenRow ? index % 4 : 3 - (index % 4);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center ${
                  // Adjust positioning based on row
                  row > 0 ? 'mt-8' : ''
                }`}
                style={{
                  // Manually position for desktop snake layout if needed, 
                  // but grid with order manipulation is easier
                  order: isEvenRow ? index : (row * 4) + (3 - (index % 4))
                }}
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-lg z-10 mb-4 relative group cursor-pointer transition-transform hover:scale-110">
                  <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
                  <div className="absolute inset-0 rounded-full border-4 border-orange-200 opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                </div>

                {/* Content Card */}
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center w-full max-w-[200px] hover:shadow-xl transition-shadow">
                   <h3 className="font-bold text-gray-900 text-lg mb-1">{item.city}</h3>
                   <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{item.days} {item.days === 1 ? 'Day' : 'Days'}</p>
                </div>

                {/* Mobile Connector */}
                <div className="md:hidden absolute top-16 bottom-[-64px] w-1 bg-gray-200 -z-10 last:hidden" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
