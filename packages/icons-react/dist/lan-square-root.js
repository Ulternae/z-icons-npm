import React from 'react';

export const LanSquareRoot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352.1 64c-7.1 0-13.4 4.7-15.4 11.6L223.4 468.4c-1.8 6.3-7.2 10.8-13.7 11.5s-12.7-2.6-15.8-8.4l-111-207.1c-2.8-5.2-8.2-8.4-14.1-8.4H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h52.8c17.7 0 34 9.7 42.3 25.3l92.4 172.5L306 66.7c5.9-20.6 24.7-34.7 46.1-34.7H560c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanSquareRoot;
