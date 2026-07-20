import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import InquiryForm from '../components/InquiryForm.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/company.js';

export default function Contact() {
  return (
    <>
      <SEO title="Contact SRGD Spices | M/s Sant Ram Gopal Dass Amritsar" path="/contact" />
      <main>
        <section className="section-pad">
          <SectionHeader eyebrow="Contact" title="Talk to SRGD Spices" text="For product, trade, distribution, and business inquiries." />
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid content-start gap-5">
              <div className="rounded-lg border border-red-100 bg-white p-6 shadow-sm">
                <h2 className="font-display text-3xl font-bold">{company.legalName}</h2>
                <div className="mt-6 grid gap-4 text-gray-700">
                  <p className="inline-flex items-start gap-3"><FaMapMarkerAlt className="mt-1 text-brand-red" /> {company.address}</p>
                  <p className="inline-flex items-start gap-3"><FaMapMarkerAlt className="mt-1 text-brand-red" /> {company.marketAddress}</p>
                  <a className="inline-flex items-center gap-3 hover:text-brand-red" href={`tel:${company.customerCare}`}><FaPhoneAlt className="text-brand-red" /> Customer Care: {company.customerCare}</a>
                  <a className="inline-flex items-center gap-3 hover:text-brand-red" href={`tel:${company.director.phone}`}><FaPhoneAlt className="text-brand-red" /> Director {company.director.name}: {company.director.phone}</a>
                  <a className="inline-flex items-center gap-3 hover:text-brand-red" href={`tel:${company.chairman.phone}`}><FaPhoneAlt className="text-brand-red" /> Chairman {company.chairman.name}: {company.chairman.phone}</a>
                  <a className="inline-flex items-center gap-3 hover:text-brand-red" href={`tel:${company.tradePhone}`}><FaPhoneAlt className="text-brand-red" /> Trade Line: +91 {company.tradePhone}</a>
                  <a className="inline-flex items-center gap-3 hover:text-brand-red" href={`mailto:${company.email}`}><FaEnvelope className="text-brand-red" /> {company.email}</a>
                  <p className="font-semibold text-brand-green">FSSAI Lic. No. {company.fssai} • {company.certification}</p>
                  <p className="font-semibold text-brand-ink">Deals in: {company.tradeLine}</p>
                  <p className="text-sm">Packing available: {company.packing.join(', ')} etc.</p>
                </div>
              </div>
              <iframe
                className="h-80 w-full rounded-lg border-0 shadow-sm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Kanak%20Mandi%20Near%20Kali%20Mata%20Mandir%20Amritsar&output=embed"
                title="SRGD Spices location map"
              />
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
    </>
  );
}
