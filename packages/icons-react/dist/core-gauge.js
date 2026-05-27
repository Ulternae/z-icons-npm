import React from 'react';

export const CoreGauge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 230.5c21.3 10.4 36 32.2 36 57.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-25.3 14.7-47.1 36-57.5V128h56zM128 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m256 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-224-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default CoreGauge;
