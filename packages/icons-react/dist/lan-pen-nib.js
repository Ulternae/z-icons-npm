import React from 'react';

export const LanPenNib = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M377.4 45.3 310.7 112l89.4 89.4 66.7-66.7c12.5-12.5 12.5-32.8 0-45.3l-44.1-44.1c-12.5-12.5-32.8-12.5-45.3 0m-97.7 52.4 75.1-75.1c25-25 65.5-25 90.5 0l44.1 44.1c25 25 25 65.5 0 90.5l-75 75.1L376.8 370a80.19 80.19 0 0 1-54.2 55.6L47.5 508.1c-12.3 3.7-25.7.3-34.7-8.8S.3 476.9 4 464.6l82.5-275.2c7.9-26.4 28.9-46.9 55.6-54.2zm3.6 32.2-132.8 36.2c-16 4.4-28.6 16.6-33.3 32.5L42.8 446.7l110.1-110.2c-5.6-9.5-8.9-20.6-8.9-32.5 0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64c-11.9 0-23-3.2-32.5-8.9L65.4 469.3l248-74.4c15.9-4.8 28.2-17.4 32.5-33.3l36.2-132.8-98.9-98.9zM208 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanPenNib;
