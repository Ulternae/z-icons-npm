import React from 'react';

export const LanUserMagnifyingGlass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192m110.2 161.1C345.5 174 352 151.8 352 128 352 57.3 294.7 0 224 0S96 57.3 96 128s57.3 128 128 128c16.5 0 32.3-3.1 46.7-8.8 16.2-22.9 38-41.6 63.5-54.1M244.8 304H176C78.8 304 0 382.8 0 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-79.5 64.5-144 144-144h64.2c.5-11 2.1-21.7 4.6-32M408 256.1a88 88 0 1 1 0 176 88 88 0 1 1 0-176m0 208c27.4 0 52.6-9.2 72.8-24.6l67.8 67.9c6.2 6.3 16.4 6.3 22.6 0s6.3-16.4 0-22.6l-67.9-68c15.4-20.2 24.6-45.4 24.6-72.7 0-66.3-53.7-120-120-120s-120 53.7-120 120 53.7 120 120 120z"})
);

export default LanUserMagnifyingGlass;
