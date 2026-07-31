import React from 'react';

export const LanFaceFrownSlightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0M182.7 375.3c-2.4 3.7-7.4 4.7-11.1 2.2s-4.7-7.4-2.2-11.1C188 338.5 219.8 320 256 320s68 18.5 86.7 46.5c2.4 3.7 1.4 8.6-2.2 11.1s-8.6 1.4-11.1-2.2C313.6 351.6 286.6 336 256 336s-57.6 15.6-73.3 39.3"})
);

export default LanFaceFrownSlightThin;
