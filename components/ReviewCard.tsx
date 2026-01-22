import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex gap-1 text-brand-orange mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < review.rating ? "currentColor" : "none"} 
            className={i < review.rating ? "" : "text-slate-200"}
          />
        ))}
      </div>
      <p className="text-slate-700 italic mb-6 leading-relaxed font-medium">"{review.text}"</p>
      <div className="flex justify-between items-end border-t border-slate-100 pt-4">
        <span className="font-bold text-brand-navy text-sm">{review.author}</span>
        <span className="text-xs text-slate-400 font-medium">{review.date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;