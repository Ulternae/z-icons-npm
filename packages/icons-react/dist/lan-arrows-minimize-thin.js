import React from 'react';

export const LanArrowsMinimizeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.3 34.3c3.1-3.1 8.2-3.1 11.3 0L176 196.7V88c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8s3.6-8 8-8h108.7L2.3 45.7c-3.1-3.1-3.1-8.2 0-11.3zm443.3 0c3.1 3.1 3.1 8.2 0 11.3L283.3 208H392c4.4 0 8 3.6 8 8s-3.6 8-8 8H264c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8s8 3.6 8 8v108.7L434.3 34.4c3.1-3.1 8.2-3.1 11.3 0zM56 304c-4.4 0-8-3.6-8-8s3.6-8 8-8h128c4.4 0 8 3.6 8 8v128c0 4.4-3.6 8-8 8s-8-3.6-8-8V315.3L13.7 477.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L164.7 304zm200-8c0-4.4 3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H283.3l162.3 162.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L272 315.3V424c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
);

export default LanArrowsMinimizeThin;
