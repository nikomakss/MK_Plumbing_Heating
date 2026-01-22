import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Logo: React.FC = () => (
  <div className="flex items-center gap-4 select-none group">
    {/* Custom SVG Logo Construction */}
    <div className="relative w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Blue Water Drop - Left side, intertwining */}
          <path 
            d="M45 15C45 15 20 55 20 70C20 83.8071 31.1929 95 45 95C51.5 95 57 92.5 61 88.5" 
            stroke="#0A4AA6" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="drop-shadow-sm"
          />
          
          {/* Orange Flame - Right side, intertwining */}
          <path 
            d="M55 95C68.8071 95 80 83.8071 80 70C80 50 60 40 60 40C60 40 65 55 60 70C58 76 52 82 45 85" 
            stroke="#F97316" 
            strokeWidth="8" 
            strokeLinecap="round"
             className="drop-shadow-sm"
          />
          
          {/* Inner Flame Detail */}
          <path 
            d="M55 55C55 55 58 62 55 70" 
            stroke="#F97316" 
            strokeWidth="6" 
            strokeLinecap="round"
          />
       </svg>
    </div>
    
    {/* Text Mark */}
    <div className="flex flex-col justify-center">
      <span className="font-display font-extrabold text-4xl leading-none text-brand-navy tracking-tight">
        MK
      </span>
      <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest leading-none mt-1">
        Plumbing & Heating
      </span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <header className="bg-brand-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-display font-bold transition-colors hover:text-brand-blue ${
                  location.pathname === item.path ? 'text-brand-blue' : 'text-brand-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
                className="flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg text-lg font-display font-bold"
              >
                <Phone size={18} />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-navy hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-brand-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-2xl font-display font-bold ${
                  location.pathname === item.path ? 'text-brand-blue' : 'text-brand-navy'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
                className="flex items-center justify-center gap-2 w-full bg-[#16a34a] text-white px-4 py-4 rounded-lg font-display font-bold text-xl shadow-md hover:bg-green-700 transition-colors"
              >
                <Phone size={24} />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;