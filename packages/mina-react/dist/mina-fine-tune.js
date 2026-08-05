import React from 'react';

export function MinaFineTune({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10 8.5h11m-18 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 7h11m3 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"})
  );
}

export default MinaFineTune;
