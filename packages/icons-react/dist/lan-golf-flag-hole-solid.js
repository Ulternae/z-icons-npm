import React from 'react';

export const LanGolfFlagHoleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.014 512 544.014',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M139.4-28.4c7.1-4.4 15.9-4.8 23.3-1.1l208 104C378.8 78.6 384 86.9 384 96c0 8-3.9 15.3-10.4 19.8l-2.9 1.7L176 214.8v78.8c25.2-3.6 52.1-5.6 80-5.6 141.4 0 256 50.1 256 112S397.4 512 256 512 0 461.9 0 400c0-41.5 51.5-77.6 128-97v-95c0-1.4.1-2.7.3-4-.2-1.3-.3-2.6-.3-4V-8l.2-3.1c.9-7.1 5-13.5 11.2-17.3M224 352c-35.3 0-64 14.3-64 32s28.7 32 64 32 64-14.3 64-32-28.7-32-64-32"})
);

export default LanGolfFlagHoleSolid;
