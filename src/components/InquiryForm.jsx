import { company } from '../data/company.js';
import { FaWhatsapp } from 'react-icons/fa';

export default function InquiryForm({ type = 'Contact Inquiry' }) {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in your products. I'm reaching out regarding: ${type}`;
    window.open(
      `https://wa.me/${company.customerCare.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <form className="grid gap-4 rounded-lg border border-red-100 bg-white p-5 shadow-sm" action={`https://formsubmit.co/${company.email}`} method="POST">
      <input type="hidden" name="_subject" value={`SRGD Spices - ${type}`} />
      <input type="hidden" name="_template" value="table" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">Name<input required name="name" placeholder="Your name" /></label>
        <label className="field">Phone<input required name="phone" placeholder="Phone number" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">Email<input type="email" name="email" placeholder="Email address" /></label>
        <label className="field">City<input name="city" placeholder="City" /></label>
      </div>
      {type.includes('Distributor') && <label className="field">Business Type<input name="business_type" placeholder="Retailer, wholesaler, distributor" /></label>}
      <label className="field">Message<textarea required name="message" rows="5" placeholder="Tell us what you need" /></label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <button className="flex-1 rounded-lg bg-brand-red px-4 py-2.5 font-semibold text-white shadow-md shadow-red-900/15 transition duration-200 hover:bg-red-800 active:scale-95" type="submit">
          Send Inquiry
        </button>
        <button 
          className="flex items-center justify-center gap-2 flex-1 rounded-lg border-2 border-green-500 bg-white px-4 py-2.5 font-semibold text-green-600 transition duration-200 hover:bg-green-50 active:scale-95"
          type="button"
          onClick={handleWhatsApp}
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </button>
      </div>
    </form>
  );
}
