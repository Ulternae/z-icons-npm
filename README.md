# z-icons

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)

> Icon library (core & neo) as SVG sprites + Web Component `<z-icon>`

A lightweight and performant icon system using SVG sprites and a custom Web Component. Includes a fully typed React component for React/Next.js projects with autocomplete support.

## 📚 Documentation

- **[React/Next.js Quick Start](./README_REACT.md)** - Get started quickly with React
- [React/TypeScript Usage Examples](./examples/react-usage.tsx) - Advanced patterns and examples
- [TypeScript Guide](./TYPESCRIPT.md) - Full TypeScript documentation
- [Vite Configuration Example](./vite.config.example.js) - Required for Vite projects
- [Changelog](./CHANGELOG.md) - Version history and changes

## Features

- 🎯 **Two Icon Packs**: `core` and `neo` collections
- 🚀 **Web Component**: Native `<z-icon>` custom element
- ⚛️ **React Component**: Fully typed React/Next.js component
- 📦 **SVG Sprites**: Optimized with SVGO for minimal bundle size
- 🎨 **Fully Customizable**: Size, color, and class support
- 🌙 **Theme Ready**: Works seamlessly with light/dark modes
- ⚡ **Zero Dependencies**: No runtime dependencies (React as peer dependency for React component)
- 📝 **TypeScript**: Full type definitions with autocomplete for icon names

## Installation

```bash
npm install @zcorvus/z-icons
# or
pnpm add @zcorvus/z-icons
# or
yarn add @zcorvus/z-icons
```

**For React/Next.js projects**, the package includes a typed React component with full TypeScript support.

## Usage

### Basic Usage

```html
<!-- Import the Web Component -->
<script type="module">
  import 'z-icons';
</script>

<!-- Use the icon -->
<z-icon name="sun" type="core"></z-icon>
```

### With Attributes

```html
<!-- Custom size -->
<z-icon name="moon" type="core" size="32"></z-icon>

<!-- Custom color -->
<z-icon name="alarm-clock" type="neo" color="#ff5733"></z-icon>

<!-- With CSS class -->
<z-icon name="anchor" type="core" class="my-icon"></z-icon>

<!-- All together -->
<z-icon 
  name="address-card" 
  type="neo" 
  size="48" 
  color="currentColor"
  class="icon-large"
></z-icon>
```

### In JavaScript/TypeScript

```javascript
import 'z-icons';

// Create icon programmatically
const icon = document.createElement('z-icon');
icon.setAttribute('name', 'sun');
icon.setAttribute('type', 'core');
icon.setAttribute('size', '24');
icon.setAttribute('color', '#fbbf24');
document.body.appendChild(icon);
```

### React / Next.js Example

#### Using the React Component (Recommended)

**Step 1:** Import the web component once in your app (e.g., in `_app.tsx`, `layout.tsx`, or `main.tsx`)

```tsx
// In your app root or layout
import '@zcorvus/z-icons';
```

**Step 2:** Use the React component with full TypeScript support

```tsx
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';

function App() {
  return (
    <div>
      {/* Basic usage - type defaults to 'core' */}
      <Icon name="sun" />
      
      {/* With custom props */}
      <Icon name="moon" type="core" size={32} color="#fbbf24" />
      
      {/* Neo icons */}
      <Icon name="alarm-clock" type="neo" size="24" className="my-icon" />
      
      {/* With inline styles */}
      <Icon 
        name="anchor" 
        size={48} 
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
```

#### Next.js App Router

```tsx
// app/layout.tsx
import '@zcorvus/z-icons';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx or any component
'use client'; // Only if using interactivity

import { Icon } from '@zcorvus/z-icons/react';

export default function Page() {
  return (
    <div>
      <Icon name="sun" size={24} />
      <Icon name="moon" type="core" color="currentColor" />
    </div>
  );
}
```

#### Next.js Pages Router

```tsx
// pages/_app.tsx
import '@zcorvus/z-icons';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

```tsx
// pages/index.tsx or any page
import { Icon } from '@zcorvus/z-icons/react';

export default function Home() {
  return <Icon name="sun" size={24} />;
}
```

#### Using Web Component Directly

```tsx
import '@zcorvus/z-icons';

