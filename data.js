/* ============================================================
   MediNext — Demo Dataset
   Replace each export with Supabase queries when wiring backend.
   Schema designed for direct mapping to Supabase tables.
   ============================================================ */

window.MEDINEXT_DATA = (function () {
  const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Lucknow", "Jaipur"];

  const SPECIALTIES = [
    "Cardiology", "Orthopaedics", "Neurology", "Oncology", "Paediatrics",
    "Gynaecology", "Dermatology", "ENT", "Gastroenterology", "Nephrology",
    "Pulmonology", "Psychiatry", "Ophthalmology", "Endocrinology", "Urology",
    "General Physician", "Dentistry"
  ];

  // ─── HOSPITALS ──────────────────────────────────────────────
  const hospitals = [
    {
      id: "h1", slug: "apex-multi-speciality-delhi",
      name: "Apex Multi-Speciality Hospital", city: "Delhi", locality: "Saket",
      address: "Plot 12, Press Enclave Road, Saket, New Delhi 110017",
      type: "Multi-Speciality", beds: 480, established: 2002, accreditation: ["NABH", "NABL", "JCI"],
      rating: 4.6, reviews: 2340, fee_consultation: 800,
      emergency_24x7: true, cashless: true, insurance_partners: 38,
      specialties: ["Cardiology", "Oncology", "Neurology", "Orthopaedics", "Paediatrics", "Gynaecology"],
      facilities: ["ICU", "NICU", "MRI", "CT Scan", "Cath Lab", "Blood Bank", "Pharmacy", "Ambulance"],
      doctors_count: 142, image_hue: 200,
      about: "Apex is a 480-bed JCI-accredited tertiary care hospital known for advanced cardiac and neuro interventions, with one of north India's largest cath-lab footprints.",
      phone: "+91-11-4011-2000", email: "info@apexhospital.in", website: "apexhospital.in",
      contact: { whatsapp: "+919811112000" },
      price_band: "₹₹₹"
    },
    {
      id: "h2", slug: "lotus-women-child-mumbai",
      name: "Lotus Women & Child Hospital", city: "Mumbai", locality: "Bandra West",
      address: "Linking Road, Bandra West, Mumbai 400050",
      type: "Super-Speciality", beds: 180, established: 2010, accreditation: ["NABH"],
      rating: 4.8, reviews: 1820, fee_consultation: 1200,
      emergency_24x7: true, cashless: true, insurance_partners: 32,
      specialties: ["Gynaecology", "Paediatrics", "Neonatology", "IVF"],
      facilities: ["Level-3 NICU", "Labour Suites", "IVF Lab", "Lactation Clinic", "Pharmacy"],
      doctors_count: 64, image_hue: 340,
      about: "Mumbai's flagship women-and-child super-speciality with a Level-3 NICU, advanced IVF lab, and 360° maternity programmes.",
      phone: "+91-22-6655-0000", email: "care@lotuswomenchild.in", website: "lotuswomenchild.in",
      contact: { whatsapp: "+919820550000" },
      price_band: "₹₹₹"
    },
    {
      id: "h3", slug: "ganga-cardiac-bangalore",
      name: "Ganga Cardiac Institute", city: "Bangalore", locality: "Indiranagar",
      address: "100 Feet Road, Indiranagar, Bangalore 560038",
      type: "Super-Speciality", beds: 220, established: 2005, accreditation: ["NABH", "NABL"],
      rating: 4.7, reviews: 3110, fee_consultation: 1000,
      emergency_24x7: true, cashless: true, insurance_partners: 41,
      specialties: ["Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology"],
      facilities: ["Dual Cath Lab", "Hybrid OT", "ECMO", "CCU", "Pharmacy"],
      doctors_count: 58, image_hue: 0,
      about: "South India's most awarded cardiac institute. Pioneers of robotic mitral valve repair in Karnataka.",
      phone: "+91-80-4099-1000", email: "appointments@gangacardiac.in", website: "gangacardiac.in",
      contact: { whatsapp: "+919900991000" },
      price_band: "₹₹₹₹"
    },
    {
      id: "h4", slug: "sunrise-general-hyderabad",
      name: "Sunrise General Hospital", city: "Hyderabad", locality: "Jubilee Hills",
      address: "Road No. 36, Jubilee Hills, Hyderabad 500033",
      type: "Multi-Speciality", beds: 320, established: 1998, accreditation: ["NABH"],
      rating: 4.5, reviews: 1942, fee_consultation: 700,
      emergency_24x7: true, cashless: true, insurance_partners: 35,
      specialties: ["General Physician", "Orthopaedics", "ENT", "Dermatology", "Gastroenterology"],
      facilities: ["ICU", "MRI", "CT Scan", "Endoscopy", "Pharmacy", "Ambulance"],
      doctors_count: 96, image_hue: 30,
      about: "Trusted family hospital in Hyderabad for 25+ years. Strong outpatient experience and same-day diagnostics.",
      phone: "+91-40-2355-7000", email: "info@sunrisehyd.in", website: "sunrisehyd.in",
      contact: { whatsapp: "+919848007000" },
      price_band: "₹₹"
    },
    {
      id: "h5", slug: "neel-kanth-orthopaedics-chennai",
      name: "Neel Kanth Orthopaedic Centre", city: "Chennai", locality: "Anna Nagar",
      address: "2nd Avenue, Anna Nagar, Chennai 600040",
      type: "Super-Speciality", beds: 95, established: 2012, accreditation: ["NABH"],
      rating: 4.7, reviews: 1280, fee_consultation: 900,
      emergency_24x7: false, cashless: true, insurance_partners: 27,
      specialties: ["Orthopaedics", "Sports Medicine", "Joint Replacement", "Spine"],
      facilities: ["Arthroscopy OT", "Robotic Knee Replacement", "Sports Rehab", "Physiotherapy"],
      doctors_count: 28, image_hue: 220,
      about: "Chennai's go-to robotic knee and shoulder replacement centre. Sports medicine partner to two IPL franchises.",
      phone: "+91-44-2614-8800", email: "care@neelkanthortho.in", website: "neelkanthortho.in",
      contact: { whatsapp: "+919840148800" },
      price_band: "₹₹₹"
    },
    {
      id: "h6", slug: "rainbow-multispeciality-pune",
      name: "Rainbow Multi-Speciality Hospital", city: "Pune", locality: "Kothrud",
      address: "Karve Road, Kothrud, Pune 411038",
      type: "Multi-Speciality", beds: 260, established: 2007, accreditation: ["NABH", "NABL"],
      rating: 4.4, reviews: 1604, fee_consultation: 600,
      emergency_24x7: true, cashless: true, insurance_partners: 30,
      specialties: ["General Physician", "Paediatrics", "Orthopaedics", "Gynaecology", "ENT", "Dermatology"],
      facilities: ["ICU", "NICU", "MRI", "Dialysis", "Pharmacy"],
      doctors_count: 88, image_hue: 280,
      about: "Family-friendly multi-speciality with paediatric strength and weekend specialist clinics.",
      phone: "+91-20-2543-7777", email: "info@rainbowpune.in", website: "rainbowpune.in",
      contact: { whatsapp: "+919823437777" },
      price_band: "₹₹"
    },
    {
      id: "h7", slug: "sevayan-oncology-kolkata",
      name: "Sevayan Cancer & Oncology Centre", city: "Kolkata", locality: "Salt Lake",
      address: "Sector V, Salt Lake, Kolkata 700091",
      type: "Super-Speciality", beds: 200, established: 2009, accreditation: ["NABH"],
      rating: 4.6, reviews: 1411, fee_consultation: 1100,
      emergency_24x7: true, cashless: true, insurance_partners: 33,
      specialties: ["Medical Oncology", "Surgical Oncology", "Radiation Oncology", "Haemato-Oncology"],
      facilities: ["PET-CT", "Linear Accelerator", "Chemo Day Care", "Palliative Wing"],
      doctors_count: 46, image_hue: 160,
      about: "Eastern India's first proton-bridge programme with full-stack cancer care, from screening to survivorship.",
      phone: "+91-33-4060-9000", email: "appointments@sevayan.in", website: "sevayan.in",
      contact: { whatsapp: "+919830609000" },
      price_band: "₹₹₹₹"
    },
    {
      id: "h8", slug: "shanti-neuro-ahmedabad",
      name: "Shanti Neuro & Spine Hospital", city: "Ahmedabad", locality: "Satellite",
      address: "Prerna Tirth Road, Satellite, Ahmedabad 380015",
      type: "Super-Speciality", beds: 140, established: 2013, accreditation: ["NABH"],
      rating: 4.5, reviews: 980, fee_consultation: 950,
      emergency_24x7: true, cashless: true, insurance_partners: 24,
      specialties: ["Neurology", "Neurosurgery", "Spine Surgery", "Pain Management"],
      facilities: ["Neuro ICU", "Intra-op MRI", "Stroke Unit", "Pain Clinic"],
      doctors_count: 34, image_hue: 250,
      about: "Gujarat's busiest stroke-ready hospital. Door-to-needle thrombolysis under 25 minutes.",
      phone: "+91-79-2676-4400", email: "care@shantineuro.in", website: "shantineuro.in",
      contact: { whatsapp: "+919879064400" },
      price_band: "₹₹₹"
    },
    {
      id: "h9", slug: "city-care-lucknow",
      name: "City Care Multi-Speciality", city: "Lucknow", locality: "Gomti Nagar",
      address: "Vipul Khand, Gomti Nagar, Lucknow 226010",
      type: "Multi-Speciality", beds: 200, established: 2011, accreditation: ["NABH"],
      rating: 4.3, reviews: 1180, fee_consultation: 500,
      emergency_24x7: true, cashless: true, insurance_partners: 22,
      specialties: ["General Physician", "Cardiology", "Orthopaedics", "Gynaecology", "ENT", "Dermatology"],
      facilities: ["ICU", "MRI", "CT Scan", "Dialysis", "Pharmacy", "Ambulance"],
      doctors_count: 72, image_hue: 50,
      about: "Lucknow's most accessible multi-speciality with affordable cashless cover and walk-in OPDs.",
      phone: "+91-522-405-3333", email: "info@citycarelko.in", website: "citycarelko.in",
      contact: { whatsapp: "+919415053333" },
      price_band: "₹"
    },
    {
      id: "h10", slug: "marwar-eye-jaipur",
      name: "Marwar Eye & Vision Hospital", city: "Jaipur", locality: "C-Scheme",
      address: "Sardar Patel Marg, C-Scheme, Jaipur 302001",
      type: "Super-Speciality", beds: 60, established: 1992, accreditation: ["NABH"],
      rating: 4.8, reviews: 2280, fee_consultation: 650,
      emergency_24x7: false, cashless: true, insurance_partners: 18,
      specialties: ["Ophthalmology", "Cataract", "Glaucoma", "Retina"],
      facilities: ["Femto LASIK", "Phaco OT", "Retina OT", "Optical"],
      doctors_count: 22, image_hue: 190,
      about: "Rajasthan's oldest eye super-speciality. 1.2L+ cataract surgeries since 1992.",
      phone: "+91-141-237-4400", email: "care@marwareye.in", website: "marwareye.in",
      contact: { whatsapp: "+919414074400" },
      price_band: "₹₹"
    },
    {
      id: "h11", slug: "ananta-fertility-delhi",
      name: "Ananta Fertility & IVF Centre", city: "Delhi", locality: "Greater Kailash",
      address: "M-Block, Greater Kailash II, New Delhi 110048",
      type: "Super-Speciality", beds: 40, established: 2014, accreditation: ["NABH"],
      rating: 4.7, reviews: 940, fee_consultation: 1500,
      emergency_24x7: false, cashless: false, insurance_partners: 12,
      specialties: ["Gynaecology", "IVF", "Reproductive Endocrinology"],
      facilities: ["IVF Lab", "Cryo Storage", "Counselling Suite"],
      doctors_count: 14, image_hue: 320,
      about: "Boutique IVF centre with one of NCR's highest live-birth rates per cycle.",
      phone: "+91-11-4151-7000", email: "hello@anantaivf.in", website: "anantaivf.in",
      contact: { whatsapp: "+919811517000" },
      price_band: "₹₹₹₹"
    },
    {
      id: "h12", slug: "prana-wellness-bangalore",
      name: "Prana Wellness & Day Care", city: "Bangalore", locality: "Koramangala",
      address: "80 Feet Road, Koramangala 4th Block, Bangalore 560034",
      type: "Day Care", beds: 25, established: 2018, accreditation: ["NABH-Entry"],
      rating: 4.6, reviews: 720, fee_consultation: 500,
      emergency_24x7: false, cashless: true, insurance_partners: 16,
      specialties: ["General Physician", "Dermatology", "Psychiatry", "Nutrition", "Dentistry"],
      facilities: ["Lab Sample Collection", "Tele-consult Rooms", "Dental Chairs"],
      doctors_count: 32, image_hue: 140,
      about: "Modern, design-led day-care clinic that bundles GP, mental health, derm and nutrition under one roof.",
      phone: "+91-80-4567-1212", email: "hello@pranawellness.in", website: "pranawellness.in",
      contact: { whatsapp: "+919740671212" },
      price_band: "₹₹"
    }
  ];

  // ─── DOCTORS ────────────────────────────────────────────────
  const doctors = [
    { id: "d1", slug: "dr-arvind-rao", name: "Dr. Arvind Rao", specialty: "Cardiology", qualification: "MBBS, MD, DM (Cardio)", experience_years: 22, fee: 1200, city: "Delhi", locality: "Saket", hospital_id: "h1", rating: 4.8, reviews: 612, languages: ["English","Hindi"], gender: "M", reg_no: "DMC/12345", awards: ["Best Interventional Cardiologist 2023"], available_modes: ["In-Clinic","Video"], next_slot: "Today 6:30 PM", image_hue: 210, about: "22 years across AIIMS and Medanta. Specialises in complex coronary interventions and structural heart disease." },
    { id: "d2", slug: "dr-meera-iyer", name: "Dr. Meera Iyer", specialty: "Gynaecology", qualification: "MBBS, MS (OBG), Fellowship IVF", experience_years: 18, fee: 1500, city: "Mumbai", locality: "Bandra West", hospital_id: "h2", rating: 4.9, reviews: 880, languages: ["English","Hindi","Marathi"], gender: "F", reg_no: "MMC/45612", awards: ["FOGSI Excellence Award 2022"], available_modes: ["In-Clinic","Video"], next_slot: "Tomorrow 11:00 AM", image_hue: 340, about: "Leads the IVF programme at Lotus. Known for compassionate care in high-risk pregnancies." },
    { id: "d3", slug: "dr-rohit-bhalla", name: "Dr. Rohit Bhalla", specialty: "Cardiothoracic Surgery", qualification: "MBBS, MS, MCh (CTVS)", experience_years: 26, fee: 2500, city: "Bangalore", locality: "Indiranagar", hospital_id: "h3", rating: 4.9, reviews: 540, languages: ["English","Hindi","Kannada"], gender: "M", reg_no: "KMC/22110", awards: ["Padma Shri (Medicine) 2021"], available_modes: ["In-Clinic"], next_slot: "Today 4:00 PM", image_hue: 0, about: "Pioneer of robotic mitral valve surgery in South India. 6,000+ cardiac surgeries." },
    { id: "d4", slug: "dr-sneha-reddy", name: "Dr. Sneha Reddy", specialty: "Dermatology", qualification: "MBBS, MD (Derm)", experience_years: 12, fee: 900, city: "Hyderabad", locality: "Jubilee Hills", hospital_id: "h4", rating: 4.7, reviews: 1240, languages: ["English","Telugu","Hindi"], gender: "F", reg_no: "TSMC/77654", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Today 7:15 PM", image_hue: 320, about: "Cosmetic + medical dermatology. Special interest in acne, pigmentation and laser care." },
    { id: "d5", slug: "dr-karthik-balaji", name: "Dr. Karthik Balaji", specialty: "Orthopaedics", qualification: "MBBS, MS (Ortho), Fellowship Joint Replacement", experience_years: 15, fee: 1100, city: "Chennai", locality: "Anna Nagar", hospital_id: "h5", rating: 4.8, reviews: 780, languages: ["English","Tamil","Hindi"], gender: "M", reg_no: "TNMC/33211", awards: ["Sports Medicine Doctor of the Year 2024"], available_modes: ["In-Clinic","Video"], next_slot: "Tomorrow 5:30 PM", image_hue: 220, about: "Robotic knee replacement specialist. Team physician to two IPL franchises." },
    { id: "d6", slug: "dr-ananya-deshmukh", name: "Dr. Ananya Deshmukh", specialty: "Paediatrics", qualification: "MBBS, MD (Paed)", experience_years: 10, fee: 600, city: "Pune", locality: "Kothrud", hospital_id: "h6", rating: 4.8, reviews: 1320, languages: ["English","Marathi","Hindi"], gender: "F", reg_no: "MMC/88123", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Today 5:00 PM", image_hue: 280, about: "Gentle paediatrician trusted by Pune families. Special focus on developmental screening and vaccinations." },
    { id: "d7", slug: "dr-anirban-ghosh", name: "Dr. Anirban Ghosh", specialty: "Medical Oncology", qualification: "MBBS, MD, DM (Med-Onc)", experience_years: 20, fee: 1800, city: "Kolkata", locality: "Salt Lake", hospital_id: "h7", rating: 4.7, reviews: 460, languages: ["English","Bengali","Hindi"], gender: "M", reg_no: "WBMC/55102", awards: ["Bengal Oncology Excellence 2023"], available_modes: ["In-Clinic"], next_slot: "Tomorrow 10:30 AM", image_hue: 160, about: "Targets solid tumours with precision-onco protocols. Lead investigator on 3 active oncology trials." },
    { id: "d8", slug: "dr-priti-shah", name: "Dr. Priti Shah", specialty: "Neurology", qualification: "MBBS, MD, DM (Neuro)", experience_years: 16, fee: 1300, city: "Ahmedabad", locality: "Satellite", hospital_id: "h8", rating: 4.6, reviews: 540, languages: ["English","Gujarati","Hindi"], gender: "F", reg_no: "GMC/44021", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Today 6:00 PM", image_hue: 250, about: "Stroke and movement disorders expert. Leads Gujarat's fastest door-to-needle thrombolysis programme." },
    { id: "d9", slug: "dr-rajeev-mishra", name: "Dr. Rajeev Mishra", specialty: "General Physician", qualification: "MBBS, MD (Internal Medicine)", experience_years: 14, fee: 400, city: "Lucknow", locality: "Gomti Nagar", hospital_id: "h9", rating: 4.5, reviews: 1980, languages: ["English","Hindi"], gender: "M", reg_no: "UPMC/61204", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Today 8:00 PM", image_hue: 50, about: "Family physician with one of Lucknow's longest patient retention rates. Affordable, reliable, kind." },
    { id: "d10", slug: "dr-isha-sharma", name: "Dr. Isha Sharma", specialty: "Ophthalmology", qualification: "MBBS, MS (Ophth), Fellowship Retina", experience_years: 13, fee: 800, city: "Jaipur", locality: "C-Scheme", hospital_id: "h10", rating: 4.8, reviews: 950, languages: ["English","Hindi"], gender: "F", reg_no: "RMC/19887", awards: [], available_modes: ["In-Clinic"], next_slot: "Tomorrow 12:00 PM", image_hue: 190, about: "Vitreo-retinal surgeon. 8,000+ cataracts and 1,200+ vitrectomies." },
    { id: "d11", slug: "dr-vivek-malhotra", name: "Dr. Vivek Malhotra", specialty: "Psychiatry", qualification: "MBBS, MD (Psychiatry)", experience_years: 11, fee: 1500, city: "Bangalore", locality: "Koramangala", hospital_id: "h12", rating: 4.9, reviews: 410, languages: ["English","Hindi","Kannada"], gender: "M", reg_no: "KMC/77820", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Today 9:30 PM", image_hue: 140, about: "Adult & adolescent psychiatry. Trauma-informed CBT and medication management." },
    { id: "d12", slug: "dr-tara-mathew", name: "Dr. Tara Mathew", specialty: "Endocrinology", qualification: "MBBS, MD, DM (Endo)", experience_years: 17, fee: 1100, city: "Delhi", locality: "Greater Kailash", hospital_id: "h11", rating: 4.7, reviews: 720, languages: ["English","Hindi","Malayalam"], gender: "F", reg_no: "DMC/91442", awards: [], available_modes: ["In-Clinic","Video"], next_slot: "Tomorrow 4:30 PM", image_hue: 60, about: "Reproductive endocrinology and metabolic medicine. Diabetes in pregnancy specialist." }
  ];

  // ─── PATHOLOGY / DIAGNOSTICS ────────────────────────────────
  const pathology = [
    { id: "p1", slug: "veda-diagnostics-delhi", name: "Veda Diagnostics", city: "Delhi", locality: "Connaught Place", address: "K-12 Outer Circle, Connaught Place, New Delhi 110001", rating: 4.6, reviews: 1820, home_collection: true, nabl: true, open_24x7: true, report_tat_hours: 24, popular_tests: ["CBC","LFT","KFT","Lipid Profile","HbA1c","Thyroid Profile","Vitamin D"], scans: ["X-Ray","Ultrasound","ECG"], starting_price: 199, image_hue: 200, phone: "+91-11-4500-1212", about: "Pan-NCR NABL chain with same-day home collection across Delhi/Gurgaon/Noida." },
    { id: "p2", slug: "metroprobe-mumbai", name: "MetroProbe Labs", city: "Mumbai", locality: "Andheri West", address: "Veera Desai Road, Andheri West, Mumbai 400053", rating: 4.7, reviews: 2210, home_collection: true, nabl: true, open_24x7: true, report_tat_hours: 18, popular_tests: ["CBC","Diabetes Panel","Liver Function","Thyroid","Vitamin B12","Iron Studies"], scans: ["X-Ray","Ultrasound","CT Scan","MRI"], starting_price: 249, image_hue: 220, phone: "+91-22-2674-3344", about: "Mumbai's fastest TAT for routine biochemistry. Premium home collection." },
    { id: "p3", slug: "krishna-pathlab-bangalore", name: "Krishna PathLab", city: "Bangalore", locality: "HSR Layout", address: "27th Main, HSR Layout, Bangalore 560102", rating: 4.5, reviews: 1404, home_collection: true, nabl: true, open_24x7: false, report_tat_hours: 24, popular_tests: ["CBC","Lipid","HbA1c","Thyroid","Vitamin D","RT-PCR"], scans: ["X-Ray","Ultrasound"], starting_price: 179, image_hue: 140, phone: "+91-80-2572-9999", about: "Affordable NABL lab loved by Bangalore tech workers. App-first booking." },
    { id: "p4", slug: "sundar-diagnostics-hyderabad", name: "Sundar Diagnostics", city: "Hyderabad", locality: "Banjara Hills", address: "Road No. 12, Banjara Hills, Hyderabad 500034", rating: 4.6, reviews: 1180, home_collection: true, nabl: true, open_24x7: true, report_tat_hours: 12, popular_tests: ["CBC","Diabetes","Lipid","Thyroid","Hormones"], scans: ["X-Ray","Ultrasound","CT Scan","MRI","PET-CT"], starting_price: 220, image_hue: 30, phone: "+91-40-2354-7788", about: "Full radiology stack — including PET-CT — with 12-hour report TAT for routine tests." },
    { id: "p5", slug: "amber-pathology-chennai", name: "Amber Pathology", city: "Chennai", locality: "T. Nagar", address: "Pondy Bazaar, T. Nagar, Chennai 600017", rating: 4.4, reviews: 950, home_collection: true, nabl: true, open_24x7: false, report_tat_hours: 24, popular_tests: ["CBC","Liver","Kidney","Lipid","HbA1c"], scans: ["X-Ray","Ultrasound","ECG"], starting_price: 199, image_hue: 25, phone: "+91-44-2814-2200", about: "Old-school neighbourhood lab with modernised reporting and WhatsApp delivery." },
    { id: "p6", slug: "neelkamal-labs-pune", name: "Neel Kamal Labs", city: "Pune", locality: "Aundh", address: "ITI Road, Aundh, Pune 411007", rating: 4.6, reviews: 1330, home_collection: true, nabl: true, open_24x7: false, report_tat_hours: 24, popular_tests: ["CBC","Lipid","HbA1c","Thyroid","Iron"], scans: ["X-Ray","Ultrasound"], starting_price: 189, image_hue: 280, phone: "+91-20-2588-4040", about: "Family-trusted lab in west Pune with packaged preventive health checks." },
    { id: "p7", slug: "joybella-diagnostics-kolkata", name: "Joybella Diagnostics", city: "Kolkata", locality: "Park Street", address: "Camac Street, Kolkata 700016", rating: 4.5, reviews: 880, home_collection: true, nabl: true, open_24x7: true, report_tat_hours: 18, popular_tests: ["CBC","LFT","Lipid","HbA1c","Vitamin D"], scans: ["X-Ray","Ultrasound","CT Scan"], starting_price: 209, image_hue: 170, phone: "+91-33-2287-6655", about: "Central Kolkata NABL diagnostic with 24x7 collection and prompt radiology." },
    { id: "p8", slug: "satyam-labs-ahmedabad", name: "Satyam Labs", city: "Ahmedabad", locality: "Navrangpura", address: "CG Road, Navrangpura, Ahmedabad 380009", rating: 4.4, reviews: 740, home_collection: true, nabl: true, open_24x7: false, report_tat_hours: 24, popular_tests: ["CBC","Liver","Kidney","Lipid","Thyroid"], scans: ["X-Ray","Ultrasound"], starting_price: 179, image_hue: 250, phone: "+91-79-2640-1212", about: "Reliable mid-market lab with strong corporate health-check programmes." },
    { id: "p9", slug: "ganga-diagnostics-lucknow", name: "Ganga Diagnostics", city: "Lucknow", locality: "Hazratganj", address: "MG Marg, Hazratganj, Lucknow 226001", rating: 4.3, reviews: 612, home_collection: true, nabl: true, open_24x7: false, report_tat_hours: 36, popular_tests: ["CBC","Lipid","HbA1c","Thyroid"], scans: ["X-Ray","Ultrasound"], starting_price: 149, image_hue: 50, phone: "+91-522-262-3434", about: "Affordable Lucknow lab with strong home-collection coverage in Gomti Nagar and Hazratganj." },
    { id: "p10", slug: "marwar-imaging-jaipur", name: "Marwar Imaging Centre", city: "Jaipur", locality: "Malviya Nagar", address: "Sector 4, Malviya Nagar, Jaipur 302017", rating: 4.7, reviews: 1090, home_collection: true, nabl: true, open_24x7: true, report_tat_hours: 12, popular_tests: ["CBC","Lipid","Thyroid","Diabetes"], scans: ["X-Ray","Ultrasound","CT Scan","MRI","Mammography"], starting_price: 199, image_hue: 190, phone: "+91-141-274-6600", about: "Rajasthan's most comprehensive imaging centre with 3T MRI and breast screening." }
  ];

  // ─── PHARMACIES ─────────────────────────────────────────────
  const pharmacies = [
    { id: "ph1", slug: "lifeline-pharmacy-delhi", name: "Lifeline Pharmacy", city: "Delhi", locality: "South Extension", address: "Ring Road, South Extension Part-1, Delhi 110049", rating: 4.6, reviews: 980, open_24x7: true, home_delivery: true, delivery_eta_minutes: 30, online_consult: true, discount_pct: 22, image_hue: 200, phone: "+91-11-4567-1111", about: "South Delhi's flagship 24x7 pharmacy. Generic substitution and digital prescription parsing." },
    { id: "ph2", slug: "carewell-mumbai", name: "CareWell Pharmacy", city: "Mumbai", locality: "Powai", address: "Hiranandani Gardens, Powai, Mumbai 400076", rating: 4.7, reviews: 1340, open_24x7: true, home_delivery: true, delivery_eta_minutes: 35, online_consult: true, discount_pct: 25, image_hue: 220, phone: "+91-22-2570-2222", about: "Powai's most loved pharmacy. Fast delivery, OTC + chronic refill subscriptions." },
    { id: "ph3", slug: "medsave-bangalore", name: "MedSave Pharmacy", city: "Bangalore", locality: "Whitefield", address: "ITPL Main Road, Whitefield, Bangalore 560066", rating: 4.5, reviews: 1109, open_24x7: false, home_delivery: true, delivery_eta_minutes: 45, online_consult: true, discount_pct: 28, image_hue: 140, phone: "+91-80-2845-3300", about: "Best-value pharmacy in east Bangalore with deep discounts on chronic meds." },
    { id: "ph4", slug: "shanti-medicos-hyderabad", name: "Shanti Medicos", city: "Hyderabad", locality: "Madhapur", address: "HITEC City Main Road, Madhapur, Hyderabad 500081", rating: 4.6, reviews: 870, open_24x7: true, home_delivery: true, delivery_eta_minutes: 30, online_consult: false, discount_pct: 18, image_hue: 30, phone: "+91-40-2311-4400", about: "HITEC City's go-to 24x7 medical store. Strong stock for diabetes & BP." },
    { id: "ph5", slug: "rainbow-pharmacy-chennai", name: "Rainbow Pharmacy", city: "Chennai", locality: "Velachery", address: "100 Feet Road, Velachery, Chennai 600042", rating: 4.4, reviews: 720, open_24x7: false, home_delivery: true, delivery_eta_minutes: 40, online_consult: true, discount_pct: 20, image_hue: 25, phone: "+91-44-2243-5500", about: "Trusted neighbourhood pharmacy. Free delivery within 3 km." },
    { id: "ph6", slug: "swastha-pune", name: "Swastha Pharmacy", city: "Pune", locality: "Baner", address: "Baner Pashan Link Road, Baner, Pune 411045", rating: 4.7, reviews: 1010, open_24x7: true, home_delivery: true, delivery_eta_minutes: 25, online_consult: true, discount_pct: 26, image_hue: 280, phone: "+91-20-2729-1010", about: "Baner's fastest delivery pharmacy with 24x7 doctor chat for OTC queries." },
    { id: "ph7", slug: "kolkata-meds-kolkata", name: "Kolkata Meds & More", city: "Kolkata", locality: "Gariahat", address: "Rashbehari Avenue, Gariahat, Kolkata 700029", rating: 4.5, reviews: 640, open_24x7: false, home_delivery: true, delivery_eta_minutes: 45, online_consult: false, discount_pct: 19, image_hue: 170, phone: "+91-33-2461-7878", about: "South Kolkata staple with the city's widest Ayurveda stock." },
    { id: "ph8", slug: "satya-pharmacy-ahmedabad", name: "Satya Pharmacy", city: "Ahmedabad", locality: "Vastrapur", address: "Vastrapur Lake Road, Ahmedabad 380015", rating: 4.5, reviews: 590, open_24x7: false, home_delivery: true, delivery_eta_minutes: 35, online_consult: true, discount_pct: 22, image_hue: 250, phone: "+91-79-2675-2020", about: "Vastrapur's friendly pharmacy. Subscription model for chronic care." },
    { id: "ph9", slug: "lko-meds-lucknow", name: "LKO Meds", city: "Lucknow", locality: "Aliganj", address: "Sector E, Aliganj, Lucknow 226024", rating: 4.3, reviews: 470, open_24x7: false, home_delivery: true, delivery_eta_minutes: 40, online_consult: false, discount_pct: 15, image_hue: 50, phone: "+91-522-273-1414", about: "Affordable pharmacy in north Lucknow. Generic-first stocking." },
    { id: "ph10", slug: "marwar-meds-jaipur", name: "Marwar Meds", city: "Jaipur", locality: "Vaishali Nagar", address: "Amrapali Marg, Vaishali Nagar, Jaipur 302021", rating: 4.6, reviews: 830, open_24x7: true, home_delivery: true, delivery_eta_minutes: 30, online_consult: true, discount_pct: 24, image_hue: 190, phone: "+91-141-235-9090", about: "Jaipur's 24x7 pharmacy chain with the fastest delivery in Vaishali." }
  ];

  // ─── DEMO PATIENT + VAULT ──────────────────────────────────
  const demoPatient = {
    id: "u_demo",
    name: "Demo Patient",
    email: "demo@medinext.in",
    phone: "+91-98000-00000",
    dob: "1992-04-12",
    gender: "Female",
    blood_group: "O+",
    height_cm: 165,
    weight_kg: 58,
    allergies: ["Penicillin", "Sulfa drugs"],
    chronic: ["Hypothyroidism"],
    emergency_contact: { name: "Rohan (Spouse)", phone: "+91-98111-11111" },
    abha_id: "12-3456-7890-1234",
    avatar_hue: 280
  };

  const demoVault = [
    { id: "v1", type: "Lab Report", title: "Thyroid Profile (TSH, T3, T4)", date: "2026-04-18", source: "Veda Diagnostics", file_kind: "PDF", flagged: false, summary: "TSH 3.8 (normal). T3 1.2, T4 8.4 — within range. Continue Thyronorm 50 mcg." },
    { id: "v2", type: "Prescription", title: "Dr. Tara Mathew — Hypothyroid follow-up", date: "2026-04-19", source: "Ananta Fertility & IVF Centre", file_kind: "Image", flagged: false, summary: "Thyronorm 50 mcg OD x 6 months. Re-test in 6 months." },
    { id: "v3", type: "Lab Report", title: "Vitamin D & B12", date: "2026-03-02", source: "Krishna PathLab", file_kind: "PDF", flagged: true, summary: "Vit D low (18 ng/ml). Start cholecalciferol 60K weekly x 8 weeks." },
    { id: "v4", type: "Imaging", title: "Ultrasound Pelvis", date: "2026-02-11", source: "Marwar Imaging Centre", file_kind: "PDF", flagged: false, summary: "Normal study. No adnexal pathology." },
    { id: "v5", type: "Vaccination", title: "Influenza (Quadrivalent) 2025-26", date: "2025-10-20", source: "Prana Wellness & Day Care", file_kind: "Certificate", flagged: false, summary: "Annual flu shot administered. Next due Oct 2026." },
    { id: "v6", type: "Insurance", title: "Star Comprehensive Policy", date: "2025-07-01", source: "Star Health Insurance", file_kind: "PDF", flagged: false, summary: "Sum insured ₹10L. Cashless across 320+ partner hospitals." }
  ];

  const popularTests = [
    { name: "Complete Blood Count (CBC)", price: 199 },
    { name: "HbA1c (Diabetes)", price: 299 },
    { name: "Thyroid Profile (T3/T4/TSH)", price: 349 },
    { name: "Lipid Profile", price: 379 },
    { name: "Vitamin D Total", price: 599 },
    { name: "Liver Function Test (LFT)", price: 449 },
    { name: "Kidney Function Test (KFT)", price: 449 },
    { name: "Full Body Checkup (60 tests)", price: 1599 }
  ];

  const trustLogos = ["NABH", "NABL", "JCI", "ABDM (ABHA)", "ISO 27001"];

  return {
    CITIES, SPECIALTIES,
    hospitals, doctors, pathology, pharmacies,
    demoPatient, demoVault, popularTests, trustLogos
  };
})();
