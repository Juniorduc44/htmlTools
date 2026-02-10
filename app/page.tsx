/**
 * Home Page
 * Main landing page with hero, tools grid, features, and footer
 * Implements search functionality and filtering
 */

'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ToolsGrid } from '@/components/sections/ToolsGrid'
import { Features } from '@/components/sections/Features'
import { tools } from '@/lib/tools-data'

export default function Home() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Scroll to tools section
    setTimeout(() => {
      document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <Hero onSearch={handleSearch} />
      <ToolsGrid tools={tools} searchQuery={searchQuery} />
      <Features />
      <Footer />
    </div>
  )
}
