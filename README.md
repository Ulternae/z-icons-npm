# z-icons

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)

> Icon library (core & neo) as SVG sprites + Web Component `<z-icon>`

A lightweight and performant icon system using SVG sprites and a custom Web Component. No dependencies in production, optimized SVGs, and simple integration.

## Features

- 🎯 **Two Icon Packs**: `core` and `neo` collections
- 🚀 **Web Component**: Native `<z-icon>` custom element
- 📦 **SVG Sprites**: Optimized with SVGO for minimal bundle size
- 🎨 **Fully Customizable**: Size, color, and class support
- 🌙 **Theme Ready**: Works seamlessly with light/dark modes
- ⚡ **Zero Dependencies**: No runtime dependencies
- 📝 **TypeScript**: Type definitions included

## Installation

```bash
npm install z-icons
# or
pnpm add z-icons
# or
yarn add z-icons
```

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

### React Example

```jsx
import 'z-icons';

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
import 'z-icons';
</script>
```

## API

### Attributes

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
