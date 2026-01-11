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
      
      <div className="mb-8">
        <label className="text-sm font-bold text-gray-900 block mb-3">Stay Category</label>
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-gray-200 bg-white text-gray-600 px-3 py-3 rounded-xl font-medium flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all text-center">
            <span className="text-sm">Deluxe</span>
          </div>
          <div className="border-2 border-orange-500 bg-orange-50 text-orange-700 px-3 py-3 rounded-xl font-medium flex flex-col items-center justify-center cursor-pointer relative text-center">
            <span className="text-sm font-bold">Super Deluxe</span>
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1">
              <i className="pi pi-check text-xs" />
            </div>
          </div>
        </div>
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
