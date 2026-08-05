import React from 'react';

export function MinaDazeCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m8 12 2-1.5L8 9m8 3-2-1.5L16 9m0 7.25-1.333-1-1.334 1-1.333-1-1.333 1-1.334-1-1.333 1"}), React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
  );
}

export default MinaDazeCircle;
