/* ═══════════════════════════════════════════════════
   H&H CONCEPTS — MAIN MULTI-PAGE SCRIPT
   Page Transitions, Category Filtering, Centered Modals, Interactivity
═══════════════════════════════════════════════════ */

'use strict';

/* ── PRELOADER ─────────────────────────────────── */
(function preloader () {
  const el    = document.getElementById('preloader');
  const pct   = document.getElementById('preloader-pct');
  const bar   = el ? el.querySelector('.preloader-bar') : null;
  if (!el || !pct || !bar) return;

  let current = 0;
  const target = 100;

  const fill = document.createElement('div');
  fill.style.cssText = 'height:100%;background:#ffffff;border-radius:2px;width:0%;transition:width .05s linear';
  bar.appendChild(fill);

  function done () {
    el.classList.add('hidden');
    setTimeout(() => el.remove(), 800);
    document.body.style.overflow = '';
  }

  function tickFill () {
    if (current < target) {
      const remaining = target - current;
      const step = Math.max(0.5, remaining * 0.04 + Math.random() * 1.5);
      current = Math.min(target, current + step);
      pct.textContent = Math.floor(current);
      fill.style.width = current + '%';
    }
    if (current < target) {
      requestAnimationFrame(tickFill);
    } else {
      setTimeout(done, 350);
    }
  }

  document.body.style.overflow = 'hidden';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(tickFill, 60));
  } else {
    setTimeout(tickFill, 60);
  }

  window.addEventListener('load', () => {
    current = Math.max(current, 85);
  });
})();

