import React from 'react';

export const LanSquare4 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64c8.8 0 16 7.2 16 16v72c0 4.4 3.6 8 8 8h72v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c8.8 0 16 7.2 16 16s-7.2 16-16 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-72c-22.1 0-40-17.9-40-40v-72c0-8.8 7.2-16 16-16"})
);

export default LanSquare4;
