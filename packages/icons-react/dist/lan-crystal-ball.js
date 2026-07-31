import React from 'react';

export const LanCrystalBall = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M377.9 386.8C421.1 345.9 448 288.1 448 224 448 100.3 347.7 0 224 0S0 100.3 0 224c0 64.1 26.9 121.9 70.1 162.8l-2.6 3.2-61.4 76.8c-3.9 4.9-6.1 11-6.1 17.4C0 499.5 12.5 512 27.8 512h392.3c15.4 0 27.8-12.5 27.8-27.8 0-6.3-2.2-12.5-6.1-17.4L380.4 390l-2.6-3.2zm-47.7-2.8H117.9C66.1 349.6 32 290.8 32 224c0-106 86-192 192-192s192 86 192 192c0 66.8-34.1 125.6-85.8 160M144 96c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16m160 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zM87.7 416h272.6l51.2 64h-375z"})
);

export default LanCrystalBall;
