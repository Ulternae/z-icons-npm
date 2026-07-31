import React from 'react';

export const LanDollyFlatbedAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 32C0 14.3 14.3 0 32 0h16c44.2 0 80 35.8 80 80v288c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32h-34.7c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H221.2c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-6 1.1-11.7 3.1-17-38.1-6.2-67.1-39.2-67.1-79L64 80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32m176 80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v176c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48zm240 48h48c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48"})
);

export default LanDollyFlatbedAltSolid;