/* ── DOM READY ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── PAGE TRANSITION OVERLAY ────────────────── */
  const curtain = document.getElementById('page-curtain');
  
  function navigateWithCurtain (url) {
    if (!curtain) {
      window.location.href = url;
      return;
    }
    curtain.classList.remove('exit');
    curtain.classList.add('active');
    setTimeout(() => {
      window.location.href = url;
    }, 320);
  }

  // Intercept all internal page links for smooth curtain transitions
  document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        e.preventDefault();
        navigateWithCurtain(href);
      }
    });
  });

  /* ── CUSTOM CURSOR ─────────── */
  const cursor   = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (cursor && follower) {
    let fx = 0, fy = 0, mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    });
    (function animFollower () {
      fx += (mx - fx) * 0.14;
      fy += (my - fy) * 0.14;
      follower.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`;
      requestAnimationFrame(animFollower);
    })();
    document.querySelectorAll('a,button,[role="button"],.cat-card,.col-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('is-active'); follower.classList.add('is-active'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('is-active'); follower.classList.remove('is-active'); });
    });
  }

  /* ── SCROLL PROGRESS BAR ──── */
  const progressLine = document.querySelector('.scroll-progress i');
  if (progressLine) {
    window.addEventListener('scroll', () => {
      const max  = document.documentElement.scrollHeight - window.innerHeight;
      const pct  = max > 0 ? window.scrollY / max : 0;
      progressLine.style.height = (pct * 100) + '%';
    }, { passive: true });
  }

  /* ── HEADER & MOBILE MENU ─────── */
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        if (!document.querySelector('.subpage-hero')) {
          header.classList.remove('scrolled');
        }
      }
    }, { passive: true });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── REVEAL ON SCROLL ─────── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── COUNT-UP STATS ─────────── */
  const counters = document.querySelectorAll('.reveal-count');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const num = el.querySelector('.stat-number');
        const end = parseInt(el.dataset.count, 10);
        if (num && end) {
          let current = 0;
          const sup = num.querySelector('sup') ? num.querySelector('sup').outerHTML : '';
          const step = Math.ceil(end / 60);
          const timer = setInterval(() => {
            current = Math.min(end, current + step);
            num.innerHTML = current + sup;
            if (current >= end) clearInterval(timer);
          }, 24);
        }
        countObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObs.observe(el));

  /* ── FAQ ACCORDION ─────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        if (btn.nextElementSibling) btn.nextElementSibling.classList.add('open');
      }
    });
  });

  /* ── CATALOG CATEGORY FILTERING (CATEGORIES PAGE) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.categories-grid .cat-card');
  if (filterBtns.length && catalogCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const group = btn.dataset.filter;
        catalogCards.forEach(card => {
          if (group === 'all' || card.dataset.group === group) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── CONTACT FORM ───────────── */
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  if (form && formMsg) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.style.opacity = '.6';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Sent ✓';
        formMsg.textContent = 'Thank you! We will be in touch within 1 business day.';
        btn.style.opacity = '1';
        btn.disabled = false;
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Enquiry →';
          formMsg.textContent = '';
        }, 5000);
      }, 1400);
    });
  }

  /* ── MODAL DATA ─────────────── */
  const modalData = {
    executive: {
      title: 'Executive Seating',
      eyebrow: 'Premium Office Chairs',
      img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80',
      desc: 'Our executive seating range spans from high-end imported leather chairs to domestic ergonomic models — all engineered for long-hour comfort, lumbar support and refined aesthetics. Perfect for boardrooms, CEO cabins, and partner offices.',
      products: ['Freedom','Falcon Elite','Galaxy Mesh','Galaxy Grey','Bassel','ZOY','Norway','Troy','Cross','Acosta','Attitude','Bentley','Calvin','Martin','Oyster','Magnet','Marquis','Winster','Jaguar','Heritage','Legacy','Daisy','Epson','Stanley','Boss','Austin','Dacota','Oxford','Virgo','Venice','Lucy','Sleek','Elite Sleek'],
      meta: 'From ₹8,500 · Up to ₹1,30,000 · All prices ex-GST'
    },
    ergo: {
      title: 'Ergo Office Chairs',
      eyebrow: 'FBI Ergo Series · 24-month warranty',
      img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=80',
      desc: 'FBI Ergo Series (New Collection 2024) — designed from the ground up for all-day comfort. Features adjustable seat height, lumbar support, adjustable armrests, swivel base, breathable mesh and PU waterfall seat cushions for extended seating.',
      products: ['Nova','Ignis','Pinnacle','Heaven','Ventura','Jupiter','Pulse','Vibe','Gallop','Orbit','Nex','Vega','Cooper','Levo','Pisces','Czar'],
      meta: 'Adjustable height · Lumbar & headrest · 24-month warranty support'
    },
    workstation: {
      title: 'Workstation Chairs',
      eyebrow: 'Ergonomic everyday seating',
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
      desc: 'Built for open-plan offices, co-working spaces and institutional settings. A wide range from imported premium models (IMP) to economical domestic variants (IND) — all with mesh backs, lumbar support and class 4 gas lift.',
      products: ['Lido','Smart','Norway','Brick','Hexa','Trio BLK','Trio GREY','Deca','Pearl','Sweety','Glaze','Omega','Winner','Octa','Time','Roy/Troy','Zen','Karina','Polo','Eon','Vista','Smile','Ergon','Jupitor','Sky','Leo','Kabel','Flash','Quest','Vitro','Colt','Mono','Sara','Queen','Flip Tablet','Key Tablet','Sweden Tablet','Cosmo Tablet'],
      meta: 'From ₹5,200 (Mono IND) · Up to ₹32,000 (Norway IMP) · Visitor chairs also available'
    },
    officechairs: {
      title: 'Office Chair Series',
      eyebrow: 'Style meets performance',
      img: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=900&q=80',
      desc: 'Mid-back and high-back office chairs that blend ergonomics with distinctive design. Suitable for manager cabins, meeting rooms and premium open-plan offices. Each model available in multiple colour and back options.',
      products: ['Aviator','Avenger','Jacob','Alaska','Boom','Crecent','Alligator','Inox','Passion','Zorro','Panther','Mustang','Banf','Oban','Coral','Apex','Nova','Fusion','Eclipse'],
      meta: 'High Back · Medium Back · Multiple colour variants'
    },
    lounge: {
      title: 'Lounge Chairs',
      eyebrow: 'Hospitality & Premium Interiors',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      desc: 'A curated range of single-seat lounge chairs for hotel lobbies, corporate reception areas, premium residences and waiting lounges. Available with footrests and in a wide variety of upholstery options.',
      products: ['Belgium','Capitol','Austria','Fiji','Bulgaria','Vivienne','Maxx','Roogle','Greece','Epitome','Bern','Sasaski','Enigma','Antartica','Brussels','Bavuma','Bonanza','Bugatti','Sierra','Lucerne','Romania','Milos','Ferrara','Sorrento','Burano','Carnival','London','Jamaica','Prius','Athens','Edinburg','Amalfi','Lexus','Milano','Swing','Gemini','Capri','Rome','Caviana','Lawson','Samson','Tucson','Siam','Barbados','Kiwis','Prince','Paris','Santosa','Sumo','Knoll','Abira','Alex','Star','Andros','Boston','Swan','Sofia','Stefano','Toledo','Dayton','Luv'],
      meta: 'From ₹9,800 (Swan) · Up to ₹84,000 (Lazy Boy Set) · Footrest versions available'
    },
    sofa: {
      title: 'Sofa Series',
      eyebrow: '1-2-3 Seater in Premium Fabric',
      img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80',
      desc: 'A comprehensive collection of single, double and triple-seater sofas for residences, hospitality suites, corporate lounges and showrooms. All available in a range of fabric options with per-metre fabric pricing included.',
      products: ['Nova','Arcus','Canvas','Vegas','Lopez','Flame','Zurich','New Vogue','Chester','Heritage','Imperial','Glamour','Fortune (IMP)','Liberty','Tokyo','Mapple','Zara','Oxy','Spencer (IMP)','June','Dream','Meridian','California','Saphire','Curve','Tiara','Florance','Rapid','Corbusier','Barcelona','Kitkat','Havoc','Futon','Veronica','Crystal','Benz','Nero','Aero'],
      meta: '1-Seater from ₹18,000 · 3-Seater up to ₹1,02,000 · Fabric @ ₹200–600/mtr'
    },
    hotel: {
      title: 'Hotel Room Furniture',
      eyebrow: 'Fit My Hotel · Complete Hospitality Solutions',
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
      desc: 'A premium range of bedroom furniture designed specifically for boutique hotels and luxury hospitality. From illuminated floating beds and elegant nightstands to workstations, vanity desks and accent seating.',
      products: ['Lumino Bed Suite (FMH-S-03)','Aura Float Bed (FMH-B-01)','Lume Haven (FMH-B-02)','Lume Horizon (FMH-B-03)','Nexus Suite (FMH-S-01)','Linear Atelier (FMH-S-02)','Eris Chair (FMH-C-01)','Vira Round Table (FMH-T-01)','Kora Round Table (FMH-T-02)','Vesper Accent Table (FMH-T-03)','Kova Accent Table (FMH-T-04)','Aris Round Table (FMH-T-05)','Quadra (FMH-T-06)','Aurea (FMH-T-07)','Modus Nightstand (FMH-T-08)','The Orb (FMH-T-09)','Aura Mini-Bar (FMH-T-10)'],
      meta: 'Custom hospitality solutions · Manufacturing at Dehradun · Pan-India delivery'
    },
    dining: {
      title: 'Dining Chair Collection',
      eyebrow: 'W.E.F. 1st Jan 2026',
      img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
      desc: 'An extensive range of premium dining chairs for residences, restaurants, hotel dining rooms and banquet halls. Each design brings a distinct character — from classic wood-frame silhouettes to modern metal legs.',
      products: ['Snow','Cherry','Lara','Grace','Skyros','Geneva','Aries','Dune (Wood & Metal)','Luna Metal','Sierra','Amigo','Coach','Tisca','Alto','Berry','Dior','Spice','Giona','Bliss','Slavia','Pablo','Nectar','Arco','Phoenix','Casper','Virtus','Ash','Ciana','Linus','Alina','Dalos','Picasso','Yoko','Ascona','Oracle','Zeta','Aura','Olive Rev','Olive Fixed','Jimmy','Corby','Vero','Softy','Iris (IND)','Carange','Zenith','Rini','Vento','Melisa','Meraki','Cairo','Root','Chris','Cowboy','Tango','Charlie','Blake'],
      meta: 'From ₹5,800 (Softy) · Up to ₹32,000 (Snow) · All prices per unit ex-GST'
    },
    cafe: {
      title: 'Café & Café Chair Series',
      eyebrow: 'W.E.F. 15th Dec 2025',
      img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      desc: 'Stylish and versatile café chairs for restaurants, bistros, cafes and food courts. A range of PP, cushioned and metal-base designs in multiple colourways including Gold, Woody and Metal finishes.',
      products: ['Lisbon Cush Woody','Lisbon PP','Toxy Gold','Toxy Metal','Melody PP BLK Cush','Melody PP WHT Cush','Texla','Delsey (IND)','Toxy Woody','Vibe','Cane Arms','Jerry','Stripe','Swing','Bistro w/o Arms','Bistro','Sterling','Cane w/o Arms','Sweden (PP)','Bonny Gold','Fin','Zuri','Yuki','Sweden DLX (Cush)','Sweden CH','Bonny','Furry'],
      meta: 'From ₹2,400 (Zuri/Yuki) · Up to ₹8,500 (Bonny Gold/Fin) · Café tables also available'
    },
    cafeteriaseries: {
      title: 'Cafeteria Series (Modular)',
      eyebrow: 'Design Patent Certified',
      img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80',
      desc: 'Patent-protected institutional and corporate cafeteria chairs in PP and metal variants. Multiple colour options, stackable designs, and bar stool versions available. Includes a full range of matching cafeteria tables in stainless steel, MS powder coated, and metal frame with wood finish.',
      products: ['Vision','Cube','Hexa','Breach','UNO','UNO XR','Bravo','Bravo XR','Tulip','Tulip Metal','Classic Alpha','Classic Gamma','Classic Metal','Classic Beta','Classic Zeta','Classic Smart','Ikon','Ikon Smart','Ikon Metal','Iris','Iris Smart','Delta','Delta Smart','Delta Platinum','Neon','Leo','Leo Smart','Leo Platinum','Virgo','Wave','Wave Smart','Dutch','Aqua Metal','Aqua Glow','Aqua Smart','Maxx Bar Stool I/II','Maxx Shell','Maxx Revolving','Turret','Cozy','Brew','Jewel','Fusion','Fusion Smart','Fusion Metal','Mirage Flex'],
      meta: 'Multiple colours · Design Patent Nos. 304920–357692 · Cafeteria tables QT-02 to QT-39'
    },
    recliner: {
      title: 'Recliner Series',
      eyebrow: 'Fine Leather · Motor Reclining',
      img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80',
      desc: 'Premium fine leather recliners from manual to fully motorised. Our Marbelo features a double motor with massager and heating pad. Available in multiple colour options with rocking, swivel and footrest configurations.',
      products: ['River (Single Motor)','Stone (Double Motor)','Arbor (Double Motor)','Ancora (Rotating Footrest)','Marbelo (Double Motor + Massager + Heating)','Neroli (Manual + Swivel + Rocking)','Creta (Manual)','Marcus (Double Motor)','London (Rocking + Footrest)','Spencer (Single Motor)','Phantom (Electric Motorized)'],
      meta: 'From ₹38,500 (Neroli) · Up to ₹1,20,000 (Marbelo) · Fine leather upholstery'
    },
    tables: {
      title: 'Executive Desks & Conference Tables',
      eyebrow: 'FBI Table Catalogue',
      img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
      desc: 'A comprehensive range of executive desks, conference tables, workstations, study tables, reception tables and mini discussion tables. Available in multiple sizes (A, B, C variants) from 60" to 84" width.',
      products: ['Elegance','Grace','Elite','Glamour','Vector','Alpha','Gamma','Vega','Edge','Inspire','Style','Wave','Art','Multipurpose Desk','Workmate','Corner Mate','Meet 1–20','Flare','Lux','Return','Vogue','Overlap','More','Charm','Eco','Mini Discussion Tables'],
      meta: 'Widths 60" to 84" · Computer Lab · Conference Rooms · Luxury Office fitout'
    },
    highcounter: {
      title: 'High Counter Stools',
      eyebrow: 'Bars · Reception · Bistros',
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
      desc: 'Bar stools and high-counter chairs for hotel bars, café counters, reception desks and bistros. A range of styles from classic wooden stools to modern acrylic and metal designs.',
      products: ['Astoria','Vice','Fanny','Click','Pulse Wood','Danny','Rhodes','Ricky','Skyros HC','Bolzano','Woody','Pedro','Tanriff','Rocky','Erica','Eagle','Rimini (Acrylic)','Rimini (PP)','Tobago','Melody HC','Opava','Santorini','Florida','Dale','Trento','Bistro HC','Tuxedo (HC)','Derby','Dove','Duke','Sweden HC','Finch','Joss','Rooney','Digi'],
      meta: 'From ₹4,800 (Click) · Up to ₹18,000 (Ricky) · W.E.F. 1st July 2025'
    },
    tablestand: {
      title: 'Centre, Side & Café Tables',
      eyebrow: 'Tables & Stands · Console Tables',
      img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80',
      desc: 'An extraordinary selection of artisan centre tables, side tables, café and bar tables, console tables, and table frames. Includes height-adjustable and folding options. Also features the premium Lifting Desk with single or double motor.',
      products: ['The Leaf (1920×390)','Mini Leaf','XM 018','BN-40','Centre Tables (CJ,YB,SC,V,T series)','Side Tables (SL,CJ,B,GT series)','Café Tables (SD,Z,T,All Season,Milano Glass)','Bar Tables','Console Tables (ST series)','Table Frames (Z,JD,E,BL series)','Lifting Desk (Single/Double Motor/Premium)'],
      meta: 'Café tables from ₹9,000 · The Leaf @ ₹1,10,000 · Lifting Desk ₹19,000–₹38,000'
    }
  };

  /* ── MODAL LOGIC (EXACTLY CENTERED) ───────────── */
  const dialog     = document.getElementById('cat-modal');
  const modalClose = document.getElementById('modal-close-btn');

  function openModal (key) {
    const d = modalData[key];
    if (!d || !dialog) return;
    document.getElementById('modal-eyebrow').textContent  = d.eyebrow;
    document.getElementById('modal-heading').textContent  = d.title;
    document.getElementById('modal-desc').textContent     = d.desc;
    document.getElementById('modal-meta').textContent     = d.meta;
    const img = document.getElementById('modal-img');
    if (img) { img.src = d.img; img.alt = d.title; }
    const prods = document.getElementById('modal-products');
    if (prods) prods.innerHTML = d.products.slice(0, 20).map(p => `<span>${p}</span>`).join('');
    
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }

  if (dialog) {
    document.querySelectorAll('[data-modal]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        openModal(el.dataset.modal);
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        dialog.close();
        document.body.style.overflow = '';
      });
    }

    dialog.addEventListener('click', e => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        dialog.close();
        document.body.style.overflow = '';
      }
    });

    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  }

  // Auto open modal if URL query param ?cat=key is present
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam && modalData[catParam]) {
    setTimeout(() => openModal(catParam), 400);
  }

  /* ── PIXEL DISSOLVE & MAGNETIC SQUARES FOR CASE STUDY CARDS ── */
  document.querySelectorAll('[data-pixel-grid]').forEach(grid => {
    const card = grid.closest('.case-card');
    if (!card) return;

    // Build 12 columns x 8 rows = 96 blocks
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 12; c++) {
        const block = document.createElement('div');
        block.className = 'pixel-block';
        block.style.width = (100 / 12) + '%';
        block.style.height = (100 / 8) + '%';
        grid.appendChild(block);
      }
    }

    const blocks = grid.querySelectorAll('.pixel-block');

    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
      blocks.forEach((block, idx) => {
        const r = Math.floor(idx / 12);
        const c = idx % 12;
        const delayIn = (r + c) * 0.018; // diagonal stagger delay
        block.style.transitionDelay = delayIn + 's';
      });
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
      blocks.forEach((block, idx) => {
        const r = Math.floor(idx / 12);
        const c = idx % 12;
        const delayOut = ((8 - r) + (12 - c)) * 0.012; // inverse diagonal stagger delay
        block.style.transitionDelay = delayOut + 's';
      });
    });

    // Magnetic hover squares reaction
    const magSquares = card.querySelectorAll('.magnetic-square');
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      magSquares.forEach((sq, i) => {
        const factor = (i + 1) * 6; // magnet factor
        const tx = relX * factor * 10;
        const ty = relY * factor * 10;
        sq.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      magSquares.forEach(sq => {
        sq.style.transform = 'translate(0px, 0px)';
      });
    });
  });

  /* ── PARALLAX FLOATING SQUARES ── */
  const parallaxContainer = document.getElementById('parallax-squares');
  if (parallaxContainer) {
    window.addEventListener('scroll', () => {
      const rect = parallaxContainer.getBoundingClientRect();
      const winH = window.innerHeight;
      if (rect.top < winH && rect.bottom > 0) {
        const progress = (winH - rect.top) / (winH + rect.height);
        const squares = parallaxContainer.querySelectorAll('.floating-square');
        squares.forEach((sq, idx) => {
          const factor = parseFloat(sq.dataset.parallaxFactor || 100);
          const translateY = -(progress * factor);
          sq.style.transform = `translateY(${translateY}px)`;
        });
      }
    }, { passive: true });
  }

});

