import React from 'react';

export const LanPrintMagnifyingGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 528.15',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 0C92.7 0 64 28.7 64 64v80h384v-37.5c0-17-6.7-33.3-18.7-45.3l-42.6-42.5C374.7 6.7 358.5 0 341.5 0zM64 192c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h32v64c0 35.3 28.7 64 64 64h208.4c-29.6-14-54.4-36.3-71.5-64H128v-96h112.2c4.2-89.1 77.7-160 167.8-160zm344 96.1a72 72 0 1 1 0 144 72 72 0 1 1 0-144m0 192c24.5 0 47.2-7.3 66.2-19.9l60.8 60.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-60.8-60.9c12.6-19 19.9-41.7 19.9-66.2 0-66.3-53.7-120-120-120s-120 53.7-120 120 53.7 120 120 120"})
);

export default LanPrintMagnifyingGlassSolid;
