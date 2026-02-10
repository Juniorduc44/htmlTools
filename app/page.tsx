/**
 * Home Page
 * Main landing page with hero, tools grid, features, and footer
 * Implements search functionality and filtering
 * 
 * This page now dynamically loads tools from /public/tools directory
 * allowing users to add new tools by simply dropping HTML + JSON files
 */

'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ToolsGrid } from '@/components/sections/ToolsGrid'
import { Features } from '@/components/sections/Features'
import { tools as defaultTools } from '@/lib/tools-data'
import { loadDynamicTools, mergeTools } from '@/lib/dynamic-tools-loader'
import type { Tool } from '@/lib/tools-data'

export default function Home() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('')
  
  // State for tools - start with default tools, then load dynamic ones
  const [tools, setTools] = useState<Tool[]>(defaultTools)
  const [isLoading, setIsLoading] = useState(true)

  // Load dynamic tools on component mount
  useEffect(() => {
    async function loadTools() {
      try {
        // Load tools from /public/tools directory
        const dynamicTools = await loadDynamicTools()
        
        // Merge dynamic tools with default tools
        // Dynamic tools take precedence over default tools with same ID
        const mergedTools = mergeTools(defaultTools, dynamicTools)
        
        setTools(mergedTools)
        console.log(`Loaded ${mergedTools.length} tools (${dynamicTools.length} dynamic, ${defaultTools.length} default)`)
      } catch (error) {
        console.error('Error loading dynamic tools:', error)
        // Fall back to default tools if dynamic loading fails
        setTools(defaultTools)
      } finally {
        setIsLoading(false)
      }
    }

    loadTools()
  }, [])

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
      {/* Show loading state while tools are being loaded */}
      {isLoading ? (
        <section className="py-20 px-4 text-center">
          <p className="text-slate-600 dark:text-slate-400">Loading tools...</p>
        </section>
      ) : (
        <ToolsGrid tools={tools} searchQuery={searchQuery} />
      )}
      <Features />
      <Footer />
    </div>
  )
}
