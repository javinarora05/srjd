import { company } from '../data/company.js';

export default function Logo({ light = false }) {
  return (
    <a href="/" className="flex min-w-0 items-center gap-3" aria-label="SRGD Spices home">
      <img className="h-14 w-auto shrink-0" src="/images/logo/srgd-mark.png" alt="SRGD Spices brand logo" />
      <span className="min-w-0">
        <span className={`block font-display text-2xl font-bold leading-none ${light ? 'text-white' : 'text-brand-red'}`}>{company.name}</span>
        <span className={`block text-xs font-semibold uppercase tracking-[0.16em] ${light ? 'text-white/60' : 'text-brand-green'}`}>Since {company.established}</span>
      </span>
    </a>
  );
}
