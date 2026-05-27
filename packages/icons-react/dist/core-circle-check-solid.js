import React from 'react';

export const CoreCircleCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-32-225.9-64-64-33.9 33.9 81 81c9.4 9.4 24.6 9.4 33.9 0l145-145-33.9-33.9-128 128z"})
);

export default CoreCircleCheckSolid;
