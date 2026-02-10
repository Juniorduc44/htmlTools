/**
 * Dynamic Tool Loader
 * 
 * This module automatically discovers and loads HTML tools from the /public/tools directory.
 * Each HTML file in /public/tools is treated as a standalone tool.
 * 
 * Metadata for each tool is stored in a corresponding .json file with the same name.
 * Example:
 *   - /public/tools/my-tool.html (the actual tool)
 *   - /public/tools/my-tool.json (metadata for the tool)
 * 
 * This allows users to simply drop new HTML files into the /public/tools folder
 * and the directory will automatically discover and display them.
 */

export interface ToolMetadata {
  id: string
  name: string
  description: string
  category: 'Productivity' | 'Utilities' | 'Media' | 'Security' | 'Development' | 'Fun' | 'Finance' | 'Health'
  tags: string[]
  offline: boolean
  mobileOptimized: boolean
  featured: boolean
  rating: number
  reviews: number
  features: string[]
  privacy: string
  sourceUrl?: string
  author?: string
  version?: string
}

/**
 * Loads tool metadata from a JSON file
 * The JSON file should be in /public/tools/ with the same name as the HTML file
 * 
 * @param toolId - The filename without extension (e.g., 'my-tool' for 'my-tool.html')
 * @returns ToolMetadata object or null if not found
 */
export async function loadToolMetadata(toolId: string): Promise<ToolMetadata | null> {
  try {
    const response = await fetch(`/tools/${toolId}.json`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error(`Failed to load metadata for tool: ${toolId}`, error)
    return null
  }
}

/**
 * Gets the URL to the HTML tool file
 * 
 * @param toolId - The filename without extension
 * @returns URL to the HTML tool
 */
export function getToolUrl(toolId: string): string {
  return `/tools/${toolId}.html`
}

/**
 * Converts a filename to a tool ID (removes extension, converts to kebab-case)
 * 
 * @param filename - The filename (e.g., 'my-tool.html')
 * @returns Tool ID (e.g., 'my-tool')
 */
export function filenameToToolId(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '').toLowerCase().replace(/\s+/g, '-')
}

/**
 * Validates that a tool metadata object has all required fields
 * 
 * @param metadata - The metadata object to validate
 * @returns true if valid, false otherwise
 */
export function isValidToolMetadata(metadata: any): metadata is ToolMetadata {
  const requiredFields = ['id', 'name', 'description', 'category', 'tags', 'offline', 'mobileOptimized', 'featured', 'rating', 'reviews', 'features', 'privacy']
  return requiredFields.every(field => field in metadata)
}
