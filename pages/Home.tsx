import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, PoundSterling, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { BUSINESS_INFO, ALL_SERVICES_LIST } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=2000" 
                alt="Modern Bathroom Interior" 
                className="w-full h-full object-cover opacity-10"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
                 <span className="h-1 w-10 bg-brand-orange rounded-full"></span>
                 <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Loughborough & Surroundings</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-8 tracking-tight drop-shadow-2xl">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Plumbing</span> <br/>
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Heating</span> Services
            </h1>
            <p className="text-xl text-slate-300 mb-10 font-medium max-w-2xl leading-relaxed">
              From boiler installations to emergency repairs. Trusted, Gas Safe engineers delivering quality workmanship you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4 shadow-xl shadow-orange-900/20">Get a Free Quote</Button>
              <Button onClick={() => window.location.href=`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="!bg-[#16a34a] !text-white !border-[#16a34a] hover:!bg-green-700 text-lg px-8 py-4 shadow-xl shadow-green-900/20 transition-all transform hover:scale-105">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-brand-blue text-white rounded-xl mb-6 shadow-lg shadow-blue-900/10">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-xl text-brand-navy mb-3">Gas Safe Registered</h3>
              <p className="text-slate-600">Fully qualified and insured for all your gas and heating needs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-brand-orange text-white rounded-xl mb-6 shadow-lg shadow-orange-900/10">
                <Clock size={32} />
              </div>
              <h3 className="font-bold text-xl text-brand-navy mb-3">Reliable Service</h3>
              <p className="text-slate-600">We pride ourselves on punctuality and efficient problem solving.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="p-4 bg-brand-navy text-white rounded-xl mb-6 shadow-lg shadow-slate-900/10">
                <PoundSterling size={32} />
              </div>
              <h3 className="font-bold text-xl text-brand-navy mb-3">Fair Pricing</h3>
              <p className="text-slate-600">Transparent quotes with no hidden fees or nasty surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <span className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2 block">Our Expertise</span>
                 <h2 className="text-4xl font-extrabold text-brand-navy mb-4">What We Cover</h2>
                 <p className="text-slate-600 max-w-xl text-lg">
                    We handle all aspects of plumbing and heating for homes in Loughborough.
                 </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors">
                View Full List <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                {ALL_SERVICES_LIST.slice(0, 9).map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                        <CheckCircle2 className="text-brand-orange shrink-0 group-hover:scale-110 transition-transform" size={22} />
                        <span className="font-semibold text-brand-navy text-lg">{service}</span>
                    </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                  <Button to="/services" variant="secondary">See All Services</Button>
              </div>
          </div>
        </div>
      </section>

      {/* Visual Work Gallery - Real People Working */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Image 1: Plumber Fixing Sink */}
                <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg border border-slate-100">
                    <img 
                        src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800" 
                        alt="Plumber fixing sink pipes" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                
                {/* Image 2: Technician with Tools */}
                <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg border border-slate-100">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                        alt="Heating technician inspecting equipment" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Image 3: Pipe Work */}
                <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg border border-slate-100">
                     <img 
                        src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800" 
                        alt="Engineer tightening pipes" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <ShieldCheck size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">What Our Customers Say</h2>
          </div>
          
          <div className="elfsight-app-f46de972-c97d-4d08-8f78-77adb1afe34d" data-elfsight-app-lazy></div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-brand-blue rounded-3xl p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to book a job?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Whether it's an emergency leak or a planned installation, we are here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#16a34a] text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20 transform hover:-translate-y-1"
                    >
                        <Phone className="mr-2" size={20} />
                        Call {BUSINESS_INFO.phone}
                    </a>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;