'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/auto-fill-extension-website/#features', label: 'Features' },
    { href: '/auto-fill-extension-website/#benefits', label: 'Benefits' },
    { href: '/auto-fill-extension-website/#how-it-works', label: 'How it Works' },
    { href: '/auto-fill-extension-website/#security', label: 'Security' },
    { href: '/auto-fill-extension-website/#faq', label: 'FAQ' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <span className="text-2xl">⚡</span>
            Auto-Fill
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/neerajdhurandher/auto-Fill-Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Install Now
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/neerajdhurandher/auto-Fill-Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Install Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
