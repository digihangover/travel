import { constructMetadata } from "@/components/seo/Meta";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with our travel experts.",
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 bg-blue-600 text-white">
              <h1 className="text-4xl font-bold font-serif mb-6">Get in Touch</h1>
              <p className="text-blue-100 mb-12">
                Ready to start planning your next adventure? Our team is here to help you craft the perfect itinerary.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <i className="pi pi-map-marker text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-blue-100 text-sm">123 Luxury Lane, Suite 100<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="pi pi-envelope text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-blue-100 text-sm">concierge@jayatravels.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="pi pi-phone text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-blue-100 text-sm">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Tell us about your dream trip..." />
                </div>
                <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
