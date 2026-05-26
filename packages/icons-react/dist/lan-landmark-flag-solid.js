import React from 'react';

export const LanLandmarkFlagSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352-32H240c-8.8 0-16 7.2-16 16v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v224l-51.2 38.4C4.7 460.4 0 469.9 0 480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6L448 416V192h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H272V64h80c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m48 224v224h-64V192zm-112 0v224h-64V192zm-112 0v224h-64V192z"})
);

export default LanLandmarkFlagSolid;
