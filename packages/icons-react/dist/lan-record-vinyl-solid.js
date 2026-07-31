import React from 'react';

export const LanRecordVinylSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 240a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-112a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanRecordVinylSolid;
