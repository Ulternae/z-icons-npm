import React from 'react';

export const LanTrashCanPlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160.5 27.4c2-6.8 8.3-11.4 15.3-11.4h96.4c7.1 0 13.3 4.6 15.3 11.4l11 36.6h-149zM116.1 64H16C7.2 64 0 71.2 0 80s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H331.9l-13.7-45.8c-6.1-20.3-24.8-34.2-46-34.2h-96.4c-21.2 0-39.9 13.9-46 34.2zM32 144v304c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V144h-32v304c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V144zm176 216c0 8.8 7.2 16 16 16s16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16s-7.2-16-16-16h-56v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56z"})
);

export default LanTrashCanPlus;
