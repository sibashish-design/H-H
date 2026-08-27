/* ═══════════════════════════════════════════════════
   H&H CONCEPTS — PRODUCT DATABASE
   Curated High-Resolution Furniture Photography
═══════════════════════════════════════════════════ */

const PRODUCTS_DB = {
  'falcon-elite': {
    id: 'falcon-elite',
    name: 'Falcon Elite Executive Chair',
    category: 'EXECUTIVE SEATING',
    categorySlug: 'executive',
    pdfSource: 'EXECUTIVE SERIES PRICELIST.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 34,
    stockText: 'LAST 3 LEFT - MAKE IT YOURS!',
    recommendPct: '94% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Originally created for executive boardrooms, the Falcon Elite Chair is one of the most recognized director chairs. Featuring a curved wood-accent back, imported Korean air-mesh, 4-position synchronized tilt mechanism, and a 700mm mirror-polished aluminium die-cast base. No assembly required — white-glove installation included.',
    dimensions: {
      height: '1180MM – 1280MM',
      width: '680MM',
      depth: '640MM',
      seatHeight: '460MM – 560MM',
      armHeight: '670MM',
      weight: '18.5 KG (150KG BIFMA Rated)'
    },
    specs: {
      'Back Rest': 'High-density breathable Korean Air-Mesh',
      'Seat Cushion': 'Moulded PU foam with waterfall edge design',
      'Mechanism': 'Multi-lock synchro tilt with tension adjustment',
      'Armrest': '3D Soft PU armrests (Height, Angle & Depth adjustable)',
      'Gas Lift': 'BIFMA-certified Class 4 pneumatic gas cylinder',
      'Base': '700mm Aluminium die-cast 5-star base',
      'Casters': '60mm noise-free nylon casters'
    },
    finishes: [
      { name: 'Walnut Wood Accent', hex: '#4a2e1b' },
      { name: 'Natural Oak', hex: '#b8956e' }
    ],
    frames: [
      { name: 'Polished Aluminium', hex: '#d1d1d6' },
      { name: 'Matte Black Steel', hex: '#111111' }
    ],
    upholstery: [
      { name: 'Jet Black Mesh', hex: '#111111' },
      { name: 'Slate Grey Fabric', hex: '#55555e' },
      { name: 'Tan Italian Leather', hex: '#8a4b28' }
    ],
    sizes: ['High Back w/ Headrest', 'Medium Back Executive', 'Visitor Swivel']
  },
  'freedom': {
    id: 'freedom',
    name: 'Freedom Ergonomic Chair',
    category: 'ERGO OFFICE CHAIRS',
    categorySlug: 'ergo',
    pdfSource: 'FBI Ergo Series .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.9,
    reviewsCount: 48,
    stockText: 'IN STOCK - READY TO SHIP',
    recommendPct: '98% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'FBI Ergo Series Freedom chair adapts automatically to the user weight and body posture. Features self-adjusting lumbar support, height-adjustable headrest, and heavy-duty glass-filled nylon frame.',
    dimensions: {
      height: '1120MM – 1220MM',
      width: '650MM',
      depth: '620MM',
      seatHeight: '440MM – 540MM',
      armHeight: '650MM',
      weight: '16.2 KG'
    },
    specs: {
      'Frame': 'Glass-filled nylon structural frame',
      'Lumbar Support': 'Height & depth adjustable lumbar pad',
      'Mechanism': 'Auto-weight sensing synchro mechanism',
      'Gas Lift': 'Class 4 gas lift cylinder',
      'Warranty': '24 Months On-site Warranty'
    },
    finishes: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Arctic White', hex: '#f0f0f0' }
    ],
    frames: [
      { name: 'Graphite Nylon', hex: '#222222' }
    ],
    upholstery: [
      { name: 'Onyx Black', hex: '#111111' },
      { name: 'Cool Grey Mesh', hex: '#8e8e93' }
    ],
    sizes: ['High Back with Headrest', 'Mid Back Task']
  },
  'galaxy-mesh': {
    id: 'galaxy-mesh',
    name: 'Galaxy Mesh High Back',
    category: 'EXECUTIVE SEATING',
    categorySlug: 'executive',
    pdfSource: 'EXECUTIVE SERIES PRICELIST.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 29,
    stockText: 'IN STOCK - READY TO DELIVER',
    recommendPct: '93% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Streamlined executive mesh chair with integrated lumbar curve, polished metal accents, and premium dual-wheel nylon casters.',
    dimensions: {
      height: '1150MM – 1250MM',
      width: '660MM',
      depth: '630MM',
      seatHeight: '450MM – 550MM',
      armHeight: '660MM',
      weight: '17.0 KG'
    },
    specs: {
      'Back': 'Heavy-duty polyester mesh',
      'Base': '700mm Chrome finish steel base',
      'Gas Lift': 'Class 4 BIFMA approved'
    },
    finishes: [{ name: 'Chrome Finish', hex: '#cccccc' }],
    frames: [{ name: 'Polished Metal', hex: '#e5e5ea' }],
    upholstery: [
      { name: 'Onyx Black', hex: '#111111' },
      { name: 'Titanium Grey', hex: '#4a4a52' }
    ],
    sizes: ['High Back', 'Mid Back']
  },
  'nova-ergo': {
    id: 'nova-ergo',
    name: 'Nova Ergonomic Task Chair',
    category: 'WORKSTATION CHAIRS',
    categorySlug: 'ergo',
    pdfSource: 'FBI Ergo Series .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.6,
    reviewsCount: 31,
    stockText: 'POPULAR TASK SEATING',
    recommendPct: '91% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Engineered for high-density corporate workstations. The Nova task chair offers intuitive height and tilt controls with responsive lumbar cushioning.',
    dimensions: {
      height: '1050MM – 1150MM',
      width: '620MM',
      depth: '600MM',
      seatHeight: '430MM – 530MM',
      armHeight: '640MM',
      weight: '14.5 KG'
    },
    specs: {
      'Mesh': 'Breathable elastic mesh',
      'Cushion': 'High resilience cold-cured foam',
      'Base': 'Nylon 5-star base'
    },
    finishes: [{ name: 'Black Nylon', hex: '#111111' }],
    frames: [{ name: 'Nylon Chassis', hex: '#222222' }],
    upholstery: [
      { name: 'Black', hex: '#111111' },
      { name: 'Navy Blue', hex: '#1b2a47' }
    ],
    sizes: ['Standard Task', 'High Back']
  },
  'lumino-bed-suite': {
    id: 'lumino-bed-suite',
    name: 'Lumino Bed Suite (FMH-S-03)',
    category: 'HOTEL ROOM FURNITURE',
    categorySlug: 'hotel',
    pdfSource: 'HOTEL ROOM - 2nd SERIES.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.7,
    reviewsCount: 19,
    stockText: 'LIMITED EDITION - MADE TO ORDER',
    recommendPct: '92% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Boutique hotel bed suite featuring an integrated LED illuminated headboard, dual floating nightstands, and concealed cable management channels. Built from commercial-grade MR laminate and solid hardwood.',
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
      'Dimensions': 'King Size (78" × 72" mattress area)'
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
    sizes: ['King Suite (78" × 72")', 'Queen Suite (78" × 60")']
  },
  'aura-float-bed': {
    id: 'aura-float-bed',
    name: 'Aura Float Bed (FMH-B-01)',
    category: 'HOTEL ROOM FURNITURE',
    categorySlug: 'hotel',
    pdfSource: 'HOTEL ROOM - 2nd SERIES.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.8,
    reviewsCount: 22,
    stockText: 'BOUTIQUE HOTEL COLLECTION',
    recommendPct: '95% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Minimalist floating bed frame with under-bed mood illumination and wall-mounted headboard panels for luxury hotel rooms.',
    dimensions: {
      height: '1300MM',
      width: '1950MM',
      depth: '2050MM',
      seatHeight: '460MM',
      armHeight: 'N/A',
      weight: '110 KG'
    },
    specs: {
      'Finish': 'Natural Teak / Smoked Oak Veneer',
      'Lighting': 'Integrated 3000K warm ambient LED lighting',
      'Frame': 'Reinforced steel inner chassis'
    },
    finishes: [
      { name: 'Smoked Oak', hex: '#2b2622' },
      { name: 'Natural Teak', hex: '#634730' }
    ],
    frames: [{ name: 'Steel Frame', hex: '#111111' }],
    upholstery: [{ name: 'Warm Linen', hex: '#e3dfd5' }],
    sizes: ['King Size', 'Queen Size']
  },
  'canvas-sofa': {
    id: 'canvas-sofa',
    name: 'Canvas 3-Seater Luxury Sofa',
    category: 'SOFA SERIES',
    categorySlug: 'sofa',
    pdfSource: 'SOFA SERIES PRICELIST .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 27,
    stockText: 'BEST SELLER - IN STOCK',
    recommendPct: '96% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Architectural 3-seater sofa with deep seating cushions, solid mahogany wooden legs, and stain-resistant velvet fabric. Perfect for executive reception areas and upscale living rooms.',
    dimensions: {
      height: '820MM',
      width: '2130MM (84")',
      depth: '880MM',
      seatHeight: '440MM',
      armHeight: '620MM',
      weight: '58 KG'
    },
    specs: {
      'Upholstery': 'High-grade velvet / textured weave fabric',
      'Frame': 'Seasoned hardwood frame with zig-zag spring support',
      'Cushioning': '32 density super soft foam + feather blend overlay',
      'Legs': 'Solid Mahogany wood with brass tip caps'
    },
    finishes: [{ name: 'Mahogany & Brass', hex: '#3d261a' }],
    frames: [{ name: 'Hardwood Chassis', hex: '#222222' }],
    upholstery: [
      { name: 'Emerald Green Velvet', hex: '#1b3b2b' },
      { name: 'Charcoal Grey', hex: '#2d2d32' },
      { name: 'Ivory Beige', hex: '#e3dfd5' }
    ],
    sizes: ['3-Seater (84" W)', '2-Seater (62" W)', '1-Seater Armchair (38" W)']
  },
  'vegas-sofa': {
    id: 'vegas-sofa',
    name: 'Vegas Leatherette Sofa',
    category: 'SOFA SERIES',
    categorySlug: 'sofa',
    pdfSource: 'SOFA SERIES PRICELIST .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.7,
    reviewsCount: 24,
    stockText: 'EXECUTIVE LOUNGE SERIES',
    recommendPct: '94% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Sleek Italian leatherette sofa with polished stainless steel base legs and tufted back cushioning for executive offices.',
    dimensions: {
      height: '840MM',
      width: '2050MM',
      depth: '860MM',
      seatHeight: '450MM',
      armHeight: '630MM',
      weight: '54 KG'
    },
    specs: {
      'Upholstery': 'Premium breathable Italian leatherette',
      'Legs': '304 Grade Stainless Steel matte black finish'
    },
    finishes: [{ name: 'Stainless Steel Matte Black', hex: '#111111' }],
    frames: [{ name: 'Steel Frame', hex: '#222222' }],
    upholstery: [
      { name: 'Espresso Brown', hex: '#2e1c14' },
      { name: 'Jet Black', hex: '#111111' }
    ],
    sizes: ['3-Seater Set', '2-Seater', '1-Seater']
  },
  'marbelo-recliner': {
    id: 'marbelo-recliner',
    name: 'Marbelo Double Motor Recliner',
    category: 'RECLINER SERIES',
    categorySlug: 'recliner',
    pdfSource: 'RECLINER SERIES PRICE LIST.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.9,
    reviewsCount: 42,
    stockText: 'FLAGSHIP MODEL - DUAL GERMAN MOTORS',
    recommendPct: '99% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'The ultimate luxury recliner. Features independent dual German Okin motors for backrest and footrest adjustment, built-in 8-point vibration massager, soothing lumbar heating pad, and wireless remote controller. Upholstered in top-grain European leather.',
    dimensions: {
      height: '1080MM',
      width: '920MM',
      depth: '980MM (1750MM Reclined)',
      seatHeight: '490MM',
      armHeight: '640MM',
      weight: '64 KG'
    },
    specs: {
      'Motors': 'Dual Okin German electric actuators',
      'Massage & Heat': '8-point vibration massage + 45°C heated lumbar zone',
      'Upholstery': 'Top-grain European bovine leather',
      'Recline Angle': '170° full lay-flat zero gravity positioning',
      'Weight Capacity': '180kg rated mechanism'
    },
    finishes: [{ name: 'Polished Brass Ring', hex: '#b3956e' }],
    frames: [{ name: 'Heavy-Duty Steel Base', hex: '#111111' }],
    upholstery: [
      { name: 'Tan Italian Leather', hex: '#94542d' },
      { name: 'Dark Chocolate', hex: '#2b1b14' },
      { name: 'Midnight Black', hex: '#111111' }
    ],
    sizes: ['Single Seater Motor Recliner', '2-Seater Motor Set']
  },
  'snow-dining': {
    id: 'snow-dining',
    name: 'Snow Premium Dining Chair',
    category: 'DINING CHAIR',
    categorySlug: 'dining',
    pdfSource: 'DINNING CHAIR SERIES .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '12 Months Warranty',
    rating: 4.6,
    reviewsCount: 22,
    stockText: 'IN STOCK - READY TO DELIVER',
    recommendPct: '91% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Contemporary dining chair with sculpted wooden legs, curved backrest, and stain-resistant linen upholstery. Originally designed for fine dining venues and luxury homes.',
    dimensions: {
      height: '790MM',
      width: '640MM',
      depth: '530MM',
      seatHeight: '445MM',
      armHeight: '675MM',
      weight: '7.2 KG'
    },
    specs: {
      'Wood': 'Solid Ash wood frame',
      'Upholstery': 'Textured linen fabric',
      'Assembly': 'No assembly required'
    },
    finishes: [
      { name: 'Natural Ash Wood', hex: '#cbb392' },
      { name: 'Walnut Stain', hex: '#4a2e1b' }
    ],
    frames: [{ name: 'Solid Wood', hex: '#4a2e1b' }],
    upholstery: [
      { name: 'Oatmeal Beige', hex: '#d9d2c5' },
      { name: 'Charcoal Grey', hex: '#36363b' }
    ],
    sizes: ['Standard Armless', 'Carver Armchair']
  },
  'lisbon-cafe': {
    id: 'lisbon-cafe',
    name: 'Lisbon Café Chair (PP/Wood)',
    category: 'CAFÉ & CAFETERIA',
    categorySlug: 'cafe',
    pdfSource: 'CAFE  CHAIR  .pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '12 Months Warranty',
    rating: 4.5,
    reviewsCount: 31,
    stockText: 'IN STOCK - BULK DISCOUNTS AVAILABLE',
    recommendPct: '90% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Nordic-inspired bistro chair featuring a durable polypropylene bucket shell supported by solid beechwood legs with steel cross-bracing.',
    dimensions: {
      height: '810MM',
      width: '460MM',
      depth: '520MM',
      seatHeight: '450MM',
      armHeight: 'N/A',
      weight: '4.8 KG'
    },
    specs: {
      'Shell': 'UV-stabilized virgin polypropylene',
      'Legs': 'Natural Beechwood with anti-scratch feet'
    },
    finishes: [{ name: 'Beechwood & Black Steel', hex: '#cba876' }],
    frames: [{ name: 'Steel Cross-Brace', hex: '#111111' }],
    upholstery: [
      { name: 'Matte Black Shell', hex: '#1a1a1a' },
      { name: 'Pure White Shell', hex: '#f0f0f0' }
    ],
    sizes: ['Standard Dining Height (45cm)']
  },
  'elegance-desk': {
    id: 'elegance-desk',
    name: 'Elegance CEO Executive Desk',
    category: 'EXECUTIVE DESK',
    categorySlug: 'tables',
    pdfSource: 'FBI TABLE CATALOGUE.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '36 Months Warranty',
    rating: 4.9,
    reviewsCount: 15,
    stockText: 'DIRECT FACTORY FITOUT',
    recommendPct: '100% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: '72-inch executive desk with side return credenza, mobile pedestal drawers, integrated wireless phone charger, and leatherette inlay writing pad.',
    dimensions: {
      height: '760MM (30")',
      width: '1830MM (72")',
      depth: '915MM (36")',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '98 KG'
    },
    specs: {
      'Dimensions': '72" W × 36" D × 30" H (Return: 48" W)',
      'Material': 'E1 grade melamine board with aluminium edge banding',
      'Features': 'Soft-close drawers + wire management flip box'
    },
    finishes: [{ name: 'Dark Walnut & Charcoal', hex: '#2e2520' }],
    frames: [{ name: 'Aluminium Trim', hex: '#cccccc' }],
    upholstery: [{ name: 'Black Leatherette Pad', hex: '#111111' }],
    sizes: ['72" Executive Desk', '84" Director Desk']
  },
  'the-leaf-table': {
    id: 'the-leaf-table',
    name: 'The Leaf Centre Table',
    category: 'CENTRE & SIDE TABLES',
    categorySlug: 'tablestand',
    pdfSource: 'TABLE & STAND PRICELIST.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.8,
    reviewsCount: 18,
    stockText: 'ARTISAN COLLECTION',
    recommendPct: '94% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Sculptural organic leaf-shaped coffee table with bevel-edge tempered glass top and brass-finished cast aluminium pedestal.',
    dimensions: {
      height: '390MM',
      width: '1920MM',
      depth: '850MM',
      seatHeight: 'N/A',
      armHeight: 'N/A',
      weight: '34 KG'
    },
    specs: {
      'Top': '12mm toughened extra-clear glass',
      'Base': 'Cast aluminium brass finish'
    },
    finishes: [{ name: 'Antique Brass', hex: '#94784a' }],
    frames: [{ name: 'Cast Aluminium', hex: '#111111' }],
    upholstery: [{ name: 'Extra Clear Glass', hex: '#ffffff' }],
    sizes: ['Standard Leaf (1920mm × 390mm)']
  },
  'astoria-highcounter': {
    id: 'astoria-highcounter',
    name: 'Astoria Bar Stool',
    category: 'HIGH COUNTER STOOLS',
    categorySlug: 'highcounter',
    pdfSource: 'HIGHCOUNTER PRICELIST.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '12 Months Warranty',
    rating: 4.7,
    reviewsCount: 14,
    stockText: 'BAR & RESTO SERIES',
    recommendPct: '92% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Swivel bar stool with hydraulic height adjustment, brass footrest ring, and cushioned leatherette seat for bars & high counters.',
    dimensions: {
      height: '650MM – 850MM',
      width: '420MM',
      depth: '440MM',
      seatHeight: '650MM – 850MM',
      armHeight: 'N/A',
      weight: '8.5 KG'
    },
    specs: {
      'Height Range': '65cm to 85cm adjustable seat height',
      'Base': 'Weighted chrome-plated steel disk base'
    },
    finishes: [{ name: 'Chrome Plated Disk Base', hex: '#cccccc' }],
    frames: [{ name: 'Steel Hydraulic Base', hex: '#111111' }],
    upholstery: [{ name: 'Cognac Brown Leatherette', hex: '#7a4224' }],
    sizes: ['Adjustable Counter/Bar Height']
  },
  'uno-cafeteria': {
    id: 'uno-cafeteria',
    name: 'UNO Stackable Cafeteria Chair',
    category: 'CAFETERIA SERIES',
    categorySlug: 'cafeteriaseries',
    pdfSource: 'Cafeteria Series - 1 QCP.pdf',
    price: 'Price on Enquiry',
    originalPrice: '',
    priceRaw: 0,
    warranty: '24 Months Warranty',
    rating: 4.6,
    reviewsCount: 38,
    stockText: 'PATENT CERTIFIED - STACKABLE',
    recommendPct: '96% OF BUYERS HAVE RECOMMENDED THIS',
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Patent-certified stackable cafeteria chair engineered for institutional dining halls and office pantries. Stacks up to 10 high.',
    dimensions: {
      height: '820MM',
      width: '480MM',
      depth: '510MM',
      seatHeight: '450MM',
      armHeight: 'N/A',
      weight: '4.2 KG'
    },
    specs: {
      'Patent No': 'Design Patent No. 304920',
      'Stacking': 'Up to 10 chairs vertically',
      'Frame': 'Powder coated tubular MS frame'
    },
    finishes: [{ name: 'Powder Coated Black Frame', hex: '#111111' }],
    frames: [{ name: 'Tubular MS Frame', hex: '#222222' }],
    upholstery: [{ name: 'Charcoal Black Shell', hex: '#1a1a1a' }],
    sizes: ['Standard Cafeteria Height']
  }
};

if (typeof window !== 'undefined') {
  window.PRODUCTS_DB = PRODUCTS_DB;
}
