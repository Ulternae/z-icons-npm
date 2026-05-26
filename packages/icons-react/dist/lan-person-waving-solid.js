import React from 'react';

export const LanPersonWavingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320-32c17.7 0 32 14.3 32 32v50c0 51.3-32.5 96.4-80 113.1V512c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V228.4c-.3.5-.6 1-1 1.5L59.1 313C49.7 328 30 332.5 15 323.2S-4.5 294 4.9 279l51.9-83c22.5-36 58.4-61.6 99.7-71.1l88.1-20.3C270 98.7 288 76.1 288 50V0c0-17.7 14.3-32 32-32M136 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPersonWavingSolid;
