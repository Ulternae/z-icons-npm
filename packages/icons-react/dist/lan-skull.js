import React from 'react';

export const LanSkull = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 427.4c0-10.1 4.7-19.5 12.8-25.6C448 363.3 480 304.9 480 240c0-113-98.3-208-224-208S32 127 32 240c0 64.8 32 123.3 83.2 161.8 8 6 12.8 15.5 12.8 25.6V464c0 8.8 7.2 16 16 16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16-7.2 16-16zm32 0V464c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-36.6C37.5 383.4 0 315.8 0 240 0 107.5 114.6 0 256 0s256 107.5 256 240c0 75.8-37.5 143.4-96 187.4M160 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m224 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanSkull;
