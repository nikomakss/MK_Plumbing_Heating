import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp?: string;
  address: string;
  email?: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}