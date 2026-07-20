export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-gray-600">{text}</p>}
    </div>
  );
}
