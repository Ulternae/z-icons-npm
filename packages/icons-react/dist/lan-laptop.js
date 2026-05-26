import React from 'react';

export const LanLaptop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 64H128c-17.7 0-32 14.3-32 32v224H64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v224h-32V96c0-17.7-14.3-32-32-32M87.1 448h465.8c28 0 51.2-20.9 54.7-48H32.5c3.5 27.1 26.6 48 54.7 48zM0 392.9C0 379.1 11.1 368 24.9 368h590.2c13.7 0 24.9 11.1 24.9 24.9 0 48.1-39 87.1-87.1 87.1H87.1C39 480 0 441 0 392.9"})
);

export default LanLaptop;
