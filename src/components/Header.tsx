"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav-links";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black flex items-center justify-center">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <span className="text-lg sm:text-xl font-black text-black tracking-tight">KELAB</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:bg-[#00D4FF] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-bold uppercase tracking-wide text-sm text-black hover:bg-[#00D4FF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#join"
              className="ml-4 px-5 py-2 bg-[#FFDE59] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-bold uppercase tracking-wide text-sm"
            >
              Join Us
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t-4 border-black mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 font-bold uppercase tracking-wide text-black hover:bg-[#00D4FF] transition-colors border-l-4 border-transparent hover:border-l-[#FFDE59]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-5 py-3 bg-[#FFDE59] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-bold uppercase tracking-wide text-sm text-center"
              >
                Join Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
