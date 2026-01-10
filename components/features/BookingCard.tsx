"use client";

interface BookingCardProps {
  price: string;
  duration: string;
  availableDates?: string;
  groupSize?: string;
}

export default function BookingCard({ price, duration, availableDates = "May, June, July 2026", groupSize = "Max 12 People" }: BookingCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-6">
        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting From</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 font-medium">{duration}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-700 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
             <i className="pi pi-calendar" />
          </div>
          <div>
            <span className="block text-xs text-gray-500 font-bold">Available Dates</span>
            <span className="font-medium">{availableDates}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-700 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
             <i className="pi pi-users" />
          </div>
          <div>
             <span className="block text-xs text-gray-500 font-bold">Group Size</span>
             <span className="font-medium">{groupSize}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-sm font-bold text-gray-900 block mb-3">Stay Category</label>
        <div className="border border-orange-500 bg-orange-50 text-orange-700 px-4 py-3 rounded-xl font-medium flex justify-between items-center cursor-pointer hover:bg-orange-100 transition-colors">
          <span>Super Deluxe</span>
          <i className="pi pi-check-circle text-xl" />
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mb-3 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1">
        Book This Adventure
      </button>
      <div className="flex gap-3">
        <button className="flex-1 border border-gray-200 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
          <i className="pi pi-envelope" /> Enquire
        </button>
        <button className="flex-1 border border-gray-200 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 flex items-center justify-center gap-2 text-green-600 transition-colors">
          <i className="pi pi-whatsapp text-lg" /> WhatsApp
        </button>
      </div>
    </div>
  );
}
