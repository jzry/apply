'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Company', href: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Top Right Main Logo */}
          <div className="flex-shrink-0 flex items-center gap-1">
            <a href="/" className="text-2xl font-semibold font-sans text-black bg-clip-text">
              apply
            </a>
            <img src="./images/icon.svg" alt="Company Logo" className="w-6 h-6" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="bg-transparent duration-10 hover:bg-gray-100 text-gray-500 font-semibold hover:text-gray-600 py-1 px-2 rounded"
              >
                {link.name}
              </a>
            ))}
            <Link href="/login" className="bg-gradient-to-t from-orange-500 to-red-500 font-semibold text-white px-6 py-2 rounded-full font-large hover:bg-gradient-to-bl from-red-450 to-orange-500">
              Sign in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full block text-orange-600 hover:text-orange-800 transition-colors duration-0 py-2 px-4">{link.name}</button>
                </a>
              ))}

              {/* bg-gradient-to-t from-orange-500 to-red-500 font-semibold text-white px-6 py-2 rounded-full font-large hover:bg-gradient-to-bl from-red-450 to-orange-500 */}
              <button className="w-full bg-gradient-to-t from-orange-500 to-red-500 font-semibold text-white px-6 py-2 rounded-full font-large hover:bg-gradient-to-bl from-red-450 to-orange-500">
                Sign in
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;