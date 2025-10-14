// src/components/layout/Footer.tsx
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral">Àlàáfíà</h3>
              <p className="text-sm text-gray-600">Prosperity rooted in people & places</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
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
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © 2025 Àlàáfíà. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}