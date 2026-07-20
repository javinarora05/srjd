import { FaArrowRight } from 'react-icons/fa';

const colors = {
  red: { panel: '#ef2d3b', soft: '#fee2e2', text: '#be123c', powder: '#c2410c' },
  yellow: { panel: '#facc15', soft: '#fef3c7', text: '#4f46e5', powder: '#d7a13d' },
  green: { panel: '#84cc16', soft: '#dcfce7', text: '#166534', powder: '#6b8e23' },
  brown: { panel: '#a78b66', soft: '#ede0cd', text: '#7c3f16', powder: '#8b5a2b' }
};

// Map product names to their image filenames
const productImageMap = {
  'Turmeric Powder': 'haldi.png', // improvise - similar packaging
  'Coriander Powder': 'dhaniya powder.png', // improvise - similar packaging
  'Red Chilli Powder': 'chilli powder.png', // similar red spice powder
  'Kashmiri Mirch': 'Kashmiri Mirch Powder.png',
  'Cumin Powder': 'cumin.png', // improvise - brown spice
  'Jeera Powder': 'jeera.png', // improvise - brown spice
  'Black Pepper Powder': 'Black Pepper.png',
  'White Pepper Powder': 'White Pepper.png',
  'Ginger Powder': 'ginger.png',
  'Kitchen King': 'Kitchen King.png',
  'Chaat Masala': 'chaat_masala.png', // improvise - similar masala
  'Meat Masala': 'Meat Masala.png',
  'Garam Masala': 'Garam Masala.png',
  'Chhole Masala': 'chole.png', // improvise - similar masala
  'Sambar Masala': 'sambar masala.png',
  'Pav Bhaji Masala': 'pav_bhaji.png',
  'Shahi Paneer Masala': 'shahi_paneer.png', 
  'Jaljeera Powder': 'jaljeera.png', 
  'Chicken Masala': 'chicken.png', 
  'Pratha Masala': 'pratha.png', 
  'Black Salt': 'black_salt.png', 
  'Fish Masala Powder': 'fish.png', // improvise - brown masala
  'Biryani Masala Powder': 'biryani.png', // improvise - aromatic masala
  'Tea Masala': 'tea.png', // improvise - aromatic blend
  'Dal Makhani': 'makhani.png', // improvise - all-purpose masala
  'Besan': 'besan.png', 
  'Kasoori Methi': 'Kasoori Methi.png',
  'Pudina Chutney': 'Pudina Chutney.png',
  'Aamchoor Powder': 'Amchoor Powder.png',
  'Elaichi Powder': 'Elaichi Powder.png',
  'Laung Powder': 'laung.png', // improvise - brown specialty
  'Asafoetida Hing': 'Hing.png' // improvise - specialty powder
};

function getProductImage(productName) {
  return productImageMap[productName] || 'Kitchen King.png'; // fallback
}

function ProductPackWithImage({ product }) {
  const imagePath = getProductImage(product.name);
  return (
    <div className="relative grid min-h-64 place-items-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 p-5">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,#fff_0_2px,transparent_3px),radial-gradient(circle_at_70%_35%,#fff_0_1px,transparent_3px)] [background-size:34px_34px]" />
      <img 
        className="relative h-56 w-40 object-contain drop-shadow-2xl" 
        src={`/images/products/${imagePath}`} 
        alt={product.name} 
        loading="lazy"
        onError={(e) => {
          // Fallback if image doesn't exist
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}

function ProductPack({ product }) {
  const theme = colors[product.color] || colors.red;
  const isBesan = product.name === 'Besan';

  return (
    <div className="relative grid min-h-64 place-items-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 p-5">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,#fff_0_2px,transparent_3px),radial-gradient(circle_at_70%_35%,#fff_0_1px,transparent_3px)] [background-size:34px_34px]" />
      <div className={`relative h-56 w-40 drop-shadow-2xl ${isBesan ? 'w-44' : ''}`}>
        <div className="absolute -top-2 left-2 right-2 h-5 bg-yellow-500 [clip-path:polygon(0_0,5%_100%,10%_0,15%_100%,20%_0,25%_100%,30%_0,35%_100%,40%_0,45%_100%,50%_0,55%_100%,60%_0,65%_100%,70%_0,75%_100%,80%_0,85%_100%,90%_0,95%_100%,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 rounded-md border border-gray-200 bg-brand-cream" />
        <div className="absolute inset-y-0 right-0 w-12 rounded-r-md" style={{ background: theme.panel }} />
        <div className="absolute inset-y-0 right-8 w-14 opacity-80" style={{ background: theme.soft, clipPath: 'polygon(35% 0,100% 0,72% 100%,0 100%)' }} />
        <div className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-gray-500 bg-white text-[6px] font-black leading-none text-gray-700">
          AG<br />MARK
        </div>
        <img className="absolute left-1/2 top-5 h-14 w-20 -translate-x-1/2 object-contain" src="/images/logo/srgd-mark.png" alt="SRGD Spices logo" loading="lazy" />
        <span className="absolute right-3 top-16 grid h-5 w-5 place-items-center border-2 border-green-600 bg-white">
          <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
        </span>
        <div className="absolute left-4 right-4 top-24 text-center">
          <h3 className={`font-display font-extrabold leading-none ${isBesan ? 'text-4xl' : 'text-2xl'}`} style={{ color: theme.text }}>
            {product.name}
          </h3>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-gray-500">SRGD AGMARK Masale</p>
        </div>
        <div className="absolute bottom-10 left-5 right-5">
          <div className="mx-auto h-12 w-24 rounded-[50%] border-4 border-white shadow-inner" style={{ background: theme.powder }} />
          <div className="mx-auto -mt-3 h-7 w-28 rounded-[50%] bg-amber-300/80" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-sm bg-white/80 py-1 text-center text-[8px] font-black text-red-900">
          ISO 9001:2015 CERTIFIED
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  return (
    <article className="group grid h-full overflow-hidden rounded-lg border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <ProductPackWithImage product={product} />
      <div className="grid gap-4 p-5">
        <p className="text-sm leading-7 text-gray-600">{product.description}</p>
        <p className="text-sm"><span className="font-semibold text-brand-ink">Pack sizes:</span> {product.sizes.join(', ')}</p>
        <a className="inline-flex items-center gap-2 text-sm font-bold text-brand-red" href={`/contact?product=${encodeURIComponent(product.name)}`}>
          Inquiry <FaArrowRight className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
