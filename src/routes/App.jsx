import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';

const About = lazy(() => import('../pages/About.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Distributor = lazy(() => import('../pages/Distributor.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Products = lazy(() => import('../pages/Products.jsx'));

function PageLoader() {
  return (
    <div className="section-pad min-h-[50vh] text-center font-bold text-brand-red">
      <img className="mx-auto mb-4 h-20 w-auto object-contain" src="/images/logo/srgd-mark.png" alt="SRGD Spices logo" />
      Loading SRGD Spices...
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="distributor" element={<Distributor />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
