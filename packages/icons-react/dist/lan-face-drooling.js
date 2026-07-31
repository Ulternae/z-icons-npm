import React from 'react';

export const LanFaceDrooling = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256c0 61-24.4 116.4-64 156.8v43.1c58.5-46.9 96-119 96-199.9C512 114.6 397.4 0 256 0S0 114.6 0 256c0 125 89.6 229 208 251.5v-32.7C107.4 452.9 32 363.2 32 256 32 132.3 132.3 32 256 32s224 100.3 224 224m-126.7 67.1C329.8 350.6 295 368 256 368s-73.8-17.4-97.3-44.9c-5.7-6.7-15.8-7.5-22.6-1.8s-7.5 15.8-1.8 22.6c29.3 34.3 73 56.1 121.7 56.1v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-67.2c17.2-3.5 33.3-9.7 48-18.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16V354.3c3.4-3.3 6.6-6.8 9.7-10.4 5.7-6.7 5-16.8-1.8-22.6s-16.8-5-22.6 1.8M112 224c0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80 35.8-80 80m208-80c-8.8 0-16 7.2-16 16s7.2 16 16 16c26.5 0 48 21.5 48 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80"})
);

export default LanFaceDrooling;
