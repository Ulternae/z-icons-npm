import React from 'react';

export const LanBullseyeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanBullseyeSolid;
