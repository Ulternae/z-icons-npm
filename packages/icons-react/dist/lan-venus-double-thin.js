import React from 'react';

export const LanVenusDoubleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 336a160 160 0 1 0 0-320 160 160 0 1 0 0 320m176-160c0 94.5-74.5 171.6-168 175.8V432h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80.2C90.5 347.6 16 270.5 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176m-10.5 151c3.7-4 7.2-8.1 10.5-12.4 23.5 13.6 50.9 21.4 80 21.4 88.4 0 160-71.6 160-160S536.4 16 448 16c-29.1 0-56.5 7.8-80 21.4-3.4-4.3-6.9-8.4-10.5-12.4C383.9 9.1 414.9 0 448 0c97.2 0 176 78.8 176 176 0 94.5-74.5 171.6-168 175.8V432h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80.2c-30.1-1.3-58.2-10.2-82.5-24.9z"})
);

export default LanVenusDoubleThin;
