# 🚀 Setup Guide - HTML Tools Directory

This guide will help you get the project running locally and understand how to add new tools.

## Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm or bun** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

## Quick Start (5 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/juniorduc44/htmlTools.git
cd htmlTools
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Start Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Adding New Tools (The Easy Way)

This is the core feature - **adding tools requires NO coding**. Just 2 files!

### Step 1: Create HTML Tool File

Create a new HTML file in `/public/tools/`:

**File:** `/public/tools/my-tool.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tool</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 20px; }
        h1 { margin-bottom: 20px; color: #333; }
        input, button { padding: 10px; margin: 5px; font-size: 16px; }
        button { background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; }
        button:hover { background: #0051D5; }
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

### Step 2: Create Metadata File

Create a JSON file with the **exact same name** as your HTML file:

**File:** `/public/tools/my-tool.json`

```json
{
  "id": "my-tool",
  "name": "My Tool",
  "description": "A brief description of what your tool does.",
  "category": "Productivity",
  "tags": ["tag1", "tag2", "tag3"],
  "offline": true,
  "mobileOptimized": true,
  "featured": false,
  "rating": 4.5,
  "reviews": 100,
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "privacy": "All data stays in your browser. No server communication.",
  "author": "Your Name",
  "version": "1.0.0"
}
```

### Step 3: Done! 🎉

Push to GitHub and your tool appears automatically:

```bash
git add public/tools/my-tool.*
git commit -m "Add my-tool"
git push origin main
```

**That's it!** No code changes needed. The directory automatically discovers and displays your tool.

## 📋 Metadata Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (lowercase, kebab-case) |
| `name` | string | ✅ | Display name |
| `description` | string | ✅ | Brief description (150 chars max) |
| `category` | string | ✅ | One of: Productivity, Utilities, Media, Security, Development, Fun, Finance, Health |
| `tags` | array | ✅ | 3-5 search tags |
| `offline` | boolean | ✅ | Works without internet? |
| `mobileOptimized` | boolean | ✅ | Mobile-friendly? |
| `featured` | boolean | ✅ | Show in featured section? |
| `rating` | number | ✅ | Rating 1-5 |
| `reviews` | number | ✅ | Number of reviews |
| `features` | array | ✅ | 3-5 key features |
| `privacy` | string | ✅ | Privacy statement |
| `author` | string | ❌ | Tool author (optional) |
| `version` | string | ❌ | Tool version (optional) |

## 📁 Project Structure

```
htmlTools/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Header, Footer
│   └── sections/            # Hero, ToolsGrid, Features
├── lib/
│   ├── tools-data.ts        # Tool database
│   ├── tools-loader.ts      # Dynamic loader
│   └── utils.ts             # Utilities
├── public/
│   └── tools/               # 🎯 Add your tools here!
│       ├── tool-name.html   # HTML tool
│       └── tool-name.json   # Metadata
├── CONTRIBUTING.md          # Contribution guide
├── SETUP.md                 # This file
└── README.md                # Project overview
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

## 🌐 Environment Variables

Create `.env.local` (optional):

```bash
# App configuration
NEXT_PUBLIC_APP_NAME="HTML Tools Directory"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 📦 Building for Production

```bash
# Build the project
npm run build

# Test production build locally
npm start

# Deploy to Vercel (if using Vercel)
vercel deploy
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Changes Not Showing

```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

## 📚 Additional Resources

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Detailed contribution guide with examples
- **[README.md](./README.md)** - Project overview and features
- **[Next.js Docs](https://nextjs.org/docs)** - Next.js documentation
- **[shadcn/ui](https://ui.shadcn.com/)** - UI component library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-tool`)
3. Add your HTML tool and metadata file
4. Commit your changes (`git commit -m "Add my-tool"`)
5. Push to the branch (`git push origin feature/my-tool`)
6. Open a Pull Request

## 📞 Support

- **Questions?** Check [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Found a bug?** Open an issue on GitHub
- **Have an idea?** Start a discussion

## 📝 License

MIT License - See [LICENSE](./LICENSE) file for details.

---

**Happy building! 🚀**
