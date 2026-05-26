import React from 'react';

export const LanTreePalmRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m103 91.4 30.3 50.5c-4 3.5-8 7.2-12 11.2-71 71-60.2 151-32.7 191.3 5 7.3 15.2 7.3 21.4 1l126.1-126.1c2.3 9.3 4.3 20.3 5.6 32.9 4.9 46.6.5 115.1-26.4 208.3-7.3 25.3 11.3 51.5 38.5 51.5h84.1c20 0 37.6-15 39.6-35.7 9.2-95.5-5.9-202-34.3-284.3h103.5c2.8 0 5.4-1.5 6.9-3.9l19.6-32.7c3.1-5.2 10.6-5.2 13.7 0l19.6 32.7c1.4 2.4 4.1 3.9 6.9 3.9h46.7c8.9 0 16.1-7.2 14.5-15.9C565.5 128.2 516.5 64 416.2 64c-43.7 0-77.6 12.2-102.8 29.8C296.7 49.4 248.2 0 160.2 0 59.8 0 10.8 64.2 1.7 112.1.1 120.8 7.3 128 16.2 128h46.7c2.8 0 5.4-1.5 6.9-3.9l19.5-32.7c3.1-5.2 10.6-5.2 13.7 0M292.2 192c28.6 74.1 46 177.9 38.3 272h-66.2c25.8-92.9 30.7-164.5 25.2-216.8-2.2-21.5-6.2-39.9-11.4-55.2z"})
);

export default LanTreePalmRegular;
