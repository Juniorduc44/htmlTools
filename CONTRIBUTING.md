# Contributing to HTML Tools Directory

Thank you for wanting to contribute! This guide makes it super easy to add new HTML tools to the directory.

## 🚀 Quick Start: Adding a New Tool

### Step 1: Create Your HTML Tool File

1. Create a new HTML file in `/public/tools/` directory
2. Name it something descriptive (e.g., `my-awesome-tool.html`)
3. Make sure it's a **standalone, self-contained HTML file** with all CSS and JavaScript included

**Example structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Tool</title>
    <style>
        /* All CSS here */
        body { font-family: Arial, sans-serif; }
    </style>
</head>
<body>
    <h1>My Awesome Tool</h1>
    <p>Tool content here</p>
    
    <script>
        // All JavaScript here
        console.log('Tool loaded!');
    </script>
</body>
</html>
```

### Step 2: Create Metadata File

Create a JSON file with the **exact same name** as your HTML file (just change `.html` to `.json`).

**File:** `/public/tools/my-awesome-tool.json`

```json
{
  "id": "my-awesome-tool",
  "name": "My Awesome Tool",
  "description": "A brief description of what your tool does. Keep it under 150 characters.",
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
  "sourceUrl": "https://github.com/your-username/your-repo",
  "author": "Your Name",
  "version": "1.0.0"
}
```

### Step 3: That's It! 🎉

The directory will **automatically discover and display** your tool. No coding required!

## 📋 Metadata Field Guide

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (lowercase, kebab-case, matches filename) |
| `name` | string | ✅ | Display name of the tool |
| `description` | string | ✅ | Brief description (150 chars max) |
| `category` | string | ✅ | One of: Productivity, Utilities, Media, Security, Development, Fun, Finance, Health |
| `tags` | array | ✅ | 3-5 relevant tags for searching |
| `offline` | boolean | ✅ | Can the tool work without internet? |
| `mobileOptimized` | boolean | ✅ | Does it work well on mobile? |
| `featured` | boolean | ✅ | Should it appear in featured section? |
| `rating` | number | ✅ | Rating 1-5 (e.g., 4.5) |
| `reviews` | number | ✅ | Number of reviews/users |
| `features` | array | ✅ | 3-5 key features |
| `privacy` | string | ✅ | Privacy statement (e.g., "All data stays in browser") |
| `sourceUrl` | string | ❌ | Link to source code (optional) |
| `author` | string | ❌ | Tool author name (optional) |
| `version` | string | ❌ | Tool version (optional) |

## 📁 File Structure

```
/public/tools/
├── my-awesome-tool.html      ← Your HTML tool
├── my-awesome-tool.json      ← Metadata file
├── another-tool.html
├── another-tool.json
└── ... more tools
```

## ✅ Checklist Before Submitting

- [ ] HTML file is self-contained (all CSS/JS included)
- [ ] HTML file works offline
- [ ] HTML file is responsive (works on mobile)
- [ ] JSON metadata file has matching name
- [ ] All required fields in JSON are filled
- [ ] Category is one of the 8 allowed categories
- [ ] Rating is between 1-5
- [ ] Features array has 3-5 items
- [ ] No console errors when tool loads

## 🎨 Best Practices

### HTML Tool Tips

1. **Self-contained**: Include all CSS and JavaScript in the HTML file
2. **No external dependencies**: Don't rely on external CDNs or APIs
3. **Responsive design**: Use CSS media queries for mobile support
4. **Offline-first**: Store data in localStorage, not on servers
5. **Fast loading**: Keep file size under 500KB
6. **Accessible**: Use semantic HTML and ARIA labels
7. **No tracking**: Don't include analytics or tracking code

### Metadata Tips

1. **Accurate category**: Choose the most relevant category
2. **Honest ratings**: Be realistic about tool quality
3. **Clear description**: Explain what the tool does in one sentence
4. **Relevant tags**: Use tags people would search for
5. **Privacy statement**: Be clear about data handling

## 🔄 Updating Existing Tools

To update a tool:

1. Edit the HTML file in `/public/tools/`
2. Update the JSON metadata if needed
3. Increment the `version` number in the JSON
4. Submit a pull request with your changes

## 🐛 Reporting Issues

Found a bug in a tool? 

1. Open an issue on GitHub
2. Include the tool name and description of the bug
3. Provide steps to reproduce

## 📝 Examples

### Example 1: Simple Calculator

**File:** `/public/tools/simple-calculator.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        input { padding: 10px; margin: 5px; }
        button { padding: 10px 20px; }
    </style>
</head>
<body>
    <h1>Calculator</h1>
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <button onclick="add()">Add</button>
    <p id="result"></p>
    
    <script>
        function add() {
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').textContent = n1 + n2;
        }
    </script>
</body>
</html>
```

**File:** `/public/tools/simple-calculator.json`
```json
{
  "id": "simple-calculator",
  "name": "Simple Calculator",
  "description": "Basic calculator for quick math operations.",
  "category": "Utilities",
  "tags": ["calculator", "math", "simple"],
  "offline": true,
  "mobileOptimized": true,
  "featured": false,
  "rating": 4.2,
  "reviews": 45,
  "features": ["Add numbers", "Simple interface", "Fast"],
  "privacy": "No data collection. All calculations done locally.",
  "author": "Your Name",
  "version": "1.0.0"
}
```

## 🚀 Advanced: Custom Styling

The directory uses Tailwind CSS. Your tools can:

1. Use inline styles (recommended for self-contained tools)
2. Use Tailwind classes if you include the CDN
3. Use any CSS framework you prefer

## 📞 Questions?

- Check existing tools in `/public/tools/` for examples
- Read the main README.md for project overview
- Open an issue on GitHub for help

---

**Happy contributing! 🎉**
