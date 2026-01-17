"use client";

import { useState } from "react";
import Itinerary from "./Itinerary";

interface ItineraryItem {
  day?: number;
  title: string;
  activity: string;
  description: string;
  image?: string;
  stay?: string;
  transfer?: string;
}

interface ItineraryTabsProps {
  items: ItineraryItem[];
}

export default function ItineraryTabs({ items }: ItineraryTabsProps) {
  const [activeTab, setActiveTab] = useState("Itinerary");

  const tabs = [
    { id: "Itinerary", icon: null },
    { id: "Summarised View", icon: null },
    { id: "Activities", icon: "pi pi-compass" },
    { id: "Stay", icon: "pi pi-home" },
    { id: "Transfers", icon: "pi pi-car" },
  ];

  return (
    <div>
      {/* Tabs Header */}
      <div className="sticky top-[85px] z-40 bg-white flex gap-3 mb-8 border-b border-gray-100 pb-4 overflow-x-auto scrollbar-hide snap-x -mx-6 px-6 md:mx-0 md:px-0 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0 snap-start ${
              activeTab === tab.id
                ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab.icon && <i className={tab.icon} />}
            {tab.id}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl">
        {activeTab === "Itinerary" && (
          <div className="space-y-8">
            <Itinerary items={items} />
          </div>
        )}

        {activeTab === "Summarised View" && (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center text-blue-600 shrink-0">
                  <span className="text-xs font-bold uppercase">Day</span>
                  <span className="text-2xl font-bold">{item.day}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Activities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">Day {item.day}</span>
                  <h4 className="font-bold text-gray-900">{item.activity}</h4>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Stay" && (
          <div className="space-y-4">
            {items.map((item, index) => (
              item.stay && item.stay !== "N/A" && (
                <div key={index} className="flex gap-4 items-center p-4 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <i className="pi pi-building text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Day {item.day} - {item.title}</p>
                    <h4 className="font-bold text-gray-900">{item.stay}</h4>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {activeTab === "Transfers" && (
          <div className="space-y-4">
            {items.map((item, index) => (
              item.transfer && (
                <div key={index} className="flex gap-4 items-center p-4 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <i className="pi pi-car text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Day {item.day}</p>
                    <h4 className="font-bold text-gray-900">{item.transfer}</h4>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
