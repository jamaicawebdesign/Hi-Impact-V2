import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Services', href: '#services', id: 'services' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home', 'home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#f3df8a] to-[#b89225] flex items-center justify-center text-[#0a1636] shadow-md shadow-[#d4af37]/30 group-hover:scale-105 transition-transform duration-200">
              <Anchor className="w-5 h-5 stroke-[2.5]" />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#0a1636] flex items-center">
                Hi Impact<span className="text-[#b8860b] ml-1.5 font-semibold">Shipping Co.</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0a1636] font-bold'
                      : 'text-slate-600 hover:text-[#0a1636]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b8860b] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0a1636] bg-[#d4af37] hover:bg-[#e6ca65] active:bg-[#c29c29] rounded-lg transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
            >
              Request Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0a1636] rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#0a1636] font-bold'
                      : 'text-slate-700 hover:text-[#0a1636] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
                className="w-full text-center py-3 text-sm font-bold text-[#0a1636] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors shadow-sm"
              >
                Request Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
