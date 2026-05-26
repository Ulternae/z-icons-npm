import React from 'react';

export const LanMosque = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m288 9.7 132.5 110.8c17.4 14.6 27.5 36.1 27.5 58.8 0 42.3-34.3 76.7-76.7 76.7H204.6c-42.3 0-76.7-34.3-76.7-76.7 0-22.7 10.1-44.3 27.5-58.8zM96 179.3c0 29.9 12.1 57 31.7 76.7H32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V212c0-11-9-20-20-20s-20 9-20 20v44h-87.7c19.6-19.7 31.7-46.8 31.7-76.7 0-32.2-14.3-62.7-39-83.4L298.3-23.4c-5.9-5-14.6-5-20.5 0L135 96c-24.7 20.6-39 51.2-39 83.4zM536 288h8v160c0 17.7-14.3 32-32 32H352v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64v64H64c-17.7 0-32-14.3-32-32V288zM256 416c0-17.7 14.3-32 32-32s32 14.3 32 32v64h-64z"})
);

export default LanMosque;
