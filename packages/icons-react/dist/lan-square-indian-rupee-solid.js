import React from 'react';

export const LanSquareIndianRupeeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 88h152c8.8 0 16 7.2 16 16s-7.2 16-16 16h-44.1c9.3 11.3 15.9 25 18.7 40h25.5c8.8 0 16 7.2 16 16s-7.2 16-16 16h-25.5c-6.1 33-30.5 59.5-62.3 68.6l70.7 56.7c10.3 8.3 12 23.4 3.7 33.7s-23.4 12-33.7 3.8l-120-96c-8-6.4-11-17.1-7.7-26.7S141.8 248 152 248h40c16.4 0 30.5-9.9 36.7-24H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h84.7c-6.2-14.1-20.3-24-36.7-24h-40c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanSquareIndianRupeeSolid;
