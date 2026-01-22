import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">Thank you for contacting MK Plumbing & Heating. We will get back to you shortly.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
            placeholder="07967 138540"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;