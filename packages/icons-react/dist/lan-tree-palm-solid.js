import React from 'react';

export const LanTreePalmSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m103 91.4 30.3 50.5c-4 3.5-8 7.2-12 11.2-71 71-60.2 151-32.7 191.3 5 7.3 15.2 7.3 21.4 1l138.6-138.5c4 10.8 7.8 26.2 9.7 47.2 4.2 46.5-1.6 116.8-32.7 216.4-3 9.7-1.3 20.3 4.8 28.5s15.6 13 25.8 13h64c16.1 0 29.8-12 31.8-28 12.4-99-2.3-207.2-31.7-292h126.6c2.8 0 5.4-1.5 6.9-3.9l19.6-32.7c3.1-5.2 10.6-5.2 13.7 0l19.6 32.7c1.4 2.4 4 3.9 6.9 3.9h46.7c8.7 0 15.9-7.2 14.3-15.9C565.5 128.2 516.5 64 416.2 64c-43.7 0-77.6 12.2-102.8 29.8C296.7 49.4 248.2 0 160.2 0 59.8 0 10.8 64.2 1.7 112.1.1 120.8 7.3 128 16.2 128h46.7c2.8 0 5.4-1.5 6.9-3.9l19.5-32.7c3.1-5.2 10.6-5.2 13.7 0"})
);

export default LanTreePalmSolid;
