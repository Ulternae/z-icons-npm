import React from 'react';

export const LanBriefsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 80c-17.7 0-32 14.3-32 32v32h480v-32c0-17.7-14.3-32-32-32zm-32 80v80c0 16.9 14.6 33.2 36 39.8 24.8 7.7 47.2 20.6 65.9 37.6l5.2-7c24-31.8 36.9-70.6 36.9-110.4v-40zm152.2 236c6.6 21.4 22.9 36 39.8 36h96c16.9 0 33.2-14.6 39.8-36 7.8-25.3 21.2-48.2 38.7-67.2L376 320c-26-34.6-40-76.7-40-120v-40H176v40c0 43.3-14 85.4-40 120l-6.6 8.7c17.5 19 30.9 41.9 38.7 67.2zM394 317.4c18.8-16.9 41.2-29.9 65.9-37.6 21.4-6.6 36-22.9 36-39.8v-80h-144v40c0 39.8 12.9 78.6 36.8 110.4l5.2 7zM0 112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v128c0 26.5-22 47.3-47.3 55.1-50.3 15.6-90 55.3-105.6 105.6C351.3 426 330.5 448 304 448h-96c-26.5 0-47.3-22-55.1-47.3-15.6-50.3-55.3-90-105.6-105.6C22 287.3 0 266.5 0 240z"})
);

export default LanBriefsThin;
