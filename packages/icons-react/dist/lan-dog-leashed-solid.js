import React from 'react';

export const LanDogLeashedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 112c16.6 0 30.2 12.6 31.8 28.7l.3 6.6C65.8 163.4 79.4 176 96 176h128v191.2c-22.9-2.1-44.5-8.5-64-18.5V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V234.4C26.7 221.2 0 185.8 0 144c0-17.7 14.3-32 32-32m247.1 70.3L416 237v243c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V348.7c-14.9 7.6-31 13.2-48 16.3V179.4l7.1 2.8zM355.8-32c7.7 0 14.9 3.6 19.6 9.8L392 0h52.1C456.8 0 469 5.1 478 14.1L496 32h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80h-64l-7.2 28.8-125.4-50.1 32.5-151.4c2.4-11.2 12.3-19.3 23.9-19.3M94.5-.4c8.5-9 22.4-10 32-2.6l1.9 1.6 136 128 1.6 1.5h-70L95.6 33.6l-1.7-1.8c-8-9.2-7.8-23.1.7-32.2zM448 44a20 20 0 1 0 0 40 20 20 0 1 0 0-40"})
);

export default LanDogLeashedSolid;
