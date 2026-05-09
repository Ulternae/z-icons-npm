import React from 'react';

export const MinaNine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M10 17h1.25A3.75 3.75 0 0 0 15 13.25v-3.125m0 0a3.125 3.125 0 1 0-6.25 0c0 1.726 1.4 2.5 3.125 2.5S15 11.851 15 10.125"})
);

export default MinaNine;
