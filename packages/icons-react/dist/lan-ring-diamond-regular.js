import React from 'react';

export const LanRingDiamondRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 0c-8 0-15.5 4-20 10.7l-32 48c-5 7.5-5.4 17.1-1 25l31.8 57.2C51 168.6 0 238.4 0 320c0 106 86 192 192 192s192-86 192-192c0-81.6-51-151.4-122.8-179.1L293 83.7c4.4-7.9 4-17.5-1-25l-32-48C255.5 4 248 0 240 0zm68.8 129.1c-6.8-.7-13.8-1.1-20.8-1.1s-14 .4-20.8 1.1l-31.1-56L156.9 48h70.3L244 73.1l-31.1 56zM48 320a144 144 0 1 1 288 0 144 144 0 1 1-288 0"})
);

export default LanRingDiamondRegular;
