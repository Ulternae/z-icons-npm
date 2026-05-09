import React from 'react';

export const MinaRainbow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 17.5v-2a9 9 0 1 1 18 0v2m-15 0v-2a6 6 0 0 1 12 0v2m-9 0v-2a3 3 0 1 1 6 0v2"})
);

export default MinaRainbow;
