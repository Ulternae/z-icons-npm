import React from 'react';

export const LanCheese = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 244v12H32c0-9.3 4.6-18 12.4-23.1L295.7 65.3c1.3-.8 2.8-1.3 4.3-1.3 99.4 0 180 80.6 180 180M32 288h448v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm480-32v-12c0-117.1-94.9-212-212-212-7.8 0-15.5 2.3-22 6.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"})
);

export default LanCheese;
