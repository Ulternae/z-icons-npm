import React from 'react';

export const LanSquareNfi = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 64H64c-17.7 0-32 14.3-32 32v16H0V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v16h-32V96c0-17.7-14.3-32-32-32M0 400h32v16c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-16h32v16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm77.7-232.2L144 278.2V176c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 7.2-4.8 13.5-11.7 15.4s-14.3-1-18-7.2L80 233.8V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-7.2 4.8-13.5 11.7-15.4s14.3 1 18 7.2M208 176c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v48h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16zm184 0v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanSquareNfi;
