"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectDialog({ isOpen, onClose }: ConnectDialogProps) {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic
    console.log("Connect requested for:", phone);
    alert("Thanks! An expert will call you shortly.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors z-10"
            >
              <i className="pi pi-times" />
            </button>

            <div className="p-8 pt-10 text-center">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Connect with a Travel Expert</h2>
              <p className="text-gray-500 text-sm mb-8">Verify Your Phone Number to Continue</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-24 px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium flex items-center justify-between cursor-pointer">
                    <span>+91</span>
                    <i className="pi pi-chevron-down text-xs" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Your Phone*" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                >
                  Connect with an Expert
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] bg-gray-200 w-12" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Trusted by Travellers</span>
                <div className="h-[1px] bg-gray-200 w-12" />
              </div>
              
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i className="pi pi-tripadvisor" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.5/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Trip Advisor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className="pi pi-google" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.4/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <i className="pi pi-star-fill text-xs" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.3/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Reviews.io</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
