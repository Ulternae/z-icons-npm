import React from 'react';

export const MinaPause = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9 6.5H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1m6.5 0h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"})
);

export default MinaPause;
