import React from 'react';

export const LanSlidersVSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 96c-8.8 0-16 7.2-16 16v48h-24c-8.8 0-16 7.2-16 16s7.2 16 16 16h24v144c0 8.8 7.2 16 16 16s16-7.2 16-16V224h24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24v-48c0-8.8-7.2-16-16-16m160 0c-8.8 0-16 7.2-16 16v144h-24c-8.8 0-16 7.2-16 16s7.2 16 16 16h24v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24V144c0-8.8-7.2-16-16-16"})
);

export default LanSlidersVSquare;
