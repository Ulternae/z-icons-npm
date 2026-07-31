import React from 'react';

export const LanChartPieRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352.4 54v138h138c-17.4-67.4-70.5-120.6-138-138m-144 210V90.9c-74.6 26.4-128 97.5-128 181.1 0 106 86 192 192 192 24.6 0 48-4.6 69.5-12.9L225 309.9c-10.7-12.9-16.6-29.2-16.6-45.9m333.9-55.9c2.3 17.5-12.2 31.9-29.9 31.9h-176c-17.7 0-32-14.3-32-32V32c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206M256.4 66.7V264c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1C353 501.4 313.9 512 272.4 512c-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8 18.1-3.8 33.8 11 33.8 29.5M541.7 288c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9l-84.3-101.7c-17.3-20.9-2.4-52.4 24.6-52.4z"})
);

export default LanChartPieRegular;
