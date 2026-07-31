import React from 'react';

export const LanCircleHalfStrokeHorizontalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-495.8 8C20.4 392.8 126.1 496 256 496s235.6-103.2 239.8-232zm479.6-16C491.6 119.2 385.9 16 256 16S20.4 119.2 16.2 248z"})
);

export default LanCircleHalfStrokeHorizontalThin;
