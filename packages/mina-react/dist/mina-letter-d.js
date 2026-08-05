import React from 'react';

export function MinaLetterD({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 16.375v-8.75C8 7.28 8.28 7 8.625 7h2.5a4.375 4.375 0 0 1 4.375 4.375v1.25A4.375 4.375 0 0 1 11.125 17h-2.5A.625.625 0 0 1 8 16.375"})
  );
}

export default MinaLetterD;
