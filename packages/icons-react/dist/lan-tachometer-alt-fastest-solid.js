import React from 'react';

export const LanTachometerAltFastestSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64 0-3.4-.3-6.7-.8-9.9l109.1-65.5c11.4-6.8 15-21.6 8.2-32.9s-21.6-15.1-32.9-8.2l-109.1 65.4c-10.7-8.1-24.1-12.9-38.5-12.9-35.3 0-64 28.7-64 64s28.7 64 64 64m-80-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m304-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanTachometerAltFastestSolid;
