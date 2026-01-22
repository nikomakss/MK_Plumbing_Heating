import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20 font-sans">
       <div className="bg-brand-light py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl text-brand-navy mb-4">About MK Plumbing & Heating</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Your Local Plumbing Experts</h2>
                <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                    Based in Loughborough, MK Plumbing & Heating is a locally owned and operated business dedicated to providing top-tier plumbing and heating services to our community. 
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                    We specialize in installing boilers at competitive rates and servicing all gas appliances. Whether you need a gas fire installed, a cooker connected, or a full bathroom renovation, we have the expertise to get it done right.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    We understand that inviting a tradesperson into your home requires trust. That's why we prioritize transparency, punctuality, and respect in every job we undertake. Our Gas Safe registered engineers ensure all work is compliant and safe.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-brand-navy mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">To provide reliable, high-quality, and affordable plumbing services that keep our community's homes warm and safe.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-brand-navy mb-3">Service Area</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We proudly serve Loughborough (LE11) and surrounding villages including Quorn, Barrow upon Soar, Shepshed, and Hathern.</p>
            </div>
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-brand-navy mb-3">Gas Safe Registered</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Safety is paramount. All our heating work is carried out by fully qualified and registered engineers.</p>
            </div>
        </div>

        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                    "Fully Insured & Qualified",
                    "Competitive Boiler Rates",
                    "Clean & Tidy Workmanship",
                    "Friendly, Local Service",
                    "Gas Safe Registered",
                    "12-Month Guarantee on Work"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="text-brand-orange shrink-0" size={20} />
                        <span className="font-semibold">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;