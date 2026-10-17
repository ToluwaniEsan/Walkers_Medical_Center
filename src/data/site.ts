// All copy on the site comes from the hospital. Anything still missing is
// `null` (or listed in `openItems`) and renders as a marked placeholder.

export const site = {
  name: 'Walkers Medical Center & Orthopaedic Specialist Hospital',
  shortName: 'Walkers Medical Center',
  abbr: 'WMC',
  motto: 'Arise and Walk',
  phone: {
    display: '0706 078 3104',
    href: 'tel:07060783104',
    label: '24-hour urgent line',
  },
  email: 'walkersmedicalcenterileife@gmail.com',
  linkedin: 'https://www.linkedin.com/company/walkers-medical-center/' as string | null,
  hours: {
    summary: '24-hour care',
    notes: [
      'Call ahead when possible so our team can prepare.',
      'Call to confirm opening details before travelling.',
    ],
  },
  locations: [
    {
      name: 'Ile-Ife',
      address: 'Powerline Bus Stop, Ajebamidele, Ile-Ife, Osun State',
      region: 'Ile-Ife, Osun State',
      directions:
        'https://www.google.com/maps/search/?api=1&query=Powerline+Bus+Stop%2C+Ajebamidele%2C+Ile-Ife%2C+Osun+State',
    },
    {
      name: 'Ede',
      // Google Plus Code supplied by the hospital.
      address: 'PC7M+86M, Ede 232101, Osun, Nigeria',
      region: 'Ede, Osun State',
      directions: 'https://www.google.com/maps/search/?api=1&query=PC7M%2B86M%2C+Ede+232101%2C+Osun%2C+Nigeria',
    },
  ],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/laboratory/', label: 'Laboratory' },
  { href: '/outreach/', label: 'Outreach' },
  { href: '/contact/', label: 'Contact' },
];

export const about =
  'Walkers Medical Center is a patient-centred facility in Ile-Ife and Ede providing affordable, quality orthopaedic and general medical care. We offer 24-hour services, modern diagnostics, a compassionate team and community outreach programmes.';

export const promise =
  'Affordable, ethical healthcare delivered with compassion and respect for every patient and family.';

export const facilities =
  'Modern diagnostic facilities and a team committed to safe, attentive treatment.';

// `text` is an optional one-line explanation, shown once the hospital supplies it.
export const whyChoose: { title: string; icon: string; text: string | null }[] = [
  { title: 'Compassionate, respectful care', icon: 'heart', text: null },
  { title: 'Affordable, quality healthcare', icon: 'shield', text: null },
  { title: 'Ethical care from a professional team', icon: 'users', text: null },
  { title: 'Convenient locations in Osun State', icon: 'pin', text: null },
];

export const services = [
  { title: 'Orthopaedic consultations & surgeries', icon: 'bone', featured: true },
  { title: 'General medical care', icon: 'stethoscope' },
  { title: 'Urgent and emergency care', icon: 'alert' },
  { title: 'Laboratory services', icon: 'flask' },
  { title: 'Patient-centred follow-up', icon: 'calendar' },
  { title: 'Antenatal services', icon: 'baby' },
] as const;

export const units: { title: string; description: string }[] = [
  { title: 'Medical (doctors)', description: 'Diagnoses, treats and follows up patients across orthopaedic and general care.' },
  { title: 'Nursing', description: 'Provides round-the-clock bedside care, monitoring and support for patients.' },
  { title: "Nurses' front desk officers", description: 'Welcomes patients, handles registration and guides you to the right care.' },
  { title: 'Theatre', description: 'Carries out orthopaedic and general surgical procedures in a safe, sterile setting.' },
  { title: 'Laboratory & Diagnostics', description: 'Runs the tests that help our doctors reach an accurate diagnosis.' },
  { title: 'Pharmacy / Health Dispensary', description: 'Dispenses prescribed medicines and explains how to take them safely.' },
  { title: 'Environmental Health', description: 'Keeps the hospital environment clean, hygienic and safe.' },
  { title: 'Administrative', description: 'Manages records, billing and the day-to-day running of the hospital.' },
];

export const labMenu = [
  {
    category: 'Haematology',
    tests: [
      'Packed Cell Volume (PCV)',
      'Full Blood Count',
      'Erythrocyte Sedimentation Rate (ESR)',
      'Serology',
      'Blood Grouping & Crossmatching',
      'Blood Transfusion',
      'Pregnancy Tests',
      'Drug Toxicology',
    ],
  },
  {
    category: 'Chemistry',
    tests: [
      'Electrolytes, Urea & Creatinine',
      'Liver Function Tests',
      'Hormonal Assays',
      'Fasting Lipid Profile',
      'C-Reactive Protein',
      'Urinalysis',
    ],
  },
  {
    category: 'Microbiology',
    tests: ['Malaria Tests', 'Widal Test', 'Urine M/C/S'],
  },
];

// URL-friendly id for a lab category, e.g. 'Haematology' -> 'haematology'.
export const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
