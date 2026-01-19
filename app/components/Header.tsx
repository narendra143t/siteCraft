"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* <Link href="/" className="text-2xl font-bold text-gray-900">
              SiteCraft
            </Link> */}
            <Link
  href="/"
  style={{
    fontSize: "24px",
    fontWeight: "800",
    letterSpacing: "0.5px",
    textDecoration: "none",
  }}
>
  <span style={{ color: "#111827" }}>Site</span>
  <span style={{ color: "#2563EB" }}>Craft</span>
</Link>

          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/industries" className="text-gray-700 hover:text-blue-600">Industries</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Get Quote</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}