import React from 'react';

export const LanTrashCanArrowTurnLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M151.4 15.1C155 6 163.9 0 173.7 0h100.6c9.8 0 18.6 6 22.3 15.1L316.2 64H131.8zM114.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H333.4L311.5 9.1C305.4-6 290.7-16 274.3-16H173.7c-16.4 0-31.1 10-37.1 25.1zM32 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128h-16v320c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V128zm173.7 58.3c-3.1-3.1-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L139.3 280H248c30.9 0 56 25.1 56 56v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40c0-39.8-32.2-72-72-72H139.3l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3z"})
);

export default LanTrashCanArrowTurnLeftThin;
