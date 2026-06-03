import React from 'react';

export const LanTransporterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M344 24a56 56 0 1 0-112 0 56 56 0 1 0 112 0m24 212.7 46.3 62.4c10.5 14.2 30.6 17.2 44.8 6.6s17.2-30.6 6.6-44.8l-70.5-95C370 132 330.3 112 288 112s-82 20-107.2 53.9l-70.5 95c-10.5 14.2-7.6 34.2 6.6 44.8s34.2 7.6 44.8-6.6l46.3-62.4V448h64v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96h64zM240 544h184c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.3 0-24 10.7-24 24s10.7 24 24 24zM64 96l-7.3-25.4C55.6 66.7 52.1 64 48 64s-7.6 2.7-8.7 6.6L32 96l-25.4 7.3C2.7 104.4 0 107.9 0 112s2.7 7.6 6.6 8.7L32 128l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L64 128l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7zM536.7 6.6C535.6 2.7 532.1 0 528 0s-7.6 2.7-8.7 6.6L512 32l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L512 64l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L544 64l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L544 32z"})
);

export default LanTransporterSolid;
