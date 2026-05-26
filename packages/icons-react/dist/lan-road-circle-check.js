import React from 'react';

export const LanRoadCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M186.1 87.6 96.9 417.1c-.6 2.1-.9 4.2-.9 6.4 0 13.5 11 24.5 24.5 24.5H310c2.9 11.1 6.7 21.8 11.4 32H120.5C89.3 480 64 454.7 64 423.5c0-5 .7-10 2-14.8l89.2-329.4C162.8 51.4 188.1 32 217 32h206c28.9 0 54.2 19.4 61.8 47.3l35.3 130.2c-7.9-1-15.9-1.5-24.1-1.5-3.2 0-6.3.1-9.4.2L453.9 87.6C450.1 73.7 437.5 64 423 64h-87v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-87c-14.5 0-27.1 9.7-30.9 23.6M320 208c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m176 304a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m57.4 83.1c7.1 5.2 8.7 15.2 3.5 22.4l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5z"})
);

export default LanRoadCircleCheck;
