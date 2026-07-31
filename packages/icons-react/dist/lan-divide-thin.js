import React from 'react';

export const LanDivideThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M264 104a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-96 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0M0 256c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m224 192a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0-96a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanDivideThin;
