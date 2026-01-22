import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp?.replace(/[^0-9]/g, '')}`;

  return (
    <div className="pt-8 pb-20 bg-brand-light min-h-screen font-sans">
       <div className="bg-brand-navy py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            We are here to help. Contact us directly for the fastest response.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Primary Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Phone Card */}
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="group bg-brand-green text-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center border-4 border-transparent hover:border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Call Us Now</h2>
                <p className="text-green-100 mb-8 font-medium">Best for appointments & emergencies</p>
                <span className="text-4xl font-bold text-white tracking-tight">
                    {BUSINESS_INFO.phone}
                </span>
            </a>

            {/* WhatsApp Card */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group bg-[#25D366] text-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center border-4 border-transparent hover:border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">WhatsApp Us</h2>
                <p className="text-green-100 mb-8 font-medium">Send photos or ask quick questions</p>
                <div className="flex items-center gap-2 font-bold text-xl bg-white/20 px-8 py-3 rounded-full group-hover:bg-white/30 transition-colors">
                    Start Chat <ArrowRight size={20} />
                </div>
            </a>
        </div>

        {/* Secondary Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Opening Hours & Email */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-10">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-brand-navy text-white rounded-xl">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold text-2xl text-brand-navy">Opening Hours</h3>
                    </div>
                    <ul className="space-y-4 pl-2">
                        <li className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-3">
                            <span className="font-medium">Monday - Friday</span>
                            <span className="font-bold text-brand-navy">{BUSINESS_INFO.hours.weekdays}</span>
                        </li>
                        <li className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-3">
                            <span className="font-medium">Saturday</span>
                            <span className="font-bold text-brand-navy">{BUSINESS_INFO.hours.saturday}</span>
                        </li>
                        <li className="flex justify-between items-center text-slate-600">
                            <span className="font-medium">Sunday</span>
                            <span className="font-bold text-brand-orange">{BUSINESS_INFO.hours.sunday}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-brand-navy text-white rounded-xl">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-2xl text-brand-navy">Email Us</h3>
                    </div>
                    <p className="text-slate-600 mb-3 pl-2">For non-urgent quotes and general enquiries:</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="block pl-2 text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors break-all">
                        {BUSINESS_INFO.email}
                    </a>
                </div>
            </div>

            {/* Address & Map */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-navy text-white rounded-xl">
                        <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-brand-navy">Our Location</h3>
                </div>
                <p className="text-slate-600 mb-8 pl-2 text-lg">
                    {BUSINESS_INFO.address}
                </p>
                <div className="flex-grow w-full min-h-[300px] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
                    <iframe 
                        title="Map Location"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=44%20Rockingham%20Rd%2C%20Loughborough%2C%20LE11%205UF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="absolute inset-0"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;