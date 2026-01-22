import React from 'react';
import { ALL_SERVICES_LIST } from '../constants';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light font-sans">
      {/* Header Section */}
      <div className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Comprehensive plumbing and heating solutions. No job is too small for our expert team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main List Section */}
          <div className="flex-grow">
             <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
                <h2 className="text-3xl font-extrabold text-brand-navy mb-10 border-b-2 border-brand-orange pb-4 inline-block">
                  What We Cover
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {ALL_SERVICES_LIST.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 bg-brand-light rounded-xl border border-transparent hover:border-brand-blue/20 transition-colors"
                    >
                      <div className="h-6 w-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0 text-white shadow-sm">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-brand-navy font-semibold text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-blue-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
                    <div>
                        <h3 className="font-bold text-brand-navy text-xl mb-2">Don't see what you need?</h3>
                        <p className="text-slate-600">Give us a call to discuss your specific requirements.</p>
                    </div>
                    <Button to="/contact" variant="primary">Contact Us</Button>
                </div>
             </div>
          </div>

          {/* Side Image / Banner */}
          <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden h-80 shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" 
                    alt="Boiler Check" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/40"></div>
                <div className="absolute bottom-0 left-0 p-8">
                    <span className="bg-brand-orange text-white px-3 py-1 rounded text-sm font-bold uppercase tracking-wide">Gas Safe</span>
                    <p className="text-white font-bold text-2xl mt-3">Qualified Engineers</p>
                </div>
              </div>
              
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency?</h3>
                  <p className="text-slate-300 mb-8">If you have a burst pipe or gas leak, call us immediately.</p>
                  <Button onClick={() => window.location.href='tel:07967138540'} className="w-full !bg-[#16a34a] !text-white !border-[#16a34a] hover:!bg-green-700 shadow-xl shadow-green-900/20">
                    Call 07967 138540
                  </Button>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;