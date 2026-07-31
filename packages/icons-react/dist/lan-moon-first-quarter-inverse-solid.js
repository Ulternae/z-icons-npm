import React from 'react';

export const LanMoonFirstQuarterInverseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 448c-106 0-192-86-192-192S150 64 256 64z"})
);

export default LanMoonFirstQuarterInverseSolid;
