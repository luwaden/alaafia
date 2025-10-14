// src/components/contact/ContactForm.tsx
'use client';
import { useState } from 'react';
import Button from '@/components/shared/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border-0 bg-white text-neutral placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-3 rounded-xl border-0 bg-white text-neutral placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 XXX XXX XXXX"
            className="w-full px-4 py-3 rounded-xl border-0 bg-white text-neutral placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help ......"
            rows={5}
            className="w-full px-4 py-3 rounded-xl border-0 bg-white text-neutral placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}