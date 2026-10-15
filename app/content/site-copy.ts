export const LANDING_COPY = {
  en: {
    dir: "ltr",
    lang: "EN",
    langAlt: "عربي",
    brand: "Green Ion",
    nav: {
      links: ["Home", "About Us", "Our Services", "How It Works", "Projects", "Calculator", "Contact"],
      cta: "Book Assessment Appointment",
    },
    hero: {
      chip: "⚡ Clean Energy For Saudi Arabia",
      h1a: "Power Your World",
      h1b: "With Green Energy",
      sub: "Professional solar installation, smart monitoring, and lifetime maintenance for homes and businesses. Cut your electricity bill by up to 90%.",
      cta1: "Get Free Assessment",
      cta2: "Watch How It Works",
      badges: [["☀", "10-Year Warranty"], ["⚡", "Same-Week Install"], ["🌿", "Carbon Neutral"], ["★", "4.9 / 5 Rating"]],
    },
    stats: [
      { val: 5400, suf: "+", label: "Installations" },
      { val: 98, suf: "%", label: "Customer Satisfaction" },
      { val: 1200, suf: "MW", label: "Energy Generated" },
      { val: 90, suf: "%", label: "Avg. Bill Reduction" },
      { val: 15, suf: "yr", label: "Experience" },
    ],
    solutions: {
      chip: "Our Solutions",
      h2a: "Solar for every",
      h2b: "application",
      sub: "From single-family homes to large agricultural estates — we have the expertise and hardware to deliver results.",
      cards: [
        { icon: "🏠", title: "Residential Solar", badge: "Most Popular", highlight: true, desc: "Custom-designed rooftop systems for your home. Reduce your electricity bill from day one.", items: ["Panel sizing & design", "Smart energy monitoring", "Battery storage options", "Grid tie-in & net metering", "10-year performance warranty"] },
        { icon: "🏢", title: "Commercial Solar", badge: null, highlight: false, desc: "Scale your business energy independence with enterprise-grade solar infrastructure.", items: ["High-capacity systems", "ROI analysis & reporting", "Remote SCADA monitoring", "Tax incentive consulting", "Priority maintenance SLA"] },
        { icon: "🌾", title: "Agricultural Solar", badge: null, highlight: false, desc: "Power farms, irrigation, and processing facilities with reliable off-grid solutions.", items: ["Ground-mount & tracker systems", "Pump & irrigation power", "Off-grid capability", "Rugged weather-proof hardware", "Seasonal performance tuning"] },
        { icon: "🔋", title: "Battery Storage", badge: null, highlight: false, desc: "Store excess energy and use it when you need it most — day or night, rain or shine.", items: ["LiFePO4 battery banks", "Whole-home backup", "Time-of-use optimization", "EV charging integration", "Smart load management"] },
      ],
    },
    services: {
      chip: "Our Services",
      h2a: "Our Packages",
      h2b: "",
      sub: "Five ready solar pumping offers built from the attached technical and financial sheets.",
      packages: [
        { 
          id: "30hp",
          title: "30 HP", 
          badge: "Solar Pumping", 
          price: "50,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 30 HP pump with 96 panels of 650W, an INVT 30kW inverter, and 4 ZAM structure sets for dependable agricultural water pumping.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "650W panels, quantity 96, selected for stable pumping performance.", "—"],
            ["Inverter", "INVT 30kW 380V 3PH inverter for solar pumping applications.", "—"],
            ["Steel Structure", "4 ZAM steel sets for outdoor mounting and corrosion resistance.", "—"],
            ["DC + AC Cables", "Type C DC cable with suitable outdoor AC cable and accessories.", "—"],
            ["Installation & Commissioning", "Specialized engineering and technical team for installation and startup.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "30 HP"],
            ["Inverter Capacity", "30 kW (INVT)"],
            ["Panel Count", "96 panels"],
            ["Panel Type", "650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "50kw",
          title: "50 HP", 
          badge: "Solar Pumping", 
          price: "75,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 50 HP pump with 96 Aiko 650W panels, an INVT 55kW inverter, and a galvanized ZAM structure for reliable agricultural water pumping.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 96, with high conversion efficiency and strong field performance.", "—"],
            ["Inverter", "INVT 55kW 380V 3PH inverter with advanced control for solar water pumping.", "—"],
            ["Steel Structure", "6 ZAM steel sets for outdoor mounting and wind resistance up to 100 km/h.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cabling with outdoor-rated AC cable and clean routing accessories.", "—"],
            ["Installation & Commissioning", "Specialized engineering team for installation, testing, and startup handover.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "50 HP"],
            ["Inverter Capacity", "55 kW (INVT)"],
            ["Panel Count", "96 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "60kw",
          title: "60 HP", 
          badge: "Solar Pumping", 
          price: "100,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 60 HP pump with 128 Aiko 650W panels, an INVT 55kW inverter, and a galvanized ZAM structure tailored for stable field operation.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 128, selected for efficient pumping output.", "—"],
            ["Inverter", "INVT 55kW 380V 3PH inverter with industrial-grade protection.", "—"],
            ["Steel Structure", "8 ZAM steel sets with corrosion resistance and outdoor durability.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cabling with matching AC cable for external use.", "—"],
            ["Installation & Commissioning", "Professional engineering and technical team for turnkey delivery.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "60 HP"],
            ["Inverter Capacity", "55 kW (INVT)"],
            ["Panel Count", "128 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "100hp",
          title: "100 HP", 
          badge: "Solar Pumping", 
          price: "150,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 100 HP pump with 192 Aiko 650W panels, an INVT 90kW inverter, and 18 ZAM structure sets for efficient field operation.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 192, with high efficiency and reliable output.", "—"],
            ["Inverter", "INVT 90kW 380V 3PH inverter with stable industrial performance.", "—"],
            ["Steel Structure", "18 ZAM steel sets for outdoor durability and wind resistance.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cable with suitable AC cable for agricultural sites.", "—"],
            ["Installation & Commissioning", "Professional installation, testing, and system handover by a specialized team.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "100 HP"],
            ["Inverter Capacity", "90 kW (INVT)"],
            ["Panel Count", "192 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "125hp",
          title: "125 HP", 
          badge: "Solar Pumping", 
          price: "185,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 125 HP pump with 240 Aiko 650W panels, an INVT 110kW inverter, and 18 ZAM structure sets for stable agricultural pumping.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 240, configured for strong solar pumping output.", "—"],
            ["Inverter", "INVT 110kW 380V 3PH inverter for high-capacity pumping systems.", "—"],
            ["Steel Structure", "18 ZAM steel sets designed for outdoor stability and anti-corrosion performance.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cable with AC cable for external agricultural use.", "—"],
            ["Installation & Commissioning", "Specialized engineering team for installation, startup, and final handover.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "125 HP"],
            ["Inverter Capacity", "110 kW (INVT)"],
            ["Panel Count", "240 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "150kw",
          title: "150 HP", 
          badge: "Solar Pumping", 
          price: "220,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 150 HP pump with 288 Aiko 650W panels, an INVT 132kW inverter, and an 18-set ZAM structure for high-output agricultural operation.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 288, balanced for strong daily pumping production.", "—"],
            ["Inverter", "INVT 132kW 380V 3PH inverter for three-phase pumping applications.", "—"],
            ["Steel Structure", "18 ZAM steel sets with wind resistance and long outdoor service life.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cabling with high-quality AC cable and accessories.", "—"],
            ["Installation & Commissioning", "Field engineering team for installation, testing, and final system تشغيل.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "150 HP"],
            ["Inverter Capacity", "132 kW (INVT)"],
            ["Panel Count", "288 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "200kw",
          title: "200 HP", 
          badge: "Solar Pumping", 
          price: "300,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 200 HP pump with 384 Aiko 650W panels, an INVT 200kW inverter, and an 18-set ZAM structure engineered for intensive agricultural pumping.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 650W panels, quantity 384, with proven efficiency for large pump duty cycles.", "—"],
            ["Inverter", "INVT 200kW 380V 3PH inverter with stable industrial performance.", "—"],
            ["Steel Structure", "18 ZAM steel sets for robust mounting and corrosion resistance.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cabling with durable AC cable for field installation.", "—"],
            ["Installation & Commissioning", "Specialized technical crew for full installation and commissioning.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "200 HP"],
            ["Inverter Capacity", "200 kW (INVT)"],
            ["Panel Count", "384 panels"],
            ["Panel Type", "Aiko 650W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "250hp",
          title: "250 HP", 
          badge: "Solar Pumping", 
          price: "400,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 250 HP pump with 512 Aiko 659W panels, an INVT 250kW inverter, and 32 ZAM structure sets for large agricultural pumping sites.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 659W panels, quantity 512, for high daily pumping yield.", "—"],
            ["Inverter", "INVT 250kW 380V 3PH inverter with advanced control for large pumps.", "—"],
            ["Steel Structure", "32 ZAM steel sets built for outdoor stability and corrosion resistance.", "—"],
            ["DC + AC Cables", "AC and DC cable package sized for the full system installation.", "—"],
            ["Installation & Commissioning", "Specialized technical team for installation, testing, and startup.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "250 HP"],
            ["Inverter Capacity", "250 kW (INVT)"],
            ["Panel Count", "512 panels"],
            ["Panel Type", "Aiko 659W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "300hp",
          title: "300 HP", 
          badge: "Solar Pumping", 
          price: "450,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping offer for a 300 HP pump with 576 Aiko 659W panels, an INVT 315kW inverter, and 34 ZAM structure sets for heavy-duty agricultural operation.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "Aiko 659W panels, quantity 576, selected for large-scale pumping output.", "—"],
            ["Inverter", "INVT 315kW 380V 3PH inverter for high-load solar pumping systems.", "—"],
            ["Steel Structure", "34 ZAM steel sets engineered for long outdoor service life.", "—"],
            ["DC + AC Cables", "TOP CABLE DC cable with suitable AC cable and field accessories.", "—"],
            ["Installation & Commissioning", "Specialized team for installation, testing, operation, and final delivery.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "300 HP"],
            ["Inverter Capacity", "315 kW (INVT)"],
            ["Panel Count", "576 panels"],
            ["Panel Type", "Aiko 659W"],
            ["System Type", "Solar water pumping"]
          ]
        },
        { 
          id: "350kw",
          title: "350 HP", 
          badge: "Head Operation", 
          price: "500,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping and electric-head operation offer for a 350 HP load with 640 panels of 650W, an INVT 315kW inverter, and 40 ZAM steel structure sets for heavy-duty field performance.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "650W panels, quantity 640, selected for large-scale pumping and head operation.", "—"],
            ["Inverter", "INVT 315kW 380V 3PH inverter for demanding high-capacity service.", "—"],
            ["Steel Structure", "40 ZAM steel sets designed for outdoor use, stability, and wind resistance.", "—"],
            ["DC + AC Cables", "DC and AC cabling package sized for the full field installation.", "—"],
            ["Installation & Commissioning", "Specialized team for installation, تشغيل, and final client handover.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "350 HP"],
            ["Inverter Capacity", "315 kW (INVT)"],
            ["Panel Count", "640 panels"],
            ["Panel Type", "650W"],
            ["System Type", "Solar pumping + electric head operation"]
          ]
        },
        { 
          id: "750hp",
          title: "750 HP", 
          badge: "Head Operation", 
          price: "1,000,000", 
          priceUnit: "SAR", 
          summary: "Solar pumping and electric-head operation offer for a 750 HP load with 1312 panels of 650W, an INVT 630kW inverter, and 82 ZAM steel structure sets for utility-scale field performance.",
          cta: "Order Now",
          components: [
            ["Solar Panels", "650W panels, quantity 1312, configured for high-capacity pumping and head operation.", "—"],
            ["Inverter", "INVT 630kW 380V 3PH inverter for very large industrial pumping applications.", "—"],
            ["Steel Structure", "82 ZAM steel sets designed for outdoor stability and wind resistance up to 100 km/h.", "—"],
            ["DC + AC Cables", "DC cable type C with suitable outdoor AC cable and full routing accessories.", "—"],
            ["Installation & Commissioning", "Specialized engineering team for installation, testing, startup, and final handover.", "—"]
          ],
          warranties: [
            ["Free Maintenance", "3 years"],
            ["Steel Structure Anti-Rust Warranty", "10 years"],
            ["Panel Manufacturing Warranty", "25 years"],
            ["Panel Performance Warranty", "90% for 10 years"],
            ["Panel Performance Warranty", "80% for 25 years"],
            ["Inverter Warranty", "2 years"]
          ],
          quantities: [
            ["Pump Capacity", "750 HP"],
            ["Inverter Capacity", "630 kW (INVT)"],
            ["Panel Count", "1312 panels"],
            ["Panel Type", "650W"],
            ["System Type", "Solar pumping + electric head operation"]
          ]
        }
      ]
    },
    howit: {
      chip: "The Process",
      h2: "Going solar in 4 simple steps",
      sub: "From first call to first kilowatt — we handle everything end to end.",
      steps: [
        { n: "01", icon: "📋", title: "Free Assessment", desc: "Our energy consultant visits your site, analyses usage patterns, roof orientation, and local solar irradiance to design the optimal system." },
        { n: "02", icon: "📐", title: "Custom Design", desc: "We engineer a bespoke solar layout — maximising panel efficiency, inverter sizing, battery capacity, and cable routing." },
        { n: "03", icon: "🔧", title: "Professional Install", desc: "Certified electricians and roof specialists install your system in as little as one day, with zero mess and zero disruption." },
        { n: "04", icon: "📊", title: "Monitor & Enjoy", desc: "Your smart monitoring system shows live production, savings, and CO2 avoided. Our team monitors performance 24/7." },
      ],
    },
    calc: {
      chip: "Savings Calculator",
      h2: "See your potential savings",
      sub: "Adjust the sliders to match your home and get an instant estimate.",
      billLabel: "Monthly Electricity Bill",
      areaLabel: "Roof / Ground Area",
      sys: "RECOMMENDED SYSTEM",
      sysDesc: "Approx.",
      panels: "panels × 550W",
      results: "Your Estimated Savings",
      rows: ["Annual Savings", "Annual Generation", "CO₂ Avoided", "Payback Period"],
      units: ["per year", "produced / year", "tonnes per year", "return on investment"],
      btn: "Get Detailed Report — Free →",
    },
    projects: {
      chip: "Our Projects",
      h2: "Completed installations",
      cats: ["All"],
      items: [
        { slug: "project-01", title: "Project 01", loc: "Saudi Arabia", kw: "", type: "Solar Installation", color: "#E8F5E9", tag: "Featured", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502193/proj1_wdfk4u.mp4" },
        { slug: "project-02", title: "Project 02", loc: "Saudi Arabia", kw: "", type: "Solar Installation", color: "#F1F8E9", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502339/proj2_my4lgh.mp4" },
        { slug: "project-03", title: "Project 03", loc: "Saudi Arabia", kw: "", type: "Solar Installation", color: "#E8F0E9", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502425/proj3_v5votz.mp4" },
      ],
      viewCase: "Watch project video →",
      size: "System size:",
    },
    products: {
      chip: "Hardware",
      h2: "Premium-grade equipment",
      getQuote: "Get Quote",
      items: [
        { name: "Eco 650W Panel", spec: "High-efficiency mono panel", price: "SAR 680", tag: "Best Value", image: "/eco-panel-650w.png" },
        { name: "INVT Inverter", spec: "String inverter with MPPT", price: "SAR 4,200", tag: null, image: "/invt-inverter.png" },
      ],
    },
    whyus: {
      chip: "Why Green Ion",
      h2a: "Why Choose",
      h2b: "Green Ion?",
      sub: "Choosing Green Ion is not just selecting a service provider. It is an investment in quality and innovation. Here is what makes us a leading company in the Saudi market.",
      stat1n: "Vision 2030",
      stat1l: "National commitment to renewable energy",
      stat2n: "EPC",
      stat2l: "Integrated solutions from study to maintenance",
      cards: [
        { icon: "🇸🇦", title: "Commitment to Saudi Vision 2030", desc: "We actively contribute to achieving the Kingdom's ambitious goals to increase the share of renewable energy in the national energy mix, strengthening both environmental and economic sustainability." },
        { icon: "🔋", title: "Latest Global Technologies", desc: "Our projects rely on the latest solar panel technologies and smart Lithium-Ion storage systems that deliver the highest efficiency levels and a longer operational lifespan for each plant." },
        { icon: "👷", title: "Specialized Expert Team", desc: "Our team includes elite certified engineers and technicians with a strong record in designing and executing complex projects under demanding climate conditions." },
        { icon: "📐", title: "Tailored End-to-End Solutions", desc: "We provide accurate feasibility studies and innovative engineering designs tailored to each client, supported by ongoing follow-up and periodic maintenance to ensure consistent performance." },
        { icon: "🏆", title: "Local Content and Quality", desc: "We are committed to the highest global quality standards while placing strong emphasis on supporting local content and technology localization in the energy sector." },
      ],
    },
    testimonials: {
      chip: "Testimonials",
      h2: "Trusted by thousands",
      items: [
        { name: "Khalid Al-Rashid", role: "Homeowner · Riyadh", init: "KR", color: "#76C442", quote: "Our electricity bill dropped from SAR 1,800 to under SAR 90 per month. The Green Ion team handled everything — permits, installation, even the DEWA paperwork." },
        { name: "Fatima Al-Zahrawi", role: "Farm Owner · Qassim", init: "FZ", color: "#2E7D32", quote: "Powering our entire irrigation system with solar has saved us over SAR 280,000 this year alone. The ROI was better than any investment we've ever made." },
        { name: "Omar Bin Hassan", role: "Commercial Developer · Jeddah", init: "OH", color: "#2196F3", quote: "We've deployed Green Ion systems across three of our commercial properties. The monitoring platform is exceptional and their after-sales support is world-class." },
      ],
    },
    faq: {
      chip: "FAQ",
      h2: "Frequently asked questions",
      items: [
        { q: "How long does a residential installation take?", a: "Most home installations are completed in 1–2 days. Larger commercial systems typically take 3–7 days. All equipment arrives pre-staged to minimise disruption." },
        { q: "Will solar work during power outages?", a: "Standard grid-tied systems shut down during outages for safety. With our PowerVault battery storage, you stay powered 24/7 regardless of grid status." },
        { q: "What maintenance is required?", a: "Very little. Panels are self-cleaning in most climates. We recommend a professional inspection once a year. Our monitoring alerts us to any issues automatically." },
        { q: "Do you handle DEWA / SEC interconnection?", a: "Yes — we manage all paperwork with your utility provider, including net-metering applications, export agreements, and final sign-off from the relevant authority." },
        { q: "Is solar suitable for my location?", a: "Saudi Arabia, the UAE, and the broader GCC are among the best solar regions in the world with 2,000–3,500 peak sun hours annually." },
        { q: "What happens to panels after 25 years?", a: "Panels retain 80%+ output even after 25 years. When replaced, our Zero Landfill pledge ensures full recycling through certified facilities." },
      ],
    },
    contact: {
      chip: "Contact Us",
      bannerTitle1: "Start saving on energy",
      bannerTitle2: "as early as next week",
      bannerSub: "Free site assessment · No commitment · Same-week installation available",
      bannerCta: "Book Free Assessment",
      h3: "Request a free quote",
      sub: "Fill in the form and one of our energy consultants will reach out within 2 hours.",
      fields: [["Full Name", "name", "text"], ["Phone Number", "phone", "tel"]],
      cityLabel: "CITY",
      cityPh: "Your city",
      typeLabel: "PROJECT TYPE",
      types: ["Residential", "Commercial", "Agricultural", "Industrial", "Other"],
      btn: "Submit Request →",
      sentTitle: "Request Received!",
      sentMsg: "We'll call you within 2 hours to schedule your free site assessment.",
      contactItems: [["📞", "+966 11 234 5678"], ["📧", "hello@greenion.sa"], ["📍", "King Fahd Road, Riyadh 12271, SA"]],
      slots: "LIMITED SLOTS THIS QUARTER",
    },
    footer: {
      tagline: "Making clean, affordable solar energy accessible to every home and business in Saudi Arabia.",
      locations: "Riyadh · Jeddah · Dammam",
      copyright: "© 2026 Green Ion Energy Co. All rights reserved.",
      badge: "⚡ POWERING A GREENER FUTURE",
      cols: [
        { h: "Company", ls: ["About Us", "Projects"] },
        { h: "Support", ls: ["FAQ"] },
      ],
    },
  },
  ar: {
    dir: "rtl",
    lang: "عربي",
    langAlt: "EN",
    brand: "جرين أيون",
    nav: {
      links: ["الرئيسية", "من نحن", "خدماتنا", "كيف نعمل", "المشاريع", "الحاسبة", "تواصل"],
      cta: "احجز موعد للتقييم",
    },
    hero: {
      chip: "⚡ طاقة نظيفة للمملكة العربية السعودية",
      h1a: "نحو مستقبل مشرق ومستدام",
      h1b: "بطاقة الشمس",
      sub: "متخصصون في تقديم حلول متكاملة لهندسة وتوريد وتنفيذ مشاريع الطاقة الشمسية (EPC)",
      cta1: "تواصل معنا الآن",
      cta2: "تعرف أكثر",
      badges: [["☀", "ضمان 10 سنوات"], ["⚡", "تركيب خلال أسبوع"], ["🌿", "محايد كربونياً"], ["★", "تقييم 4.9 / 5"]],
    },
    stats: [
      { val: 5400, suf: "+", label: "تركيب منجز" },
      { val: 98, suf: "%", label: "رضا العملاء" },
      { val: 1200, suf: "MW", label: "طاقة مولّدة" },
      { val: 90, suf: "%", label: "متوسط تخفيض الفاتورة" },
      { val: 15, suf: "سنة", label: "خبرة" },
    ],
    solutions: {
      chip: "حلولنا",
      h2a: "طاقة شمسية لكل",
      h2b: "تطبيق",
      sub:"نجمع بين الخبرة العالمية والمعرفة العميقة بمتطلبات السوق المحلي",
      cards: [
        { icon: "🏠", title: "طاقة سكنية", badge: "الأكثر طلباً", highlight: true, desc: "تصميم وتنفيذ محطات الطاقة الشمسية الكبرى", items: ["تصميم وتحديد حجم الألواح", "مراقبة ذكية للطاقة", "خيارات تخزين البطاريات", "الربط بالشبكة وقياس صافي الاستهلاك", "ضمان أداء لمدة 10 سنوات"] },
        { icon: "🏢", title: "طاقة تجارية", badge: null, highlight: false, desc: "حلول الطاقة الشمسية للأسطح التجارية والصناعية", items: ["أنظمة عالية الطاقة", "تحليل العائد على الاستثمار", "مراقبة SCADA عن بُعد", "استشارات الحوافز الضريبية", "اتفاقية صيانة بأولوية"] },
        { icon: "🌾", title: "طاقة زراعية", badge: null, highlight: false, desc: "أنظمة تخزين الطاقة الذكية", items: ["أنظمة تتبع الشمس", "طاقة الضخ والري", "قدرة على العمل المستقل", "أجهزة مقاومة للطقس", "ضبط الأداء الموسمي"] },
        { icon: "🔋", title: "تخزين الطاقة", badge: null, highlight: false, desc: "التشغيل والصيانة والمراقبة عن بعد", items: ["بنوك بطاريات LiFePO4", "طاقة احتياطية للمنزل كله", "تحسين التوقيت الذروي", "تكامل مع شحن السيارات الكهربائية", "إدارة ذكية للأحمال"] },
      ],
    },
    services: {
      chip: "خدماتنا",
      h2a: "عروضنا",
      h2b: "",
      sub: "تعرف على عروض الطاقة الشمسية المقدمة من جرين أيون.",
      packages: [
        { 
          id: "30hp",
          title: "30 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "50,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 30 حصان باستخدام 96 لوحاً بقدرة 650 واط مع محول INVT بقدرة 30 كيلوواط وهيكل ZAM من 4 مجموعات.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح بقدرة 650 واط بعدد 96 لوحاً لأداء ضخ ثابت وموثوق.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 30 كيلوواط 380V 3PH لأنظمة الضخ الشمسي.", "—"],
            ["الهيكل المعدني", "4 مجموعات حديد ZAM للتركيب الخارجي ومقاومة التآكل.", "—"],
            ["الكوابل", "كوابل DC نوع C مع كابل AC مناسب للاستخدام الخارجي.", "—"],
            ["أعمال التركيب والتشغيل", "فريق هندسي وفني متخصص للتركيب والاختبار والتشغيل.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "30 حصان"],
            ["قدرة المحول", "30 كيلوواط (INVT)"],
            ["عدد الألواح", "96 لوح"],
            ["نوع اللوح", "650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "50kw",
          title: "50 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "75,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 50 حصان باستخدام 96 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 55 كيلوواط وهيكل ZAM مجلفن مناسب للتشغيل الزراعي.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 96 لوحاً مع كفاءة عالية وأداء ميداني ثابت.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 55 كيلوواط 380V 3PH مناسب لأنظمة الضخ الشمسي.", "—"],
            ["الهيكل المعدني", "6 مجموعات حديد ZAM للتركيب الخارجي ومقاومة رياح حتى 100 كم/ساعة.", "—"],
            ["الكوابل", "كوابل DC من TOP CABLE مع كابل AC خارجي وإكسسوارات تنظيم المسار.", "—"],
            ["أعمال التركيب والتشغيل", "فريق هندسي وفني متخصص للتركيب والاختبار والتشغيل والتسليم.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "50 حصان"],
            ["قدرة المحول", "55 كيلوواط (INVT)"],
            ["عدد الألواح", "96 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "60kw",
          title: "60 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "100,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 60 حصان باستخدام 128 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 55 كيلوواط وهيكل ZAM مناسب للتشغيل المستقر.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 128 لوحاً لرفع إنتاجية الضخ.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 55 كيلوواط 380V 3PH مع حماية صناعية.", "—"],
            ["الهيكل المعدني", "8 مجموعات حديد ZAM مقاومة للتآكل ومناسبة للتركيب الخارجي.", "—"],
            ["الكوابل", "كوابل DC من TOP CABLE مع كابل AC مناسب للاستخدام الخارجي.", "—"],
            ["أعمال التركيب والتشغيل", "تنفيذ احترافي بواسطة فريق هندسي وفني متخصص.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "60 حصان"],
            ["قدرة المحول", "55 كيلوواط (INVT)"],
            ["عدد الألواح", "128 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "100hp",
          title: "100 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "150,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 100 حصان باستخدام 192 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 90 كيلوواط وهيكل ZAM من 18 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 192 لوحاً لكفاءة عالية وأداء مستقر.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 90 كيلوواط 380V 3PH بتشغيل صناعي مستقر.", "—"],
            ["الهيكل المعدني", "18 مجموعة حديد ZAM للتركيب الخارجي ومقاومة الرياح.", "—"],
            ["الكوابل", "كوابل TOP CABLE DC مع كابل AC مناسب للموقع الزراعي.", "—"],
            ["أعمال التركيب والتشغيل", "تنفيذ احترافي للتركيب والاختبار والتشغيل والتسليم.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "100 حصان"],
            ["قدرة المحول", "90 كيلوواط (INVT)"],
            ["عدد الألواح", "192 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "125hp",
          title: "125 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "185,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 125 حصان باستخدام 240 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 110 كيلوواط وهيكل ZAM من 18 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 240 لوحاً لتحقيق إنتاجية قوية.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 110 كيلوواط 380V 3PH لأنظمة الضخ عالية السعة.", "—"],
            ["الهيكل المعدني", "18 مجموعة حديد ZAM مصممة للثبات الخارجي ومقاومة التآكل.", "—"],
            ["الكوابل", "كوابل TOP CABLE DC مع كابل AC مناسب للاستخدام الخارجي.", "—"],
            ["أعمال التركيب والتشغيل", "فريق هندسي متخصص للتركيب والتشغيل والتسليم النهائي.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "125 حصان"],
            ["قدرة المحول", "110 كيلوواط (INVT)"],
            ["عدد الألواح", "240 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "150kw",
          title: "150 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "220,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 150 حصان باستخدام 288 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 132 كيلوواط وهيكل ZAM من 18 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 288 لوحاً لتحقيق إنتاجية يومية قوية.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 132 كيلوواط 380V 3PH للمضخات ثلاثية الطور.", "—"],
            ["الهيكل المعدني", "18 مجموعة حديد ZAM بعمر تشغيلي طويل ومقاومة جيدة للعوامل الجوية.", "—"],
            ["الكوابل", "كوابل DC من TOP CABLE مع كوابل AC عالية الجودة وإكسسوارات الربط.", "—"],
            ["أعمال التركيب والتشغيل", "فريق هندسي ميداني للتركيب والاختبار والتشغيل وتسليم المشروع.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "150 حصان"],
            ["قدرة المحول", "132 كيلوواط (INVT)"],
            ["عدد الألواح", "288 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "200kw",
          title: "200 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "300,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 200 حصان باستخدام 384 لوح Aiko بقدرة 650 واط مع محول INVT بقدرة 200 كيلوواط وهيكل ZAM من 18 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 650 واط بعدد 384 لوحاً للمشاريع الزراعية الكبيرة.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 200 كيلوواط 380V 3PH بكفاءة تشغيل صناعية مستقرة.", "—"],
            ["الهيكل المعدني", "18 مجموعة حديد ZAM للتركيب الخارجي ومقاومة التآكل.", "—"],
            ["الكوابل", "كوابل DC من TOP CABLE مع كوابل AC مناسبة للموقع الزراعي.", "—"],
            ["أعمال التركيب والتشغيل", "فريق فني متخصص لتنفيذ كامل أعمال التركيب والتشغيل.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "200 حصان"],
            ["قدرة المحول", "200 كيلوواط (INVT)"],
            ["عدد الألواح", "384 لوح"],
            ["نوع اللوح", "Aiko 650W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "250hp",
          title: "250 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "400,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 250 حصان باستخدام 512 لوح Aiko بقدرة 659 واط مع محول INVT بقدرة 250 كيلوواط وهيكل ZAM من 32 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 659 واط بعدد 512 لوحاً لإنتاجية ضخ عالية.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 250 كيلوواط 380V 3PH للمضخات الكبيرة.", "—"],
            ["الهيكل المعدني", "32 مجموعة حديد ZAM للثبات الخارجي ومقاومة التآكل.", "—"],
            ["الكوابل", "باقة كوابل AC وDC مناسبة للقدرة الكلية للنظام.", "—"],
            ["أعمال التركيب والتشغيل", "فريق فني متخصص للتركيب والاختبار والتشغيل.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "250 حصان"],
            ["قدرة المحول", "250 كيلوواط (INVT)"],
            ["عدد الألواح", "512 لوح"],
            ["نوع اللوح", "Aiko 659W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "300hp",
          title: "300 حصان", 
          badge: "نظام ضخ شمسي", 
          price: "450,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي لتشغيل مضخة 300 حصان باستخدام 576 لوح Aiko بقدرة 659 واط مع محول INVT بقدرة 315 كيلوواط وهيكل ZAM من 34 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح Aiko بقدرة 659 واط بعدد 576 لوحاً للمشاريع الزراعية الكبرى.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 315 كيلوواط 380V 3PH للأحمال العالية.", "—"],
            ["الهيكل المعدني", "34 مجموعة حديد ZAM بعمر تشغيلي طويل ومقاومة للعوامل الجوية.", "—"],
            ["الكوابل", "كوابل TOP CABLE DC مع كابل AC مناسب وإكسسوارات ميدانية.", "—"],
            ["أعمال التركيب والتشغيل", "فريق متخصص للتركيب والاختبار والتشغيل والتسليم.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "300 حصان"],
            ["قدرة المحول", "315 كيلوواط (INVT)"],
            ["عدد الألواح", "576 لوح"],
            ["نوع اللوح", "Aiko 659W"],
            ["نوع النظام", "نظام شمسي لضخ المياه"]
          ]
        },
        { 
          id: "350kw",
          title: "350 حصان", 
          badge: "تشغيل رأس كهرباء", 
          price: "500,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي وتشغيل رأس كهرباء بقدرة 350 حصان باستخدام 640 لوحاً بقدرة 650 واط مع محول INVT بقدرة 315 كيلوواط وهيكل ZAM من 40 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح بقدرة 650 واط بعدد 640 لوحاً للمشاريع ذات الأحمال العالية.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 315 كيلوواط 380V 3PH للتشغيل الثقيل.", "—"],
            ["الهيكل المعدني", "40 مجموعة حديد ZAM مصممة للثبات ومقاومة العوامل الخارجية.", "—"],
            ["الكوابل", "حزمة كوابل DC وAC مناسبة للقدرة الكلية للمشروع.", "—"],
            ["أعمال التركيب والتشغيل", "فريق متخصص للتركيب والتشغيل والاختبار والتسليم النهائي.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "350 حصان"],
            ["قدرة المحول", "315 كيلوواط (INVT)"],
            ["عدد الألواح", "640 لوح"],
            ["نوع اللوح", "650W"],
            ["نوع النظام", "نظام ضخ شمسي + تشغيل رأس كهرباء"]
          ]
        },
        { 
          id: "750hp",
          title: "750 حصان", 
          badge: "تشغيل رأس كهرباء", 
          price: "1,000,000", 
          priceUnit: "ريال", 
          summary: "عرض نظام ضخ شمسي وتشغيل رأس كهرباء بقدرة 750 حصان باستخدام 1312 لوحاً بقدرة 650 واط مع محول INVT بقدرة 630 كيلوواط وهيكل ZAM من 82 مجموعة.",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "ألواح بقدرة 650 واط بعدد 1312 لوحاً للمشاريع عالية السعة.", "—"],
            ["المحول (Inverter)", "محول INVT بقدرة 630 كيلوواط 380V 3PH للتطبيقات الصناعية الكبيرة.", "—"],
            ["الهيكل المعدني", "82 مجموعة حديد ZAM مصممة للثبات الخارجي ومقاومة الرياح حتى 100 كم/ساعة.", "—"],
            ["الكوابل", "كابل DC نوع C مع كابل AC مناسب للاستخدام الخارجي وكامل ملحقات المسار.", "—"],
            ["أعمال التركيب والتشغيل", "فريق هندسي متخصص للتركيب والاختبار والتشغيل والتسليم النهائي.", "—"]
          ],
          warranties: [
            ["ضمان صيانة مجاني", "3 سنوات"],
            ["ضمان الهيكل ضد الصدأ", "10 سنوات"],
            ["ضمان جودة الألواح من المصنع", "25 سنة"],
            ["ضمان كفاءة الألواح", "90% لمدة 10 سنوات"],
            ["ضمان كفاءة الألواح", "80% لمدة 25 سنة"],
            ["ضمان المحول", "سنتان"]
          ],
          quantities: [
            ["قدرة المضخة", "750 حصان"],
            ["قدرة المحول", "630 كيلوواط (INVT)"],
            ["عدد الألواح", "1312 لوح"],
            ["نوع اللوح", "650W"],
            ["نوع النظام", "نظام ضخ شمسي + تشغيل رأس كهرباء"]
          ]
        }
      ]
    },
    howit: {
      chip: "كيف نعمل",
      h2: "انتقل إلى الطاقة الشمسية في 4 خطوات",
      sub: "من المكالمة الأولى إلى أول كيلوواط — نتولى كل شيء من الألف إلى الياء.",
      steps: [
        { n: "٠١", icon: "📋", title: "دراسة جدوى مجانية وزيارة موقع", desc: "يزور مستشارنا موقعك ويحلل نمط استهلاكك واتجاه السطح وكثافة الإشعاع الشمسي لتصميم النظام الأمثل." },
        { n: "٠٢", icon: "📐", title: "تصميم مخصص", desc: "نصمم تخطيطاً شمسياً يناسب موقعك — يعظّم كفاءة الألواح وحجم المحول وسعة البطاريات." },
        { n: "٠٣", icon: "🔧", title: "تركيب احترافي", desc: "يُنجز المهندسون المعتمدون التركيب في يوم واحد فقط دون أي إزعاج أو فوضى." },
        { n: "٠٤", icon: "📊", title: "راقب واستمتع", desc: "لوحة مراقبة ذكية تعرض الإنتاج الفوري والوفورات وانخفاض الكربون — فريقنا يتابع الأداء على مدار الساعة." },
      ],
    },
    controls: {
      profile: "نوع الموقع",
      coverage: "مستوى تغطية الطاقة",
      priority: "أولوية التحسين",
      toggles: ["بطارية احتياطية", "مراقبة ذكية", "صيانة مجدولة"],
      priorities: ["متوازن", "عائد سريع", "استقلالية قصوى"],
    },
    live: {
      title: "لقطة أداء مباشرة",
      metrics: ["النظام المقترح", "التوفير الشهري", "الاعتماد على الشبكة", "جاهزية النظام"],
      bars: ["إنتاج الطاقة الشمسية", "احتياطي البطارية", "تقليل الشبكة"],
      summary: "التركيب المقترح",
      summaryText: "هذا الإعداد يوازن بين الإنتاج والاعتمادية والتغطية التشغيلية ليمنح أداء قوياً طوال العام.",
      cta: "اطلب هذا الإعداد",
    },
    calc: {
      chip: "حاسبة الوفورات",
      h2: "اكتشف وفوراتك المحتملة",
      sub: "حرّك الأشرطة لتناسب منزلك واحصل على تقدير فوري.",
      billLabel: "فاتورة الكهرباء الشهرية",
      areaLabel: "مساحة السطح / الأرض",
      sys: "النظام المُوصى به",
      sysDesc: "تقريباً",
      panels: "لوح × 550 واط",
      results: "وفوراتك المتوقعة",
      rows: ["الوفورات السنوية", "الطاقة المولّدة سنوياً", "الكربون المُجنَّب", "فترة الاسترداد"],
      units: ["في السنة", "كيلوواط/ساعة سنوياً", "طن سنوياً", "عائد الاستثمار"],
      btn: "احصل على تقرير مفصّل — مجاناً →",
    },
    projects: {
      chip: "بعض المشاريع",
      h2: "تركيبات منجزة",
      cats: ["الكل"],
      items: [
        { slug: "project-01", title: "المشروع 01", loc: "المملكة العربية السعودية", kw: "", type: "تركيب طاقة شمسية", color: "#E8F5E9", tag: "مميز", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502193/proj1_wdfk4u.mp4" },
        { slug: "project-02", title: "المشروع 02", loc: "المملكة العربية السعودية", kw: "", type: "تركيب طاقة شمسية", color: "#F1F8E9", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502339/proj2_my4lgh.mp4" },
        { slug: "project-03", title: "المشروع 03", loc: "المملكة العربية السعودية", kw: "", type: "تركيب طاقة شمسية", color: "#E8F0E9", video: "https://res.cloudinary.com/dbjdq8ztb/video/upload/v1782502425/proj3_v5votz.mp4" },
      ],
      viewCase: "شاهد فيديو المشروع →",
      size: "حجم النظام:",
    },
    products: {
      chip: "المعدات",
      h2: "أجهزة عالية الجودة",
      getQuote: "اطلب عرضاً",
      items: [
        { name: "الواح ايكو 650 واط", spec: "لوح أحادي عالي الكفاءة", price: "680 ريال", tag: "الأفضل قيمة", image: "/eco-panel-650w.png" },
        { name: "محول invt", spec: "عاكس سلسلة مع MPPT", price: "4,200 ريال", tag: null, image: "/invt-inverter.png" },
      ],
    },
    whyus: {
      chip: "لماذا جرين أيون",
      h2a: "لماذا تختار",
      h2b: "شركة جرين أيون؟",
      sub: "إن اختيارك لشركة جرين أيون ليس مجرد اختيار لمزوّد خدمة، بل هو استثمار في الجودة والابتكار. إليك ما يميزنا كشركة رائدة في السوق السعودي.",
      stat1n: "رؤية 2030",
      stat1l: "التزام وطني بالطاقة المتجددة",
      stat2n: "EPC",
      stat2l: "حلول متكاملة من الدراسة حتى الصيانة",
      cards: [
        { icon: "🇸🇦", title: "الالتزام برؤية المملكة 2030", desc: "نساهم بفاعلية في تحقيق أهداف الرؤية الطموحة لرفع حصة الطاقة المتجددة في مزيج الطاقة الوطني، بما يعزز الاستدامة البيئية والاقتصادية للمملكة." },
        { icon: "🔋", title: "أحدث التقنيات العالمية", desc: "نعتمد في مشاريعنا على أحدث تقنيات الألواح الشمسية وأنظمة التخزين الذكية (Lithium-Ion) التي تضمن أعلى معدلات الكفاءة الإنتاجية وأطول عمر افتراضي للمحطات." },
        { icon: "👷", title: "فريق خبراء متخصص", desc: "يضم فريقنا نخبة من المهندسين والفنيين المعتمدين الذين يمتلكون سجلاً حافلاً في تصميم وتنفيذ مشاريع معقدة تحت أقسى الظروف المناخية." },
        { icon: "📐", title: "حلول مخصصة وشاملة", desc: "نقدم دراسات جدوى دقيقة وتصاميم هندسية مبتكرة تناسب احتياجات كل عميل، مع ضمان المتابعة والصيانة الدورية لضمان استمرارية الأداء." },
        { icon: "🏆", title: "المحتوى المحلي والجودة", desc: "نلتزم بأعلى معايير الجودة العالمية مع التركيز على دعم المحتوى المحلي وتوطين التقنية في قطاع الطاقة." },
      ],
    },
    testimonials: {
      chip: "آراء العملاء",
      h2: "يثق بنا الآلاف",
      items: [
        { name: "خالد الراشد", role: "صاحب منزل · الرياض", init: "خ", color: "#76C442", quote: "انخفضت فاتورة الكهرباء لدينا من 1800 ريال إلى أقل من 90 ريالاً شهرياً. تولّى فريق جرين أيون كل شيء — التصاريح والتركيب وحتى أوراق DEWA." },
        { name: "فاطمة الزهراوي", role: "صاحبة مزرعة · القصيم", init: "ف", color: "#2E7D32", quote: "تشغيل نظام الري بالكامل بالطاقة الشمسية وفّر لنا أكثر من 280,000 ريال هذا العام. العائد على الاستثمار تجاوز كل توقعاتنا." },
        { name: "عمر بن حسن", role: "مطوّر تجاري · جدة", init: "ع", color: "#2196F3", quote: "ركّبنا أنظمة جرين أيون في ثلاثة عقارات تجارية. منصة المراقبة رائعة ودعم ما بعد البيع على مستوى عالمي." },
      ],
    },
    faq: {
      chip: "الأسئلة الشائعة",
      h2: "أسئلة يطرحها عملاؤنا",
      items: [
        { q: "كم يستغرق تركيب المنزل السكني؟", a: "تُنجز معظم التركيبات المنزلية في 1-2 يوم. الأنظمة التجارية الكبيرة تستغرق عادةً 3-7 أيام." },
        { q: "هل تعمل الألواح أثناء انقطاع الكهرباء؟", a: "الأنظمة المربوطة بالشبكة تتوقف تلقائياً للسلامة. مع بطارية PowerVault تبقى مزوّداً بالكهرباء 24/7." },
        { q: "ما الصيانة المطلوبة؟", a: "قليلة جداً. الألواح تنظّف نفسها في معظم الأحيان. نوصي بفحص سنوي. نظام المراقبة ينبّهنا لأي مشكلة تلقائياً." },
        { q: "هل تتولون ربط الشبكة مع DEWA أو SEC؟", a: "نعم — ندير كل الأوراق مع جهة التوزيع بما فيها طلبات قياس صافي الاستهلاك وإذن التشغيل." },
        { q: "هل الطاقة الشمسية مناسبة لموقعي؟", a: "المملكة العربية السعودية والإمارات ودول الخليج من أفضل مناطق الطاقة الشمسية في العالم بمعدل 2000-3500 ساعة ذروة سنوياً." },
        { q: "ماذا يحدث للألواح بعد 25 عاماً؟", a: "تحتفظ الألواح بأكثر من 80% من طاقتها بعد 25 عاماً. عند الاستبدال يضمن تعهدنا إعادة التدوير الكاملة." },
      ],
    },
    contact: {
      chip: "تواصل معنا",
      bannerTitle1: "ابدأ التوفير في الكهرباء",
      bannerTitle2: "من الأسبوع القادم",
      bannerSub: "تقييم موقع مجاني · بدون التزام · تركيب خلال أسبوع",
      bannerCta: "احجز تقييماً مجانياً",
      h3: "",
      sub: "أكمل النموذج وسيتواصل معك أحد مستشارينا خلال ساعتين.",
      fields: [["الاسم الكامل", "name", "text"], ["رقم الهاتف", "phone", "tel"]],
      cityLabel: "المدينة",
      cityPh: "مدينتك",
      typeLabel: "نوع المشروع",
      types: ["سكني", "تجاري", "زراعي", "صناعي", "أخرى"],
      btn: "إرسال الطلب →",
      sentTitle: "تم استلام طلبك!",
      sentMsg: "سنتصل بك خلال ساعتين لجدولة التقييم المجاني.",
      contactItems: [["📞", "966+ 11 234 5678"], ["📧", "hello@greenion.sa"], ["📍", "طريق الملك فهد، الرياض 12271"]],
      slots: "",
    },
    footer: {
      tagline: "نجعل الطاقة الشمسية النظيفة والمعقولة التكلفة متاحةً لكل منزل ومنشأة في المملكة العربية السعودية.",
      locations: "الرياض · جدة · الدمام",
      copyright: "© 2026 شركة جرين أيون للطاقة. جميع الحقوق محفوظة.",
      badge: "نحو مستقبل مشرق ومستدام بطاقة الشمس",
      cols: [
        { h: "الشركة", ls: ["من نحن", "المشاريع"] },
        { h: "الدعم", ls: ["الأسئلة الشائعة", "تواصل معنا"] },
      ],
    },
  },
} as const;

export const ABOUT_COPY = {
  en: {
    dir: "ltr" as const,
    brandSub: "Renewable Energy Company",
    nav: {
      links: [
        ["Home", "/?lang=en#home"],
        ["About Us", "/about?lang=en"],
        ["Our Services", "/services?lang=en"],
        ["How It Works", "/?lang=en#how-it-works"],
        ["Projects", "/?lang=en#projects"],
        ["Calculator", "/?lang=en#calculator"],
        ["Contact", "/?lang=en#contact"],
      ] as const,
      cta: "Get Free Quote",
      langAlt: "عربي",
    },
    heroChip: "About Us",
    heroTitleA: "Green Ion",
    heroTitleB: "Towards A Bright, Sustainable Future",
    heroSub:
      "Green Ion is a premier Saudi national company leading the renewable energy landscape in the Kingdom. We deliver comprehensive EPC solar solutions for utility-scale, commercial, industrial, and residential sectors with a strong focus on quality, innovation, and long-term performance.",
    heroEyebrow: "Saudi Renewable Energy Leader",
    heroStats: [
      ["Saudi EPC", "National expertise with deep local market understanding."],
      ["Vision 2030", "Built to support renewable transformation goals across the Kingdom."],
      ["Smart Energy", "Solar, storage, and monitoring delivered in one streamlined flow."],
    ] as const,
    snapshotChip: "Green Ion Snapshot",
    snapshotTitle: "Renewable Energy Built For Saudi Arabia",
    snapshotPoints: ["EPC Solar Solutions", "Industrial, Commercial, Residential", "Vision 2030 Alignment"],
    snapshotTag: "Green Ion .. Towards a Bright and Sustainable Future with Solar Power",
    videoChip: "Video",
    videoTitle: "Company Video",
    videoSub: "A dedicated area for your brand story, values, and project showcase.",
    sectionChip: "Who We Are",
    sectionTitle: "About Green Ion",
    intro:
      "Green Ion is a premier Saudi national company leading the renewable energy landscape in the Kingdom. We specialize in providing comprehensive Engineering, Procurement, and Construction (EPC) solutions for solar energy projects. By blending international expertise with a deep understanding of local market requirements, we have established ourselves as a trusted partner for industrial, commercial, and residential sectors in their transition toward sustainable energy.",
    whyTitle: "Why Choose Green Ion?",
    why: [
      "Alignment with Saudi Vision 2030 and the growth of renewable energy in the national energy mix.",
      "Cutting-edge solar technologies and smart Lithium-Ion energy storage systems.",
      "Certified engineers and technicians with strong delivery experience in Saudi conditions.",
      "Tailored, end-to-end solutions from feasibility studies to operations and maintenance.",
      "Global quality standards with a strong commitment to local content and technology localization.",
    ],
    servicesTitle: "Our Services",
    services: [
      "Utility-scale solar power plant development.",
      "Commercial and industrial rooftop solar solutions.",
      "Smart energy storage systems (ESS).",
      "Operations, maintenance, and remote monitoring.",
    ],
    valuesTitle: "What Sets Us Apart",
    values: [
      ["Integrated EPC Delivery", "One team handles design, procurement, execution, and post-launch support."],
      ["Performance-First Engineering", "Every system is designed around yield, reliability, and future scalability."],
      ["Local Presence", "We understand regulatory, climatic, and operational conditions across the Kingdom."],
      ["Long-Term Partnership", "We stay involved through monitoring, maintenance, and optimization."],
    ] as const,
    ctaTitle: "Build Your Solar Future With Green Ion",
    ctaSub:
      "From feasibility study to monitoring and long-term maintenance, Green Ion delivers a complete renewable energy journey tailored to your project.",
    ctaPrimary: "Contact Us",
    tagline: "Green Ion .. Towards a Bright and Sustainable Future with Solar Power",
    footer: {
      tagline: "Making clean, affordable solar energy accessible to every home and business in Saudi Arabia.",
      locations: "Riyadh · Jeddah · Dammam",
      copyright: "© 2026 Green Ion Energy Co. All rights reserved.",
      badge: "⚡ POWERING A GREENER FUTURE",
      cols: [
        { h: "Company", ls: ["About Us", "Projects"] },
        { h: "Support", ls: ["FAQ"] },
      ],
    },
  },
  ar: {
    dir: "rtl" as const,
    brandSub: "شركة للطاقة المتجددة",
    nav: {
      links: [
        ["الرئيسية", "/#home"],
        ["من نحن", "/about?lang=ar"],
        ["خدماتنا", "/services?lang=ar"],
        ["كيف نعمل", "/#how-it-works"],
        ["المشاريع", "/#projects"],
        ["الحاسبة", "/#calculator"],
        ["تواصل", "/#contact"],
      ] as const,
      cta: "احصل على عرض سعر",
      langAlt: "EN",
    },
    heroChip: "من نحن",
    heroTitleA: "جرين ايون",
    heroTitleB: "نحو مستقبل مشرق ومستدام",
    heroSub:
      "تعد شركة جرين ايون صرحا وطنيا رائدا في قطاع الطاقة المتجددة بالمملكة العربية السعودية. نقدم حلولا متكاملة لهندسة وتوريد وتنفيذ مشاريع الطاقة الشمسية للقطاعات السكنية والتجارية والصناعية مع تركيز كبير على الجودة والابتكار والاستدامة طويلة المدى.",
    heroEyebrow: "رائد وطني في الطاقة المتجددة",
    heroStats: [
      ["حلول EPC", "خبرة وطنية ومعرفة عميقة بمتطلبات السوق المحلي."],
      ["رؤية 2030", "مشاريع تدعم التحول الوطني نحو الطاقة المتجددة."],
      ["طاقة ذكية", "الطاقة الشمسية والتخزين والمراقبة ضمن منظومة واحدة."],
    ] as const,
    snapshotChip: "لمحة سريعة",
    snapshotTitle: "طاقة متجددة مصممة للمملكة",
    snapshotPoints: ["حلول EPC للطاقة الشمسية", "الصناعي والتجاري والسكني", "التوافق مع رؤية 2030"],
    snapshotTag: "جرين ايون .. نحو مستقبل مشرق ومستدام بطاقة الشمس",
    videoChip: "الفيديو",
    videoTitle: "فيديو الشركة",
    videoSub: "مساحة مخصصة لعرض قصة العلامة التجارية والقيم والمشاريع.",
    sectionChip: "من نحن؟",
    sectionTitle: "عن جرين ايون",
    intro:
      "تعد شركة جرين ايون (Green Ion) صرحا وطنيا رائدا في قطاع الطاقة المتجددة بالمملكة العربية السعودية. خدمات تركيب الطاقة الشمسية الاحترافية، والمراقبة والصيانة للمنازل والمنشآت التجارية. خفّض فاتورة الكهرباء حتى 90%، حيث نجمع بين الخبرة العالمية والمعرفة العميقة بمتطلبات السوق المحلي لنكون الشريك الموثوق للقطاعات الصناعية والتجارية والسكنية في رحلتهم نحو التحول الطاقي المستدام.",
    whyTitle: "لماذا تختار شركة جرين ايون؟",
    why: [
      "الالتزام برؤية المملكة 2030 وتعزيز مساهمة الطاقة المتجددة في المزيج الوطني.",
      "الاعتماد على أحدث تقنيات الألواح الشمسية وأنظمة التخزين الذكية Lithium-Ion.",
      "فريق هندسي وفني معتمد بخبرة عملية في المشاريع المعقدة داخل المملكة.",
      "حلول مخصصة وشاملة تبدأ من دراسات الجدوى وحتى التشغيل والصيانة.",
      "معايير جودة عالمية مع دعم المحتوى المحلي وتوطين التقنية.",
    ],
    servicesTitle: "خدماتنا",
    services: [
      "تطوير وتنفيذ محطات الطاقة الشمسية الكبرى.",
      "حلول الطاقة الشمسية للأسطح التجارية والصناعية.",
      "أنظمة تخزين الطاقة الذكية.",
      "التشغيل والصيانة والمراقبة عن بعد.",
    ],
    valuesTitle: "ما الذي يميزنا",
    values: [
      ["تنفيذ EPC متكامل", "فريق واحد يدير التصميم والتوريد والتنفيذ والدعم بعد التشغيل."],
      ["هندسة تركز على الأداء", "كل نظام يتم تصميمه لتحقيق أعلى إنتاجية واعتمادية وقابلية للتوسع."],
      ["حضور محلي قوي", "نفهم الأنظمة والظروف المناخية ومتطلبات التشغيل داخل المملكة."],
      ["شراكة طويلة المدى", "نستمر معك عبر المراقبة والصيانة والتحسين المستمر."],
    ] as const,
    ctaTitle: "ابدأ مستقبلك الشمسي مع جرين أيون",
    ctaSub:
      "من دراسة الجدوى وحتى المراقبة والصيانة طويلة المدى، تقدم جرين أيون رحلة متكاملة للطاقة المتجددة مصممة حسب احتياج مشروعك.",
    ctaPrimary: "تواصل معنا",
    tagline: "جرين أيون .. نحو مستقبل مشرق ومستدام بطاقة الشمس",
    footer: {
      tagline: "نجعل الطاقة الشمسية النظيفة والمعقولة التكلفة متاحةً لكل منزل ومنشأة في المملكة العربية السعودية.",
      locations: "الرياض · جدة · الدمام",
      copyright: "© 2026 شركة جرين أيون للطاقة. جميع الحقوق محفوظة.",
      badge: "نحو مستقبل مشرق ومستدام بطاقة الشمس",
      cols: [
        { h: "الشركة", ls: ["من نحن", "المشاريع"] },
        { h: "الدعم", ls: ["الأسئلة الشائعة", "تواصل معنا"] },
      ],
    },
  },
} as const;

export type SharedLang = keyof typeof LANDING_COPY;
