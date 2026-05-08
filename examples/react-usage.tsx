/**
 * Example usage of z-icons in React/Next.js
 * 
 * If you use the Web Component, register it once in browser code:
 * import '@zcorvus/z-icons/register';
 */

import React, { useState } from 'react';
import { ZIcon } from '@zcorvus/z-icons/react';
import type { CoreIconName, NeoIconName } from '@zcorvus/z-icons/react';

// ============================================
// BASIC USAGE EXAMPLES
// ============================================

export function BasicExample() {
  return (
    <div>
      {/* Default: core icons with size 24 */}
      <ZIcon name="sun" />
      <ZIcon name="moon" type="core" />
      <ZIcon name="alarm-clock" type="neo" />
    </div>
  );
}

export function CustomPropsExample() {
  return (
    <div>
      <ZIcon 
        name="sun" 
        size={32} 
        color="#fbbf24" 
        className="icon-sun" 
      />
      <ZIcon 
        name="moon" 
        type="core"
        size="48" 
        color="currentColor"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

// ============================================
// INTERACTIVE EXAMPLES
// ============================================

// Theme toggle button
export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '0.5rem',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer'
      }}
    >
      <ZIcon 
        name={theme === 'light' ? 'sun' : 'moon'} 
        size={24}
        color={theme === 'light' ? '#fbbf24' : '#60a5fa'}
      />
    </button>
  );
}

// Icon button with hover effect
export function IconButton({ iconName, onClick }: { 
  iconName: CoreIconName; 
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '0.75rem',
        border: '1px solid #e2e8f0',
        borderRadius: '0.5rem',
        background: isHovered ? '#f1f5f9' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
    >
      <ZIcon 
        name={iconName} 
        size={20}
        color={isHovered ? '#6366f1' : '#64748b'}
      />
    </button>
  );
}

// ============================================
// TYPE-SAFE EXAMPLES
// ============================================

export function TypeSafeExample() {
  // TypeScript will autocomplete and validate icon names
  const iconName: CoreIconName = 'sun';
  
  return <ZIcon name={iconName} />;
}

export function IconListExample() {
  const coreIcons: CoreIconName[] = [
    'sun', 
    'moon', 
    'anchor', 
    'alarm-clock', 
    'address-card'
  ];
  
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {coreIcons.map((iconName) => (
        <div 
          key={iconName} 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ZIcon name={iconName} size={32} color="#6366f1" />
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {iconName}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================
// CONDITIONAL RENDERING
// ============================================

export function ConditionalExample({ useNeoStyle }: { useNeoStyle: boolean }) {
  if (useNeoStyle) {
    return <ZIcon name="sun" type="neo" />;
  }
  
  return <ZIcon name="sun" type="core" />;
}

// Status indicator with icon
export function StatusIndicator({ status }: { 
  status: 'online' | 'offline' | 'away' 
}) {
  const getIconConfig = () => {
    switch (status) {
      case 'online':
        return { name: 'sun' as CoreIconName, color: '#22c55e' };
      case 'offline':
        return { name: 'moon' as CoreIconName, color: '#64748b' };
      case 'away':
        return { name: 'alarm-clock' as CoreIconName, color: '#f59e0b' };
    }
  };
  
  const config = getIconConfig();
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <ZIcon name={config.name} size={16} color={config.color} />
      <span style={{ textTransform: 'capitalize' }}>{status}</span>
    </div>
  );
}

// ============================================
// NEXT.JS EXAMPLES
// ============================================

// For Next.js App Router - use 'use client' directive if needed
export function NextJsClientComponent() {
  'use client';
  
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      <ZIcon name="anchor" size={20} />
      <span>Clicked {count} times</span>
    </button>
  );
}

// Next.js Server Component (no interactivity)
export function NextJsServerComponent() {
  return (
    <div>
      <ZIcon name="sun" size={24} color="currentColor" />
      <h1>This is a server component</h1>
    </div>
  );
}

// ============================================
// ADVANCED EXAMPLES
// ============================================

// Animated icon on click
export function AnimatedIcon() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <button
      onClick={handleClick}
      style={{
        padding: '1rem',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer'
      }}
    >
      <ZIcon 
        name="sun" 
        size={32}
        color="#fbbf24"
        style={{
          transform: isAnimating ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.5s ease'
        }}
      />
    </button>
  );
}

// Icon with tooltip
export function IconWithTooltip({ 
  iconName, 
  tooltip 
}: { 
  iconName: CoreIconName; 
  tooltip: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <ZIcon name={iconName} size={24} />
      {showTooltip && (
        <div style={{
          position: 'absolute',
          top: '-2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0.25rem 0.5rem',
          background: '#1e293b',
          color: 'white',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          whiteSpace: 'nowrap'
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
}
