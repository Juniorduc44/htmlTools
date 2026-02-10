/**
 * Features Section Component
 * Highlights key benefits and features of the directory
 * Uses icons and clear messaging to communicate value proposition
 */

import { Card } from '@/components/ui/card'
import { Shield, Zap, Smartphone, Lock, Globe, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'All tools run locally in your browser. Your data never leaves your device.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'No installation, no setup. Tools load instantly and run smoothly.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Optimized for desktop, tablet, and mobile devices. Work anywhere.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'No accounts required. No tracking. No ads. Complete control.',
    },
    {
      icon: Globe,
      title: 'Offline Capable',
      description: 'Work without internet. Service workers enable true offline functionality.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Open source tools. Community submissions. Transparent curation.',
    },
  ]

  return (
    <section id="features-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our Directory?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Curated tools designed for privacy, performance, and productivity. No compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
