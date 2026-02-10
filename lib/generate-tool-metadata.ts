/**
 * Tool Metadata Generator
 * 
 * This script generates JSON metadata files for all tools in the directory.
 * Run this after adding new tools to automatically create their metadata files.
 * 
 * Usage: npx ts-node lib/generate-tool-metadata.ts
 */

import { tools } from './tools-data'
import * as fs from 'fs'
import * as path from 'path'

const toolsDir = path.join(process.cwd(), 'public', 'tools')

// Ensure tools directory exists
if (!fs.existsSync(toolsDir)) {
  fs.mkdirSync(toolsDir, { recursive: true })
}

// Generate metadata JSON files for each tool
tools.forEach(tool => {
  const metadata = {
    id: tool.id,
    name: tool.name,
    description: tool.description,
    category: tool.category,
    tags: tool.tags,
    offline: tool.offline,
    mobileOptimized: tool.mobileOptimized,
    featured: tool.featured,
    rating: tool.rating,
    reviews: tool.reviews,
    features: tool.features,
    privacy: tool.privacy,
    sourceUrl: tool.sourceUrl,
    author: 'HTML Tools Directory',
    version: '1.0.0',
  }

  const filePath = path.join(toolsDir, `${tool.id}.json`)
  fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2))
  console.log(`✓ Generated metadata for: ${tool.name}`)
})

console.log(`\n✓ Generated ${tools.length} metadata files in /public/tools/`)
console.log('\nNext steps:')
console.log('1. Add your HTML tool files to /public/tools/')
console.log('2. Create a corresponding .json metadata file with the same name')
console.log('3. The directory will automatically discover and display your tools!')
