import React from 'react';

export function MinaZeroCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9.5 13.5v-3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0"})
  );
}

export default MinaZeroCircle;
