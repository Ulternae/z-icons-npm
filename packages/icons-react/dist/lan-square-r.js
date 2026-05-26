import React from 'react';

export const LanSquareR = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 64h64c35.3 0 64 28.7 64 64 0 25.5-15 47.6-36.6 57.9l33.4 44.5c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2L232 288h-40v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16m64 96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v64z"})
);

export default LanSquareR;
