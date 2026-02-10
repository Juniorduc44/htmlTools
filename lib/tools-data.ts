/**
 * Comprehensive database of HTML-based tools
 * Each tool includes metadata for filtering, searching, and display
 * Tools are organized by category with offline capability flags
 */

export interface Tool {
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
  demoUrl?: string
  downloadUrl?: string
  sourceUrl?: string
  internetRequired?: string[]
}

export const tools: Tool[] = [
  // PRODUCTIVITY TOOLS
  {
    id: 'nullboard',
    name: 'Nullboard',
    description: 'Lightweight, offline-first Kanban board for task management. Perfect for personal projects and team collaboration without cloud dependencies.',
    category: 'Productivity',
    tags: ['kanban', 'task-management', 'offline', 'minimal'],
    offline: true,
    mobileOptimized: true,
    featured: true,
    rating: 4.8,
    reviews: 342,
    features: ['Drag-and-drop cards', 'Multiple boards', 'Local storage', 'No account required', 'Keyboard shortcuts'],
    privacy: 'All data stored locally in browser. No server communication.',
    sourceUrl: 'https://github.com/apankrat/nullboard',
  },
  {
    id: 'todo-list',
    name: 'Todo List Pro',
    description: 'Simple yet powerful todo list with categories, priorities, and local persistence. Get things done without distractions.',
    category: 'Productivity',
    tags: ['todo', 'task-list', 'offline', 'simple'],
    offline: true,
    mobileOptimized: true,
    featured: true,
    rating: 4.6,
    reviews: 218,
    features: ['Add/edit/delete tasks', 'Categories', 'Priority levels', 'Due dates', 'Local storage', 'Dark mode'],
    privacy: 'All data stored locally. No tracking.',
  },
  {
    id: 'markdown-editor',
    name: 'Markdown Editor',
    description: 'Real-time markdown editor with live preview. Write, format, and export markdown documents instantly.',
    category: 'Productivity',
    tags: ['markdown', 'editor', 'writing', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 156,
    features: ['Live preview', 'Syntax highlighting', 'Export to HTML/PDF', 'Dark mode', 'Keyboard shortcuts'],
    privacy: 'No data collection. All processing local.',
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description: 'Classic Pomodoro technique timer with notifications. Boost productivity with focused work sessions.',
    category: 'Productivity',
    tags: ['timer', 'productivity', 'focus', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.5,
    reviews: 289,
    features: ['Customizable intervals', 'Sound notifications', 'Break reminders', 'Session tracking', 'Minimalist UI'],
    privacy: 'No data collection.',
  },
  {
    id: 'simple-calendar',
    name: 'Simple Calendar',
    description: 'Lightweight calendar with event management. Plan your month without complexity.',
    category: 'Productivity',
    tags: ['calendar', 'events', 'planning', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.4,
    reviews: 127,
    features: ['Month/week view', 'Add events', 'Reminders', 'Local storage', 'Print calendar'],
    privacy: 'All data stored locally.',
  },

  // UTILITIES
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes from text, URLs, or contact info. Download as PNG or SVG instantly.',
    category: 'Utilities',
    tags: ['qr-code', 'generator', 'offline', 'utility'],
    offline: true,
    mobileOptimized: true,
    featured: true,
    rating: 4.9,
    reviews: 512,
    features: ['Text to QR', 'URL encoding', 'Contact cards', 'Download PNG/SVG', 'Customizable size'],
    privacy: 'No data sent to servers. All processing local.',
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Create strong, random passwords with customizable options. Uses browser crypto API for security.',
    category: 'Security',
    tags: ['password', 'security', 'generator', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: true,
    rating: 4.8,
    reviews: 445,
    features: ['Custom length', 'Character options', 'Copy to clipboard', 'Strength indicator', 'Batch generation'],
    privacy: 'Passwords never leave your browser.',
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between units of length, weight, temperature, volume, and more. Instant calculations.',
    category: 'Utilities',
    tags: ['converter', 'units', 'offline', 'utility'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 198,
    features: ['Multiple unit types', 'Real-time conversion', 'Bidirectional', 'Common presets', 'Offline'],
    privacy: 'No data collection.',
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors from anywhere on your screen. Get hex, RGB, HSL values instantly.',
    category: 'Utilities',
    tags: ['color', 'picker', 'design', 'offline'],
    offline: true,
    mobileOptimized: false,
    featured: false,
    rating: 4.6,
    reviews: 234,
    features: ['Screen color picker', 'Multiple formats', 'Color history', 'Palette generator', 'Copy to clipboard'],
    privacy: 'No data collection.',
  },
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text between uppercase, lowercase, title case, and more. Batch process multiple lines.',
    category: 'Utilities',
    tags: ['text', 'converter', 'utility', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.5,
    reviews: 167,
    features: ['Multiple case types', 'Batch processing', 'Copy to clipboard', 'Character count', 'Word count'],
    privacy: 'No data collection.',
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and minify JSON. Detect errors and beautify your JSON data.',
    category: 'Development',
    tags: ['json', 'formatter', 'developer', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.8,
    reviews: 356,
    features: ['Format/minify', 'Validation', 'Error detection', 'Copy formatted', 'Syntax highlighting'],
    privacy: 'No data collection.',
  },
  {
    id: 'file-hash-calculator',
    name: 'File Hash Calculator',
    description: 'Calculate MD5, SHA1, SHA256 hashes for files. Verify file integrity locally.',
    category: 'Security',
    tags: ['hash', 'security', 'file', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 203,
    features: ['Multiple hash algorithms', 'Drag-and-drop', 'Copy hash', 'File verification', 'No upload'],
    privacy: 'Files never leave your device.',
  },

  // MEDIA TOOLS
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images without losing quality. Reduce file size for web optimization.',
    category: 'Media',
    tags: ['image', 'compression', 'optimization', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: true,
    rating: 4.8,
    reviews: 623,
    features: ['Batch compression', 'Quality slider', 'Format conversion', 'Drag-and-drop', 'Preview before/after'],
    privacy: 'Images processed locally. No upload.',
  },
  {
    id: 'drawing-pad',
    name: 'Drawing Pad',
    description: 'Simple drawing and sketching tool. Create digital art with brush, eraser, and color tools.',
    category: 'Media',
    tags: ['drawing', 'sketch', 'art', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.5,
    reviews: 289,
    features: ['Brush tools', 'Color picker', 'Eraser', 'Undo/redo', 'Export as PNG', 'Touch support'],
    privacy: 'No data collection.',
  },
  {
    id: 'audio-recorder',
    name: 'Audio Recorder',
    description: 'Record audio directly in your browser. Save as WAV or MP3 format.',
    category: 'Media',
    tags: ['audio', 'recorder', 'offline', 'media'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.6,
    reviews: 178,
    features: ['Record audio', 'Playback', 'Download WAV/MP3', 'Microphone access', 'Timer'],
    privacy: 'Audio stays on your device.',
  },
  {
    id: 'video-converter',
    name: 'Video Converter',
    description: 'Convert video formats in your browser. No upload, no server processing.',
    category: 'Media',
    tags: ['video', 'converter', 'offline', 'media'],
    offline: true,
    mobileOptimized: false,
    featured: false,
    rating: 4.4,
    reviews: 145,
    features: ['Multiple formats', 'Quality settings', 'Batch conversion', 'Progress tracking', 'Local processing'],
    privacy: 'Videos never leave your device.',
  },

  // DEVELOPMENT TOOLS
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions with real-time matching. Learn regex patterns interactively.',
    category: 'Development',
    tags: ['regex', 'developer', 'testing', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 267,
    features: ['Real-time matching', 'Flags support', 'Match highlighting', 'Explanation', 'Common patterns'],
    privacy: 'No data collection.',
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings. Convert between text and Base64 format.',
    category: 'Development',
    tags: ['base64', 'encoder', 'developer', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.6,
    reviews: 198,
    features: ['Encode/decode', 'Text/file support', 'Copy to clipboard', 'Syntax highlighting', 'Batch processing'],
    privacy: 'No data collection.',
  },
  {
    id: 'diff-tool',
    name: 'Text Diff Tool',
    description: 'Compare two texts and see differences highlighted. Perfect for code review and document comparison.',
    category: 'Development',
    tags: ['diff', 'comparison', 'developer', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 234,
    features: ['Side-by-side view', 'Highlight differences', 'Line numbers', 'Copy differences', 'Merge support'],
    privacy: 'No data collection.',
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    description: 'Minify CSS code to reduce file size. Remove comments and whitespace.',
    category: 'Development',
    tags: ['css', 'minifier', 'developer', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.6,
    reviews: 156,
    features: ['Minify CSS', 'Beautify CSS', 'Syntax highlighting', 'Copy minified', 'File size comparison'],
    privacy: 'No data collection.',
  },

  // FINANCE & HEALTH
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and get health insights. Track your health metrics.',
    category: 'Health',
    tags: ['bmi', 'health', 'calculator', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.5,
    reviews: 189,
    features: ['BMI calculation', 'Health category', 'Metric/imperial', 'History tracking', 'Goal setting'],
    privacy: 'No data collection.',
  },
  {
    id: 'budget-tracker',
    name: 'Budget Tracker',
    description: 'Track income and expenses. Visualize spending patterns with charts.',
    category: 'Finance',
    tags: ['budget', 'finance', 'tracker', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.6,
    reviews: 267,
    features: ['Add transactions', 'Categories', 'Charts', 'Export data', 'Local storage', 'Monthly reports'],
    privacy: 'All data stored locally.',
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between currencies with cached exchange rates. Works offline with last known rates.',
    category: 'Finance',
    tags: ['currency', 'converter', 'finance', 'offline'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.7,
    reviews: 412,
    features: ['Multiple currencies', 'Cached rates', 'Offline mode', 'Conversion history', 'Favorite pairs'],
    privacy: 'No data collection.',
    internetRequired: ['Initial rate fetch'],
  },

  // FUN & GAMES
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    description: 'Classic Tic Tac Toe game with AI opponent. Play against the computer.',
    category: 'Fun',
    tags: ['game', 'tic-tac-toe', 'offline', 'fun'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.4,
    reviews: 234,
    features: ['AI opponent', 'Difficulty levels', 'Score tracking', 'Responsive design', 'Sound effects'],
    privacy: 'No data collection.',
  },
  {
    id: 'memory-game',
    name: 'Memory Game',
    description: 'Classic memory matching game. Test your memory with increasing difficulty.',
    category: 'Fun',
    tags: ['game', 'memory', 'offline', 'fun'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.5,
    reviews: 198,
    features: ['Multiple difficulty levels', 'Score tracking', 'Timer', 'Sound effects', 'Leaderboard'],
    privacy: 'No data collection.',
  },
  {
    id: 'dice-roller',
    name: 'Dice Roller',
    description: 'Roll dice for games and decision making. Support for multiple dice types.',
    category: 'Fun',
    tags: ['dice', 'game', 'offline', 'fun'],
    offline: true,
    mobileOptimized: true,
    featured: false,
    rating: 4.3,
    reviews: 145,
    features: ['Multiple dice types', 'Batch rolling', 'History', 'Sound effects', 'Statistics'],
    privacy: 'No data collection.',
  },
]

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return Array.from(new Set(tools.map(t => t.category))).sort()
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tags = new Set<string>()
  tools.forEach(tool => {
    tool.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Filter tools by criteria
 */
export function filterTools(
  searchQuery?: string,
  category?: string,
  offlineOnly?: boolean,
  mobileOnly?: boolean,
  minRating?: number
): Tool[] {
  return tools.filter(tool => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      if (!matchesSearch) return false
    }

    // Category filter
    if (category && tool.category !== category) return false

    // Offline filter
    if (offlineOnly && !tool.offline) return false

    // Mobile filter
    if (mobileOnly && !tool.mobileOptimized) return false

    // Rating filter
    if (minRating && tool.rating < minRating) return false

    return true
  })
}

/**
 * Get featured tools
 */
export function getFeaturedTools(): Tool[] {
  return tools.filter(t => t.featured).slice(0, 6)
}

/**
 * Get tool by ID
 */
export function getToolById(id: string): Tool | undefined {
  return tools.find(t => t.id === id)
}
