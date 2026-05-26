import React from 'react';

export const LanFileGifSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h144V400c0-35.3 28.7-64 64-64h112V170.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0zm261.5 176H264c-13.3 0-24-10.7-24-24V58.5zM328 380c-24.3 0-44 19.7-44 44v80c0 24.3 19.7 44 44 44h16c24.3 0 44-19.7 44-44v-24c0-11-9-20-20-20h-8c-11 0-20 9-20 20 0 6.5 3.1 12.4 8 16v8c0 2.2-1.8 4-4 4h-16c-2.2 0-4-1.8-4-4v-80c0-2.2 1.8-4 4-4h20.4c1.9 9.1 9.9 16 19.6 16 11 0 20-9 20-20 0-19.9-16.1-36-36-36zm124 20c0-11-9-20-20-20s-20 9-20 20v128c0 11 9 20 20 20s20-9 20-20zm24 0v128c0 11 9 20 20 20s20-9 20-20v-44h28c11 0 20-9 20-20s-9-20-20-20h-28v-24h28c11 0 20-9 20-20s-9-20-20-20h-48c-11 0-20 9-20 20"})
);

export default LanFileGifSolid;
