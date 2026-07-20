import { Helmet } from 'react-helmet-async';

const baseTitle = 'SRGD Spices | AGMARK Indian Spices & Masalas Since 1964';
const description = 'Buy AGMARK quality Indian spices, masalas, besan and specialty products from SRGD Spices, trusted since 1964 in Amritsar.';
const keywords = 'SRGD Spices, AGMARK Masale, Indian spices, Masala manufacturer, Amritsar spices, Besan manufacturer, Kitchen King Masala, Meat Masala, Punjab spices, FSSAI spices';

export default function SEO({ title = baseTitle, pageDescription = description, path = '/' }) {
  const url = `https://srgdspices.com${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://srgdspices.com/images/banners/srgd-packaging-lineup.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://srgdspices.com/images/banners/srgd-packaging-lineup.svg" />
    </Helmet>
  );
}
