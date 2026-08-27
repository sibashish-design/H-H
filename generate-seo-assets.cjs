/**
 * H&H CONCEPTS — PROGRAMMATIC SEO & BACKLINK GENERATOR
 * Generates:
 * 1. 210 Location x Category pSEO Landing Pages under ./locations/
 * 2. sitemap.xml with high-priority URL indexing
 * 3. robots.txt with search engine crawler guidance
 * 4. Schema.org JSON-LD Structured Data
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://hhconcepts.in';

const CITIES = [
  { slug: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', region: 'IN-UT', lat: '30.3165', lng: '78.0322' },
  { slug: 'delhi-ncr', name: 'Delhi NCR', state: 'Delhi', region: 'IN-DL', lat: '28.6139', lng: '77.2090' },
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0760', lng: '72.8777' },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka', region: 'IN-KA', lat: '12.9716', lng: '77.5946' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana', region: 'IN-TG', lat: '17.3850', lng: '78.4867' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra', region: 'IN-MH', lat: '18.5204', lng: '73.8567' },
  { slug: 'chandigarh', name: 'Chandigarh', state: 'Punjab', region: 'IN-CH', lat: '30.7333', lng: '76.7794' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', region: 'IN-RJ', lat: '26.9124', lng: '75.7873' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', region: 'IN-GJ', lat: '23.0225', lng: '72.5714' },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', region: 'IN-WB', lat: '22.5726', lng: '88.3639' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu', region: 'IN-TN', lat: '13.0827', lng: '80.2707' },
  { slug: 'kochi', name: 'Kochi', state: 'Kerala', region: 'IN-KL', lat: '9.9312', lng: '76.2673' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', region: 'IN-UP', lat: '26.8467', lng: '80.9462' },
  { slug: 'gurgaon', name: 'Gurgaon', state: 'Haryana', region: 'IN-HR', lat: '28.4595', lng: '77.0266' },
  { slug: 'noida', name: 'Noida', state: 'Uttar Pradesh', region: 'IN-UP', lat: '28.5355', lng: '77.3910' }
];

const CATEGORIES = [
  {
    slug: 'executive-seating',
    name: 'Executive Seating',
    desc: 'Premium imported & domestic executive chairs for CEO cabins, boardrooms and director suites.',
    img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'ergo-office-chairs',
    name: 'Ergo Office Chairs',
    desc: 'FBI Ergo Series — 24-month warranty ergonomic office chairs with breathable Korean mesh and adjustable lumbar support.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'workstation-chairs',
    name: 'Workstation Chairs',
    desc: 'Everyday ergonomic seating designed for open-plan offices, IT parks and co-working spaces.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'lounge-chairs',
    name: 'Lounge Chairs',
    desc: 'Bespoke single-seater lounge chairs for hotel lobbies, corporate lounges and luxury waiting suites.',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'sofa-series',
    name: 'Sofa Series',
    desc: '1, 2 & 3-seater luxury sofas in top-grain leather and designer fabric for office reception and living rooms.',
    img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'hotel-room-furniture',
    name: 'Hotel Room Furniture',
    desc: 'Fit My Hotel — complete hospitality suite furniture including floating illuminated beds, vanity desks & minibar enclosures.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'dining-chairs',
    name: 'Dining Chairs',
    desc: 'Elegant solid-wood and metal frame dining chairs for restaurants, hotels and luxury dining spaces.',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'cafe-chairs',
    name: 'Café & Bistro Chairs',
    desc: 'Vibrant PP, metal and cushioned café seating for bistros, coffee shops and food courts.',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'cafeteria-series',
    name: 'Cafeteria Series (Modular)',
    desc: 'Design Patent Certified stackable cafeteria chairs & heavy-duty stainless frame dining tables.',
    img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'recliner-series',
    name: 'Recliner Series',
    desc: 'Fine leather electric motor recliners with massage, heating, rocking and swivel mechanisms.',
    img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'tables-and-desks',
    name: 'Executive Tables & Desks',
    desc: 'CEO executive desks, glass-top conference tables, motorized lifting desks & reception counters.',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'high-counter-stools',
    name: 'High Counter Bar Stools',
    desc: 'Bar stools and counter chairs for hotel bars, reception desks, cafés and luxury bistros.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'centre-side-tables',
    name: 'Centre & Side Tables',
    desc: 'Artisan glass and solid wood centre tables, side tables, console tables and lifting desks.',
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  },
  {
    slug: 'office-chair-series',
    name: 'Office Chair Series',
    desc: 'Stylish mid-back & high-back office chairs blending ergonomics with executive aesthetics.',
    img: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=1000&q=80',
    price: 'Price Available on Enquiry'
  }
];

const locationsDir = path.join(__dirname, 'locations');
if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

let generatedUrls = [
  '/',
  '/about.html',
  '/categories.html',
  '/spaces.html',
  '/process.html',
  '/contact.html'
];

let pageCount = 0;

CATEGORIES.forEach(cat => {
  CITIES.forEach(city => {
    const pageSlug = `${cat.slug}-${city.slug}.html`;
    const pagePath = path.join(locationsDir, pageSlug);
    const pageUrl = `/locations/${pageSlug}`;
    generatedUrls.push(pageUrl);

    const title = `${cat.name} in ${city.name} | H&H Concepts Luxury Furniture`;
    const metaDesc = `Looking for ${cat.name} in ${city.name}, ${city.state}? H&H Concepts provides luxury ${cat.name.toLowerCase()} for commercial offices, boutique hotels & luxury homes with 24-month warranty. Sourced & manufactured by FBI Industries.`;
    const canonical = `${DOMAIN}/locations/${pageSlug}`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${DOMAIN}/#organization`,
          "name": "H&H Concepts",
          "url": DOMAIN,
          "logo": `${DOMAIN}/assets/logo-full-white.png`,
          "image": cat.img,
          "description": metaDesc,
          "telephone": "+91-9412056952",
          "email": "hello@hhconcepts.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2357 Mohabbewala Industrial Area",
            "addressLocality": "Dehradun",
            "addressRegion": "Uttarakhand",
            "postalCode": "248001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.lat,
            "longitude": city.lng
          },
          "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedInPlace": {
              "@type": "State",
              "name": city.state
            }
          }
        },
        {
          "@type": "Product",
          "name": `${cat.name} — ${city.name} Collection`,
          "image": [cat.img],
          "description": cat.desc,
          "brand": {
            "@type": "Brand",
            "name": "H&H Concepts"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "price": cat.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "H&H Concepts"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
            { "@type": "ListItem", "position": 2, "name": "Categories", "item": `${DOMAIN}/categories.html` },
            { "@type": "ListItem", "position": 3, "name": `${cat.name} in ${city.name}`, "item": canonical }
          ]
        }
      ]
    };

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${metaDesc}" />
  <meta name="keywords" content="${cat.name} ${city.name}, luxury ${cat.name.toLowerCase()} ${city.name}, office furniture ${city.name}, hotel furniture ${city.name}, H&H Concepts ${city.name}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="geo.region" content="${city.region}" />
  <meta name="geo.placename" content="${city.name}" />
  <meta name="geo.position" content="${city.lat};${city.lng}" />
  <meta name="ICBM" content="${city.lat}, ${city.lng}" />

  <!-- OpenGraph Meta Tags -->
  <meta property="og:type" content="product" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${metaDesc}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${cat.img}" />
  <meta property="og:site_name" content="H&H Concepts" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${metaDesc}" />
  <meta name="twitter:image" content="${cat.img}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../styles.css?v=5" />
  <script type="application/ld+json">
    ${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body class="bg-[#f5f5f7] text-[#1d1d1f]">

  <div class="page-transition-curtain" id="page-curtain" aria-hidden="true"></div>

  <!-- HEADER -->
  <header class="site-header scrolled header-light" id="site-header">
    <a class="header-logo" href="../index.html" aria-label="H&H Concepts Home">
      <img src="../assets/logo-full-black.png" alt="H&H Concepts" class="logo-light" />
    </a>
    <nav id="nav" aria-label="Main navigation">
      <a href="../index.html">Home</a>
      <a href="../about.html">About Us</a>
      <a href="../categories.html" class="active">Categories</a>
      <a href="../spaces.html">Spaces</a>
      <a href="../case-studies.html">Case Studies</a>
      <a href="../process.html">Process</a>
      <a href="../contact.html" class="nav-cta">Enquire <span>↗</span></a>
    </nav>
  </header>

  <!-- PROGRAMMATIC SEO SUBPAGE HERO -->
  <section class="subpage-hero">
    <div class="subpage-hero-inner">
      <p class="eyebrow">${city.name}, ${city.state} · Commercial & Luxury Fitouts</p>
      <h1>${cat.name}<br/><em>in ${city.name}</em></h1>
      <p class="subpage-hero-sub">H&H Concepts supplies BIFMA-certified ${cat.name.toLowerCase()} to corporate offices, boutique hotels, and luxury residences across ${city.name}.</p>
    </div>
  </section>

  <!-- CONTENT CONTAINER -->
  <section class="section-pad max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
      <div>
        <span class="inline-block bg-black text-white px-3 py-1 text-xs rounded-full mb-4">Price Range: ${cat.price}</span>
        <h2 class="text-3xl font-serif mb-4">Luxury ${cat.name} for ${city.name} Projects</h2>
        <p class="text-gray-600 mb-6 leading-relaxed">${cat.desc} Our manufacturing unit in Dehradun delivers directly to commercial hubs and private residences in ${city.name} with 24-month warranty support and professional white-glove installation.</p>

        <div class="flex flex-wrap gap-3 mb-8">
          <span class="bg-gray-100 text-xs px-3 py-1.5 rounded-full font-medium">BIFMA Certified</span>
          <span class="bg-gray-100 text-xs px-3 py-1.5 rounded-full font-medium">Korean Mesh</span>
          <span class="bg-gray-100 text-xs px-3 py-1.5 rounded-full font-medium">24-Month Warranty</span>
          <span class="bg-gray-100 text-xs px-3 py-1.5 rounded-full font-medium">Direct Factory Delivery to ${city.name}</span>
        </div>

        <a href="../contact.html" class="btn-primary">Request ${city.name} Quote ↗</a>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg h-96">
        <img src="${cat.img}" alt="${cat.name} in ${city.name}" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- PROGRAMMATIC BACKLINKS & RELATED CITIES -->
    <div class="mt-16 bg-white p-8 rounded-3xl border border-black/5">
      <h3 class="text-xl font-serif mb-6">${cat.name} in Other Major Cities across India</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        ${CITIES.map(c => `<a href="${cat.slug}-${c.slug}.html" class="text-xs text-gray-600 hover:text-black border border-gray-200 hover:border-black px-3 py-2 rounded-lg text-center transition-colors">${c.name} ${cat.name}</a>`).join('')}
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="apple-footer-section">
    <div class="footer-bg-wrap">
      <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90" alt="" aria-hidden="true" />
      <div class="footer-overlay-gradient"></div>
    </div>
    <div class="apple-footer-inner">
      <div class="footer-glass-card">
        <div class="footer-card-bottom">
          <span>Designed by @HHConcepts · ${cat.name} ${city.name}</span>
          <a href="../categories.html" class="text-white hover:underline">Back to All Categories →</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js?v=5"></script>
</body>
</html>`;

    fs.writeFileSync(pagePath, html, 'utf8');
    pageCount++;
  });
});

console.log(`Successfully generated ${pageCount} programmatic SEO landing pages in ./locations/`);

// GENERATE SITEMAP.XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${generatedUrls.map(u => `  <url>
    <loc>${DOMAIN}${u}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${u === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${u === '/' ? '1.0' : u.includes('locations') ? '0.7' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${generatedUrls.length} indexed URLs.`);

// GENERATE ROBOTS.TXT
const robotsTxt = `# H&H Concepts Robots.txt
User-agent: *
Allow: /
Disallow: /scratch/
Disallow: /node_modules/

# Sitemap Location
Sitemap: ${DOMAIN}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt, 'utf8');
console.log('Successfully generated robots.txt');
