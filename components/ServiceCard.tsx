import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm flex-grow">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;