import React from 'react';

export const LanCanFoodRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 434.3c-3.4 3-10.2 7.5-21.7 12.2C273.5 456.6 236 464 192 464s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2V289.5c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1zm48 5.7V72c0-39.8-78.8-72-176-72S16 32.2 16 72v368c0 39.8 78.8 72 176 72s176-32.2 176-72M304 72c0 13.3-50.1 24-112 24S80 85.3 80 72s50.1-24 112-24 112 10.7 112 24M192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanCanFoodRegular;
