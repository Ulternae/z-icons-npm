import React from 'react';

export const CoreCompactDisc = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 288a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0-128a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default CoreCompactDisc;
