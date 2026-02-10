/**
 * Tools Grid Component
 * Displays tools in a responsive grid with filtering and sorting options
 * Includes category filters, offline toggle, and rating display
 */

'use client'

import { useState, useMemo } from 'react'
import { Tool, filterTools, getCategories } from '@/lib/tools-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Star, Wifi, WifiOff, Smartphone, Globe } from 'lucide-react'

interface ToolsGridProps {
  tools: Tool[]
  searchQuery?: string
}

export function ToolsGrid({ tools: initialTools, searchQuery = '' }: ToolsGridProps) {
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [offlineOnly, setOfflineOnly] = useState(false)
  const [mobileOnly, setMobileOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'name'>('rating')

  // Get categories for filter buttons
  const categories = getCategories()

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let result = filterTools(
      searchQuery,
      selectedCategory,
      offlineOnly,
      mobileOnly
    )

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return result
  }, [searchQuery, selectedCategory, offlineOnly, mobileOnly, sortBy])

  return (
    <section id="tools-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Explore Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {filteredTools.length} tools found
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === undefined ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(undefined)}
                className="rounded-full"
              >
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Feature Filters */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={offlineOnly ? 'default' : 'outline'}
              size="sm"
              onClick={() => setOfflineOnly(!offlineOnly)}
              className="gap-2"
            >
              {offlineOnly ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              Offline Only
            </Button>
            <Button
              variant={mobileOnly ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMobileOnly(!mobileOnly)}
              className="gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Mobile Optimized
            </Button>
          </div>

          {/* Sort */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Sort By
            </h3>
            <div className="flex gap-2">
              {(['rating', 'reviews', 'name'] as const).map(option => (
                <Button
                  key={option}
                  variant={sortBy === option ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy(option)}
                  className="capitalize"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No tools found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * Individual Tool Card Component
 * Displays tool information with rating, features, and action buttons
 */
function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {tool.name}
          </h3>
          {tool.featured && (
            <Badge className="bg-yellow-500 text-white">Featured</Badge>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tool.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            {tool.rating}
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            ({tool.reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {tool.description}
        </p>
      </div>

      {/* Features */}
      <div className="p-6 flex-1">
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-2">
            Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {feature}
              </Badge>
            ))}
            {tool.features.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                +{tool.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {tool.offline && (
            <Badge className="gap-1 bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
              <WifiOff className="w-3 h-3" />
              Offline
            </Badge>
          )}
          {tool.mobileOptimized && (
            <Badge className="gap-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              <Smartphone className="w-3 h-3" />
              Mobile
            </Badge>
          )}
          {tool.internetRequired && (
            <Badge className="gap-1 bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
              <Globe className="w-3 h-3" />
              Online
            </Badge>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex gap-2">
        <Button
          variant="default"
          size="sm"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Try Now
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
        >
          Learn More
        </Button>
      </div>
    </Card>
  )
}
