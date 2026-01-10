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
    <div className="relative py-8">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {route.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-default">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 {index + 1}
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-1">{item.city}</h3>
               <p className="text-gray-500 font-medium">{item.days} {item.days === 1 ? 'Day' : 'Days'}</p>
            </div>
            
            {/* Connector Dot for Mobile */}
            <div className="md:hidden absolute left-1/2 bottom-[-32px] w-1 h-8 bg-gray-200 -translate-x-1/2 last:hidden" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
