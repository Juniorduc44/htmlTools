/**
 * Root Layout
 * Configures metadata, theme provider, and global styles
 * Sets up dark mode support and font configuration
 */

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'HTML Tools Directory - Lightweight Browser-Based Tools',
    template: '%s | HTML Tools Directory',
  },
  description:
    'Discover 30+ curated HTML-based tools for productivity, utilities, media, and more. Work offline, protect your privacy, zero installation required.',
  keywords: [
    'HTML tools',
    'browser tools',
    'offline tools',
    'productivity',
    'utilities',
    'privacy-first',
    'no installation',
  ],
  authors: [{ name: 'HTML Tools Directory' }],
  creator: 'HTML Tools Directory',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://html-tools-directory.com',
    siteName: 'HTML Tools Directory',
    title: 'HTML Tools Directory - Lightweight Browser-Based Tools',
    description:
      'Discover 30+ curated HTML-based tools for productivity, utilities, media, and more. Work offline, protect your privacy, zero installation required.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HTML Tools Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML Tools Directory',
    description:
      'Discover 30+ curated HTML-based tools for productivity, utilities, media, and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'HTML Tools Directory',
              description:
                'Curated collection of lightweight, offline-capable HTML tools',
              url: 'https://html-tools-directory.com',
              applicationCategory: 'Productivity',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
