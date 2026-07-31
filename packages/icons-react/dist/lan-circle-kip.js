import React from 'react';

export const LanCircleKip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m92.3-378.2c-5.7-6.8-15.7-7.7-22.5-2.1L224 216.5V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v96.2h-31.8c-8.8 0-16 7.2-16 16s7.2 16 16 16H192V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-72.1l101.8 84.4c6.8 5.6 16.9 4.7 22.5-2.1s4.7-16.9-2.1-22.5l-100.6-83.5h90.2c8.8 0 16-7.2 16-16s-7.2-16-16-16h-90.3l100.8-83.9c6.8-5.7 7.7-15.7 2.1-22.5z"})
);

export default LanCircleKip;
