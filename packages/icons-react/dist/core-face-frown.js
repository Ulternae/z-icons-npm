import React from 'react';

export const CoreFaceFrown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-48 120c-38.5 0-72.1 20.9-90.1 52l-41.5-24c26.2-45.4 75.4-76 131.6-76s105.4 30.6 131.7 76l-41.5 24c-18-31.1-51.6-52-90.1-52z"})
);

export default CoreFaceFrown;
