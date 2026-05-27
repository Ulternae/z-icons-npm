import React from 'react';

export const CoreMoonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 128c0 115.3 87.1 210.3 199.1 222.6 8.2.9 16.5 1.4 24.9 1.4 16.2 0 32.1-1.7 47.4-5-9.5 25.1-22.9 48.3-39.4 68.9-46.9 58.6-119 96.1-199.9 96.1C114.7 512 .1 397.4.1 256 .1 139.2 78.4 40.6 185.4 9.9 207.9 3.5 231.6 0 256.1 0c2.7 0 5.4 0 8.1.1-2.8 4-5.5 8.2-8.1 12.4-19.4 32.2-32 71.3-32 115.4z"})
);

export default CoreMoonSolid;
