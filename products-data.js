/* ═══════════════════════════════════════════════════
   H&H CONCEPTS — PRODUCT DATABASE
   14 Curated Luxury Furniture Pieces with Real Photography
═══════════════════════════════════════════════════ */

const PRODUCTS_DB = {

  /* ─────────────── BEDS ─────────────── */

  'aura-float-bed': {
    id: 'aura-float-bed',
    name: 'Aura Float Bed',
    category: 'LUXURY BEDS',
    categorySlug: 'beds',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.9,
    reviewsCount: 26,
    stockText: 'BOUTIQUE HOTEL COLLECTION',
    recommendPct: '97% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/aura-float-bed/aura-float-bed-1.png',
    gallery: [
      'assets/products/aura-float-bed/aura-float-bed-1.png',
      'assets/products/aura-float-bed/aura-float-bed-2.png',
      'assets/products/aura-float-bed/aura-float-bed-3.png',
      'assets/products/aura-float-bed/aura-float-bed-4.png'
    ],
    desc: 'The Aura Float Bed redefines luxury bedroom design with its cantilevered floating frame and ambient under-bed illumination. Crafted from premium hardwood with a reinforced steel inner chassis, it creates a mesmerising visual effect where the bed appears to hover above the floor. The integrated LED perimeter lighting adds a warm, ethereal glow perfect for boutique hotels and luxury residences.',
    dimensions: {
      height: '1300MM (Headboard)',
      width: '1950MM',
      depth: '2050MM',
      seatHeight: '460MM (Platform)',
      armHeight: 'N/A',
      weight: '110 KG (Hardwood & Steel)'
    },
    specs: {
      'Finish': 'Natural Teak / Smoked Oak Veneer',
      'Lighting': 'Integrated 3000K warm ambient LED strip',
      'Frame': 'Reinforced steel inner chassis with floating cantilever',
      'Mattress Area': 'King Size (78" x 72")',
      'Installation': 'White-glove delivery & professional installation included'
    },
    finishes: [
      { name: 'Smoked Oak', hex: '#2b2622' },
      { name: 'Natural Teak', hex: '#634730' }
    ],
    frames: [{ name: 'Steel Inner Chassis', hex: '#111111' }],
    upholstery: [
      { name: 'Warm Linen', hex: '#e3dfd5' },
      { name: 'Charcoal Grey', hex: '#3a3a3c' }
    ],
    sizes: ['King Size (78" x 72")', 'Queen Size (78" x 60")']
  },

  'lumino-bed-suite': {
    id: 'lumino-bed-suite',
    name: 'Lumino Bed Suite',
    category: 'LUXURY BEDS',
    categorySlug: 'beds',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.8,
    reviewsCount: 22,
    stockText: 'LIMITED EDITION — MADE TO ORDER',
    recommendPct: '95% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/lumino-bed-suite/lumino-bed-suite-1.png',
    gallery: [
      'assets/products/lumino-bed-suite/lumino-bed-suite-1.png',
      'assets/products/lumino-bed-suite/lumino-bed-suite-2.png',
      'assets/products/lumino-bed-suite/lumino-bed-suite-3.png',
      'assets/products/lumino-bed-suite/lumino-bed-suite-4.png'
    ],
    desc: 'The Lumino Bed Suite is our flagship boutique hotel offering featuring an LED-illuminated upholstered headboard, dual floating nightstands with soft-close drawers, and concealed cable management channels. Built from commercial-grade moisture-resistant laminate and solid hardwood for 5-star hospitality environments.',
    dimensions: {
      height: '1400MM (Headboard)',
      width: '2100MM (w/ Nightstands)',
      depth: '2050MM',
      seatHeight: '480MM (Platform)',
      armHeight: 'N/A',
      weight: '120 KG (Hardwood & Steel)'
    },
    specs: {
      'Headboard': 'Upholstered leatherette with warm LED perimeter strip',
      'Structure': 'High-moisture resistant commercial ply with veneer finish',
      'Nightstands': 'Dual drawer floating side tables included',
      'Dimensions': 'King Size (78" x 72" mattress area)',
      'Installation': 'White-glove delivery & professional assembly'
    },
    finishes: [
      { name: 'Smoked Walnut', hex: '#3d2b1f' },
      { name: 'Natural Oak', hex: '#b39571' }
    ],
    frames: [{ name: 'Steel Inner Chassis', hex: '#111111' }],
    upholstery: [
      { name: 'Warm Beige Leatherette', hex: '#d9cdb8' },
      { name: 'Charcoal Grey', hex: '#3a3a3c' }
    ],
    sizes: ['King Suite (78" x 72")', 'Queen Suite (78" x 60")']
  },

  /* ─────────────── TABLES ─────────────── */

  'kora-round-table': {
    id: 'kora-round-table',
    name: 'Kora Round Table',
    category: 'ROUND TABLES',
    categorySlug: 'tables',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 18,
    stockText: 'ARTISAN COLLECTION',
    recommendPct: '93% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/kora-round-table/kora-round-table-1.png',
    gallery: [
      'assets/products/kora-round-table/kora-round-table-1.png',
      'assets/products/kora-round-table/kora-round-table-2.png'
    ],
    desc: 'The Kora Round Table is a statement piece that blends sculptural elegance with functional design. Its organic round form and carefully proportioned base create a harmonious centrepiece for dining rooms, meeting rooms, or hotel lobbies.',
    dimensions: {
      height: '760MM',
      width: '1200MM (Diameter)',
      depth: '1200MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '42 KG'
    },
    specs: {
      'Top': 'Solid hardwood with hand-finished veneer',
      'Base': 'Sculptural pedestal base',
      'Seating Capacity': '4-6 persons',
      'Assembly': 'Minimal assembly required'
    },
    finishes: [
      { name: 'Natural Walnut', hex: '#5c3a1e' },
      { name: 'Smoked Oak', hex: '#2b2622' }
    ],
    frames: [{ name: 'Hardwood Pedestal', hex: '#4a2e1b' }],
    upholstery: [],
    sizes: ['1200mm Diameter', '1500mm Diameter']
  },

  'the-aris-round-table': {
    id: 'the-aris-round-table',
    name: 'The Aris Round Table',
    category: 'ROUND TABLES',
    categorySlug: 'tables',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 15,
    stockText: 'DESIGNER COLLECTION',
    recommendPct: '96% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-aris-round-table/the-aris-round-table-1.png',
    gallery: [
      'assets/products/the-aris-round-table/the-aris-round-table-1.png',
      'assets/products/the-aris-round-table/the-aris-round-table-2.png',
      'assets/products/the-aris-round-table/the-aris-round-table-3.png'
    ],
    desc: 'The Aris Round Table features a contemporary geometric base paired with a perfectly circular top, creating a bold yet refined focal point for executive dining rooms, private suites, and upscale restaurant interiors.',
    dimensions: {
      height: '760MM',
      width: '1400MM (Diameter)',
      depth: '1400MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '56 KG'
    },
    specs: {
      'Top': 'Premium solid surface with bevel-edge detail',
      'Base': 'Geometric multi-faceted steel and wood hybrid',
      'Seating Capacity': '6-8 persons',
      'Assembly': 'Professional installation included'
    },
    finishes: [
      { name: 'Antique Brass & Wood', hex: '#94784a' },
      { name: 'Matte Black & Walnut', hex: '#111111' }
    ],
    frames: [{ name: 'Steel & Wood Hybrid', hex: '#2b2622' }],
    upholstery: [],
    sizes: ['1400mm Diameter', '1600mm Diameter']
  },

  'the-kova-accent-table': {
    id: 'the-kova-accent-table',
    name: 'The Kova Accent Table',
    category: 'ACCENT TABLES',
    categorySlug: 'tables',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.6,
    reviewsCount: 21,
    stockText: 'IN STOCK — READY TO DELIVER',
    recommendPct: '92% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-kova-accent-table/the-kova-accent-table-1.png',
    gallery: [
      'assets/products/the-kova-accent-table/the-kova-accent-table-1.png',
      'assets/products/the-kova-accent-table/the-kova-accent-table-2.png',
      'assets/products/the-kova-accent-table/the-kova-accent-table-3.png'
    ],
    desc: 'The Kova Accent Table is a versatile companion piece designed to complement any living space. Its compact silhouette and refined proportions make it ideal as a side table, bedside table, or decorative accent in hotel lobbies and executive suites.',
    dimensions: {
      height: '550MM',
      width: '480MM',
      depth: '480MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '12 KG'
    },
    specs: {
      'Top': 'Solid surface with soft-touch finish',
      'Base': 'Powder-coated steel frame',
      'Use Case': 'Side table, bedside table, accent piece'
    },
    finishes: [
      { name: 'Natural Oak', hex: '#b8956e' },
      { name: 'Matte Black', hex: '#111111' }
    ],
    frames: [{ name: 'Powder-Coated Steel', hex: '#222222' }],
    upholstery: [],
    sizes: ['Standard (480mm)']
  },

  'the-vesper-accent-table': {
    id: 'the-vesper-accent-table',
    name: 'The Vesper Accent Table',
    category: 'ACCENT TABLES',
    categorySlug: 'tables',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 17,
    stockText: 'ARTISAN COLLECTION',
    recommendPct: '94% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-vesper-accent-table/the-vesper-accent-table-1.png',
    gallery: [
      'assets/products/the-vesper-accent-table/the-vesper-accent-table-1.png',
      'assets/products/the-vesper-accent-table/the-vesper-accent-table-2.png',
      'assets/products/the-vesper-accent-table/the-vesper-accent-table-3.png'
    ],
    desc: 'The Vesper Accent Table brings sculptural sophistication to intimate spaces. Designed as the perfect companion piece for luxury living rooms, hotel suites, and executive reception areas with a striking silhouette and premium artisan finishing.',
    dimensions: {
      height: '600MM',
      width: '520MM',
      depth: '520MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '14 KG'
    },
    specs: {
      'Top': 'Hand-finished premium surface',
      'Base': 'Sculptural solid wood base',
      'Use Case': 'Centre table, accent piece, hotel lobby display'
    },
    finishes: [
      { name: 'Smoked Walnut', hex: '#3d2b1f' },
      { name: 'Antique Brass', hex: '#94784a' }
    ],
    frames: [{ name: 'Solid Wood Base', hex: '#4a2e1b' }],
    upholstery: [],
    sizes: ['Standard (520mm)']
  },

  /* ─────────────── CHAIRS & SEATING ─────────────── */

  'the-eris-chair': {
    id: 'the-eris-chair',
    name: 'The Eris Chair',
    category: 'DESIGNER CHAIRS',
    categorySlug: 'chairs',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.9,
    reviewsCount: 38,
    stockText: 'BEST SELLER — IN STOCK',
    recommendPct: '98% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-eris-chair/the-eris-chair-1.png',
    gallery: [
      'assets/products/the-eris-chair/the-eris-chair-1.png',
      'assets/products/the-eris-chair/the-eris-chair-2.png',
      'assets/products/the-eris-chair/the-eris-chair-3.png',
      'assets/products/the-eris-chair/the-eris-chair-4.png',
      'assets/products/the-eris-chair/the-eris-chair-5.png'
    ],
    desc: 'The Eris Chair is our best-selling designer accent chair with a wraparound backrest featuring organic flowing lines. Upholstered in premium textured fabric with solid hardwood legs, it is equally at home in executive lounges, boutique hotel lobbies, and luxury living rooms.',
    dimensions: {
      height: '820MM',
      width: '720MM',
      depth: '680MM',
      seatHeight: '450MM',
      armHeight: '620MM',
      weight: '12.5 KG'
    },
    specs: {
      'Upholstery': 'Premium textured fabric / Italian leatherette',
      'Frame': 'Solid hardwood with sculpted backrest',
      'Cushioning': 'High-resilience moulded foam',
      'Legs': 'Solid wood with brass tip caps',
      'Assembly': 'No assembly required'
    },
    finishes: [
      { name: 'Natural Ash', hex: '#cbb392' },
      { name: 'Walnut Stain', hex: '#4a2e1b' }
    ],
    frames: [{ name: 'Solid Hardwood', hex: '#4a2e1b' }],
    upholstery: [
      { name: 'Sage Green Fabric', hex: '#7a8b5e' },
      { name: 'Charcoal Grey', hex: '#36363b' },
      { name: 'Ivory Cream', hex: '#e8e0d0' }
    ],
    sizes: ['Standard Accent Chair', 'Dining Height Variant']
  },

  'the-aurea': {
    id: 'the-aurea',
    name: 'The Aurea',
    category: 'LUXURY SEATING',
    categorySlug: 'seating',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 24,
    stockText: 'SIGNATURE COLLECTION',
    recommendPct: '96% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-aurea/the-aurea-1.png',
    gallery: [
      'assets/products/the-aurea/the-aurea-1.png',
      'assets/products/the-aurea/the-aurea-2.png',
      'assets/products/the-aurea/the-aurea-3.png',
      'assets/products/the-aurea/the-aurea-4.png'
    ],
    desc: 'The Aurea is a statement lounge piece that transforms any space into a destination. With its generous proportions and enveloping form, the Aurea invites deep relaxation while making a bold architectural statement. Premium upholstery options range from rich Italian leatherette to sumptuous velvet.',
    dimensions: {
      height: '780MM',
      width: '850MM',
      depth: '820MM',
      seatHeight: '420MM',
      armHeight: '580MM',
      weight: '28 KG'
    },
    specs: {
      'Upholstery': 'Italian leatherette / Premium velvet',
      'Frame': 'Seasoned hardwood with steel reinforcement',
      'Cushioning': '32-density super soft foam with feather overlay',
      'Legs': 'Brushed stainless steel',
      'Assembly': 'No assembly required'
    },
    finishes: [
      { name: 'Brushed Gold', hex: '#b3956e' },
      { name: 'Polished Chrome', hex: '#cccccc' }
    ],
    frames: [{ name: 'Hardwood & Steel', hex: '#222222' }],
    upholstery: [
      { name: 'Emerald Velvet', hex: '#1b3b2b' },
      { name: 'Cognac Leather', hex: '#7a4224' },
      { name: 'Pearl White', hex: '#f0ece4' }
    ],
    sizes: ['Single Lounge Chair', 'Oversized Statement Chair']
  },

  'the-modus': {
    id: 'the-modus',
    name: 'The Modus',
    category: 'LUXURY SEATING',
    categorySlug: 'seating',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 20,
    stockText: 'DESIGNER SERIES',
    recommendPct: '94% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-modus/the-modus-1.png',
    gallery: [
      'assets/products/the-modus/the-modus-1.png',
      'assets/products/the-modus/the-modus-2.png',
      'assets/products/the-modus/the-modus-3.png'
    ],
    desc: 'The Modus represents the intersection of minimalist design philosophy and supreme comfort. Its clean geometric lines and precisely angled proportions create a modern masterpiece designed for contemporary living spaces, executive waiting areas, and design-forward hospitality environments.',
    dimensions: {
      height: '800MM',
      width: '760MM',
      depth: '720MM',
      seatHeight: '430MM',
      armHeight: '600MM',
      weight: '18 KG'
    },
    specs: {
      'Upholstery': 'Premium woven fabric / Microfibre suede',
      'Frame': 'Angular hardwood frame with precision joinery',
      'Cushioning': 'Multi-layer high-resilience foam',
      'Legs': 'Solid wood tapered legs',
      'Assembly': 'Delivered fully assembled'
    },
    finishes: [
      { name: 'Natural Ash', hex: '#cbb392' },
      { name: 'Dark Walnut', hex: '#2e1c14' }
    ],
    frames: [{ name: 'Angular Hardwood', hex: '#4a2e1b' }],
    upholstery: [
      { name: 'Stone Grey', hex: '#8e8e93' },
      { name: 'Midnight Blue', hex: '#1b2a47' },
      { name: 'Oatmeal Beige', hex: '#d9d2c5' }
    ],
    sizes: ['Standard Lounge', 'Compact Variant']
  },

  'the-quadra': {
    id: 'the-quadra',
    name: 'The Quadra',
    category: 'LUXURY SEATING',
    categorySlug: 'seating',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 19,
    stockText: "ARCHITECT'S CHOICE",
    recommendPct: '95% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-quadra/the-quadra-1.png',
    gallery: [
      'assets/products/the-quadra/the-quadra-1.png',
      'assets/products/the-quadra/the-quadra-2.png',
      'assets/products/the-quadra/the-quadra-3.png'
    ],
    desc: 'The Quadra takes its name from its precisely squared structural geometry. With structured cushioning and clean right-angle framework, the Quadra is the choice of interior architects and designers who demand furniture that doubles as art. Built for longevity with commercial-grade materials.',
    dimensions: {
      height: '780MM',
      width: '780MM',
      depth: '750MM',
      seatHeight: '440MM',
      armHeight: '610MM',
      weight: '22 KG'
    },
    specs: {
      'Upholstery': 'Structured premium fabric / Full-grain leather',
      'Frame': 'Squared hardwood frame with steel bracing',
      'Cushioning': 'Structured high-density foam with quilted finish',
      'Legs': 'Square-profile solid wood',
      'Assembly': 'No assembly required'
    },
    finishes: [
      { name: 'Ebony Black', hex: '#111111' },
      { name: 'Natural Walnut', hex: '#5c3a1e' }
    ],
    frames: [{ name: 'Squared Hardwood', hex: '#2b2622' }],
    upholstery: [
      { name: 'Jet Black Leather', hex: '#111111' },
      { name: 'Warm Tan', hex: '#94542d' },
      { name: 'Dove Grey Fabric', hex: '#a8a8ad' }
    ],
    sizes: ['Standard Armchair', 'Wide Lounge Version']
  },

  /* ─────────────── DESKS ─────────────── */

  'the-linear-atelier': {
    id: 'the-linear-atelier',
    name: 'The Linear Atelier',
    category: 'EXECUTIVE DESKS',
    categorySlug: 'desks',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.9,
    reviewsCount: 14,
    stockText: 'BESPOKE — MADE TO ORDER',
    recommendPct: '100% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-linear-atelier/the-linear-atelier-1.png',
    gallery: [
      'assets/products/the-linear-atelier/the-linear-atelier-1.png',
      'assets/products/the-linear-atelier/the-linear-atelier-2.png',
      'assets/products/the-linear-atelier/the-linear-atelier-3.png'
    ],
    desc: 'The Linear Atelier is a precision-crafted executive desk that embodies "less is more." Designed for CEO offices, private studios, and luxury home offices with concealed wire management, soft-close drawers, and optional wireless charging integration.',
    dimensions: {
      height: '760MM (30")',
      width: '1830MM (72")',
      depth: '915MM (36")',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '98 KG'
    },
    specs: {
      'Dimensions': '72" W x 36" D x 30" H',
      'Material': 'E1 grade melamine board with aluminium edge banding',
      'Features': 'Soft-close drawers, concealed wire management, flip box',
      'Optional': 'Integrated Qi wireless charger',
      'Installation': 'Professional fitout & installation included'
    },
    finishes: [
      { name: 'Dark Walnut & Charcoal', hex: '#2e2520' },
      { name: 'Natural Oak & Silver', hex: '#b8956e' }
    ],
    frames: [{ name: 'Aluminium Trim', hex: '#cccccc' }],
    upholstery: [{ name: 'Black Leatherette Pad', hex: '#111111' }],
    sizes: ['72" Executive Desk', '84" Director Desk']
  },

  /* ─────────────── BAR & LOUNGE ─────────────── */

  'the-aura-mini-bar': {
    id: 'the-aura-mini-bar',
    name: 'The Aura Mini-Bar',
    category: 'BAR & LOUNGE',
    categorySlug: 'bar',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 16,
    stockText: 'HOSPITALITY EXCLUSIVE',
    recommendPct: '95% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-aura-mini-bar/the-aura-mini-bar-1.png',
    gallery: [
      'assets/products/the-aura-mini-bar/the-aura-mini-bar-1.png',
      'assets/products/the-aura-mini-bar/the-aura-mini-bar-2.png',
      'assets/products/the-aura-mini-bar/the-aura-mini-bar-3.png'
    ],
    desc: 'The Aura Mini-Bar is a self-contained entertainment unit designed for luxury hotel suites, executive penthouses, and sophisticated home bars. Featuring integrated ambient lighting, temperature-controlled storage, and a marble-finish countertop.',
    dimensions: {
      height: '1050MM',
      width: '1200MM',
      depth: '550MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '65 KG'
    },
    specs: {
      'Counter': 'Marble-finish engineered stone top',
      'Storage': 'Temperature-controlled compartment with glass rack',
      'Lighting': 'Integrated ambient LED backlighting',
      'Material': 'Premium veneer with lacquer finish',
      'Installation': 'Professional installation included'
    },
    finishes: [
      { name: 'Midnight Black Lacquer', hex: '#111111' },
      { name: 'Smoked Walnut', hex: '#3d2b1f' }
    ],
    frames: [{ name: 'Steel Frame with Veneer', hex: '#222222' }],
    upholstery: [],
    sizes: ['Standard (1200mm W)', 'Compact (900mm W)']
  },

  /* ─────────────── SUITES ─────────────── */

  'the-nexus-suite': {
    id: 'the-nexus-suite',
    name: 'The Nexus Suite',
    category: 'ROOM SUITES',
    categorySlug: 'suites',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.9,
    reviewsCount: 12,
    stockText: 'BESPOKE FITOUT — PREMIUM',
    recommendPct: '100% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-nexus-suite/the-nexus-suite-1.png',
    gallery: [
      'assets/products/the-nexus-suite/the-nexus-suite-1.png',
      'assets/products/the-nexus-suite/the-nexus-suite-2.png',
      'assets/products/the-nexus-suite/the-nexus-suite-3.png'
    ],
    desc: 'The Nexus Suite is a comprehensive room furniture solution designed for 5-star hotels and luxury residences. This complete ensemble includes coordinated bed frame, wardrobe system, vanity unit, and lounge seating unified by a consistent design language.',
    dimensions: {
      height: 'Variable (Suite Components)',
      width: 'Room-sized Modular System',
      depth: 'Customised to Room Layout',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '350+ KG (Complete Suite)'
    },
    specs: {
      'Components': 'Bed, wardrobe, vanity, lounge, nightstands',
      'Material': 'Commercial-grade MR plywood with premium veneer',
      'Hardware': 'European soft-close hinges & drawer slides',
      'Lighting': 'Integrated LED ambient lighting throughout',
      'Installation': 'Complete turnkey fitout with project management'
    },
    finishes: [
      { name: 'Contemporary Dark', hex: '#1a1a1e' },
      { name: 'Warm Natural', hex: '#b39571' }
    ],
    frames: [{ name: 'Modular Steel & Wood', hex: '#111111' }],
    upholstery: [
      { name: 'Neutral Linen', hex: '#e3dfd5' },
      { name: 'Warm Grey', hex: '#6e6e73' }
    ],
    sizes: ['Standard Room Suite', 'Penthouse Suite', 'Presidential Suite']
  },

  /* ─────────────── ACCENT PIECES ─────────────── */

  'the-orb': {
    id: 'the-orb',
    name: 'The Orb',
    category: 'ACCENT PIECES',
    categorySlug: 'accent',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 23,
    stockText: 'IN STOCK — LIMITED BATCH',
    recommendPct: '93% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'assets/products/the-orb/the-orb-1.png',
    gallery: [
      'assets/products/the-orb/the-orb-1.png',
      'assets/products/the-orb/the-orb-2.png',
      'assets/products/the-orb/the-orb-3.png'
    ],
    desc: 'The Orb is a sculptural accent piece that transcends traditional furniture categories. Part functional object, part art installation, the Orb creates a captivating visual anchor ideal for hotel lobbies, art galleries, luxury retail, and contemporary living rooms.',
    dimensions: {
      height: '600MM',
      width: '600MM',
      depth: '600MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '18 KG'
    },
    specs: {
      'Form': 'Spherical sculptural design',
      'Material': 'Hand-finished composite with premium coating',
      'Use Case': 'Accent piece, sculptural element, conversation starter',
      'Finish': 'Available in multiple premium surface treatments'
    },
    finishes: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Brushed Gold', hex: '#b3956e' },
      { name: 'Pearl White', hex: '#f0ece4' }
    ],
    frames: [],
    upholstery: [],
    sizes: ['Standard (600mm)', 'Large (800mm)']
  }

};

if (typeof window !== 'undefined') {
  window.PRODUCTS_DB = PRODUCTS_DB;
}
