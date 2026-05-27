import React from 'react';

export const CoreCircleHalfStrokeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m32-66.7C378.8 430 448 351.1 448 256S378.8 81.9 288 66.7z"})
);

export default CoreCircleHalfStrokeSolid;
