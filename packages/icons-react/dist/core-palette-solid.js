import React from 'react';

export const CorePaletteSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256 0 39.2-8.9 76.4-24.7 109.7l-8.7 18.3H320c-17.7 0-32 14.3-32 32v96h-32C114.6 512 0 397.4 0 256S114.6 0 256 0M128 180a44 44 0 1 0 0 88 44 44 0 1 0 0-88m256 0a44 44 0 1 0 0 88 44 44 0 1 0 0-88M256 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88"})
);

export default CorePaletteSolid;
