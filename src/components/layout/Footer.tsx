// src/components/layout/Footer.tsx
import Link from 'next/link';
import Container from './Container';
import { NAV_LINKS, FOOTER_TEXT } from '@/components/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-gray-200 py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-3">
              Àlàáfíà
            </h3>
            <p className="text-gray-600 text-sm">
              {FOOTER_TEXT.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-gray-600 text-sm">
              {FOOTER_TEXT.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}