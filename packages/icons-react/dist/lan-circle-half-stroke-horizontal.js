import React from 'react';

export const LanCircleHalfStrokeHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0M32.6 272c8.2 116.2 105 208 223.4 208s215.2-91.8 223.4-208zm446.8-32C471.2 123.8 374.3 32 256 32S40.8 123.8 32.6 240z"})
);

export default LanCircleHalfStrokeHorizontal;
