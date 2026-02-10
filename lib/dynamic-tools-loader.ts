/**
 * Dynamic Tools Loader
 * 
 * This module loads tools dynamically from the /public/tools directory
 * at runtime, allowing users to add new tools by simply dropping HTML + JSON files
 */

import { Tool } from './tools-data'

/**
 * Loads all tools from the /public/tools directory
 * Scans for .json metadata files and creates Tool objects
 * 
 * @returns Array of Tool objects loaded from /public/tools
 */
export async function loadDynamicTools(): Promise<Tool[]> {
  try {
    // Fetch the list of files in /public/tools
    // We'll use a manifest file that lists all tools
    const response = await fetch('/api/tools/list')
    
    if (!response.ok) {
      console.warn('Failed to load dynamic tools, falling back to default tools')
      return []
    }
    
    const toolIds: string[] = await response.json()
    const tools: Tool[] = []
    
    // Load metadata for each tool
    for (const toolId of toolIds) {
      try {
        const metadataResponse = await fetch(`/tools/${toolId}.json`)
        if (metadataResponse.ok) {
          const metadata = await metadataResponse.json()
          
          // Convert metadata to Tool format
          const tool: Tool = {
            id: metadata.id || toolId,
            name: metadata.name || toolId,
            description: metadata.description || '',
            category: metadata.category || 'Utilities',
            tags: metadata.tags || [],
            offline: metadata.offline !== false,
            mobileOptimized: metadata.mobileOptimized !== false,
            featured: metadata.featured || false,
            rating: metadata.rating || 4.0,
            reviews: metadata.reviews || 0,
            features: metadata.features || [],
            privacy: metadata.privacy || 'No data collection',
            sourceUrl: `/tools/${toolId}.html`,
            author: metadata.author,
            version: metadata.version,
          }
          
          tools.push(tool)
        }
      } catch (error) {
        console.error(`Failed to load tool metadata for ${toolId}:`, error)
      }
    }
    
    return tools
  } catch (error) {
    console.error('Error loading dynamic tools:', error)
    return []
  }
}

/**
 * Merges dynamic tools with default tools
 * Dynamic tools take precedence over default tools with the same ID
 * 
 * @param defaultTools - Default tools from tools-data.ts
 * @param dynamicTools - Tools loaded from /public/tools
 * @returns Merged array of tools
 */
export function mergeTools(defaultTools: Tool[], dynamicTools: Tool[]): Tool[] {
  // Create a map of dynamic tools by ID for quick lookup
  const dynamicToolsMap = new Map(dynamicTools.map(tool => [tool.id, tool]))
  
  // Start with default tools, but replace with dynamic versions if they exist
  const mergedTools = defaultTools.map(tool => 
    dynamicToolsMap.has(tool.id) ? dynamicToolsMap.get(tool.id)! : tool
  )
  
  // Add any dynamic tools that don't exist in default tools
  for (const [id, tool] of dynamicToolsMap) {
    if (!defaultTools.find(t => t.id === id)) {
      mergedTools.push(tool)
    }
  }
  
  return mergedTools
}
