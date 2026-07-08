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
      sub: "High-quality solar energy systems with comprehensive warranties",
      packages: [
        { 
          id: "50kw",
          title: "50 kWp", 
          badge: "High Quality Solutions", 
          price: "80,000", 
          priceUnit: "SAR", 
          summary: "Complete solar pumping system installation with 50 kW capacity, 92 panels of 650W, and 50 kW inverter (INVT) with 10 years warranty on inverter and 25 years on panels",
          cta: "Order Now",
          components: [
            ["Solar Panels", "92 panels × 650W", "78,000"],
            ["Inverter", "INVT 50kW 380V 3PH", "15,000"],
            ["Steel Structure", "8 steel sets (ZAM)", "15,000"],
            ["DC + AC Cables", "High-quality cables", "8,000"],
            ["Installation & Commissioning", "Certified technical team", "4,000"]
          ],
          warranties: [
            ["Panel Performance Warranty", "10 years"],
            ["Inverter Warranty", "10 years"],
            ["Steel Structure Warranty", "25 years"],
            ["Installation Warranty", "2 years"]
          ],
          quantities: [
            ["Number of Panels", "92 panels"],
            ["Number of Inverters", "1 inverter"],
            ["Number of Structure Sets", "8 sets"],
            ["Number of Cables", "As needed"],
            ["Installation Team", "1 team"]
          ]
        },
        { 
          id: "60kw",
          title: "60 kWp", 
          badge: "High Quality Solutions", 
          price: "95,000", 
          priceUnit: "SAR", 
          summary: "Complete solar pumping system installation with 60 kW capacity, 110 panels of 650W, and 60 kW inverter (INVT) with 10 years warranty on inverter and 25 years on panels",
          cta: "Order Now",
          components: [
            ["Solar Panels", "110 panels × 650W", "92,000"],
            ["Inverter", "INVT 60kW 380V 3PH", "18,000"],
            ["Steel Structure", "10 steel sets (ZAM)", "18,000"],
            ["DC + AC Cables", "High-quality cables", "9,000"],
            ["Installation & Commissioning", "Certified technical team", "4,000"]
          ],
          warranties: [
            ["Panel Performance Warranty", "10 years"],
            ["Inverter Warranty", "10 years"],
            ["Steel Structure Warranty", "25 years"],
            ["Installation Warranty", "2 years"]
          ],
          quantities: [
            ["Number of Panels", "110 panels"],
            ["Number of Inverters", "1 inverter"],
            ["Number of Structure Sets", "10 sets"],
            ["Number of Cables", "As needed"],
            ["Installation Team", "1 team"]
          ]
        },
        { 
          id: "150kw",
          title: "150 kWp", 
          badge: "High Quality Solutions", 
          price: "230,000", 
          priceUnit: "SAR", 
          summary: "Complete solar pumping system installation with 150 kW capacity, 277 panels of 650W, and 150 kW inverter (INVT) with 10 years warranty on inverter and 25 years on panels",
          cta: "Order Now",
          components: [
            ["Solar Panels", "277 panels × 650W", "220,000"],
            ["Inverter", "INVT 150kW 380V 3PH", "40,000"],
            ["Steel Structure", "25 steel sets (ZAM)", "40,000"],
            ["DC + AC Cables", "High-quality cables", "20,000"],
            ["Installation & Commissioning", "Certified technical team", "10,000"]
          ],
          warranties: [
            ["Panel Performance Warranty", "10 years"],
            ["Inverter Warranty", "10 years"],
            ["Steel Structure Warranty", "25 years"],
            ["Installation Warranty", "2 years"]
          ],
          quantities: [
            ["Number of Panels", "277 panels"],
            ["Number of Inverters", "1 inverter"],
            ["Number of Structure Sets", "25 sets"],
            ["Number of Cables", "As needed"],
            ["Installation Team", "1 team"]
          ]
        },
        { 
          id: "200kw",
          title: "200 kWp", 
          badge: "High Quality Solutions", 
          price: "320,000", 
          priceUnit: "SAR", 
          summary: "Complete solar pumping system installation with 200 kW capacity, 369 panels of 650W, and 200 kW inverter (INVT) with 10 years warranty on inverter and 25 years on panels",
          cta: "Order Now",
          components: [
            ["Solar Panels", "369 panels × 650W", "300,000"],
            ["Inverter", "INVT 200kW 380V 3PH", "55,000"],
            ["Steel Structure", "32 steel sets (ZAM)", "55,000"],
            ["DC + AC Cables", "High-quality cables", "25,000"],
            ["Installation & Commissioning", "Certified technical team", "15,000"]
          ],
          warranties: [
            ["Panel Performance Warranty", "10 years"],
            ["Inverter Warranty", "10 years"],
            ["Steel Structure Warranty", "25 years"],
            ["Installation Warranty", "2 years"]
          ],
          quantities: [
            ["Number of Panels", "369 panels"],
            ["Number of Inverters", "1 inverter"],
            ["Number of Structure Sets", "32 sets"],
            ["Number of Cables", "As needed"],
            ["Installation Team", "1 team"]
          ]
        },
        { 
          id: "350kw",
          title: "350 kWp", 
          badge: "High Quality Solutions", 
          price: "550,000", 
          priceUnit: "SAR", 
          summary: "Complete solar pumping system installation with 350 kW capacity, 646 panels of 650W, and 350 kW inverter (INVT) with 10 years warranty on inverter and 25 years on panels",
          cta: "Order Now",
          components: [
            ["Solar Panels", "646 panels × 650W", "520,000"],
            ["Inverter", "INVT 350kW 380V 3PH", "90,000"],
            ["Steel Structure", "55 steel sets (ZAM)", "90,000"],
            ["DC + AC Cables", "High-quality cables", "40,000"],
            ["Installation & Commissioning", "Certified technical team", "30,000"]
          ],
          warranties: [
            ["Panel Performance Warranty", "10 years"],
            ["Inverter Warranty", "10 years"],
            ["Steel Structure Warranty", "25 years"],
            ["Installation Warranty", "2 years"]
          ],
          quantities: [
            ["Number of Panels", "646 panels"],
            ["Number of Inverters", "1 inverter"],
            ["Number of Structure Sets", "55 sets"],
            ["Number of Cables", "As needed"],
            ["Installation Team", "1 team"]
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
      h2a: "باقاتنا",
      h2b: "",
      sub: "أنظمة طاقة شمسية بجودة عالية وضمانات شاملة",
      packages: [
        { 
          id: "50kw",
          title: "50 kWp", 
          badge: "حلول عالية الجودة", 
          price: "80,000", 
          priceUnit: "ريال", 
          summary: "كائنة تركيب نظام ضخ الطاقة الشمسية بمقدرة 50 كيلو واط مع 92 لوح 650 واط وحمولة 50 كيلو واط (INVT) مع 10 سنوات ضمان على المحول و25 على الألواح",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "92 لوح × 650 واط", "78,000"],
            ["المحول (Inverter)", "INVT 50kW 380V 3PH", "15,000"],
            ["الهيكل الحديدي", "8 مجموعة حديدية (ZAM)", "15,000"],
            ["كبلات DC + AC", "كبلات عالية الجودة", "8,000"],
            ["أعمال التركيب والتشغيل", "فريق فني معتمد", "4,000"]
          ],
          warranties: [
            ["ضمان أداء الألواح", "10 سنوات"],
            ["ضمان محول الطاقة", "10 سنوات"],
            ["ضمان هيكل الحديد", "25 سنوات"],
            ["ضمان على التركيب", "2 سنوات"]
          ],
          quantities: [
            ["عدد الألواح", "92 لوح"],
            ["عدد المحولات", "1 محول"],
            ["عدد مجموعات الهيكل", "8 مجموعات"],
            ["عدد الكبلات", "حسب الحاجة"],
            ["فريق التركيب", "فريق واحد"]
          ]
        },
        { 
          id: "60kw",
          title: "60 kWp", 
          badge: "حلول عالية الجودة", 
          price: "95,000", 
          priceUnit: "ريال", 
          summary: "كائنة تركيب نظام ضخ الطاقة الشمسية بمقدرة 60 كيلو واط مع 110 لوح 650 واط وحمولة 60 كيلو واط (INVT) مع 10 سنوات ضمان على المحول و25 على الألواح",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "110 لوح × 650 واط", "92,000"],
            ["المحول (Inverter)", "INVT 60kW 380V 3PH", "18,000"],
            ["الهيكل الحديدي", "10 مجموعة حديدية (ZAM)", "18,000"],
            ["كبلات DC + AC", "كبلات عالية الجودة", "9,000"],
            ["أعمال التركيب والتشغيل", "فريق فني معتمد", "4,000"]
          ],
          warranties: [
            ["ضمان أداء الألواح", "10 سنوات"],
            ["ضمان محول الطاقة", "10 سنوات"],
            ["ضمان هيكل الحديد", "25 سنوات"],
            ["ضمان على التركيب", "2 سنوات"]
          ],
          quantities: [
            ["عدد الألواح", "110 لوح"],
            ["عدد المحولات", "1 محول"],
            ["عدد مجموعات الهيكل", "10 مجموعات"],
            ["عدد الكبلات", "حسب الحاجة"],
            ["فريق التركيب", "فريق واحد"]
          ]
        },
        { 
          id: "150kw",
          title: "150 kWp", 
          badge: "حلول عالية الجودة", 
          price: "230,000", 
          priceUnit: "ريال", 
          summary: "كائنة تركيب نظام ضخ الطاقة الشمسية بمقدرة 150 كيلو واط مع 277 لوح 650 واط وحمولة 150 كيلو واط (INVT) مع 10 سنوات ضمان على المحول و25 على الألواح",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "277 لوح × 650 واط", "220,000"],
            ["المحول (Inverter)", "INVT 150kW 380V 3PH", "40,000"],
            ["الهيكل الحديدي", "25 مجموعة حديدية (ZAM)", "40,000"],
            ["كبلات DC + AC", "كبلات عالية الجودة", "20,000"],
            ["أعمال التركيب والتشغيل", "فريق فني معتمد", "10,000"]
          ],
          warranties: [
            ["ضمان أداء الألواح", "10 سنوات"],
            ["ضمان محول الطاقة", "10 سنوات"],
            ["ضمان هيكل الحديد", "25 سنوات"],
            ["ضمان على التركيب", "2 سنوات"]
          ],
          quantities: [
            ["عدد الألواح", "277 لوح"],
            ["عدد المحولات", "1 محول"],
            ["عدد مجموعات الهيكل", "25 مجموعات"],
            ["عدد الكبلات", "حسب الحاجة"],
            ["فريق التركيب", "فريق واحد"]
          ]
        },
        { 
          id: "200kw",
          title: "200 kWp", 
          badge: "حلول عالية الجودة", 
          price: "320,000", 
          priceUnit: "ريال", 
          summary: "كائنة تركيب نظام ضخ الطاقة الشمسية بمقدرة 200 كيلو واط مع 369 لوح 650 واط وحمولة 200 كيلو واط (INVT) مع 10 سنوات ضمان على المحول و25 على الألواح",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "369 لوح × 650 واط", "300,000"],
            ["المحول (Inverter)", "INVT 200kW 380V 3PH", "55,000"],
            ["الهيكل الحديدي", "32 مجموعة حديدية (ZAM)", "55,000"],
            ["كبلات DC + AC", "كبلات عالية الجودة", "25,000"],
            ["أعمال التركيب والتشغيل", "فريق فني معتمد", "15,000"]
          ],
          warranties: [
            ["ضمان أداء الألواح", "10 سنوات"],
            ["ضمان محول الطاقة", "10 سنوات"],
            ["ضمان هيكل الحديد", "25 سنوات"],
            ["ضمان على التركيب", "2 سنوات"]
          ],
          quantities: [
            ["عدد الألواح", "369 لوح"],
            ["عدد المحولات", "1 محول"],
            ["عدد مجموعات الهيكل", "32 مجموعات"],
            ["عدد الكبلات", "حسب الحاجة"],
            ["فريق التركيب", "فريق واحد"]
          ]
        },
        { 
          id: "350kw",
          title: "350 kWp", 
          badge: "حلول عالية الجودة", 
          price: "550,000", 
          priceUnit: "ريال", 
          summary: "كائنة تركيب نظام ضخ الطاقة الشمسية بمقدرة 350 كيلو واط مع 646 لوح 650 واط وحمولة 350 كيلو واط (INVT) مع 10 سنوات ضمان على المحول و25 على الألواح",
          cta: "اطلب الان",
          components: [
            ["الألواح الشمسية", "646 لوح × 650 واط", "520,000"],
            ["المحول (Inverter)", "INVT 350kW 380V 3PH", "90,000"],
            ["الهيكل الحديدي", "55 مجموعة حديدية (ZAM)", "90,000"],
            ["كبلات DC + AC", "كبلات عالية الجودة", "40,000"],
            ["أعمال التركيب والتشغيل", "فريق فني معتمد", "30,000"]
          ],
          warranties: [
            ["ضمان أداء الألواح", "10 سنوات"],
            ["ضمان محول الطاقة", "10 سنوات"],
            ["ضمان هيكل الحديد", "25 سنوات"],
            ["ضمان على التركيب", "2 سنوات"]
          ],
          quantities: [
            ["عدد الألواح", "646 لوح"],
            ["عدد المحولات", "1 محول"],
            ["عدد مجموعات الهيكل", "55 مجموعات"],
            ["عدد الكبلات", "حسب الحاجة"],
            ["فريق التركيب", "فريق واحد"]
          ]
        }
      ]
    },
    howit: {
      chip: "كيف نعمل",
      h2: "انتقل إلى الطاقة الشمسية في 4 خطوات",
      sub: "من المكالمة الأولى إلى أول كيلوواط — نتولى كل شيء من الألف إلى الياء.",
      steps: [
        { n: "٠١", icon: "📋", title: "تقييم مجاني", desc: "يزور مستشارنا موقعك ويحلل نمط استهلاكك واتجاه السطح وكثافة الإشعاع الشمسي لتصميم النظام الأمثل." },
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
