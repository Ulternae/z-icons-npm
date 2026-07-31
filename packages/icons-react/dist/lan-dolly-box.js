import React from 'react';

export const LanDollyBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h72.9c6.9 0 13 4.4 15.2 10.9l98.6 295.9c-33.9 9.3-58.8 40.3-58.8 77.1 0 44.2 35.8 80 80 80s80-35.8 80-80c0-6.8-.8-13.4-2.4-19.7L549 335c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-235.4 78.6c-12.4-16.1-30.7-27.3-51.7-30.4L150.5 48.8C143.9 29.2 125.6 16 104.9 16zm160 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m98.4-312.3 121.8-39.6c8.4-2.7 17.4 1.9 20.2 10.3L472 212.1c2.7 8.4-1.9 17.4-10.3 20.2l-121.8 39.6c-8.4 2.7-17.4-1.9-20.2-10.3l-39.6-121.7c-2.7-8.4 1.9-17.4 10.3-20.2m-40.7 30 39.6 121.7c8.2 25.2 35.3 39 60.5 30.8l121.7-39.6c25.2-8.2 39-35.3 30.8-60.5L462.7 80.5c-8.2-25.2-35.3-39-60.5-30.8L280.5 89.3c-25.2 8.2-39 35.3-30.8 60.5z"})
);

export default LanDollyBox;
