import React from 'react';

export const LanCompactDisc = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m72 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-120 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176 8.8 0 16 7.2 16 16s-7.2 16-16 16c-79.5 0-144 64.5-144 144"})
);

export default LanCompactDisc;
