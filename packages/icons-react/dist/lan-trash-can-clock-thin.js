import React from 'react';

export const LanTrashCanClockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M183.4 15.1C187 6 195.9 0 205.7 0h100.6c9.8 0 18.6 6 22.3 15.1L348.2 64H163.8zM146.6 64H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H365.4L343.5 9.1C337.4-6 322.7-16 306.3-16H205.7c-16.4 0-31.1 10-37.1 25.1zM64 128v320c0 35.3 28.7 64 64 64h148c-3.7-5.1-7.2-10.5-10.3-16H128c-26.5 0-48-21.5-48-48V128zm384 0h-16v80c5.4 0 10.7.2 16 .7zm-80 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v25.4c5.2-2.4 10.6-4.6 16-6.5zm-104 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v145c4-13.3 9.4-26.1 16-38zm-104 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v208c0 4.4 3.6 8 8 8s8-3.6 8-8zm272 72a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-224c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48v-64c0-4.4-3.6-8-8-8"})
);

export default LanTrashCanClockThin;
