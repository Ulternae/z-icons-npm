import React from 'react';

export const LanUserMessage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256.4 218.4c5.9 9.6 13.2 18.3 21.6 25.7-16.4 7.6-34.7 11.9-54 11.9-70.7 0-128-57.3-128-128S153.3 0 224 0c11.5 0 22.6 1.5 33.2 4.3C251.5 13.4 247 23.4 244 34c-6.5-1.4-13.2-2.1-20-2.1-53 0-96 43-96 96s43 96 96 96c11.4 0 22.3-2 32.4-5.6zM176 336c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144zM320 64v96c0 17.7 14.3 32 32 32h16c8.8 0 16 7.2 16 16v41.4l52.7-52.7c3-3 7.1-4.7 11.3-4.7h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32m32-64h160c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-57.4l-48 48c-20.2 20.2-54.6 5.9-54.6-22.6V224c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64"})
);

export default LanUserMessage;
