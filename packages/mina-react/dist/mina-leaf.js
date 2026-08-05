import React from 'react';

export function MinaLeaf({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5.973 18.028c7.625 4.576 13.726-1.525 12.963-12.964C7.498 4.302 1.398 10.403 5.973 18.028m0 0L4 20m1.973-1.972L10.1 13.9"})
  );
}

export default MinaLeaf;
