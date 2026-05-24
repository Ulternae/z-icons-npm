import React from 'react';

export const BruBandcamp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8m48.2 326.1h-181L207.9 178h181Z"})
);

export default BruBandcamp;
