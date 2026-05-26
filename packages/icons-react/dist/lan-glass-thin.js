import React from 'react';

export const LanGlassThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16.6 33.3C15.8 24 23.2 16 32.5 16h319.9c9.4 0 16.7 8 15.9 17.3l-6.4 78.7H23zm7.7 94.7h336.3l-27 331.2c-1.7 20.8-19 36.8-39.9 36.8H91.2c-20.8 0-38.2-16-39.9-36.8zM32.5 0C13.8 0-.9 16 .6 34.6l34.7 426c2.4 29 26.7 51.4 55.9 51.4h202.6c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.8 16 371.1 0 352.4 0z"})
);

export default LanGlassThin;
