import React from 'react';

export function CoreRectangleWideSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M518.5 64.3C550.8 67.6 576 94.9 576 128v256l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3C25.2 444.4 0 417.1 0 384V128c0-33.1 25.2-60.4 57.5-63.7L64 64h448z"})
  );
}

export default CoreRectangleWideSolid;
