import React from 'react';

export const LanHeartSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm244.4 114.2-9.1 9.1c-3 3-7.1 4.7-11.3 4.7s-8.3-1.7-11.3-4.7l-9.1-9.1c-6.5-6.5-15.4-10.2-24.7-10.2H176c-17.7 0-32 14.3-32 32 0 21.4 14.5 42.5 34.6 61 16.8 15.5 35.4 27 45.4 32.7 10-5.7 28.5-17.2 45.4-32.7 20.1-18.5 34.6-39.7 34.6-61 0-17.7-14.3-32-32-32h-2.9c-9.3 0-18.1 3.7-24.7 10.2m24.7-42.2h2.9c35.3 0 64 28.7 64 64s-23.1 64.5-45 84.6c-22.4 20.6-46.8 34.7-55.9 39.6-7 3.8-15.3 3.8-22.2 0-9.1-4.9-33.5-19-55.9-39.6-21.8-20.1-45-49.3-45-84.6s28.7-64 64-64h2.9c16.7 0 32.8 6.3 45.1 17.5 12.3-11.2 28.4-17.5 45.1-17.5"})
);

export default LanHeartSquare;
