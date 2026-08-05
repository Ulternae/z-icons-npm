import React from 'react';

export function MinaSeven({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.5 17c0-3.75 5-10 5-10s-3.75.625-6.25 0"})
  );
}

export default MinaSeven;
