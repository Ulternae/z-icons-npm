import React from 'react';

export const LanCircleXThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-65.8-349.1c-2.8-3.4-7.8-3.9-11.3-1.1s-3.9 7.8-1.1 11.3l67.9 82.9-67.9 82.9c-2.8 3.4-2.3 8.5 1.1 11.3s8.5 2.3 11.3-1.1l65.8-80.4 65.8 80.4c2.8 3.4 7.8 3.9 11.3 1.1s3.9-7.8 1.1-11.3L266.3 256l67.9-82.9c2.8-3.4 2.3-8.5-1.1-11.3s-8.5-2.3-11.3 1.1L256 243.3z"})
);

export default LanCircleXThin;
