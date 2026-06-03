import React from 'react';

export const LanUserNurseHairSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -29.1 448 541.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 44.9c0-12.7 7.5-24.2 19.2-29.3l96-42c8.2-3.6 17.5-3.6 25.7 0l96 42c11.6 5.1 19.1 16.6 19.1 29.3V144c0 70.7-57.3 128-128 128S96 214.7 96 144zM304 128h-37.3l-17.1 12.8C233 153.3 212.8 160 192 160h-46.4c7.4 36.5 39.7 64 78.4 64 44.2 0 80-35.8 80-80zM120.1 320.1c7.4-3.4 16.1-2.1 22.6 2.8l67 50.2c8.5 6.4 20.3 6.4 28.8 0l67-50.2c6.5-4.9 15.2-6.2 22.6-2.8 61.4 28.2 104.1 90.2 104.1 162.1 0 16.4-13.3 29.7-29.7 29.7l-356.8.1C29.3 512 16 498.7 16 482.3c0-72 42.7-134 104.1-162.1zM208 16v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V64h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8h-16V16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"})
);

export default LanUserNurseHairSolid;
