import React from 'react';

export const LanDoNotEnter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m128 0c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.3 0-24 10.7-24 24m-32 0c0-30.9 25.1-56 56-56h208c30.9 0 56 25.1 56 56s-25.1 56-56 56H152c-30.9 0-56-25.1-56-56"})
);

export default LanDoNotEnter;
