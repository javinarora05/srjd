import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { Reveal } from '../components/Motion.jsx';
import { company } from '../data/company.js';
import { categories, products } from '../data/products.js';

export default function Products() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? products : products.filter((product) => product.category === active), [active]);

  return (
    <>
      <SEO title="SRGD Spices Products | Ground Spices, Masalas, Besan" path="/products" />
      <main className="section-pad">
        <SectionHeader eyebrow="Products" title="AGMARK Spices, Masalas and Besan" text={`Explore SRGD's freshly packed range for homes, retailers, distributors, and food businesses. Packing available: ${company.packing.join(', ')} etc.`} />
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button key={category} className={`rounded-full px-5 py-3 text-sm font-bold transition ${active === category ? 'bg-brand-red text-white' : 'bg-white text-brand-ink shadow-sm'}`} onClick={() => setActive(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, index) => (
            <Reveal key={product.name} delay={Math.min(index * 0.03, 0.2)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
