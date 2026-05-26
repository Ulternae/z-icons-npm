import React from 'react';

export const LanCommentQuestionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M66.5 377.4c4.1 4.9 4.9 11.7 2 17.4l-49.4 98.7 124.8-49.9c3.9-1.6 8.3-1.5 12.2.1 30.4 13 64.2 20.2 99.9 20.2 133.5 0 240-101.2 240-224S389.5 16 256 16 16 117.2 16 240c0 51.7 18.8 99.4 50.5 137.4m-12.3 10.3C20.2 346.9 0 295.7 0 240 0 107.5 114.6 0 256 0s256 107.5 256 240-114.6 240-256 240c-37.9 0-73.8-7.7-106.2-21.5L18.4 511c-10.8 4.4-22.4-7-17-17.7zm156.6-182.5c0-25 20.2-45.2 45.2-45.2s45.2 20.2 45.2 45.2c0 22.3-14.3 33.7-27.9 39.8-13 5.8-25.3 18.4-25.3 35 0 4.4 3.6 8 8 8s8-3.6 8-8c0-8.1 6.4-16.1 15.9-20.4 16.4-7.3 37.4-23.1 37.4-54.4 0-33.8-27.4-61.2-61.2-61.2s-61.2 27.4-61.2 61.2c0 4.4 3.6 8 8 8s8-3.6 8-8zM256 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanCommentQuestionThin;
