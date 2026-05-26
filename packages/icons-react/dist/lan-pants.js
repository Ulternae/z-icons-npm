import React from 'react';

export const LanPants = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88.2 45.4C93.3 19.1 116.3 0 143.2 0h226.1c26.9 0 49.9 19.1 55 45.4L503 454.6c5.8 30.4-14 59.7-44.4 65.6l-80 15.4c-29.6 5.7-58.3-13-65.1-42.3l-57.2-246.4-57.2 246.4c-6.8 29.3-35.6 48-65.1 42.3l-80-15.4C23.6 514.3 3.7 485 9.5 454.6zm55-13.4c-11.5 0-21.4 8.2-23.6 19.5L111 96h49.2c8.8 0 16 7.2 16 16s-7.2 16-16 16h-55.3l-64 332.6c-2.5 13 6 25.6 19 28.1l80 15.4c12.7 2.4 25-5.6 27.9-18.1l72.7-313.6c1.7-7.3 8.1-12.4 15.6-12.4s13.9 5.1 15.6 12.4L344.6 486c2.9 12.6 15.2 20.6 27.9 18.1l80-15.4c13-2.5 21.5-15.1 19-28.1l-64-332.6h-55.3c-8.8 0-16-7.2-16-16s7.2-16 16-16h49.2l-8.6-44.5c-2.1-11.3-12-19.5-23.5-19.5z"})
);

export default LanPants;
