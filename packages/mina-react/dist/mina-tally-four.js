import React from 'react';

export function MinaTallyFour({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4 4v16M9.333 4v16m5.334-16v16M20 4v16"})
  );
}

export default MinaTallyFour;
