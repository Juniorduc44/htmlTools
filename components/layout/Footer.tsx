/**
 * Footer Component
 * Contains links, copyright, and additional information
 * Organized into sections for easy navigation
 */

import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Tools',
      links: [
        { label: 'All Tools', href: '#tools-section' },
        { label: 'Productivity', href: '#tools-section' },
        { label: 'Utilities', href: '#tools-section' },
        { label: 'Media', href: '#tools-section' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Submit Tool', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Discord', href: '#' },
        { label: 'Twitter', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'License', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="font-bold text-lg text-white">HTML Tools</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Curated collection of lightweight, offline-capable HTML tools for everyday productivity.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {sections.map(section => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {currentYear} HTML Tools Directory. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Made with ❤️ for privacy-conscious developers
          </p>
        </div>
      </div>
    </footer>
  )
}
