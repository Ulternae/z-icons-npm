import React from 'react';

export const LanHourglass3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 24C0 10.7 10.7 0 24 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v19c0 40.3-16 79-44.5 107.5L226 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-19c0-40.3 16-79 44.5-107.5L158 256l-81.5-81.5C48 146 32 107.3 32 67V48h-8C10.7 48 0 37.3 0 24m129.9 328H254l-62.1-62.1-62.1 62.1zm-39.7 48C83.6 413.9 80 429.3 80 445v19h224v-19c0-15.7-3.6-31.1-10.2-45zm183.3-259.5C293 121 304 94.6 304 67V48H80v19c0 27.6 11 54 30.5 73.5L192 222z"})
);

export default LanHourglass3Regular;
