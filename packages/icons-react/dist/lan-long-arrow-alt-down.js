import React from 'react';

export const LanLongArrowAltDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.4 534.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S300.9 352 288 352h-64V16c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v336H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 7 34.8zM288 384 160 512 32 384h80c8.8 0 16-7.2 16-16V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v352c0 8.8 7.2 16 16 16z"})
);

export default LanLongArrowAltDown;
