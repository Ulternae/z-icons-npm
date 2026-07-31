import React from 'react';

export const LanKeySkeletonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 224c79.5 0 144-64.5 144-144S383.5 0 304 0 160 64.5 160 144c0 28.2 8.1 54.5 22.1 76.7L9.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-41.4-41.4 86.1-86.1c22.2 14 48.5 22.1 76.7 22.1z"})
);

export default LanKeySkeletonSolid;
