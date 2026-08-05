import React from 'react';

export function MinaInfinity({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14 9.417C14.838 8.575 15.793 8 17 8a4 4 0 0 1 0 8c-4.5 0-5.5-8-10-8a4 4 0 1 0 0 8c1.207 0 2.162-.575 3-1.417"})
  );
}

export default MinaInfinity;
