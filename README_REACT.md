# React/Next.js Quick Start Guide

A quick guide to get started with `@zcorvus/z-icons` in React and Next.js projects.

## Installation

```bash
npm install @zcorvus/z-icons
# or
pnpm add @zcorvus/z-icons
# or
yarn add @zcorvus/z-icons
```

## Setup

### Step 1: Import the Web Component

Import the web component **once** in your app root:

#### React (Vite/CRA)
```tsx
// src/main.tsx or src/App.tsx
import '@zcorvus/z-icons';
import { Icon } from '@zcorvus/z-icons/react';
```

#### Next.js App Router
```tsx
// app/layout.tsx
import '@zcorvus/z-icons';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Next.js Pages Router
```tsx
// pages/_app.tsx
import '@zcorvus/z-icons';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### Step 2: Configure Vite (if using Vite)

⚠️ **Required for Vite projects!**

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@zcorvus/z-icons']
  }
});
```

## Usage

### Basic Usage

```tsx
import { Icon } from '@zcorvus/z-icons/react';

function App() {
  return (
    <div>
      <Icon name="sun" />
      <Icon name="moon" size={32} />
      <Icon name="alarm-clock" type="neo" color="#6366f1" />
    </div>
  );
}
```

### TypeScript Support

Full autocomplete and type checking:

```tsx
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';

function TypedComponent() {
  // Autocomplete works here! ✨
  const iconName: CoreIconName = 'sun';
  
  return <Icon name={iconName} />;
}
```

### Theme Toggle Example

```tsx
import { Icon } from '@zcorvus/z-icons/react';
import { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Icon 
        name={theme === 'light' ? 'sun' : 'moon'} 
        size={24}
      />
    </button>
  );
}
```

### Icon Grid

```tsx
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';

const icons: CoreIconName[] = ['sun', 'moon', 'anchor', 'alarm-clock', 'address-card'];

function IconGrid() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {icons.map((iconName) => (
        <Icon key={iconName} name={iconName} size={32} />
      ))}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `CoreIconName \| NeoIconName` | - | **Required.** Icon name (autocompleted in TypeScript) |
| `type` | `'core' \| 'neo'` | `'core'` | Icon pack to use |
| `size` | `string \| number` | `'24'` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Inline styles |

## Available Icons

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

## Common Patterns

### With Tailwind CSS

```tsx
<Icon 
  name="sun" 
  className="text-yellow-500 hover:text-yellow-600 transition-colors"
  size={24}
/>
```

### With Inline Styles

```tsx
<Icon 
  name="moon" 
  style={{ 
    cursor: 'pointer',
    transition: 'transform 0.2s',
    transform: isActive ? 'scale(1.2)' : 'scale(1)'
  }}
/>
```

### Conditional Icon Type

```tsx
<Icon 
  name="sun" 
  type={useNeoStyle ? 'neo' : 'core'}
/>
```

## Troubleshooting

### Icons don't render

Make sure you've imported the web component:
```tsx
import '@zcorvus/z-icons';
```

### 404 errors for SVG files (Vite)

Add the Vite configuration:
```javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    exclude: ['@zcorvus/z-icons']
  }
});
```

### TypeScript errors

Ensure you're importing from the correct path:
```tsx
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';
```

## More Examples

Check out the [examples folder](./examples/react-usage.tsx) for more advanced patterns including:
- Animated icons
- Icon buttons with hover effects
- Status indicators
- Tooltips
- And more!

For detailed TypeScript usage, see [TYPESCRIPT.md](./TYPESCRIPT.md).
