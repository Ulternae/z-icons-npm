import React from 'react';

export const LanLaptopRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 80H128c-8.8 0-16 7.2-16 16v208H64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v208h-48V96c0-8.8-7.2-16-16-16M102.4 432h435.2c22.1 0 41.1-13.1 49.6-32H52.8c8.5 18.9 27.5 32 49.6 32M0 377.6C0 363.5 11.5 352 25.6 352h588.8c14.1 0 25.6 11.5 25.6 25.6 0 56.6-45.8 102.4-102.4 102.4H102.4C45.8 480 0 434.2 0 377.6"})
);

export default LanLaptopRegular;
