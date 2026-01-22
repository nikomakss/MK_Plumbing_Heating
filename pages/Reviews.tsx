import React from 'react';

const Reviews: React.FC = () => {
  return (
    <div className="pt-8 pb-20 font-sans">
      <div className="bg-brand-light py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold text-4xl text-brand-navy mb-4">Customer Reviews</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            See what our customers in Loughborough have to say about our work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="elfsight-app-f46de972-c97d-4d08-8f78-77adb1afe34d" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default Reviews;