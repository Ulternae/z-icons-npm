import React from 'react';

export const LanCometSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M299.4 75.6 493.7.9c1.5-.6 3.2-.9 4.8-.9C506 0 512 6 512 13.5q0 2.55-.9 4.8l-74.7 194.2 29.3-2.3c12.8-1 21.5 12.8 15.1 24L378.6 410.7C342.3 473.4 275.4 512 203 512 90.9 512 0 421.1 0 309c0-72.4 38.6-139.3 101.3-175.6L277.7 31.2c11.1-6.5 25 2.2 24 15.1zM192 200c-6.1 0-11.7 3.5-14.3 8.9l-29.2 59.2-65.3 9.5c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l47.2 46-11.2 65c-1 6 1.4 12.1 6.4 15.7s11.5 4.1 16.8 1.2l58.4-30.7 58.4 30.7c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.7l-11.2-65 47.2-46c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-65.3-9.5-29.2-59.2c-2.7-5.5-8.3-8.9-14.3-8.9z"})
);

export default LanCometSolid;
