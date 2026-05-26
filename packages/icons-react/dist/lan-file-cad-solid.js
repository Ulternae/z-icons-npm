import React from 'react';

export const LanFileCadSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h80V400c0-35.3 28.7-64 64-64h176V170.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0zm261.5 176H264c-13.3 0-24-10.7-24-24V58.5zM264 380c-24.3 0-44 19.7-44 44v80c0 24.3 19.7 44 44 44h16c24.3 0 44-19.7 44-44v-8c0-11-9-20-20-20s-20 9-20 20v8c0 2.2-1.8 4-4 4h-16c-2.2 0-4-1.8-4-4v-80c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v8c0 11 9 20 20 20s20-9 20-20v-8c0-24.3-19.7-44-44-44zm128 0c-24.3 0-44 19.7-44 44v104c0 11 9 20 20 20s20-9 20-20v-28h24v28c0 11 9 20 20 20s20-9 20-20V424c0-24.3-19.7-44-44-44zm20 80h-24v-36c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4zm64-60v128c0 11 9 20 20 20h32c28.7 0 52-23.3 52-52v-64c0-28.7-23.3-52-52-52h-32c-11 0-20 9-20 20m40 20h12c6.6 0 12 5.4 12 12v64c0 6.6-5.4 12-12 12h-12z"})
);

export default LanFileCadSolid;
