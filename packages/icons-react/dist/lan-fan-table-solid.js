import React from 'react';

export const LanFanTableSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 413.6C355.7 398.2 432 312 432 208 432 93.1 338.9 0 224 0S16 93.1 16 208c0 104 76.3 190.2 176 205.6V448H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96zM184.9 68.5l39.4 97.5c18.5-25.3 50-39.8 83.3-35.1 48.1 6.8 81.7 51.3 74.9 99.4-1.2 8.8-9.3 14.8-18.1 13.6l-104.2-14.7c12.6 28.7 9.5 63.2-11.2 89.7-29.9 38.3-85.2 45.1-123.5 15.2-7-5.4-8.2-15.5-2.8-22.5l64.8-82.9c-31.2-3.4-59.5-23.4-72.1-54.5C97.2 129.1 119 77.8 164 59.6c8.2-3.3 17.5.6 20.8 8.8zM224 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanFanTableSolid;
