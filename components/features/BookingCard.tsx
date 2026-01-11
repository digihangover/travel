"use client";

interface BookingCardProps {
  price: string;
  duration: string;
  availableDates?: string;
  groupSize?: string;
  onEnquire?: () => void;
  onWhatsApp?: () => void;
}

export default function BookingCard({ 
  price, 
  duration, 
  availableDates = "May, June, July 2026", 
  groupSize = "Max 12 People",
  onEnquire,
  onWhatsApp
}: BookingCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-6">
        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting From</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 font-medium">{duration}</p>
      </div>
      


      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mb-3 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1">
        Book This Adventure
      </button>
      <div className="flex gap-3">
        <button 
          onClick={onEnquire}
          className="flex-1 border border-gray-200 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors"
        >
          <i className="pi pi-envelope" /> Enquire
        </button>
        <button 
          onClick={onWhatsApp}
          className="flex-1 border border-gray-200 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 flex items-center justify-center gap-2 text-green-600 transition-colors"
        >
          <i className="pi pi-whatsapp text-lg" /> WhatsApp
        </button>
      </div>
    </div>
  );
}
