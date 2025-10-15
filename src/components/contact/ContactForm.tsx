'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const scriptURL = 'https://formspree.io/f/mzzjyrkb';

    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    } else {
      toast.error(result.error || 'Something went wrong.');
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-primary mb-2"
          >
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

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary mb-2"
          >
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

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-primary mb-2"
          >
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

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-primary mb-2"
          >
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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-blue-700'
            } text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
