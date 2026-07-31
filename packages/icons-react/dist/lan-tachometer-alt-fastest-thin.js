import React from 'react';

export const LanTachometerAltFastestThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m16 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-64 272a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-16 0c0-35.3 28.7-64 64-64 18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.7 11.1 2s1.7 8.6-2 11.1l-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9 0 35.3-28.7 64-64 64s-64-28.7-64-64zm192-224a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 224a16 16 0 1 1 0 32 16 16 0 1 1 0-32m64-96a16 16 0 1 1-32 0 16 16 0 1 1 32 0"})
);

export default LanTachometerAltFastestThin;
