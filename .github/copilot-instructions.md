# Copilot Instructions for "How I Use AI Tools" Project

## Project Overview
A static single-page website showcasing AI tool usage patterns with an Apple-inspired design aesthetic. Built with vanilla HTML/CSS/JS + Tailwind CDN. The site features dark mode support, responsive design, and interactive tool cards.

**Original content**: [Notion article](https://hubeiqiao.notion.site/how-i-use-ai-tools-personally)  
**Live site**: https://joe-ai.pages.dev/

## Architecture & Design Philosophy

### Apple-Inspired Design System
This project mimics Apple's design language throughout:
- **Typography**: Uses `-apple-system` font stack with tight letter-spacing (`-0.025em`)
- **Transitions**: `cubic-bezier(0.25, 0.8, 0.25, 1)` for smooth animations
- **Cards**: 16px border-radius, subtle shadows with hover elevation (`translateY(-3px)`)
- **Colors**: Gradient borders (blue→purple), backdrop-blur effects, subtle opacity variations

See `css/style.css` lines 1-100 for the complete design token system.

### Dark Mode Implementation
Dark mode uses class-based switching (`.dark` on `<html>`):
- Inline script in `<head>` prevents FOUC by checking `prefers-color-scheme`
- CSS variables define light/dark tokens (lines 1-43 in `style.css`)
- All components use `dark:` variants in Tailwind classes

### File Structure
```
index.html           # Single-page application (1476 lines)
css/
  style.css          # Custom styles & design tokens (2283 lines)
  mobile-scroll.css  # Touch scrolling optimizations
js/
  script.js          # DOM manipulation for layout fixes
```

## Key Patterns & Conventions

### Card Component Structure
All tool cards follow this pattern (see lines 137-195 in `index.html`):
```html
<div class="bg-white dark:bg-gray-800/90 rounded-2xl border shadow-lg 
            hover:scale-[1.02] transition-all duration-300">
  <div class="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
  <div class="p-8">
    <div class="flex items-center mb-6">
      <div class="h-16 w-16 rounded-xl bg-blue-50 dark:bg-blue-900/30">
        <img src="..." class="h-10 w-10">
      </div>
      <h4 class="text-2xl font-semibold">Tool Name</h4>
    </div>
    <!-- Tool details -->
  </div>
</div>
```
**Important**: Always include gradient top border, icon container with color-coded background, and hover scale effect.

### Tool Logo System
Logos use predefined classes in `style.css` (lines 146-191):
- `.tool-logo` base class (28×28px, 6px border-radius)
- `.logo-chatgpt`, `.logo-gemini`, etc. for brand colors
- Always set both class and inline img for flexibility

### Mobile Optimizations
Mobile devices (<768px) require special handling:
- **Header**: Remove backdrop-filter (performance) via `mobile-scroll.css`
- **Touch scrolling**: `-webkit-overflow-scrolling: touch` enabled
- **Icon sizing**: Script.js dynamically adjusts oversized icons (see Cursor icon fix)

## Development Workflows

### Making Changes
1. **HTML modifications**: 99% of content lives in `index.html`
2. **Styling**: Check if Tailwind classes suffice before adding custom CSS
3. **Layout fixes**: Use `script.js` for DOM manipulation if CSS isn't working
4. **Testing**: Verify both light/dark modes + mobile/desktop breakpoints

### Adding New Tool Cards
1. Copy an existing card structure from lines 137-195 (index.html)
2. Update gradient color (`from-[color]-500 to-[color]-600`)
3. Add logo class to `style.css` if new brand
4. Ensure external link has `target="_blank" rel="noopener noreferrer"`

### Common Issues
- **Layout breaks on mobile**: Check `script.js` for forced inline styles overriding Tailwind
- **Dark mode inconsistencies**: Ensure all colors have `dark:` variants
- **Card height mismatches**: Use `flex-1` or `h-full` on parent containers
- **Icon sizing**: `script.js` contains manual fixes for specific sections (factCheckingCard, Cursor)

## External Dependencies
- **Tailwind CSS**: Loaded via CDN (`cdn.tailwindcss.com`)
- **Font Awesome 6.4.0**: Icons via CDN (`cdnjs.cloudflare.com`)
- **External images**: Profile pics, logos (from Twitter, Google, etc.)

⚠️ **No build process**: Changes are instant but require manual browser refresh.

## Content Structure
The page follows this section hierarchy:
1. Hero section with profile + intro
2. "Most Frequently Used Models" (ChatGPT o3, Gemini 2.5 Pro)
3. "Additional Tools by Use Case" grid:
   - Search & Deep Research
   - Quick Fact-Checking (Twitter/X)
   - Proofread
   - (More sections continue...)

Each section uses semantic color coding (green=search, red=fact-check, purple=proofread).

## Critical Context
- **Date reference**: Content reflects "May 2025" state
- **Personal voice**: Written in first-person, showcasing individual preferences
- **Tool focus**: Emphasizes *how* tools are used, not just *what* they are
- **Strategy notes**: Many cards include methodology explanations (e.g., "use multiple tools in parallel, then validate")

## Testing Checklist
When making changes, verify:
- [ ] Dark mode works (toggle browser preference)
- [ ] Mobile layout (< 768px width)
- [ ] All external links open in new tab
- [ ] Hover states trigger properly
- [ ] No horizontal scroll on mobile
- [ ] Icons are consistently sized
