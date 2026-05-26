import React from 'react';

export const LanCircleQuartersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m420 431.3-164-164-164 164c42.9 40.1 100.6 64.7 164 64.7s121.1-24.6 164-64.7m11.3-11.3c40.1-42.9 64.7-100.6 64.7-164s-24.6-121.1-64.7-164l-164 164zM420 80.7C377.1 40.6 319.4 16 256 16S134.9 40.6 92 80.7l164 164zM80.7 92C40.6 134.9 16 192.6 16 256s24.6 121.1 64.7 164l164-164zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleQuartersThin;
