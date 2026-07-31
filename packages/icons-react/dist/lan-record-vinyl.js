import React from 'react';

export const LanRecordVinyl = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-256a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-128-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanRecordVinyl;
