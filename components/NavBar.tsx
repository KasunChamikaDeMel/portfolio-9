'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black hover:text-teal-400 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-200 backdrop-blur-xl px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-black py-2 hover:text-blue-600 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
