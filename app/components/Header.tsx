'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Consultation', href: '#consultation' },
    { label: 'Lunch & Learn', href: '#lunch-learn' },
    { label: 'Join Us', href: '#join-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = 80; // h-20 = 5rem = 80px
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="focus:outline-none focus:ring-2 focus:ring-brand rounded-lg transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/HeaderLogo.png"
                alt="Flight Deck Strategic Solutions"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-brand px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded-lg whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#consultation')}
              className="bg-brand text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white whitespace-nowrap"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-brand block px-3 py-2 text-base font-medium w-full text-left transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
