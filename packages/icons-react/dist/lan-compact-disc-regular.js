import React from 'react';

export const LanCompactDiscRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-112 24c0-61.9 50.1-112 112-112 13.3 0 24-10.7 24-24s-10.7-24-24-24c-88.4 0-160 71.6-160 160 0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanCompactDiscRegular;
