import React from 'react';

export function createPackIcon(iconMap, defaultVariant = 'light') {
  return function ZPackIcon({ name, variant = defaultVariant, size = 24, color, style, ...props }) {
    const Icon = iconMap[variant]?.[name];

    if (!Icon) {
      return null;
    }

    return React.createElement(Icon, { size, color, style, ...props });
  };
}
