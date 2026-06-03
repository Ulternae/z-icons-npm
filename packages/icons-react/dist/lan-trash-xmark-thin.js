import React from 'react';

export const LanTrashXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M151.4 15.1C155 6 163.9 0 173.7 0h100.6c9.8 0 18.6 6 22.3 15.1L316.2 64H131.8zM114.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H333.4L311.5 9.1C305.4-6 290.7-16 274.3-16H173.7c-16.4 0-31.1 10-37.1 25.1zm-87 64 24 324.7c2.5 33.4 30.3 59.3 63.8 59.3h217.1c33.5 0 61.3-25.9 63.8-59.3L420.4 128h-16l-24 323.5c-1.9 25.1-22.7 44.5-47.9 44.5H115.4c-25.1 0-46-19.4-47.9-44.5L43.5 128h-16zm131.2 213.8c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l53.8-53.8 53.8 53.8c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L235.2 288l53.8-53.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-53.8 53.8-53.8-53.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l53.8 53.8z"})
);

export default LanTrashXmarkThin;
