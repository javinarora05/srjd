import { FaWhatsapp } from 'react-icons/fa';
import { company } from '../data/company.js';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your products. Please tell me more about SRGD Spices.";
    window.open(
      `https://wa.me/${company.customerCare.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 active:scale-95 group font-semibold text-sm"
      title="Contact us on WhatsApp"
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
}
