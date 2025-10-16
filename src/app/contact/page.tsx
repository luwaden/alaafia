// src/app/contact/page.tsx
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import MCPCalloutSection from '@/components/contact/MCPCalloutSection';

export const metadata = {
  title: 'Contact Us - Alaafia',
  description: 'Get in touch with us about becoming a market credit partner or joining a lending group',
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <MCPCalloutSection />
    </>
  );
}