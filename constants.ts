import { Wrench, Flame, Droplets, Thermometer, Bath, Home } from 'lucide-react';
import { ContactInfo, NavItem, Review, Service } from './types';

export const BUSINESS_INFO: ContactInfo = {
  phone: "07967 138540",
  whatsapp: "+44 7967 138540",
  address: "44 Rockingham Rd, Loughborough, LE11 5UF",
  email: "manishkhant77@yahoo.co.uk",
  hours: {
    weekdays: "09:00 – 17:00",
    saturday: "09:00 – 14:00",
    sunday: "Closed",
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'heating',
    title: 'Central Heating & Boilers',
    description: 'Installation of condensing boilers, central heating pumps, and full system installations. We also offer repairs and radiator maintenance.',
    icon: Flame,
  },
  {
    id: 'gas-safety',
    title: 'Gas Safety & Appliances',
    description: 'Landlord Gas Safety Certificates, gas fire repairs, gas cooker installations, and leak detection services by Gas Safe engineers.',
    icon: Thermometer,
  },
  {
    id: 'bathroom',
    title: 'Bathroom Installations',
    description: 'Complete bathroom designs and shower installations. We handle all plumbing work for your dream bathroom renovation.',
    icon: Bath,
  },
  {
    id: 'general-plumbing',
    title: 'General Plumbing',
    description: 'Fixing dripping taps, burst pipes, water leaks, and water tank issues. Reliable domestic plumbing for every need.',
    icon: Wrench,
  },
  {
    id: 'drainage',
    title: 'Drainage & Blockages',
    description: 'Unblocking toilets, sinks, and drains. We inspect and repair drainage systems to keep your home flowing smoothly.',
    icon: Droplets,
  },
  {
    id: 'kitchen',
    title: 'Kitchen Plumbing',
    description: 'Plumbing for kitchens including sink installation, washing machine connection, and tap replacements.',
    icon: Home,
  },
];

export const ALL_SERVICES_LIST = [
  "Boiler Installations",
  "Condensing Boilers",
  "Central Heating Installation",
  "Central Heating Repairs",
  "Central Heating Pumps",
  "Radiator Installation & Repairs",
  "Gas Cooker Installation",
  "Gas Fire Repairs",
  "Gas Safety Services",
  "Landlord Gas Safety Certificates",
  "Gas Leaks Detection & Repair",
  "Bathroom Designs & Installations",
  "Shower Installation",
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Blocked Sinks & Drains",
  "Blocked Toilets",
  "Burst Pipes & Water Leaks",
  "Dripping Taps & Replacement",
  "Water Systems & Tanks",
  "Overflow Systems",
  "Drainage Systems",
  "Domestic Plumbing",
  "General Plumbing Work",
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'Mark was absolutely brilliant. Arrived on time, fixed the boiler issue that two other plumbers couldn\'t find, and charged a very fair price. Highly recommended.',
    date: '2 months ago',
  },
  {
    id: '2',
    author: 'David Thompson',
    rating: 5,
    text: 'Professional and reliable service. Had a full bathroom fitted and the attention to detail was excellent. Left everything clean and tidy every day.',
    date: '5 months ago',
  },
  {
    id: '3',
    author: 'Emma L.',
    rating: 5,
    text: 'Great communication from start to finish. Replaced our hot water cylinder efficiently. Honest pricing and very knowledgeable.',
    date: '1 month ago',
  },
  {
    id: '4',
    author: 'P. Harris',
    rating: 4,
    text: 'Good reliable plumber. Turned up when he said he would and did a solid job fixing a leak under the sink.',
    date: '6 months ago',
  },
];