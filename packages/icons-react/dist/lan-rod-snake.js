import React from 'react';

export const LanRodSnake = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48h56c48.6 0 88 39.4 88 88s-39.4 88-88 88h-8v-32h8c30.9 0 56-25.1 56-56s-25.1-56-56-56h-56v224h32c44.2 0 80 35.8 80 80 0 38.7-27.5 71-64 78.4v-33.1c18.6-6.6 32-24.4 32-45.3 0-26.5-21.5-48-48-48h-32v160c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-96h-40c-39.8 0-72-32.2-72-72 0-37.1 28-67.6 64-71.6v32.4c-18.3 3.7-32 19.8-32 39.2 0 22.1 17.9 40 40 40h40V80h-48v32c0 35.3-28.7 64-64 64S0 147.3 0 112s28.7-64 64-64h112V16c0-8.8 7.2-16 16-16s16 7.2 16 16zM96 80H64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32z"})
);

export default LanRodSnake;
