import React from 'react';

export const LanPersonSeatWindowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 16a56 56 0 1 1 0 112 56 56 0 1 1 0-112m56 212v92h40c44.2 0 80 35.8 80 80v48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32v-80c0-8.8-7.2-16-16-16h-80c-35.3 0-64-28.7-64-64v-92c0-28.7 23.3-52 52-52s52 23.3 52 52M48 160c17.7 0 32 14.3 32 32v176c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-70.7 0-128-57.3-128-128V192c0-17.7 14.3-32 32-32M384 32h32c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
);

export default LanPersonSeatWindowSolid;
