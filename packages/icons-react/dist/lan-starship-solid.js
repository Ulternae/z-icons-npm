import React from 'react';

export const LanStarshipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0 17.7 14.3 32 32 32h23l78.6 88.5-6.2 1.2C109.1 221.4 96 237.4 96 256s13.1 34.6 31.4 38.3l6.2 1.3L55 384.1H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-62.1l67.3-75.8 25.9 5.2c-4.7-18.4-7.2-37.6-7.2-57.4s2.5-39.1 7.2-57.4l-25.9 5.2-67.3-75.8H192c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96m448 80a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 272a192 192 0 1 0 0-384 192 192 0 1 0 0 384m32-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanStarshipSolid;
