import React from 'react';

export const LanNfcMagnifyingGlassRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 528.113',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416.5 80h-320c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h144.2c8.5 18 20.2 34.2 34.3 48H96.5c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v120.9c-14.7-9-30.8-15.9-48-20.1V96c0-8.8-7.2-16-16-16m-32 88v24.2c-16.8.8-32.9 4-48 9.4V176h-56v48c2.2 1.7 4.2 3.5 6.1 5.6-20.4 16.6-36.9 37.9-47.7 62.3-13.3-6.5-22.4-20.2-22.4-35.9 0-13.1 6.3-24.7 16-32v-56c0-22.1 17.9-40 40-40h72c22.1 0 40 17.9 40 40m-160 192c0 8.1.6 16.2 1.7 24h-57.7c-22.1 0-40-17.9-40-40V168c0-22.1 17.9-40 40-40h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v160h49.7c-1.1 7.8-1.7 15.9-1.7 24m168 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 48c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120c0 24.5-7.3 47.3-19.9 66.3l60.9 60.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.9-60.9c-19 12.5-41.7 19.8-66.1 19.8z"})
);

export default LanNfcMagnifyingGlassRegular;
