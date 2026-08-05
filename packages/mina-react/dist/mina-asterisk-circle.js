import React from 'react';

export function MinaAsteriskCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-3.5v7m-3-1.75 6-3.5m-6 0 6 3.5"})
  );
}

export default MinaAsteriskCircle;
