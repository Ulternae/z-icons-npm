import React from 'react';

export const LanThoughtBubbleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c11.5 0 22.6-1.5 33.2-4.3C181 363.2 216.1 384 256 384s75-20.9 94.8-52.3c10.6 2.8 21.7 4.3 33.2 4.3 70.7 0 128-57.3 128-128S454.7 80 384 80c-3.1 0-6.1.1-9.2.3M160 496a48 48 0 1 0 0-96 48 48 0 1 0 0 96M48 528a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanThoughtBubbleSolid;
