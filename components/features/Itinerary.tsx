"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ItineraryItem {
  day?: number;
  title: string;
  activity: string;
  description: string;
  image?: string;
}

interface ItineraryProps {
  items: ItineraryItem[];
}

export default function Itinerary({ items }: ItineraryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]); // Open first item by default

  const visibleItems = isExpanded ? items : items.slice(0, 3);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (openItems.length === items.length) {
      setOpenItems([]);
    } else {
      setOpenItems(items.map((_, index) => index));
    }
  };

  const allExpanded = openItems.length === items.length;

  return (
    <div className="space-y-8 relative">
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleAll}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          {allExpanded ? (
            <>
              <i className="pi pi-minus-circle" /> Collapse All
            </>
          ) : (
            <>
              <i className="pi pi-plus-circle" /> Expand All
            </>
          )}
        </button>
      </div>
      <div className="relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-gray-100">
      {items && items.length > 0 ? (
        <>
          {visibleItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index} id={`itinerary-item-${index}`} className="relative pl-12">
                {/* Day Marker */}
                <div 
                  className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm transition-colors ${
                    isOpen ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                {/* Header (Clickable) */}
                <div 
                  className="cursor-pointer group"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">{item.activity}</span>
                      <i className={`pi pi-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </div>

                {/* Content (Collapsible) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      {item.image && (
                        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {!isExpanded && items.length > 3 && (
            <div className="pl-12 pt-4">
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => {
                    const nextItem = document.getElementById('itinerary-item-3');
                    if (nextItem) {
                      nextItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 100);
                }}
                className="w-full py-3 border border-gray-200 rounded-full text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              >
                View Full Itinerary ({items.length - 3} more days)
              </button>
            </div>
          )}
          
          {isExpanded && (
             <div className="pl-12 pt-4">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Show Less
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 pl-12">Detailed itinerary available upon request.</p>
      )}
      </div>
    </div>
  );
}
