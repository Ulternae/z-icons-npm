# TypeScript Support

`@zcorvus/z-icons` provides full TypeScript support with auto-completion and type checking for icon names.

## Type Definitions

### Icon Names

The library exports type-safe icon name types:

```typescript
import type { CoreIconName, NeoIconName } from '@zcorvus/z-icons/react';

// CoreIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun'
// NeoIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun'
```

### React Component Props

```typescript
interface IconProps {
  name: CoreIconName | NeoIconName;  // Required: Icon name with autocomplete
  type?: 'core' | 'neo';              // Optional: Icon pack (default: 'core')
  size?: string | number;             // Optional: Size in pixels (default: '24')
  color?: string;                     // Optional: CSS color (default: 'currentColor')
  className?: string;                 // Optional: Additional CSS classes
  style?: React.CSSProperties;        // Optional: Inline styles
}
```

## Usage Examples

### Basic Type-Safe Usage

```typescript
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';

function MyComponent() {
  // TypeScript will autocomplete and validate
  const iconName: CoreIconName = 'sun';
  
  return <Icon name={iconName} />;
}
```

### Generic Icon Component

```typescript
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName, NeoIconName } from '@zcorvus/z-icons/react';

interface IconButtonProps<T extends 'core' | 'neo'> {
  iconName: T extends 'core' ? CoreIconName : NeoIconName;
  iconType: T;
  onClick: () => void;
}

function IconButton<T extends 'core' | 'neo'>({ 
  iconName, 
  iconType, 
  onClick 
}: IconButtonProps<T>) {
  return (
    <button onClick={onClick}>
      <Icon name={iconName as any} type={iconType} />
    </button>
  );
}

// Usage
<IconButton iconName="sun" iconType="core" onClick={() => {}} />
```

### Icon Selector with Type Safety

```typescript
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';
import { useState } from 'react';

const availableIcons: CoreIconName[] = [
  'sun',
  'moon',
  'anchor',
  'alarm-clock',
  'address-card'
];

function IconSelector() {
  const [selected, setSelected] = useState<CoreIconName>('sun');
  
  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {availableIcons.map((iconName) => (
          <button
            key={iconName}
            onClick={() => setSelected(iconName)}
            style={{
              padding: '0.5rem',
              border: selected === iconName ? '2px solid blue' : '1px solid gray',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            <Icon name={iconName} size={24} />
          </button>
        ))}
      </div>
      
      <p>Selected: {selected}</p>
      <Icon name={selected} size={48} />
    </div>
  );
}
```

### Typed Icon Map

```typescript
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName } from '@zcorvus/z-icons/react';

type IconConfig = {
  name: CoreIconName;
  color: string;
  label: string;
};

const iconConfigs: Record<string, IconConfig> = {
  weather: { name: 'sun', color: '#fbbf24', label: 'Weather' },
  time: { name: 'alarm-clock', color: '#6366f1', label: 'Time' },
  navigation: { name: 'anchor', color: '#3b82f6', label: 'Navigation' },
};

function IconGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {Object.entries(iconConfigs).map(([key, config]) => (
        <div key={key} style={{ textAlign: 'center' }}>
          <Icon 
            name={config.name} 
            size={32} 
            color={config.color}
          />
          <p>{config.label}</p>
        </div>
      ))}
    </div>
  );
}
```

### Conditional Icon Types

```typescript
import { Icon } from '@zcorvus/z-icons/react';
import type { CoreIconName, NeoIconName, IconProps } from '@zcorvus/z-icons/react';

function DynamicIcon({ useNeo }: { useNeo: boolean }) {
  // Type-safe conditional rendering
  if (useNeo) {
    const neoIcon: NeoIconName = 'sun';
    return <Icon name={neoIcon} type="neo" />;
  }
  
  const coreIcon: CoreIconName = 'sun';
  return <Icon name={coreIcon} type="core" />;
}
```

### Icon Helper Functions

```typescript
import type { CoreIconName, NeoIconName } from '@zcorvus/z-icons/react';

// Type guard
function isCoreIcon(name: string): name is CoreIconName {
  const coreIcons: CoreIconName[] = [
    'address-card',
    'alarm-clock', 
    'anchor',
    'moon',
    'sun'
  ];
  return coreIcons.includes(name as CoreIconName);
}

// Usage
function getIconColor(iconName: CoreIconName | NeoIconName): string {
  switch (iconName) {
    case 'sun':
      return '#fbbf24';
    case 'moon':
      return '#60a5fa';
    case 'alarm-clock':
      return '#f59e0b';
    default:
      return '#64748b';
  }
}
```

## Web Component Type Declaration

If you're using the web component directly in TypeScript/React:

```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'z-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
        type?: 'core' | 'neo';
        size?: string | number;
        color?: string;
      };
    }
  }
}

// Now you can use it with proper typing
function MyComponent() {
  return (
    <z-icon 
      name="sun" 
      type="core" 
      size="24" 
      color="currentColor"
    />
  );
}
```

## Next.js TypeScript Configuration

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Troubleshooting

### Icons not recognized

Make sure you've imported the web component:

```typescript
// In your app root (_app.tsx, layout.tsx, or main.tsx)
import '@zcorvus/z-icons';
```

### Type errors with icon names

Ensure you're importing the correct types:

```typescript
import type { CoreIconName, NeoIconName } from '@zcorvus/z-icons/react';
```

### Web component not defined in JSX

The React component handles this automatically. If using the web component directly, add the type declaration shown above.
