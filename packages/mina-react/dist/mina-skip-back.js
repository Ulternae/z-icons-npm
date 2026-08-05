import React from 'react';

export function MinaSkipBack({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 3v18m4.726-8.22 8.65 6.92a1 1 0 0 0 1.624-.78V5.08a1 1 0 0 0-1.625-.78l-8.649 6.92a1 1 0 0 0 0 1.56"})
  );
}

export default MinaSkipBack;
