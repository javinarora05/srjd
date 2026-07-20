import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import Logo from '../components/Logo.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { company } from '../data/company.js';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Distributor', '/distributor'],
  ['Contact', '/contact']
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream font-body text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-red-100 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => `nav-link ${isActive ? 'text-brand-red' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <a className="hidden rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/15 transition hover:bg-red-800 lg:inline-flex" href="/contact">
            Inquiry Now
          </a>
          <button className="icon-button lg:hidden" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-red-100 px-4 pb-4 lg:hidden">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 font-semibold text-brand-ink">
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <Outlet />
      <WhatsAppButton />
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <Logo light />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              AGMARK masale, spices, besan and specialty products from {company.legalName}, Amritsar.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {links.map(([label, href]) => (
                <NavLink key={href} to={href} className="hover:text-white">
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <span className="inline-flex items-start gap-3"><FaMapMarkerAlt className="mt-1" /> {company.marketAddress}</span>
              <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${company.customerCare}`}><FaPhoneAlt /> {company.customerCare}</a>
              <a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${company.email}`}><FaEnvelope /> {company.email}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
          Copyright 2026 SRGD Spices. Static website ready for Hostinger shared hosting.
        </div>
      </footer>
    </div>
  );
}
