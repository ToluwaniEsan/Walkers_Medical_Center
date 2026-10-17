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
  linkedin: null as string | null,
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
      directions:
        'https://www.google.com/maps/search/?api=1&query=Powerline+Bus+Stop%2C+Ajebamidele%2C+Ile-Ife%2C+Osun+State',
    },
    {
      name: 'Ede',
      address: null as string | null,
      region: 'Ede, Osun State',
      directions: null as string | null,
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

export const whyChoose = [
  { title: 'Compassionate, respectful care', icon: 'heart' },
  { title: 'Affordable, quality healthcare', icon: 'shield' },
  { title: 'Ethical care from a professional team', icon: 'users' },
  { title: 'Convenient locations in Osun State', icon: 'pin' },
] as const;

export const services = [
  { title: 'Orthopaedic consultations & surgeries', icon: 'bone', featured: true },
  { title: 'General medical care', icon: 'stethoscope' },
  { title: 'Urgent and emergency care', icon: 'alert' },
  { title: 'Laboratory services', icon: 'flask' },
  { title: 'Patient-centred follow-up', icon: 'calendar' },
  { title: 'Antenatal services', icon: 'baby' },
] as const;

export const units: { title: string; description: string | null }[] = [
  { title: 'Medical (doctors)', description: null },
  { title: 'Nursing', description: null },
  { title: "Nurses' front desk officers", description: null },
  { title: 'Theatre', description: null },
  { title: 'Laboratory & Diagnostics', description: null },
  { title: 'Pharmacy / Health Dispensary', description: null },
  { title: 'Environmental Health', description: 'Keeps the environment clean.' },
  { title: 'Administrative', description: null },
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
