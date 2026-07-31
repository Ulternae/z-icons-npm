import React from 'react';

export const LanTrashCanCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 448c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V128h16v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128h16zm257.7-236.3c2.6-3.6 7.6-4.3 11.2-1.7s4.3 7.6 1.8 11.2L204.9 377.5c-1.4 1.9-3.6 3.1-5.9 3.3s-4.7-.7-6.3-2.4l-62.3-64.5c-3.1-3.2-3-8.2.2-11.3s8.2-3 11.3.2l55.7 57.6zM274.3-16c16.4 0 31.1 10 37.1 25.2l22 54.8H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h106.6l21.9-54.8C142.6-6 157.3-16 173.7-16h100.7zM173.7 0c-9.8 0-18.6 6-22.3 15.1L131.8 64h184.4l-19.6-48.9C293 6 284.2 0 274.3 0z"})
);

export default LanTrashCanCheckThin;
