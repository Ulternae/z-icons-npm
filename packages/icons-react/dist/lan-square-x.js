import React from 'react';

export const LanSquareX = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm172.5 70 51.5 64.4 51.5-64.4c5.5-6.9 15.6-8 22.5-2.5s8 15.6 2.5 22.5l-56 70 56 70c5.5 6.9 4.4 17-2.5 22.5s-17 4.4-22.5-2.5L224 281.6 172.5 346c-5.5 6.9-15.6 8-22.5 2.5s-8-15.6-2.5-22.5l56-70-56-70c-5.5-6.9-4.4-17 2.5-22.5s17-4.4 22.5 2.5"})
);

export default LanSquareX;
