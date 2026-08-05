import React from 'react';

export function MinaZero({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8.75 13.875v-3.75a3.125 3.125 0 1 1 6.25 0v3.75a3.125 3.125 0 1 1-6.25 0"})
  );
}

export default MinaZero;
