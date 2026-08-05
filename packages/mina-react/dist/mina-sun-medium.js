import React from 'react';

export function MinaSunMedium({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-8.5V5m0 14.004V20.5M5 12H3.5m17 0H19m-1-6-1 1M6 6l1 1m0 10-1 1m12 0-1-1"})
  );
}

export default MinaSunMedium;
