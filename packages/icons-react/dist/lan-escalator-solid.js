import React from 'react';

export const LanEscalatorSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 40a56 56 0 1 1 112 0 56 56 0 1 1-112 0m159 198.8c11.5-9.6 26-14.8 41-14.8h96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-72.8L201 497.2c-11.5 9.6-26 14.8-41 14.8H64c-35.3 0-64-28.7-64-64s28.7-64 64-64h72.8zM280.3 202 128 328.9V208c0-44.2 35.8-80 80-80 40.3 0 73.7 29.8 79.2 68.6-2.4 1.7-4.7 3.4-6.9 5.3z"})
);

export default LanEscalatorSolid;
