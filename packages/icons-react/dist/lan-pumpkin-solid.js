import React from 'react';

export const LanPumpkinSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m203.5 18.2-15 60c1.2.6 2.4 1.2 3.5 1.8 19.4-10 41-15.9 64-15.9S300.6 70 320 80c1.2-.6 2.3-1.2 3.5-1.8l-15-60C305.9 7.5 296.3 0 285.3 0h-58.6c-11 0-20.6 7.5-23.3 18.2zm-28.3 464.3c10.3-6.1 23.4-6.1 33.7 0 14.6 8.7 30.5 13.5 47.2 13.5s32.6-4.8 47.2-13.5c10.3-6.1 23.4-6.1 33.7 0 14.6 8.7 30.5 13.5 47.2 13.5 70.7 0 128-86 128-192S454.7 112 384 112c-16.7 0-32.6 4.8-47.2 13.5-10.3 6.1-23.4 6.1-33.7 0-14.6-8.7-30.5-13.5-47.2-13.5s-32.6 4.8-47.2 13.5c-10.3 6.1-23.4 6.1-33.7 0-14.6-8.7-30.5-13.5-47.2-13.5-70.7 0-128 86-128 192S57.3 496 128 496c16.7 0 32.6-4.8 47.2-13.5"})
);

export default LanPumpkinSolid;
