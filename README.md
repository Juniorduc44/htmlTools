# 🛠️ HTML Tools Directory

A modern, privacy-first directory of lightweight, offline-capable HTML tools. Discover, explore, and contribute to a curated collection of browser-based utilities that work without installation, tracking, or cloud dependencies.

**Live Demo:** [https://html-tools-directory.lindy.site](https://html-tools-directory.lindy.site)

---

## ✨ Features

- 🔒 **Privacy First**: All tools run locally in your browser. Zero tracking, zero data collection.
- ⚡ **Lightning Fast**: No installation, no setup. Tools load instantly and run smoothly.
- 📱 **Mobile Ready**: Optimized for desktop, tablet, and mobile devices.
- 🔐 **Secure**: No accounts required. Complete control over your data.
- 🌐 **Offline Capable**: Work without internet. Service workers enable true offline functionality.
- 👥 **Community Driven**: Open source. Community submissions. Transparent curation.

---

## 🚀 Quick Start

### For Users

1. Visit the [live directory](https://html-tools-directory.lindy.site)
2. Browse tools by category or search for what you need
3. Click "Try Now" to use any tool instantly
4. No account, no installation, no tracking

### For Contributors

Adding a new tool is **super easy** - just 2 files:

1. **Create HTML file**: `/public/tools/my-tool.html`
2. **Create metadata**: `/public/tools/my-tool.json`

That's it! The directory automatically discovers and displays your tool.

**[See CONTRIBUTING.md for detailed guide →](./CONTRIBUTING.md)**

---

## 📁 Project Structure

```
html-tools-directory/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page with search & filtering
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Hero.tsx             # Landing hero section
│   ├── ToolsGrid.tsx        # Tools grid with filtering
│   ├── Features.tsx         # Features section
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Footer with links
├── lib/
│   ├── tools-data.ts        # Tool database (legacy)
│   ├── tools-loader.ts      # Dynamic tool loader
│   └── generate-tool-metadata.ts  # Metadata generator
├── public/
│   └── tools/               # 🎯 Add your tools here!
│       ├── tool-name.html   # Your HTML tool
│       └── tool-name.json   # Tool metadata
├── CONTRIBUTING.md          # Contribution guide
└── README.md               # This file
```

---

## 🛠️ Adding Tools (The Easy Way)

### Step 1: Create HTML Tool

Create a self-contained HTML file in `/public/tools/`:

```html
<!-- /public/tools/my-awesome-tool.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Tool</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        /* All CSS here */
    </style>
</head>
<body>
    <h1>My Awesome Tool</h1>
    <p>Your tool content here</p>
    
    <script>
        // All JavaScript here
        console.log('Tool loaded!');
    </script>
</body>
</html>
```

### Step 2: Create Metadata

Create a JSON file with the same name:

```json
{
  "id": "my-awesome-tool",
  "name": "My Awesome Tool",
  "description": "A brief description of what your tool does.",
  "category": "Productivity",
  "tags": ["tag1", "tag2", "tag3"],
  "offline": true,
  "mobileOptimized": true,
  "featured": false,
  "rating": 4.5,
  "reviews": 100,
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "privacy": "All data stays in your browser. No server communication.",
  "author": "Your Name",
  "version": "1.0.0"
}
```

### Step 3: Done! 🎉

Push to GitHub and your tool appears automatically. No code changes needed!

**[Full guide with examples →](./CONTRIBUTING.md)**

---

## 📊 Current Tools

The directory includes **26+ tools** across 8 categories:

- **Productivity**: Nullboard, Todo List, Pomodoro Timer
- **Development**: JSON Formatter, Regex Tester, CSS Minifier
- **Utilities**: Unit Converter, Text Case Converter, Base64 Encoder
- **Media**: Image Compressor, Audio Recorder, Video Converter
- **Security**: Password Generator, File Hash Calculator, QR Code Generator
- **Finance**: Budget Tracker, Currency Converter
- **Fun**: Memory Game, Tic Tac Toe, Dice Roller
- **Health**: Calorie Counter, BMI Calculator

---

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Theme**: next-themes (dark/light mode)
- **Deployment**: Vercel (or any Node.js host)

---

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/juniorduc44/htmlTools.git
cd htmlTools

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` (optional):

```bash
# App configuration
NEXT_PUBLIC_APP_NAME="HTML Tools Directory"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Customization

**Update site metadata** in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "HTML Tools Directory",
  description: "Your custom description",
  // ... more metadata
}
```

**Update navigation** in `components/Header.tsx`:
```typescript
const navLinks = [
  { label: "Tools", href: "#tools" },
  { label: "Features", href: "#features" },
  // Add more links
]
```

---

## 📈 Features Explained

### 🔍 Smart Search & Filtering

- **Search**: Find tools by name, description, or tags
- **Category Filter**: Browse by tool category
- **Offline Filter**: Show only offline-capable tools
- **Mobile Filter**: Show only mobile-optimized tools
- **Sort Options**: By rating, reviews, or name

### 🌓 Dark/Light Mode

- Automatic theme detection
- Manual toggle in header
- Persistent preference (localStorage)
- Smooth transitions

### 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading on slow connections

### ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance

---

## 🤝 Contributing

We welcome contributions! Here's how:

### Add a Tool

1. Create HTML file in `/public/tools/`
2. Create JSON metadata file
3. Submit a pull request
4. We'll review and merge!

**[Detailed guide →](./CONTRIBUTING.md)**

### Report Issues

Found a bug? Have a suggestion?

1. Open an issue on GitHub
2. Describe the problem
3. Include steps to reproduce (if applicable)

### Improve the Directory

- Fix bugs
- Improve documentation
- Enhance UI/UX
- Add features
- Optimize performance

---

## 📝 License

This project is open source and available under the MIT License. See [LICENSE](./LICENSE) file for details.

---

## 🙏 Credits

Built with ❤️ for privacy-conscious developers and users who value simplicity, security, and offline-first tools.

**Special thanks to:**
- All tool creators and contributors
- The open source community
- Users who provide feedback and suggestions

---

## 📞 Support

- **Questions?** Check [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Found a bug?** Open an issue on GitHub
- **Have an idea?** Start a discussion
- **Want to contribute?** We'd love your help!

---

## 🔗 Links

- **Live Site**: [https://html-tools-directory.lindy.site](https://html-tools-directory.lindy.site)
- **GitHub**: [https://github.com/juniorduc44/htmlTools](https://github.com/juniorduc44/htmlTools)
- **Contributing Guide**: [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Made with 💚 for the open web. Privacy first. Always.**
