/**
 * Hero Section Component
 * Main landing section with headline, subheadline, and CTA buttons
 * Features search bar for quick tool discovery
 */

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Zap } from 'lucide-react'

interface HeroProps {
  onSearch: (query: string) => void
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">Discover Powerful HTML Tools</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Lightweight Tools for
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Every Task
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover a curated collection of browser-based HTML tools. Work offline, protect your privacy, and boost productivity with zero installation.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search tools by name, category, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
            >
              Search
            </Button>
          </div>
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            onClick={() => document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Browse All Tools
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-800"
            onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <div className="text-3xl font-bold text-white">30+</div>
            <div className="text-sm text-slate-400">Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-400">Offline</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4.6★</div>
            <div className="text-sm text-slate-400">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