function App() {
  return (
    <div>
      <z-icon name="sun" type="core" size="24" color="currentColor" />
    </div>
  );
}
```

### Vue Example

```vue
<template>
  <z-icon name="moon" type="neo" size="32" color="currentColor" />
</template>

<script setup>
import '@zcorvus/z-icons';
</script>
```

### ⚠️ Vite Configuration (Important!)

If you're using **Vite**, you **must** exclude this library from dependency optimization:

```javascript
// vite.config.js (or vite.config.ts)
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@zcorvus/z-icons']
  }
});
```

See `vite.config.example.js` in this repository for a complete example.

**Why is this needed?**

The library uses `import.meta.url` to dynamically resolve SVG sprite paths at runtime. When Vite optimizes dependencies (pre-bundling), it:
1. Rewrites module imports and paths
2. Breaks the `import.meta.url` context
3. Causes 404 errors when loading sprite files

By excluding the library from optimization, Vite preserves the original module structure and allows proper asset resolution.

**Symptoms of missing this configuration:**
- Icons don't render
- Console errors about missing SVG files
- 404 errors for `core-sprite.svg` or `neo-sprite.svg`

## API

### React Component Props

```typescript
interface IconProps {
  name: CoreIconName | NeoIconName;  // Icon name (autocompleted)
  type?: 'core' | 'neo';              // Icon pack (default: 'core')
  size?: string | number;             // Size in pixels (default: '24')
  color?: string;                     // CSS color (default: 'currentColor')
  className?: string;                 // Additional CSS classes
  style?: React.CSSProperties;        // Inline styles
}
```

### Web Component Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | `string` | - | **Required.** Icon name (e.g., "sun", "moon") |
| `type` | `"core" \| "neo"` | `"core"` | Icon pack to use |
| `size` | `string \| number` | `"24"` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (CSS color value) |
| `class` | `string` | `""` | Additional CSS classes |

## Icon Packs

### Core Icons
- `address-card`
- `alarm-clock`
- `anchor`
- `moon`
- `sun`

### Neo Icons
- `address-card`
- `alarm-clock`
- `anchor`
- `moon`
- `sun`

## Development

### Project Structure

```
z-icons-npm/
├── src/
│   ├── icon.ts              # Web Component implementation
│   ├── core/
│   │   └── icons/           # Core icon SVGs
│   └── neo/
│       └── icons/           # Neo icon SVGs
├── scripts/
│   ├── build.js             # Build script for sprites
│   └── svgo.config.js       # SVGO optimization config
├── dist/                    # Built files (generated)
│   ├── icon.js              # Bundled Web Component
│   ├── core/
│   │   └── core-sprite.svg  # Core sprite
│   └── neo/
│       └── neo-sprite.svg   # Neo sprite
└── example.html             # Demo page
```

### Build Process

1. **Generate Sprites**: Combines individual SVG icons into optimized sprite files
2. **Bundle Component**: Compiles TypeScript Web Component with tsup
3. **Optimize**: Minifies and optimizes for production

### Scripts

```bash
# Build sprites from SVG icons
npm run sprites

# Bundle the Web Component
npm run bundle

# Full build (sprites + bundle)
npm run build

# Prepare for publishing (runs build automatically)
npm run prepublishOnly
```

### Adding New Icons

1. Add your SVG file to `src/core/icons/` or `src/neo/icons/`
2. Run `npm run build` to regenerate sprites
3. Use the icon with `<z-icon name="your-icon-name" type="core|neo" />`

## How It Works

The library uses SVG sprites for optimal performance:

1. **Build Time**: Individual SVG icons are combined into sprite files
2. **Runtime**: The Web Component loads sprites and references icons using `<use>` tags
3. **Result**: Only two sprite files are loaded regardless of how many icons you use

This approach provides:
- ⚡ Better performance than individual SVG imports
- 📦 Smaller bundle sizes
- 🎯 Efficient caching
- 🔄 Dynamic icon switching without reloads

## Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ All modern browsers with Web Components support

## License

UNLICENSED

## Author

Ulqernesh Karvenae
