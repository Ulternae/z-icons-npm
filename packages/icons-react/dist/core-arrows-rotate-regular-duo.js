import React from 'react';

export const CoreArrowsRotateRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 64c56.8 0 107.9 24.7 143.1 64H320v64h160c17.7 0 32-14.3 32-32V0h-64v86.7C401.1 33.5 332.5 0 256 0 114.6 0 0 114.6 0 256h64c0-106 86-192 192-192m0 384c-56.8 0-107.9-24.7-143.1-64H192v-64H32c-17.7 0-32 14.3-32 32v160h64v-86.7c46.9 53.1 115.5 86.7 192 86.7 141.4 0 256-114.6 256-256h-64c0 106-86 192-192 192"})
);

export default CoreArrowsRotateRegular-duo;
