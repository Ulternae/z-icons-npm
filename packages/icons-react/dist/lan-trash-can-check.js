import React from 'react';

export const LanTrashCanCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V144h32v304c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V144h32zm227.1-229.8c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3L211.3 382.2c-2.8 3.8-7.1 6.2-11.8 6.5s-9.3-1.4-12.6-4.8l-54.4-56.3c-6.1-6.4-6-16.5.4-22.6s16.5-5.9 22.6.4l41.2 42.6zM272.2-16c21.2 0 39.9 13.9 46 34.2L331.9 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80s7.2-16 16-16h100.1l13.8-45.8C136-2.1 154.7-16 175.9-16h96.4zm-96.4 32c-7.1 0-13.3 4.6-15.3 11.4l-11 36.6h149l-11-36.6c-2-6.8-8.3-11.4-15.3-11.4z"})
);

export default LanTrashCanCheck;
