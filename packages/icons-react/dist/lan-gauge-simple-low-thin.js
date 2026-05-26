import React from 'react';

export const LanGaugeSimpleLowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64 0-22.2 11.3-41.7 28.4-53.2l-83.6-167.2c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6l83.6 167.2c6.6-2.3 13.8-3.6 21.2-3.6 35.3 0 64 28.7 64 64s-28.7 64-64 64z"})
);

export default LanGaugeSimpleLowThin;
