/**
 * API Route: GET /api/tools/list
 * 
 * Returns a list of all tool IDs available in /public/tools
 * Scans for .json metadata files and returns their names (without extension)
 */

import { NextResponse } from 'next/server'
import { readdirSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    // Get the public/tools directory path
    const toolsDir = join(process.cwd(), 'public', 'tools')
    
    // Read all files in the tools directory
    const files = readdirSync(toolsDir)
    
    // Filter for .json files and extract tool IDs (filename without extension)
    const toolIds = files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
    
    return NextResponse.json(toolIds)
  } catch (error) {
    console.error('Error reading tools directory:', error)
    // Return empty array if directory doesn't exist or can't be read
    return NextResponse.json([])
  }
}
