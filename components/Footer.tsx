import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp?.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl text-white mb-6">MK Plumbing</h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Professional, reliable, and trusted plumbing and heating services in Loughborough and surrounding areas.
            </p>
            <div className="flex items-start gap-3 mb-2 text-sm">
              <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-brand-orange transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Boiler Installations</li>
              <li>Central Heating Repairs</li>
              <li>Bathroom Fitting</li>
              <li>General Plumbing</li>
              <li>Emergency Callouts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                     <Phone size={16} />
                </div>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={16} />
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Mail size={16} />
                </div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-xs text-center text-slate-500">
          <p>&copy; {currentYear} MK Plumbing & Heating. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;