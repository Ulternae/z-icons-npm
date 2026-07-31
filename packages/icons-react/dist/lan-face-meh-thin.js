import React from 'react';

export const LanFaceMehThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-80 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0M168 336c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanFaceMehThin;
