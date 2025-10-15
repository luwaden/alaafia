// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';

type NavLink = {
  label: string;
  href: string;
};
export default function Footer() {
  const quickLinks:NavLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/model' },
    { label: 'For Business Owners', href: '/model' },
    { label: 'Become an MCP', href: '/contact' },
  ];

  const resources:NavLink[] = [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Support', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of service', href: '#' },
  ];

  return (
    <>
      {/* Main Footer - Blue Background */}
      <footer className="bg-primary py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Àlàáfíà</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Transforming underserved nano-businesses across Africa through 
                trust-based group lending and community empowerment.
              </p>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@alaafiahq.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 (0) 808 111 6723</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>The Assembly, Ogbomosho,Oyo state Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </footer>

      {/* Bottom Footer - White Background */}
      <div className="bg-white border-t border-gray-200 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-sm text-gray-600">
                Àlàáfíà. Prosperity rooted in people & places
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/model" className="text-sm text-gray-700 hover:text-primary transition-colors">
                Our Model
              </Link>
              <Link href="/contact" className="text-sm text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
  <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
    <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
      ©
    </span>
    2025 Àlàáfíà. All rights reserved
  </p>
</div>

        </Container>
      </div>
    </>
  );
}