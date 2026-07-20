import { FaBullseye, FaEye, FaGem, FaLeaf } from 'react-icons/fa';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { Reveal } from '../components/Motion.jsx';
import { company } from '../data/company.js';
import { timeline } from '../data/timeline.js';

export default function About() {
  return (
    <>
      <SEO title="About SRGD Spices | Amritsar AGMARK Spice Manufacturer Since 1964" path="/about" />
      <main>
        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h1 className="mt-3 font-display text-5xl font-bold">Traditional Punjabi AGMARK Masale Legacy</h1>
              <p className="mt-6 leading-8 text-gray-600">Founded in 1964 in Amritsar, {company.legalName} has built SRGD Spices around authentic taste, AGMARK quality, premium products, and trusted recipes passed through generations.</p>
              <p className="mt-5 rounded-lg bg-brand-cream p-4 text-sm font-bold text-brand-red">Manufactured & marketed by {company.legalName}. FSSAI Lic. No. {company.fssai}.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <img className="aspect-[4/3] w-full rounded-lg object-cover shadow-premium" src="/images/banners/srgd-packaging-lineup.svg" alt="SRGD Spices packaging range" loading="lazy" />
            </Reveal>
          </div>
        </section>
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              [FaEye, 'Vision', 'Deliver authentic Indian flavors with consistency and care.'],
              [FaBullseye, 'Mission', 'Maintain quality and customer trust through pure ingredients, AGMARK standards, and hygienic packing.'],
              [FaGem, 'Values', 'Quality, consistency, purity, and tradition guide every pack.']
            ].map(([Icon, title, text]) => (
              <Reveal className="rounded-lg border border-red-100 bg-white p-6" key={title}>
                <Icon className="text-3xl text-brand-red" />
                <h2 className="mt-5 font-display text-3xl font-bold">{title}</h2>
                <p className="mt-4 leading-7 text-gray-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section-pad bg-white">
          <SectionHeader eyebrow="Company Timeline" title="A Legacy Built One Pack at a Time" />
          <div className="mx-auto mt-12 max-w-4xl">
            {timeline.map(([year, text], index) => (
              <Reveal key={year} className="relative border-l-2 border-brand-amber pl-8 pb-9 last:pb-0">
                <span className="absolute -left-[11px] top-0 grid h-5 w-5 place-items-center rounded-full bg-brand-red ring-4 ring-white" />
                <p className="font-display text-3xl font-bold text-brand-red">{year}</p>
                <p className="mt-2 leading-7 text-gray-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section-pad bg-brand-red text-white">
          <div className="mx-auto max-w-7xl text-center">
            <FaLeaf className="mx-auto text-4xl text-brand-amber" />
            <h2 className="mt-5 font-display text-4xl font-bold">Made in Amritsar. AGMARK Quality Since 1964.</h2>
          </div>
        </section>
      </main>
    </>
  );
}
