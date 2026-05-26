import React from 'react';

export const LanSquareNaira = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm139.1 32.8c6.6-2.1 13.9.3 17.9 5.9L243.6 256h44.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16v112h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v80c0 7-4.5 13.1-11.1 15.2s-13.8-.2-17.8-5.9L227.2 288H160v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V144c0-7 4.5-13.1 11.1-15.2M288 318.1V288h-21.5zM160 193.9V256h44.3z"})
);

export default LanSquareNaira;
