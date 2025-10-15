// src/components/contact/ContactFormSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/layout/Container';
import ContactForm from './ContactForm';
import { fadeInUp, slideInLeft, slideInRight } from '@/components/lib/animations';

export default function ContactFormSection() {
  const contactInfo = [
    {
      icon: Mail,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary',
      title: 'Email',
      details: ['support@alaafiahq.com', 'partnerships@alaafiahq.com'],
    },
    {
      icon: Phone,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-accent',
      title: 'Phone',
      details: ['+234 (0) 808 111 6723', 'Mon-Fri: 8am-5pm WAT'],
    },
    {
      icon: MapPin,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-accent',
      title: 'Office',
      details: ['The Assembly, Ogbomosho,Oyo state Nigeria'],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Contact Information
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}