import React from 'react';

export const CoreClockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m280-128v-24h-48v152c0 13.3 10.7 24 24 24h136v-48H280z"})
);

export default CoreClockSolid;
