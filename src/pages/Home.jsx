import { Link } from 'react-router-dom';
import { FaAward, FaBoxes, FaHandshake, FaLeaf, FaMedal, FaSeedling, FaStore, FaTruck } from 'react-icons/fa';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { Reveal } from '../components/Motion.jsx';
import { company } from '../data/company.js';
import { featuredProducts, products } from '../data/products.js';

const choose = [
  [FaAward, 'Since 1964'],
  [FaMedal, 'AGMARK Quality'],
  [FaSeedling, 'Premium Ingredients'],
  [FaLeaf, 'Authentic Indian Taste'],
  [FaBoxes, 'Hygienic Packaging'],
  [FaHandshake, 'Trusted Across Punjab']
];

const categoryCards = [
  ['Powder Spices', 'Haldi, chilli, coriander, cumin and daily kitchen essentials.'],
  ['Blended Masalas', 'Balanced Punjabi and Indian masala blends for full flavor.'],
  ['Besan', 'Premium gram flour for homes, snacks, sweets and food businesses.'],
  ['Premium Range', 'Special recipes and selected products packed for freshness.']
];

export default function Home() {
  const featured = products.filter((product) => featuredProducts.includes(product.name));

  return (
    <>
      <SEO />
      <main>
        <section className="relative overflow-hidden bg-brand-ink text-white">
          <img className="absolute inset-0 h-full w-full object-cover opacity-90" src="/images/banners/hero-main.jpeg" alt="SRGD Spices AGMARK Masale hero banner" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/70 to-brand-ink/10" />
          <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-brand-amber">{company.tagline}</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">AGMARK Masale. Authentic Taste. Since 1964.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">Bringing the rich flavors of Punjab to every kitchen with ISO-certified packing and trusted SRGD quality.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link className="rounded-full bg-brand-red px-6 py-3 font-bold text-white shadow-lg shadow-red-950/25" to="/products">Explore Products</Link>
                <Link className="rounded-full border border-white/40 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white hover:text-brand-ink" to="/contact">Contact Us</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img className="aspect-[4/3] w-full rounded-lg object-cover shadow-premium" src="/images/banners/srgd-packaging-lineup.svg" alt="SRGD masala packs with Besan and masala boxes" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">About SRGD</p>
              <h2 className="mt-3 font-display text-4xl font-bold">AGMARK Trust Since 1964</h2>
              <p className="mt-5 leading-8 text-gray-600">SRGD Spices has been serving households, retailers, and food businesses with AGMARK masale, premium spices, besan and specialty products since 1964. Rooted in Amritsar, our blends honor traditional recipes while staying focused on freshness, purity, and dependable packing.</p>
              <p className="mt-4 rounded-lg bg-white p-4 text-sm font-semibold text-brand-green shadow-sm">FSSAI Lic. No. {company.fssai} • {company.certification}</p>
              <Link className="mt-7 inline-flex rounded-full bg-brand-green px-6 py-3 font-bold text-white" to="/about">Our Story</Link>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-white">
          <SectionHeader eyebrow="Why Choose SRGD" title="Quality You Can Taste in Every Dish" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {choose.map(([Icon, title], index) => (
              <Reveal delay={index * 0.04} key={title} className="rounded-lg border border-red-100 bg-brand-cream p-6">
                <Icon className="text-3xl text-brand-red" />
                <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad">
          <SectionHeader eyebrow="Categories" title="Everyday Staples and Premium Masalas" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-4">
            {categoryCards.map(([title, text]) => (
              <Link to="/products" key={title} className="rounded-lg border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <FaStore className="text-3xl text-brand-amber" />
                <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-pad bg-white">
          <SectionHeader eyebrow="Featured Products" title="Freshly Packed Favorites" />
          <div className="mx-auto mt-12 max-w-7xl">
            <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }} spaceBetween={20} breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
              {featured.map((product) => (
                <SwiperSlide key={product.name} className="h-auto pb-12">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Manufacturing Excellence" title="1964 to Today" text="A steady growth story built on traditional recipes, careful sourcing, consistent grinding, AGMARK quality, and freshly packed products." />
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {['1964', 'AGMARK Masale', 'ISO 9001:2015', 'Today'].map((item) => (
                <Reveal key={item} className="rounded-lg bg-brand-red p-6 text-white">
                  <FaTruck className="text-3xl text-brand-amber" />
                  <h3 className="mt-5 font-display text-2xl font-bold">{item}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <SectionHeader eyebrow="Testimonials" title="Trusted by Kitchens and Retailers" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
            {['The masalas have a clean aroma and reliable flavor in daily cooking.', 'SRGD Besan is consistent for snacks and sweets, batch after batch.', 'A trusted AGMARK Amritsar brand with products customers ask for again.'].map((quote, index) => (
              <Reveal key={quote} delay={index * 0.08} className="rounded-lg border border-red-100 bg-brand-cream p-6">
                <p className="leading-8 text-gray-700">"{quote}"</p>
                <p className="mt-5 font-bold text-brand-red">SRGD Customer</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-brand-green text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-brand-amber">Distributor Network</p>
              <h2 className="mt-3 font-display text-4xl font-bold">Become a Distributor</h2>
            </div>
            <Link className="rounded-full bg-white px-7 py-4 font-bold text-brand-green" to="/distributor">Contact Us</Link>
          </div>
        </section>
      </main>
    </>
  );
}
