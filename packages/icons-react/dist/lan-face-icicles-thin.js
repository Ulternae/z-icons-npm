import React from 'react';

export const LanFaceIciclesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 88.8-48.3 166.4-120 207.9v18.3c55-29.2 98.1-77.9 120-136.9V472c0 4.4 3.6 8 8 8s8-3.6 8-8V256C512 114.6 397.4 0 256 0S0 114.6 0 256v120c0 4.4 3.6 8 8 8s8-3.6 8-8zm205.1 237.5c-69.6-10.2-129.5-50.2-166.3-106.6-1.4 6.2-4.1 12-7.7 17.1 42.8 60.4 111.2 101.4 189.3 107.3-6.5-4.6-11.7-10.7-15.3-17.8M184 304v96c-26.5 0-48-21.5-48-48s21.5-48 48-48m64 96h-48v-96h48zm16 0v-96h48v96zm64 0v-96c26.5 0 48 21.5 48 48s-21.5 48-48 48M184 288c-35.3 0-64 28.7-64 64s28.7 64 64 64h72v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h48v88c0 4.4 3.6 8 8 8s8-3.6 8-8v-88.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64zm-8-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanFaceIciclesThin;
