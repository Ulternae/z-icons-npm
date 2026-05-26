import React from 'react';

export const LanChildReachingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 48c-49.6 0-96.1-23.9-125-64.2L14.5 83.3c-2.6-3.6-7.6-4.4-11.2-1.8s-4.4 7.6-1.8 11.2L22 121.2c31.9 44.4 83.3 70.8 138 70.8s106.1-26.4 138-70.8l20.5-28.5c2.6-3.6 1.8-8.6-1.8-11.2s-8.6-1.8-11.2 1.8L285 111.8c-28.9 40.3-75.4 64.2-125 64.2m-64 56c0-4.4-3.6-8-8-8s-8 3.6-8 8v248c0 17.7 14.3 32 32 32s32-14.3 32-32v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V232c0-4.4-3.6-8-8-8s-8 3.6-8 8v248c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanChildReachingThin;
