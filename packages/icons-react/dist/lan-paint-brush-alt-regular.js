import React from 'react';

export const LanPaintBrushAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M482.1 55.9 261.5 276.5c15.2 9.8 28.2 22.8 38.1 38.1L520.1 93.9c5-5 7.9-11.9 7.9-19C528 60 516 48 501.1 48c-7.1 0-14 2.8-19 7.9M212.4 257.6 448.1 21.9c14-14 33.1-21.9 53-21.9C542.5 0 576 33.5 576 74.9c0 19.9-7.9 38.9-21.9 53L318.4 363.6c1.1 6.7 1.6 13.5 1.6 20.4 0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h7.5c18.5 0 30.6-20.6 27-38.8C64.9 401 64 392.6 64 384c0-70.7 57.3-128 128-128 7 0 13.8.6 20.4 1.6M272 384c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 5.5.5 10.8 1.6 15.8 4.4 22.1-.7 44.5-12.2 62-.5.7-1 1.5-1.5 2.2H192c44.2 0 80-35.8 80-80"})
);

export default LanPaintBrushAltRegular;
