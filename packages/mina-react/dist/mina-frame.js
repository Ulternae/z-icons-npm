import React from 'react';

export function MinaFrame({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 6.6H3m18 10.8H3M6.6 3v18M17.4 3v18"})
  );
}

export default MinaFrame;
