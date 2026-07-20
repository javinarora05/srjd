import { FaChartLine, FaHandshake, FaStore, FaTags } from 'react-icons/fa';
import InquiryForm from '../components/InquiryForm.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { Reveal } from '../components/Motion.jsx';
import { company } from '../data/company.js';

const benefits = [
  [FaHandshake, 'Trusted Brand'],
  [FaChartLine, 'High Demand Products'],
  [FaTags, 'Attractive Margins'],
  [FaStore, 'Wholesale & Retail Support']
];

export default function Distributor() {
  return (
    <>
      <SEO title="Partner With SRGD Spices | Distributor Inquiry" path="/distributor" />
      <main>
        <section className="section-pad bg-brand-red text-white">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-brand-amber">Distributor Program</p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold">Partner With SRGD Spices</h1>
            <p className="mt-6 max-w-2xl leading-8 text-white/80">Bring a trusted Amritsar AGMARK spice brand to your retail, wholesale, or distribution network.</p>
            <p className="mt-3 max-w-2xl font-semibold text-white/80">Deals in: {company.tradeLine}</p>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-white/75">Packing available: {company.packing.join(', ')} etc.</p>
          </div>
        </section>
        <section className="section-pad">
          <SectionHeader eyebrow="Benefits" title="Built for Growing Trade Partners" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-4">
            {benefits.map(([Icon, title]) => (
              <Reveal key={title} className="rounded-lg border border-red-100 bg-white p-6">
                <Icon className="text-3xl text-brand-green" />
                <h2 className="mt-5 font-display text-2xl font-bold">{title}</h2>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader align="left" eyebrow="Inquiry" title="Distributor Inquiry Form" text="Submit your details and the SRGD team will connect with you." />
            <InquiryForm type="Distributor Inquiry" />
          </div>
        </section>
      </main>
    </>
  );
}
